import * as THREE from 'three'
import { buildFacility } from './scene/buildFacility.js'
import { cutDoors, clearBridge } from './walk/access.js'
import { FLOOR_Y, collectColliders, collectTerms } from './walk/collect.js'
import { CollisionGrid } from './walk/Collision.js'
import { TERMS, CATS } from './data/terms.js'
import './explore.css'

/**
 * 탐색 코드(아래 IIFE)는 도면 모델을 만드는 쪽과 완전히 분리되어 있고,
 * 필요한 것만 이 객체 하나로 건네받는다. THREE는 네임스페이스를 그대로
 * 넘긴다 — 탐색 코드가 쓰는 상수(DoubleSide=2, SRGBColorSpace='srgb' 등)는
 * three r169의 값과 같다.
 */
const AIDC_ENGINE = {
  THREE,
  buildFacility, cutDoors, clearBridge,
  collectColliders, collectTerms,
  CollisionGrid, TERMS, CATS, FLOOR_Y,
}

;(function(AIDC_ENGINE){
/* AIDC Explore: additive interior treatment over the unmodified supplied model.
   Plan units, footprints, slab heights, and all nine rack aisles are retained.
   New entrance glazing, interior finishes and the lift are illustrative additions. */
function createExploreWorld(E, renderer) {
  const T = E.THREE;
  const scene = new T.Scene();
  scene.background = new T.Color('#bcc2c4');
  scene.fog = new T.Fog('#c1c5c5', 100, 225);
  const root = new T.Group();
  scene.add(root);
  E.buildFacility(root);
  E.cutDoors(root); E.clearBridge(root);
  const FY = E.FLOOR_Y, floors = ['b1','f1','f2','roof'];
  const extraColliders = [], doors = [], screens = [], blink = [], flow = [];
  const floorMeshes = [], sourceFloors = [], emissives = [], pickMeshes = [], originalMeshes = [];
  const floorGroup = f => {const g=new T.Group();g.userData.floor=f;root.add(g);return g;};
  const groups = Object.fromEntries(floors.map(f=>[f,floorGroup(f)]));
  const p3=(x,y,h)=>new T.Vector3(x-72,h,y-56);
  const mats = new Map();
  const material=(color, rough=.55, metal=.2, emissive=null)=>{
    const key=[color,rough,metal,emissive].join('/');
    if(!mats.has(key)){const m=new T.MeshStandardMaterial({color,roughness:rough,metalness:metal});
      if(emissive){m.emissive.set(emissive);m.emissiveIntensity=1.8;emissives.push(m);}mats.set(key,m);}
    return mats.get(key);
  };
  const metal=material('#878d90',.34,.78), dark=material('#25282b',.54,.35),
    silver=material('#bfc2c1',.28,.8), white=material('#dddcd6',.78,.02),
    teal=material('#297f88',.39,.25), orange=material('#af7147',.4,.32),
    ledBlue=material('#54ddfa',.28,.05,'#27bfe5'),ledGreen=material('#58dbb2',.3,.02,'#28c67b'),
    ledAmber=material('#ffb854',.32,.04,'#ff8428');
  const lamp=material('#fff6e9',.6,.02,'#fff2dc');
  lamp.emissiveIntensity=.7;
  const glass=new T.MeshStandardMaterial({color:'#d3e2de',metalness:.02,roughness:.17,transparent:true,opacity:.12,depthWrite:false,side:2});
  glass.forceSinglePass=true;
  const box=(f,x,y,h,w,d,height,mat,opt={})=>{
    const m=new T.Mesh(new T.BoxGeometry(w,height,d),mat);m.position.copy(p3(x+w/2,y+d/2,FY[f]+h+height/2));
    m.userData={floor:f,...opt};groups[f].add(m);
    if(opt.collide)extraColliders.push({x0:x-72,x1:x+w-72,z0:y-56,z1:y+d-56,y0:FY[f]+h,y1:FY[f]+h+height,floor:f,wall:!!opt.wall,term:opt.term});
    if(opt.term){m.userData.aimTerm=opt.term;pickMeshes.push(m);}return m;
  };
  const makeTexture=(w,h,draw)=>{const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);const tx=new T.Texture(c);tx.colorSpace='srgb';tx.needsUpdate=true;tx.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());return tx;};
  const label=(f,text,x,y,h,w=3,hh=.5,rot=0,color='#c8e8ef',bg='#142835')=>{
    const tx=makeTexture(1024,Math.max(128,Math.round(1024*hh/w)),(c,W,H)=>{c.fillStyle=bg;c.fillRect(0,0,W,H);c.fillStyle=color;c.font=`600 ${Math.round(H*.46)}px Arial,sans-serif`;c.textAlign='center';c.textBaseline='middle';c.fillText(text,W/2,H/2,W*.93);});
    const m=new T.Mesh(new T.PlaneGeometry(w,hh),new T.MeshBasicMaterial({map:tx,side:2,toneMapped:false}));
    m.position.copy(p3(x,y,FY[f]+h));m.rotation.y=rot;m.userData.floor=f;groups[f].add(m);return m;
  };
  // Real openings are cut into the model, rather than disabling wall collision.
  function openWall(axis,cross,a,b,f,height=3.4){
    const found=[];root.traverse(m=>{const d=m.userData,g=m.geometry&&m.geometry.parameters;if(!m.isMesh||!d.structureMesh||d.slabMesh||d.floor!==f||!g||!g.width)return;
      const ax=g.width>g.depth;if((axis==='x')!==ax)return;
      const cp=ax?m.position.z+56:m.position.x+72;
      if(Math.abs(cp-cross)>.8)return;
      const center=ax?m.position.x+72:m.position.z+56,len=ax?g.width:g.depth;
      if(center-len/2<=a && center+len/2>=b)found.push(m);
    });
    for(const m of found){const g=m.geometry.parameters,ax=axis==='x',len=ax?g.width:g.depth,c=ax?m.position.x+72:m.position.z+56,lo=c-len/2,hi=c+len/2,base=m.position.y-g.height/2;
      const make=(l,r,bot,hei)=>{if(r-l<.01||hei<.01)return;const n=new T.Mesh(new T.BoxGeometry(ax?r-l:g.width,hei,ax?g.depth:r-l),m.material);n.position.copy(m.position);n.position[ax?'x':'z']=(l+r)/2-(ax?72:56);n.position.y=bot+hei/2;n.userData={...m.userData};m.parent.add(n);};
      make(lo,a,base,g.height);make(b,hi,base,g.height);make(a,b,base+height,g.height-height);m.parent.remove(m);
    }
  }
  openWall('z',63.35,74.2,78.6,'f1');
  // Preserve original category colours on small hardware and pipes, not on walls.
  const hsl={h:0,s:0,l:0};
  root.traverse(o=>{
    if(o.isLine||o.isLineSegments){o.visible=false;o.userData.hideAlways=true;return;}
    if(!o.isMesh||!o.material||!o.material.color)return;
    const d=o.userData;originalMeshes.push(o);
    if(d.ghostShell||d.envelope||d.focusFloor||d.groundSurface||d.underground||(d.terrain&&!d.floorTop)||d.flowPart||d.flowParticle){o.visible=false;d.hideAlways=true;return;}
    let term=null;for(let q=o;q;q=q.parent)if(q.userData.term){term=q.userData.term;break;}
    if(term){d.aimTerm=term;pickMeshes.push(o);}
    const orig=o.material.color.clone();orig.getHSL(hsl);
    if(d.slabMesh||d.floorTop){o.material=material('#75848e',.42,.16);sourceFloors.push(o);}
    else if(d.structureMesh)o.material=material(d.interiorWall?'#c8c7c1':'#dfddd5',.85,.01);
    else if(term==='gpu-rack')o.material=dark;
    else if(term==='containment')o.material=glass;
    else if(term==='bms')o.material=dark;
    else {
      const span=o.geometry.parameters||{}, max=Math.max(span.width||0,span.height||0,span.depth||0);
      let col='#919598',rough=.5,met=.38;
      if(hsl.l<.18)col='#22272c';
      else if(hsl.s>.35 && (max<.65||o.geometry.type==='CylinderGeometry'||term==='cdu')){orig.setHSL(hsl.h,Math.min(.72,hsl.s*.8),Math.max(.27,Math.min(.48,hsl.l)));col='#'+orig.getHexString();}
      else if(hsl.l>.76){col='#d1d1cb';rough=.72;met=.04;}
      else if(['ups','switchgear','battery','transformer','pdu'].includes(term)){col='#aaaead';}
      else if(hsl.l<.4){col='#373c40';}
      o.material=material(col,rough,met);
    }
    o.castShadow=false;o.receiveShadow=true;
  });
  // ESD floor modules: scuffs and fine seams, not a perfect wet mirror.
  const floorTx=makeTexture(512,512,(c,w,h)=>{c.fillStyle='#77838b';c.fillRect(0,0,w,h);let seed=739;const r=()=>{seed=(seed*16807)%2147483647;return seed/2147483647;};
    for(let i=0;i<15000;i++){const v=95+Math.floor(r()*65);c.fillStyle=`rgba(${v},${v+5},${v+10},.15)`;c.fillRect(r()*w,r()*h,1+r()*2,1);}
    c.strokeStyle='#4c5a65';c.lineWidth=2;c.strokeRect(1,1,510,510);c.strokeStyle='#a2adb4';c.lineWidth=1;c.strokeRect(4,4,504,504);
    for(const x of [12,500])for(const y of [12,500]){c.fillStyle='#596775';c.beginPath();c.arc(x,y,1.7,0,6.3);c.fill();}});
  for(const f of floors.slice(0,3))for(const rect of [[1.1,1.1,103.1,36.4],[5.3,55.1,57.5,47.8],[32.6,38.6,5.3,15.4]]){
    const [x,y,w,d]=rect,tx=floorTx.clone();tx.wrapS=tx.wrapT=1000;tx.repeat.set(w/2,d/2);tx.needsUpdate=true;
    const mat=new T.MeshStandardMaterial({color:'#99a8b0',map:tx,roughness:.36,metalness:.28});
    const m=new T.Mesh(new T.PlaneGeometry(w,d),mat);m.rotation.x=-Math.PI/2;m.position.copy(p3(x+w/2,y+d/2,FY[f]+.105));m.userData={floor:f,reflectionFloor:true,rect};groups[f].add(m);floorMeshes.push(m);
  }
  // Lightweight merged boxes for dense repeated rack details.
  const batches=new Map(),unit=new T.BoxGeometry(1,1,1).toNonIndexed();
  const batchBox=(f,x,y,h,w,d,hei,mat)=>{const k=f+'/'+mat.uuid+'/'+Math.floor(x/16)+'/'+Math.floor(y/16);if(!batches.has(k))batches.set(k,{f,mat,p:[],n:[],uv:[]});const b=batches.get(k),pa=unit.attributes.position,na=unit.attributes.normal,ua=unit.attributes.uv;
    for(let i=0;i<pa.count;i++){b.p.push(x-72+pa.getX(i)*w,FY[f]+h+pa.getY(i)*hei,y-56+pa.getZ(i)*d);b.n.push(na.getX(i),na.getY(i),na.getZ(i));b.uv.push(ua.getX(i),ua.getY(i));}};
  function tube(f,points,radius,mat,opt={}){for(let i=1;i<points.length;i++){const a=p3(points[i-1][0],points[i-1][1],FY[f]+points[i-1][2]),b=p3(points[i][0],points[i][1],FY[f]+points[i][2]),v=b.clone().sub(a);const m=new T.Mesh(new T.CylinderGeometry(radius,radius,v.length(),16,1),mat);m.position.copy(a).add(b).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),v.normalize());m.userData={floor:f,...opt};groups[f].add(m);}}
  /* 등이 높아지면 바닥 조도는 거리의 제곱으로 떨어진다. 같은 밝기를 유지할 배율. */
  const throw2=(h,ref)=>Math.min(9,Math.max(1,(h/ref)**2));
  /* 천장 부착 등기구 — 등기구는 천장(슬래브 밑면, 통로 위라면 덕트 밑면)에 직접 붙는다.
     짓는 순서상 이 시점에는 그 높이를 알 수 없으므로 요청만 모아 두고, 월드가 다 선 뒤에
     위로 레이를 쏴서 천장을 찾은 다음 draw(천장높이)로 실제 지오메트리를 세운다. */
  const mountRequests=[];
  const mount=(f,x,y,probe,draw)=>mountRequests.push({f,x,y,probe,draw});
  // A single panel texture keeps thousands of vents crisp without thousands of objects.
  const rackTx=makeTexture(768,1024,(c,w,h)=>{
    c.fillStyle='#131516';c.fillRect(0,0,w,h);
    for(let row=0;row<12;row++){const y=38+row*78;const shade=c.createLinearGradient(0,y,0,y+70);shade.addColorStop(0,'#45494b');shade.addColorStop(.15,'#303436');shade.addColorStop(1,'#222527');c.fillStyle=shade;c.fillRect(24,y,720,70);c.strokeStyle='#666b6d';c.lineWidth=1;c.strokeRect(24,y,720,70);
      c.fillStyle='#090b0c';for(let ventRow=0;ventRow<5;ventRow++)for(let vent=0;vent<68;vent++){c.beginPath();c.arc(82+vent*7.7,y+11+ventRow*7,2.1,0,Math.PI*2);c.fill();}
      c.fillStyle='#a7adaa';c.font='10px Arial';c.fillText(row<2?'NETWORK FABRIC':'GPU COMPUTE / '+String(row-1).padStart(2,'0'),82,y+60);
      c.fillStyle='#a8acab';c.fillRect(39,y+17,10,30);c.fillRect(724,y+17,10,30);c.fillStyle='#101415';c.fillRect(651,y+34,37,14);
      for(let k=0;k<4;k++){c.fillStyle=k%2?'#62b98f':'#498fbd';c.fillRect(624+k*17,y+17,4,3);}
      for(const x of [30,734]){c.fillStyle='#a2acb5';c.beginPath();c.arc(x,y+7,3,0,6.3);c.fill();}}
    c.fillStyle='#748993';c.fillRect(6,20,7,982);c.fillRect(755,20,7,982);
  });
  const panelMat=new T.MeshStandardMaterial({color:'#e4e4e0',map:rackTx,roughness:.56,metalness:.28});
  const aisleXs=[16,23.6,31.2,38.8,46.4,54,61.6,69.2,76.8];
  for(let ai=0;ai<aisleXs.length;ai++){
    const ax=aisleXs[ai];
    for(const side of [-1,1])for(let i=0;i<6;i++){
      const py=6+i*2.25,px=ax+side*.704;
      const panel=new T.Mesh(new T.PlaneGeometry(1.62,2.23),panelMat);panel.position.copy(p3(px,py+.94,FY.f2+1.31));panel.rotation.y=side<0?Math.PI/2:-Math.PI/2;panel.userData={floor:'f2',aimTerm:'gpu-rack'};groups.f2.add(panel);pickMeshes.push(panel);
      for(let r=0;r<12;r++)for(let j=0;j<2;j++)batchBox('f2',px-side*.004,py+.32+j*.095,.36+r*.174,.006,.012,.006,(r+j+i)%5===0?ledBlue:ledGreen);
      batchBox('f2',px,py+.14,1.31,.045,.04,2.38,silver);batchBox('f2',px,py+1.76,1.31,.045,.04,2.38,silver);
      batchBox('f2',ax+side*1.28,py+.97,.04,1.15,1.9,.08,dark);
    }
    label('f2','AISLE '+String(ai+1).padStart(2,'0')+' / GPU',ax,19.51,2.9,1.5,.24,0,'#b9f4ff');
    for(const y of [7.7,11.9,16.1])mount('f2',ax,y,3.7,c=>{batchBox('f2',ax,y,c-.03,.21,3.24,.06,metal);batchBox('f2',ax,y,c-.0875,.13,3.15,.055,lamp);});
    for(const side of [-1,1]){
      tube('f2',[[ax+side*1.1,5.5,3.3],[ax+side*1.1,20.6,3.3]],.055,side<0?teal:orange);
      for(const yy of [6,10.5,15,19]){batchBox('f2',ax+side*1.1,yy,3.3,.2,.08,.18,silver);}
      for(let c=0;c<3;c++)tube('f2',[[ax+side*1.35+c*.035,6,3.06],[ax+side*1.35+c*.035,19.6,3.06]],.018,material(c===0?'#d2a13c':c===1?'#49a2ba':'#8c63a2',.45,.15));
    }
    for(const yy of [5.5,10,14.5,19.7]){
      batchBox('f2',ax,yy,3.88,4.6,.08,.1,metal);
      for(const side of [-1,1])batchBox('f2',ax+side*2.2,yy,6.5,.035,.035,5.3,silver);
    }
  }
  blink.push(ledBlue,ledGreen);
  // Keep opaque hose jackets in normal mode. The flowing coolant is a labelled teaching overlay.
  const flowMat=new T.MeshBasicMaterial({color:'#5affd5',toneMapped:false});
  for(const ax of aisleXs)for(let j=0;j<7;j++){const m=new T.Mesh(new T.SphereGeometry(.045,6,4),flowMat);m.userData={floor:'f2',flowOverlay:true};groups.f2.add(m);flow.push({m,ax,j});}
  // One open rack inspection bay remains inside the original rack envelope.
  const inspect={x:31.2,y:11.45};
  const openBodies=[];
  root.traverse(m=>{if(!m.isMesh||m.userData.floor!=='f2'||m.userData.aimTerm!=='gpu-rack')return;const gp=m.geometry.parameters||{};const xx=m.position.x+72,yy=m.position.z+56;
    if(xx>31.9&&xx<33.3&&yy>10.45&&yy<12.6){m.visible=false;m.userData.hideAlways=true;openBodies.push(m);}});
  groups.f2.children.filter(m=>m.userData.aimTerm==='gpu-rack'&&Math.abs(m.position.x+72-31.965)<.1&&Math.abs(m.position.z+56-11.44)<.2).forEach(m=>{m.visible=false;m.userData.hideAlways=true;});
  const pcb=material('#165b47',.56,.18),copper=material('#b58c51',.33,.7);
  const pcbTx=makeTexture(1536,320,(c,w,h)=>{
    c.fillStyle='#124a3b';c.fillRect(0,0,w,h);c.lineWidth=1.2;
    for(let i=0;i<54;i++){const x=25+i*27,y=15+(i*37)%(h-30);c.strokeStyle=i%3?'#397d5d':'#bba658';c.beginPath();c.moveTo(x,8);c.lineTo(x,y);c.lineTo(x+16,y+12);c.lineTo(x+16,h-9);c.stroke();c.fillStyle='#c3b778';c.beginPath();c.arc(x+16,y+12,2.8,0,6.3);c.fill();}
    for(let i=0;i<24;i++){const x=28+i*62,y=i%2?254:29;c.fillStyle='#0c181e';c.fillRect(x,y,35,25);c.strokeStyle='#a7b2a2';for(let j=0;j<5;j++){c.beginPath();c.moveTo(x+j*7,y-5);c.lineTo(x+j*7,y+30);c.stroke();}c.fillStyle='#1b292a';c.fillRect(x-1,y,36,25);}
    c.fillStyle='#d4ddd2';c.font='14px monospace';c.fillText('D2C COMPUTE BOARD   /   ILLUSTRATIVE ASSEMBLY   /   SERVICE SIDE',32,157);
    for(const x of [12,w-12])for(const y of [12,h-12]){c.strokeStyle='#d8ca8d';c.lineWidth=4;c.beginPath();c.arc(x,y,6,0,6.3);c.stroke();}
  });
  const pcbFace=new T.MeshStandardMaterial({map:pcbTx,roughness:.67,metalness:.12});
  box('f2',32.81,10.5,.08,.07,1.9,2.5,dark,{term:'cold-plate'});
  box('f2',31.98,10.5,.08,.88,.07,2.5,dark);box('f2',31.98,12.33,.08,.88,.07,2.5,dark);
  for(let r=0;r<5;r++){
    const h=.34+r*.43;box('f2',32.63,10.65,h,.07,1.57,.32,pcb,{term:'cold-plate'});
    const face=new T.Mesh(new T.PlaneGeometry(1.57,.32),pcbFace);face.position.copy(p3(32.625,11.435,FY.f2+h+.16));face.rotation.y=-Math.PI/2;face.userData={floor:'f2',aimTerm:'cold-plate'};groups.f2.add(face);pickMeshes.push(face);
    for(let j=0;j<3;j++){box('f2',32.49,10.83+j*.43,h+.055,.12,.32,.23,copper,{term:'cold-plate'});for(let k=0;k<3;k++)batchBox('f2',32.476,10.85+j*.43+k*.075,h+.28,.025,.037,.045,silver);}
    for(let j=0;j<3;j++)for(const yy of [10.845+j*.43,11.125+j*.43])for(const hh of [h+.075,h+.26])batchBox('f2',32.482,yy,hh,.017,.013,.013,silver);
    tube('f2',[[32.35,10.66,h+.12],[32.35,12.14,h+.12],[32.2,12.2,h+.12],[32.2,12.2,2.8]],.014,dark,{aimTerm:'cold-plate'});
    tube('f2',[[32.25,10.66,h+.28],[32.25,12.04,h+.28],[32.13,12.13,h+.28],[32.13,12.13,2.8]],.014,dark,{aimTerm:'cold-plate'});
    for(const connection of [[32.35,10.72,h+.12,teal],[32.25,10.72,h+.28,orange],[32.35,12.04,h+.12,teal],[32.25,11.94,h+.28,orange]]){
      const [connectionX,connectionY,connectionHeight,colour]=connection;
      tube('f2',[[connectionX,connectionY-.035,connectionHeight],[connectionX,connectionY+.035,connectionHeight]],.028,silver);
      tube('f2',[[connectionX,connectionY+.038,connectionHeight],[connectionX,connectionY+.065,connectionHeight]],.021,colour);
    }
  }
  // Fan blades are genuinely geometric in the inspection bay, not painted discs.
  const rotorGroups=[];
  for(let i=0;i<3;i++){
    const g=new T.Group();g.position.copy(p3(32.1,10.9+i*.48,FY.f2+2.36));g.userData.floor='f2';groups.f2.add(g);
    const ring=new T.Mesh(new T.CylinderGeometry(.155,.155,.08,24,1,true),silver);ring.rotation.z=Math.PI/2;g.add(ring);
    const rotor=new T.Group();g.add(rotor);for(let j=0;j<7;j++){const b=new T.Mesh(new T.BoxGeometry(.03,.14,.036),dark);b.position.y=Math.cos(j/7*Math.PI*2)*.066;b.position.z=Math.sin(j/7*Math.PI*2)*.066;b.rotation.x=j/7*Math.PI*2;rotor.add(b);}rotorGroups.push(rotor);
  }
  label('f2','LIQUID-COOLED COMPUTE / INSPECTION BAY',31.955,11.45,2.74,1.75,.2,-Math.PI/2);
  // Colourful monitoring walls retain the control room's original footprint.
  const screenDraw=(c,w,h,idx,t=0)=>{
    c.fillStyle='#071822';c.fillRect(0,0,w,h);c.fillStyle='#8cbdca';c.font='24px Arial';c.fillText(['FACILITY OVERVIEW','POWER + COOLING','COMPUTE FABRIC'][idx],32,42);
    c.fillStyle='#284551';c.fillRect(28,65,w-56,1);c.fillStyle='#5be1b1';c.beginPath();c.arc(w-45,30,5,0,7);c.fill();
    const vals=[['24.2 C','1.25','98.7%'],['2.00 MW','415 V','A / B'],['108 RACKS','READY','ONLINE']][idx];
    vals.forEach((v,i)=>{c.fillStyle='#122d3a';c.fillRect(28+i*(w-40)/3,89,(w-68)/3,105);c.fillStyle=['#62e5d5','#78bff0','#eab872'][i];c.font='42px Arial';c.fillText(v,43+i*(w-40)/3,150);});
    for(let g=0;g<2;g++){
      const yy=225+g*118;c.strokeStyle='#284854';c.lineWidth=1;for(let j=0;j<4;j++){c.beginPath();c.moveTo(28,yy+j*24);c.lineTo(w-28,yy+j*24);c.stroke();}
      c.strokeStyle=g?'#81bdeb':'#43d4b8';c.lineWidth=3;c.beginPath();for(let i=0;i<100;i++){let y=yy+50+18*Math.sin(i*.13+idx+g+t*.1)+9*Math.sin(i*.47);let x=28+i*(w-56)/99;i?c.lineTo(x,y):c.moveTo(x,y);}c.stroke();
    }
    c.fillStyle='#7c9da8';c.font='16px Arial';c.fillText('ILLUSTRATIVE TELEMETRY / NOT LIVE DATA',30,h-18);
  };
  for(let i=0;i<3;i++){
    const tx=makeTexture(1024,512,(c,w,h)=>screenDraw(c,w,h,i));screens.push({tx,draw:screenDraw,idx:i});
    const sm=new T.MeshBasicMaterial({map:tx,toneMapped:false});const m=new T.Mesh(new T.PlaneGeometry(6.15,3.06),sm);
    const angle=(i-1)*.12;m.position.copy(p3(69.3+i*7.4+Math.sin(angle)*.222,24.4+Math.cos(angle)*.222,FY.f1+2.8));m.rotation.y=angle;m.userData={floor:'f1',aimTerm:'bms'};groups.f1.add(m);pickMeshes.push(m);
    batchBox('f1',69.3+i*7.4,24.65,.59,6.65,.54,.16,metal);
    mount('f1',69.3+i*7.4,24.62,5,c=>batchBox('f1',69.3+i*7.4,24.62,c-.0275,6.65,.25,.055,lamp));
  }
  label('f1','NETWORK OPERATIONS CENTER',79,24.8,5.2,12,.45);
  // Control-room glazing has a real, automatically sliding opening.
  const addDoor=(f,x,y,w,axis='x',name='SECURE ACCESS')=>{
    const h=3.3,th=.055,g=new T.Group();g.userData.floor=f;groups[f].add(g);
    const center=p3(x,y,FY[f]);
    for(const s of [-1,1]){
      const m=new T.Mesh(new T.BoxGeometry(axis==='x'?w/2:th,h,axis==='x'?th:w/2),glass.clone());m.material.opacity=.26;
      m.position.copy(center);m.position.y+=h/2;m.position[axis==='x'?'x':'z']+=s*w/4;m.userData.floor=f;g.add(m);
      const handle=new T.Mesh(new T.BoxGeometry(.035,1,.035),silver);handle.position.set(0,0,axis==='x'?.065:0);m.add(handle);
    }
    const collider={x0:x-72-(axis==='x'?w/2:.05),x1:x-72+(axis==='x'?w/2:.05),z0:y-56-(axis==='x'?.05:w/2),z1:y-56+(axis==='x'?.05:w/2),y0:FY[f],y1:FY[f]+h,floor:f,wall:true};extraColliders.push(collider);
    const obj={f,x,y,w,axis,g,collider,amount:0,base:g.children.map(m=>m.position.clone())};doors.push(obj);
    if(axis==='x'){box(f,x-w/2-.06,y-.09,0,.09,.18,h+.1,metal);box(f,x+w/2-.03,y-.09,0,.09,.18,h+.1,metal);box(f,x-w/2,y-.1,h,w,.2,.13,metal);label(f,name,x,y+.13,h+.34,w,.26);}
    else {box(f,x-.09,y-w/2-.06,0,.18,.09,h+.1,metal);box(f,x-.09,y+w/2-.03,0,.18,.09,h+.1,metal);box(f,x-.1,y-w/2,h,.2,w,.13,metal);}
    return obj;
  };
  for(const r of [[64,16],[84,10]])box('f1',r[0],33.7,.02,r[1],.055,3.3,glass,{collide:true,wall:true});
  for(const x of [64,68,72,76,80,84,88,92,94])box('f1',x,33.65,0,.045,.13,3.3,metal);
  addDoor('f1',82,33.73,4,'x','01 / OPERATIONS');
  addDoor('f1',63.38,76.4,4.4,'z','MAIN ENTRANCE');
  addDoor('f2',97.8,21.8,3,'x','02 / DATA HALL');
  // Ceiling-mounted lighting: fixtures sit flush against the slab above (see mount()).
  const lightLocations=[];
  for(const f of ['b1','f1','f2']){
    for(let x=9;x<100;x+=10){for(const y of f==='f2'?[21.1,35.6]:[22.8,35.3]){
      mount(f,x,y,4.8,c=>{batchBox(f,x,y,c-.045,4,.18,.09,white);batchBox(f,x,y,c-.1,3.8,.14,.02,lamp);lightLocations.push({f,x,y,h:c-.3,color:'#fff4e7',power:34*throw2(c-.3,4.45)});});
    }}
    for(let x=13;x<62;x+=11)for(let y=59;y<100;y+=12)mount(f,x,y,4.8,c=>{batchBox(f,x,y,c-.045,3.6,.18,.09,white);batchBox(f,x,y,c-.1,3.4,.14,.02,lamp);lightLocations.push({f,x,y,h:c-.3,color:'#fff1df',power:44*throw2(c-.3,4.3)});});
    for(let y=41;y<54;y+=4)mount(f,35.3,y,4.2,c=>{batchBox(f,35.3,y,c-.035,2.5,.16,.07,white);lightLocations.push({f,x:35.3,y,h:c-.25,color:'#f8f5ef',power:22*throw2(c-.25,3.8)});});
  }
  for(const ax of aisleXs)for(const y of [8,13,18])lightLocations.push({f:'f2',x:ax,y,h:3.2,color:'#eff4f5',power:18});
  lightLocations.push({f:'f1',x:82,y:28,h:3,color:'#63bbd3',power:22},{f:'f1',x:55,y:76,h:3.4,color:'#ffcfa3',power:45});
  for(const f of ['f1','f2']){
    // Lift is explicitly an exploration addition: the supplied source has no lift location.
    box(f,98.3,30.2,0,.09,3.3,3.5,metal,{collide:true,wall:true});box(f,101.8,30.2,0,.09,3.3,3.5,metal,{collide:true,wall:true});
    box(f,98.3,33.5,0,3.6,.1,3.5,metal,{collide:true,wall:true});box(f,98.3,30.2,3.5,3.6,3.4,.12,dark);
    box(f,98.5,30.35,.02,3.1,3,.055,material('#41596a',.3,.6));
    label(f,'LIFT / '+(f==='f1'?'1F > 2F':'2F > 1F'),100.1,33.39,2.4,2.8,.65,Math.PI);
    label(f,'VERTICAL TRANSFER',100.1,30.15,3.08,3,.33,Math.PI);
    batchBox(f,98.44,31.8,3.35,.05,3.15,.08,ledBlue);batchBox(f,101.72,31.8,3.35,.05,3.15,.08,ledBlue);
  }
  label('f1','SUNJIN / AI DATA CENTER',54.3,72.82,3.15,9,.95);
  label('f1','VISITOR ACCESS / MAIN ENTRANCE',62.69,79.7,2.45,4.6,.54,-Math.PI/2);
  label('f1','OPERATIONS  >  DATA HALL',35.3,54.3,3.15,4.6,.46,Math.PI);
  label('f1','01 / OPERATIONS  >>>',58,34.9,2.8,5.8,.38,Math.PI);
  label('f2','GPU HALL / LIQUID COOLING',90,20.95,3.6,8,.46);
  // Route strip follows actual connected passages instead of cutting across equipment.
  const routeSegments=[['f1',61.2,76.4,61.2,57],['f1',61.2,57,35.3,57],['f1',35.3,57,35.3,35.5],['f1',35.3,35.5,82,35.5],['f1',82,35.5,82,31.5],['f1',85,35.5,100.1,35.5],['f2',97.6,29,97.6,21],['f2',97.6,20.1,31.2,20.1]];
  const routeMat=new T.MeshBasicMaterial({color:'#8caa9e',transparent:true,opacity:.38,toneMapped:false});
  for(const [f,x,y,xx,yy]of routeSegments){const len=Math.hypot(xx-x,yy-y),n=Math.floor(len/1.1);for(let i=0;i<n;i++){const t=(i+.5)/n;const m=box(f,x+(xx-x)*t-.025,y+(yy-y)*t-.18,.12,.05,.36,.008,routeMat,{routeGuide:true});m.rotation.y=Math.atan2(xx-x,yy-y);}}
  /* 천장을 찾아 등기구를 붙인다. 위로 레이를 쏴서 먼저 맞는 면(통로 위 덕트·트레이가
     있으면 그 밑면, 없으면 층 슬래브 밑면 12.5 m)에 하우징 윗면을 맞춘다. */
  root.updateMatrixWorld(true);
  {
    const CEIL=12.5, upRay=new T.Raycaster(), up=new T.Vector3(0,1,0), org=new T.Vector3();
    upRay.far=CEIL+.5;
    for(const g of mountRequests){
      org.set(g.x-72,FY[g.f]+g.probe,g.y-56);upRay.set(org,up);
      let ceil=CEIL;
      for(const hit of upRay.intersectObject(root,true)){
        const d=hit.object.userData;
        if(!hit.object.visible||d.hideAlways||d.flowPart||d.flowParticle||d.routeGuide)continue;
        const rel=hit.point.y-FY[g.f];
        if(rel<g.probe+.1)continue;
        ceil=Math.min(rel,CEIL);
        break;
      }
      g.draw(ceil);
    }
  }
  // Batch the high-frequency details. Each colour/floor costs just one draw call.
  for(const b of batches.values()){
    const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(b.p,3));geo.setAttribute('normal',new T.Float32BufferAttribute(b.n,3));geo.setAttribute('uv',new T.Float32BufferAttribute(b.uv,2));geo.computeBoundingSphere();const m=new T.Mesh(geo,b.mat);m.userData={floor:b.f,visualBatch:true};groups[b.f].add(m);
  }
  const colliders=E.collectColliders(root).filter(b=>Number.isFinite(b.y0)).concat(extraColliders);
  // Original furniture is now solid too. The original collision collector omits decorative desks.
  root.updateMatrixWorld(true);
  const collidableFurniture=[];
  root.traverse(m=>{if(!m.isMesh||m.userData.hideAlways||m.userData.visualBatch||m.userData.aimTerm||m.userData.structureMesh||m.userData.floorTop||m.userData.slabMesh)return;const f=m.userData.floor,g=m.geometry.parameters||{};if(!FY.hasOwnProperty(f)||!g.height||g.height<.38||g.height>2.5)return;const x=m.position.x+72,y=m.position.z+56;
    if((f==='f1'&&x>48&&x<62&&y>71&&y<95)||(f==='f1'&&x>67&&x<79&&y>29&&y<34)){const b=new T.Box3().setFromObject(m);collidableFurniture.push({x0:b.min.x,x1:b.max.x,z0:b.min.z,z1:b.max.z,y0:b.min.y,y1:b.max.y,floor:f,wall:false});}});
  colliders.push(...collidableFurniture);
  const hemi=new T.HemisphereLight('#f3f3ed','#676a69',1.1);scene.add(hemi);
  scene.add(new T.AmbientLight('#efeeea',.3));
  const key=new T.DirectionalLight('#fff4e5',1.35);key.position.set(-35,95,30);scene.add(key);
  const lightPool=Array.from({length:2},()=>{const l=new T.PointLight('#fff3e8',0,34,2);scene.add(l);return l;});
  // A generated environment from light panels: no external HDR fetch or broken texture URLs.
  const envScene=new T.Scene();envScene.background=new T.Color('#737673');
  for(const [x,y,z,w,h]of [[-7,5,0,2,8],[7,5,0,2,8],[0,9,-6,12,2],[0,5,8,7,3]]){
    const m=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({color:'#f2f0e8',side:2}));m.position.set(x,y,z);m.lookAt(0,0,0);envScene.add(m);
  }
  const pmrem=new T.PMREMGenerator(renderer);const env=pmrem.fromScene(envScene,.1);scene.environment=env.texture;pmrem.dispose();
  // Combine static source surfaces without altering their collision or picking meshes.
  // Original semantic objects remain available for equipment inspection.
  root.updateMatrixWorld(true);
  const surfaceBatches=new Map();
  for(const m of originalMeshes){const d=m.userData,mat=m.material;
    if(d.hideAlways||d.slabMesh||d.floorTop||!m.geometry.attributes.normal||Array.isArray(mat)||mat.transparent)continue;
    const f=d.floor||'site',key=f+'/'+mat.uuid+'/'+Math.floor(m.matrixWorld.elements[12]/16)+'/'+Math.floor(m.matrixWorld.elements[14]/16);
    if(!surfaceBatches.has(key))surfaceBatches.set(key,{f,mat,p:[],n:[],uv:[]});
    const b=surfaceBatches.get(key),clone=m.geometry.clone().applyMatrix4(m.matrixWorld),g=clone.index?clone.toNonIndexed():clone;
    const pa=g.attributes.position,na=g.attributes.normal,ua=g.attributes.uv;
    for(let i=0;i<pa.count;i++){b.p.push(pa.getX(i),pa.getY(i),pa.getZ(i));b.n.push(na.getX(i),na.getY(i),na.getZ(i));b.uv.push(ua?ua.getX(i):0,ua?ua.getY(i):0);}
    if(g!==clone)g.dispose();clone.dispose();m.visible=false;d.renderBatched=true;
  }
  for(const b of surfaceBatches.values()){
    const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(b.p,3));g.setAttribute('normal',new T.Float32BufferAttribute(b.n,3));g.setAttribute('uv',new T.Float32BufferAttribute(b.uv,2));g.computeBoundingSphere();
    const m=new T.Mesh(g,b.mat);m.userData={sourceRenderBatch:true};if(b.f!=='site')m.userData.floor=b.f;root.add(m);
  }
  const brushedTexture=makeTexture(256,256,(context,width,height)=>{
    context.fillStyle='#b8b8b8';context.fillRect(0,0,width,height);
    let seed=437;
    for(let line=0;line<1800;line++){
      seed=(seed*16807)%2147483647;const tone=155+seed%90;context.strokeStyle=`rgba(${tone},${tone},${tone},.35)`;
      context.lineWidth=.5;context.beginPath();context.moveTo(0,seed%height);context.lineTo(width,seed%height);context.stroke();
    }
  });
  brushedTexture.colorSpace='';brushedTexture.wrapS=brushedTexture.wrapT=1000;brushedTexture.repeat.set(2,4);
  for(const mat of mats.values())if(mat.metalness>.3&&!mat.transparent)mat.roughnessMap=brushedTexture;
  const terms=E.collectTerms(root);
  const pickOccluders=[];
  root.traverse(object=>{if(object.isMesh&&object.userData.structureMesh&&!object.userData.hideAlways)pickOccluders.push(object);});
  const dynamicRoots=new Set([...doors.map(door=>door.g),...rotorGroups,...flow.map(item=>item.m)]);
  const isDynamic=object=>{for(let parent=object;parent&&parent!==root;parent=parent.parent)if(dynamicRoots.has(parent))return true;return false;};
  const detailBatches=new Map();
  root.updateMatrixWorld(true);
  root.traverse(object=>{
    if(!object.isMesh||!object.visible||isDynamic(object))return;
    const data=object.userData,geometry=object.geometry,mat=object.material;
    if(data.hideAlways||data.renderBatched||data.reflectionFloor||data.slabMesh||data.floorTop||data.sourceRenderBatch||data.visualBatch||Array.isArray(mat)||!geometry.attributes.normal)return;
    const floor=data.floor||'site',batchKey=[floor,mat.uuid,!!data.routeGuide,Math.floor(object.matrixWorld.elements[12]/16),Math.floor(object.matrixWorld.elements[14]/16)].join('/');
    if(!detailBatches.has(batchKey))detailBatches.set(batchKey,{floor,mat,guide:!!data.routeGuide,objects:[]});
    detailBatches.get(batchKey).objects.push(object);
  });
  for(const batch of detailBatches.values()){
    if(batch.objects.length<2)continue;
    const positions=[],normals=[],uvs=[];
    for(const object of batch.objects){
      const clone=object.geometry.clone().applyMatrix4(object.matrixWorld),geometry=clone.index?clone.toNonIndexed():clone;
      const position=geometry.attributes.position,normal=geometry.attributes.normal,uv=geometry.attributes.uv;
      for(let vertex=0;vertex<position.count;vertex++){
        positions.push(position.getX(vertex),position.getY(vertex),position.getZ(vertex));
        normals.push(normal.getX(vertex),normal.getY(vertex),normal.getZ(vertex));
        uvs.push(uv?uv.getX(vertex):0,uv?uv.getY(vertex):0);
      }
      if(geometry!==clone)geometry.dispose();clone.dispose();object.visible=false;object.userData.renderBatched=true;
    }
    const geometry=new T.BufferGeometry();
    geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));
    geometry.setAttribute('normal',new T.Float32BufferAttribute(normals,3));
    geometry.setAttribute('uv',new T.Float32BufferAttribute(uvs,2));geometry.computeBoundingSphere();
    const mesh=new T.Mesh(geometry,batch.mat);mesh.userData={floor:batch.floor,detailBatch:true,routeGuide:batch.guide};root.add(mesh);
  }
  for(const floor of floorMeshes){
    const [left,top,width,depth]=floor.userData.rect,floorName=floor.userData.floor;
    const scale=Math.min(32,2048/Math.max(width,depth)),pixelWidth=Math.ceil(width*scale),pixelHeight=Math.ceil(depth*scale);
    const texture=makeTexture(pixelWidth,pixelHeight,(context,canvasWidth,canvasHeight)=>{
      context.fillStyle='#b3b4af';context.fillRect(0,0,canvasWidth,canvasHeight);
      context.strokeStyle='#929791';context.lineWidth=.65;
      const tile=floorName==='f2'?.6:1.2;
      context.beginPath();
      for(let gridX=Math.ceil(left/tile)*tile;gridX<left+width;gridX+=tile){const pixel=(gridX-left)*scale;context.moveTo(pixel,0);context.lineTo(pixel,canvasHeight);}
      for(let gridY=Math.ceil(top/tile)*tile;gridY<top+depth;gridY+=tile){const pixel=(gridY-top)*scale;context.moveTo(0,pixel);context.lineTo(canvasWidth,pixel);}
      context.stroke();
      let noiseSeed=827;
      for(let mark=0;mark<canvasWidth*canvasHeight/55;mark++){
        noiseSeed=(noiseSeed*16807)%2147483647;const pixelX=noiseSeed%canvasWidth;
        noiseSeed=(noiseSeed*16807)%2147483647;const pixelY=noiseSeed%canvasHeight;
        context.fillStyle=mark%2?'rgba(40,45,43,.065)':'rgba(255,255,250,.09)';context.fillRect(pixelX,pixelY,2,1);
      }
      for(const collider of colliders){
        if(collider.floor!==floorName||collider.y0>FY[floorName]+.5||collider.y1<FY[floorName]+.25)continue;
        const rectX=collider.x0+72-left,rectY=collider.z0+56-top,rectWidth=collider.x1-collider.x0,rectHeight=collider.z1-collider.z0;
        if(rectX>width||rectY>depth||rectX+rectWidth<0||rectY+rectHeight<0)continue;
        context.fillStyle='rgba(25,30,28,.17)';context.shadowColor='rgba(20,25,23,.55)';context.shadowBlur=scale*.24;context.shadowOffsetX=scale*.05;context.shadowOffsetY=scale*.09;
        context.fillRect(rectX*scale,rectY*scale,Math.max(2,rectWidth*scale),Math.max(2,rectHeight*scale));
      }
      context.shadowBlur=0;context.shadowOffsetX=0;context.shadowOffsetY=0;
    });
    floor.material.map.dispose();floor.material.map=texture;floor.material.color.set('#e7e5dc');floor.material.metalness=.08;floor.material.roughness=.46;
  }
  const activeLightTargets=lightPool.map(()=>null),lightDistances=new Float32Array(lightLocations.length);
  let lastLightUpdate=-Infinity,lastScreenUpdate=-Infinity,screenCursor=0;
  const staticObjects=[];
  root.traverse(object=>{if(!isDynamic(object)){object.updateMatrix();object.matrixAutoUpdate=false;}if(object.userData.renderBatched&&!object.children.length)staticObjects.push(object);});
  for(const object of staticObjects)object.removeFromParent();
  root.updateMatrixWorld(true);
  function visibleFloor(f,flowOn=false,guideOn=false){
    const above=floors[floors.indexOf(f)+1];
    root.traverse(o=>{const d=o.userData;if(d.hideAlways||d.renderBatched){o.visible=false;return;}if(d.flowOverlay){o.visible=f==='f2'&&flowOn;return;}if(d.routeGuide){o.visible=d.floor===f&&guideOn;return;}if(d.floor)o.visible=d.floor===f||(d.floor===above&&d.slabMesh);});
  }
  function update(time,dt,cam,f,flowOn){
    if(time-lastLightUpdate>.3){
      lastLightUpdate=time;
      lightLocations.forEach((point,index)=>lightDistances[index]=point.f===f?(point.x-72-cam.x)**2+(point.y-56-cam.z)**2:Infinity);
      for(let slot=0;slot<lightPool.length;slot++){
        let nearest=-1,distance=Infinity;
        for(let index=0;index<lightLocations.length;index++)if(lightDistances[index]<distance){distance=lightDistances[index];nearest=index;}
        const target=nearest>=0&&distance<650?lightLocations[nearest]:null;
        if(nearest>=0)lightDistances[nearest]=Infinity;
        if(activeLightTargets[slot]!==target){lightPool[slot].intensity=0;activeLightTargets[slot]=target;}
        if(target){lightPool[slot].position.set(target.x-72,FY[f]+target.h,target.y-56);lightPool[slot].color.set(target.color);}
      }
    }
    lightPool.forEach((light,index)=>light.intensity+=((activeLightTargets[index]?.power||0)-light.intensity)*(1-Math.exp(-dt*5)));
    if(f==='f2')blink.forEach((mat,index)=>mat.emissiveIntensity=.8+.12*Math.sin(time*(index?2.8:1.7)));
    for(const d of doors){if(d.f!==f)continue;const dist=Math.hypot(cam.x-(d.x-72),cam.z-(d.y-56)),target=dist<7?1:0;d.amount+=(target-d.amount)*(1-Math.exp(-dt*8));
      d.g.children.forEach((m,i)=>{m.position.copy(d.base[i]);m.position[d.axis==='x'?'x':'z']+=(i?1:-1)*d.w*.49*d.amount;});d.collider.y1=d.amount>.72?-10000:FY[d.f]+3.3;
    }
    if(f==='f2'&&Math.hypot(cam.x+72-inspect.x,cam.z+56-inspect.y)<10)for(const rotor of rotorGroups)rotor.rotation.x=time*18;
    if(f==='f2'&&flowOn)for(const item of flow)item.m.position.set(item.ax-1.1-72, FY.f2+3.3,5.5+((time*.9+item.j*2.14)%15)-56);
    if(f==='f1'&&Math.hypot(cam.x+72-79,cam.z+56-25)<32&&time-lastScreenUpdate>.75){lastScreenUpdate=time;const screen=screens[screenCursor++%screens.length];screen.draw(screen.tx.image.getContext('2d'),1024,512,screen.idx,time);screen.tx.needsUpdate=true;}
  }
  visibleFloor('f1');
  return {T,scene,root,FY,colliders,terms,pickMeshes,pickOccluders,groups,doors,extraColliders,sourceFloors,floorMeshes,visibleFloor,update,inspect,routeSegments,env,counts:{aisles:9,racks:108,leds:2592},dispose:()=>env.dispose()};
}

function startExplore(E) {
  const T=E.THREE, $=id=>document.getElementById(id), clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const canvas=$('view'), renderer=new T.WebGLRenderer({canvas,antialias:false,powerPreference:'high-performance',preserveDrawingBuffer:false});
  renderer.outputColorSpace='srgb';renderer.toneMapping=4;renderer.toneMappingExposure=1.05;
  const world=createExploreWorld(E,renderer),{scene,root,FY}=world;
  const camera=new T.PerspectiveCamera(62,1,.045,260),grid=new E.CollisionGrid(world.colliders);
  const speedLevels=Object.freeze([5,7.5,10,12.5,15]);
  const S={floor:'f1',pos:new T.Vector3(),vel:new T.Vector3(),yaw:Math.PI/2,pitch:0,targetYaw:Math.PI/2,targetPitch:0,speed:5,speedLevel:1,started:false,locked:false,flow:false,guide:false,cinema:false,quality:0,auto:false,tourIndex:0,route:[],node:0,dwell:0,transition:null,aim:null,hoverLift:false,sound:false,frame:0,fps:0,paused:false,tourSpeed:0,adaptiveScale:1};
  const floors=['b1','f1','f2','roof'],names={b1:'B1 / PLANT',f1:'1F / OPERATIONS',f2:'2F / DATA HALL',roof:'PH / COOLING'};
  const pts={
    entrance:{f:'f1',x:61.7,y:76.4,yaw:Math.PI/2,name:'Main entrance'},
    lobby:{f:'f1',x:60.5,y:76.3,yaw:Math.PI/2,name:'Reception lobby'},
    operations:{f:'f1',x:82,y:31.4,yaw:0,name:'Operations center'},
    lift:{f:'f1',x:100,y:31.2,yaw:Math.PI,name:'Vertical transfer'},
    servers:{f:'f2',x:54,y:18.85,yaw:0,name:'GPU server aisle'},
    closeup:{f:'f2',x:31.2,y:11.44,yaw:-Math.PI/2,name:'Liquid cooling inspection'},
    plant:{f:'b1',x:11,y:33,yaw:-Math.PI/2,name:'Mechanical plant'},
    cooling:{f:'roof',x:11,y:33,yaw:-Math.PI/2,name:'Rooftop cooling'}
  };
  const tour=[
    {f:'f1',x:60.7,y:76.4,name:'01 / MAIN ENTRANCE'},
    {f:'f1',x:60.5,y:58,name:'02 / RECEPTION TO LINK'},
    {f:'f1',x:35.3,y:56,name:'03 / CONNECTING CORRIDOR'},
    {f:'f1',x:35.3,y:35.5,name:'04 / OPERATIONS FLOOR'},
    {f:'f1',x:82,y:31.4,name:'05 / OPERATIONS CENTER',look:[79,24.6],wait:3},
    {f:'f1',x:100,y:31.2,name:'06 / VERTICAL TRANSFER'},
    {f:'f2',x:100,y:31.2,name:'07 / SECOND FLOOR'},
    {f:'f2',x:97.4,y:20.2,name:'08 / DATA HALL ACCESS'},
    {f:'f2',x:54,y:19.7,name:'09 / GPU SERVER AISLE'},
    {f:'f2',x:54,y:7.3,name:'10 / CINEMATIC AISLE WALK',wait:1},
    {f:'f2',x:54,y:20.2,name:'11 / COOLING DISTRIBUTION'},
    {f:'f2',x:31.2,y:20.2,name:'12 / LIQUID COOLING'},
    {f:'f2',x:31.2,y:11.44,name:'13 / RACK INSPECTION',look:[32.5,11.44],wait:4}
  ];
  const keys=new Set(), ray=new T.Raycaster(),ndc=new T.Vector2(0,0);
  let touchMove={x:0,y:0}, lookDrag=null, audio=null, seconds=0,frameCount=0,fpsAcc=0,aimAcc=0,mapAcc=0;
  const walkable=(x,y,f)=>{
    const main=x>1.04&&x<104.26&&y>1.04&&y<37.56;
    const sup=x>5.24&&x<62.86&&y>55.04&&y<102.96;
    const bridge=x>32.58&&x<37.92&&y>=37.4&&y<=55.3;
    const entry=f==='f1'&&x>=62.7&&x<=66.5&&y>=74.1&&y<=78.7;
    return main||sup||bridge||entry;
  };
  function collision(x,y,f,r=.31){return !walkable(x,y,f)||grid.hits(x-72,y-56,r,FY[f]+1.85,FY[f]+.28);}
  function updateFloor(f){S.floor=f;world.visibleFloor(f,S.flow,S.guide);$('floorValue').textContent=names[f];document.querySelectorAll('[data-floor]').forEach(b=>b.classList.toggle('selected',b.dataset.floor===f));}
  function place(id){const p=typeof id==='string'?pts[id]:id;if(!p)return;S.transition=null;liftCabin.visible=false;$('transfer').classList.remove('show');S.auto=false;S.tourSpeed=0;S.route=[];S.vel.set(0,0,0);updateFloor(p.f);const [x,z]=grid.findFree(p.x-72,p.y-56,.31,FY[p.f]+1.85,FY[p.f]+.28);S.pos.set(x,FY[p.f]+1.65,z);S.yaw=S.targetYaw=p.yaw??0;S.pitch=S.targetPitch=0;updateCamera();$('tour').classList.remove('active');$('tourProgress').hidden=true;updateLocation();}
  function updateCamera(){camera.position.copy(S.pos);camera.rotation.set(S.pitch,S.yaw,0,'YXZ');camera.updateMatrixWorld();}
  function angleDiff(a,b){let d=(a-b)%(Math.PI*2);if(d>Math.PI)d-=Math.PI*2;if(d< -Math.PI)d+=Math.PI*2;return d;}
  function toast(text){$('toast').textContent=text;$('toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.remove('show'),3800);}
  function requestControl(){S.started=true;$('intro').classList.add('closed');if(matchMedia('(pointer:coarse)').matches){$('touchControls').hidden=false;return;}try{const p=canvas.requestPointerLock?.();p?.catch(()=>toast('Drag to look. Use W A S D to walk.'));}catch{toast('Drag to look. Use W A S D to walk.');}}
  // A* uses the same physical collision map as walking. No camera-through-wall shortcuts.
  function pathfind(x0,y0,x1,y1,f){
    const disabled=world.doors.map(d=>[d.collider,d.collider.y1]);disabled.forEach(([c])=>c.y1=-10000);
    try{
      const step=.5,minX=0,minY=0,nx=213,ny=211,cache=new Int8Array(nx*ny);
      const ix=x=>clamp(Math.round((x-minX)/step),0,nx-1),iy=y=>clamp(Math.round((y-minY)/step),0,ny-1);
      const valid=(x,y)=>{if(x<0||x>=nx||y<0||y>=ny)return false;const k=y*nx+x;if(!cache[k])cache[k]=collision(minX+x*step,minY+y*step,f,.32)?-1:1;return cache[k]===1;};
      function nearest(x,y){let gx=ix(x),gy=iy(y);if(valid(gx,gy))return[gx,gy];for(let r=1;r<10;r++)for(let a=-r;a<=r;a++)for(const b of [-r,r]){if(valid(gx+a,gy+b))return[gx+a,gy+b];if(valid(gx+b,gy+a))return[gx+b,gy+a];}return null;}
      const st=nearest(x0,y0),en=nearest(x1,y1);if(!st||!en)return null;const sk=st[1]*nx+st[0],ek=en[1]*nx+en[0];
      const score=new Float32Array(nx*ny);score.fill(Infinity);score[sk]=0;const parent=new Int32Array(nx*ny);parent.fill(-1);const closed=new Uint8Array(nx*ny),heap=[];
      const push=(k,v)=>{let i=heap.length;heap.push({k,v});while(i){const p=(i-1)>>1;if(heap[p].v<=v)break;heap[i]=heap[p];i=p;heap[i]={k,v};}};
      const pop=()=>{const r=heap[0],a=heap.pop();if(heap.length){let i=0;heap[0]=a;while(true){let j=i*2+1;if(j>=heap.length)break;if(j+1<heap.length&&heap[j+1].v<heap[j].v)j++;if(heap[j].v>=a.v)break;heap[i]=heap[j];i=j;heap[i]=a;}}return r.k;};
      push(sk,0);let done=false,iter=0;
      while(heap.length&&iter++<45000){const k=pop();if(closed[k])continue;closed[k]=1;if(k===ek){done=true;break;}const x=k%nx,y=Math.floor(k/nx);
        for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){
          const xx=x+dx,yy=y+dy;if(!valid(xx,yy))continue;if(dx&&dy&&(!valid(x+dx,y)||!valid(x,y+dy)))continue;
          const nk=yy*nx+xx,ng=score[k]+(dx&&dy?1.414214:1);if(ng>=score[nk])continue;score[nk]=ng;parent[nk]=k;push(nk,ng+Math.hypot(xx-en[0],yy-en[1]));
        }
      }
      if(!done)return null;const path=[];for(let k=ek;k!==-1;k=parent[k])path.push([minX+(k%nx)*step,minY+Math.floor(k/nx)*step]);path.reverse();path[0]=[x0,y0];
      if(!collision(x1,y1,f))path[path.length-1]=[x1,y1];
      const clear=(a,b)=>{const n=Math.ceil(Math.hypot(b[0]-a[0],b[1]-a[1])/.15);for(let i=0;i<=n;i++){const t=n?i/n:0;if(collision(a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,f,.33))return false;}return true;};
      const out=[path[0]];let i=0;while(i<path.length-1){let j=Math.min(path.length-1,i+60);while(j>i+1&&!clear(path[i],path[j]))j--;out.push(path[j]);i=j;}return out;
    }finally{disabled.forEach(([c,h])=>c.y1=h);}
  }
  const cachedRoutes=new Map();
  function loadStage(){
    if(S.tourIndex>=tour.length){S.auto=false;$('tour').classList.remove('active');$('tourProgress').hidden=true;toast('Tour complete. Continue exploring with W A S D.');return;}
    const p=tour[S.tourIndex];$('tourStage').textContent=p.name;$('tourBar').style.width=(S.tourIndex/(tour.length-1)*100)+'%';S.dwell=0;
    if(p.f!==S.floor){transfer(p.f,()=>loadStage());return;}
    const cached=cachedRoutes.get(S.tourIndex);
    const path=cached&&Math.hypot(cached[0][0]-72-S.pos.x,cached[0][1]-56-S.pos.z)<.2?cached:pathfind(S.pos.x+72,S.pos.z+56,p.x,p.y,p.f);
    if(!path){S.auto=false;$('tour').classList.remove('active');$('tourProgress').hidden=true;toast('This route is blocked. Continue in free explore mode.');return;}
    S.route=path;S.node=1;
  }
  function startTour(){if(S.auto){S.auto=false;$('tour').classList.remove('active');$('tourProgress').hidden=true;toast('Free exploration enabled.');return;}place('entrance');S.started=true;$('intro').classList.add('closed');S.auto=true;S.tourIndex=0;S.route=[];S.vel.set(0,0,0);document.exitPointerLock?.();$('tour').classList.add('active');$('tourProgress').hidden=false;loadStage();}
  const liftCabin=new T.Group();scene.add(liftCabin);liftCabin.visible=false;
  const cabinMetal=new T.MeshStandardMaterial({color:'#939997',roughness:.36,metalness:.62});
  const cabinFloor=new T.MeshStandardMaterial({color:'#707774',roughness:.5,metalness:.12});
  const cabinDoors=[];
  for(const [width,height,depth,localX,localY,localZ]of [[.08,3.5,3.3,-1.72,1.75,0],[.08,3.5,3.3,1.72,1.75,0],[3.5,3.5,.08,0,1.75,1.65],[3.5,.08,3.3,0,3.5,0],[3.5,.08,3.3,0,.04,0],[1.75,3.5,.06,-.875,1.75,-1.65],[1.75,3.5,.06,.875,1.75,-1.65]]){
    const panel=new T.Mesh(new T.BoxGeometry(width,height,depth),height<.1?cabinFloor:cabinMetal);panel.position.set(localX,localY,localZ);liftCabin.add(panel);
    if(localZ===-1.65)cabinDoors.push({mesh:panel,center:localX});
  }
  for(const [width,height,depth,localX,localY,localZ]of [[.06,3.35,.08,-1.65,1.7,-1.58],[.06,3.35,.08,1.65,1.7,-1.58],[3.3,.06,.08,0,3.2,-1.58],[.035,.05,2.8,-1.64,1.03,0],[.035,.05,2.8,1.64,1.03,0]]){
    const trim=new T.Mesh(new T.BoxGeometry(width,height,depth),cabinFloor);trim.position.set(localX,localY,localZ);liftCabin.add(trim);
  }
  const cabinDisplay=document.createElement('canvas');cabinDisplay.width=512;cabinDisplay.height=180;
  const cabinDisplayContext=cabinDisplay.getContext('2d'),cabinDisplayTexture=new T.Texture(cabinDisplay);
  cabinDisplayTexture.colorSpace='srgb';
  const cabinIndicator=new T.Mesh(new T.PlaneGeometry(.45,.16),new T.MeshBasicMaterial({map:cabinDisplayTexture,toneMapped:false}));
  cabinIndicator.position.set(0,1.86,-1.57);liftCabin.add(cabinIndicator);
  function drawLiftIndicator(from,to){
    cabinDisplayContext.fillStyle='#15201e';cabinDisplayContext.fillRect(0,0,512,180);
    cabinDisplayContext.textAlign='center';cabinDisplayContext.fillStyle='#dcf0d9';cabinDisplayContext.font='52px Arial';
    cabinDisplayContext.fillText((from==='f1'?'1F':'2F')+'  >  '+(to==='f2'?'2F':'1F'),256,82);
    cabinDisplayContext.fillStyle='#9faeaa';cabinDisplayContext.font='18px Arial';cabinDisplayContext.fillText('INTERNAL ACCESS / LIFT',256,133);cabinDisplayTexture.needsUpdate=true;
  }
  const cabinLamp=new T.Mesh(new T.PlaneGeometry(2.4,1.2),new T.MeshBasicMaterial({color:'#fff4dc'}));cabinLamp.rotation.x=Math.PI/2;cabinLamp.position.set(0,3.44,0);liftCabin.add(cabinLamp);
  const insideLift=()=>S.pos.x+72>98.7&&S.pos.x+72<101.4&&S.pos.z+56>30.6&&S.pos.z+56<33.05;
  function transfer(f,cb){
    if(S.transition)return;
    if(!['f1','f2'].includes(S.floor)||!['f1','f2'].includes(f)||f===S.floor||!insideLift()){toast('Walk inside the lift cabin to change floors.');return;}
    const from=S.floor;S.transition={t:0,f,from,cb,duration:7};S.vel.set(0,0,0);S.tourSpeed=0;keys.clear();
    liftCabin.position.set(28,FY[from],31.85-56);liftCabin.visible=true;drawLiftIndicator(from,f);
    for(const door of cabinDoors)door.mesh.position.x=door.center+Math.sign(door.center)*1.75;
    if(S.auto){S.targetYaw=0;S.targetPitch=0;}
    $('transferText').textContent=names[from]+'  /  '+names[f];$('transfer').classList.add('show');
  }
  function movement(dx,dz){const oldX=S.pos.x,oldZ=S.pos.z,n=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.08));for(let i=0;i<n;i++){
    const prevX=S.pos.x,prevZ=S.pos.z;grid.move(S.pos,dx/n,dz/n,.31,FY[S.floor]+.28);
    if(!walkable(S.pos.x+72,S.pos.z+56,S.floor)){S.pos.x=prevX;S.pos.z=prevZ;}
  }return Math.hypot(S.pos.x-oldX,S.pos.z-oldZ);}
  const pickByFloor=Object.fromEntries(floors.map(floor=>[floor,[...new Set(world.pickMeshes.concat(world.pickOccluders))].filter(mesh=>!mesh.userData.hideAlways&&(!mesh.userData.floor||mesh.userData.floor===floor))]));
  function aim(){ray.setFromCamera(ndc,camera);ray.far=5.5;const hits=ray.intersectObjects(pickByFloor[S.floor],false);let id=null;for(const hit of hits){if(hit.object.userData.aimTerm)id=hit.object.userData.aimTerm;break;}S.aim=id;
    const term=id&&E.TERMS[id];$('aim').hidden=!term||!S.started||S.cinema;if(term){$('aimName').textContent=term.name;$('aimEn').textContent=term.en||'';}
    const inLift=S.floor==='f1'||S.floor==='f2';S.hoverLift=inLift&&insideLift();
    $('liftPrompt').hidden=!S.hoverLift||S.auto||!!S.transition;$('liftPrompt').textContent='E  /  '+(S.floor==='f1'?'ASCEND TO 2F':'DESCEND TO 1F');
  }
  const guides=[];root.traverse(m=>{if(m.userData.routeGuide)guides.push(m);});
  const aimWalls=[];root.traverse(m=>{if(m.isMesh&&m.userData.structureMesh&&!m.userData.hideAlways)aimWalls.push(m);});
  function openDetails(id=S.aim){if(!$('detail').hidden){$('detail').hidden=true;return;}const term=E.TERMS[id];if(!term)return;
    $('detailName').textContent=term.name;$('detailEn').textContent=term.en||'';$('detailDesc').textContent=term.desc||'';
    $('detailFacts').replaceChildren(...(term.facts||[]).map(f=>{const li=document.createElement('li');li.textContent=f;return li;}));$('detail').hidden=false;
  }
  function updateLocation(){const x=S.pos.x+72,y=S.pos.z+56;let text=names[S.floor];if(S.floor==='f1'){if(y>54)text=x>46?'Reception lobby':'Supply building';else if(y>38)text='Connecting corridor';else if(x>64&&x<95&&y>23)text='Operations center';else text='Operations floor';}else if(S.floor==='f2'){if(y<21.5&&x>10&&x<98)text='GPU server hall';else if(y>54)text='Generator / office wing';else if(y>38)text='Connecting corridor';else text='Power + cooling corridor';}
    if(S.hoverLift)text='Vertical transfer';$('location').textContent=text;$('coordinate').textContent=`X ${x.toFixed(1)} / Y ${y.toFixed(1)}`;
  }
  const map=$('map'),mc=map.getContext('2d'),mw=map.width,mh=map.height,mk=Math.min((mw-24)/108,(mh-24)/108),mx=x=>12+x*mk,my=y=>10+y*mk;
  const mapCache={};function bakeMap(f){const c=document.createElement('canvas');c.width=mw;c.height=mh;const g=c.getContext('2d');g.fillStyle='#17303d';for(const r of [[0,0,105.3,38.6],[4.2,54,59.7,50],[31.5,38.6,7,15.4]])g.fillRect(mx(r[0]),my(r[1]),r[2]*mk,r[3]*mk);
    for(const b of world.colliders){if(b.floor!==f||b.y1<=FY[f]+.28||b.y0>=FY[f]+1.85)continue;g.fillStyle=b.wall?'#8198a4':'#3c6475';g.fillRect(mx(b.x0+72),my(b.z0+56),Math.max(.6,(b.x1-b.x0)*mk),Math.max(.6,(b.z1-b.z0)*mk));}
    mapCache[f]=c;return c;}
  function drawMap(){mc.clearRect(0,0,mw,mh);mc.drawImage(mapCache[S.floor]||bakeMap(S.floor),0,0);mc.strokeStyle='#5fe1d6';mc.lineWidth=1.4;mc.setLineDash([3,4]);
    if(S.auto&&S.route.length){mc.beginPath();S.route.forEach((p,i)=>i?mc.lineTo(mx(p[0]),my(p[1])):mc.moveTo(mx(p[0]),my(p[1])));mc.stroke();}
    else if(S.guide)for(const [f,x,y,xx,yy]of world.routeSegments){if(f!==S.floor)continue;mc.beginPath();mc.moveTo(mx(x),my(y));mc.lineTo(mx(xx),my(yy));mc.stroke();}
    mc.setLineDash([]);mc.save();mc.translate(mx(S.pos.x+72),my(S.pos.z+56));mc.rotate(-S.yaw);mc.fillStyle='#b9fff1';mc.beginPath();mc.moveTo(0,-7);mc.lineTo(4.5,5);mc.lineTo(0,2);mc.lineTo(-4.5,5);mc.closePath();mc.fill();mc.restore();
  }
  // Reflections use a second camera at reduced resolution. Balanced/low modes keep the original PBR floors.
  const mirror={target:null,camera:camera.clone(),matrix:new T.Matrix4(),enabled:false,mats:[],frame:0};
  function initMirror(){if(mirror.target)return;mirror.target=new T.WebGLRenderTarget(640,360,{minFilter:1006,magFilter:1006});
    for(const floor of world.floorMeshes){const old=floor.material;const mat=new T.ShaderMaterial({uniforms:{tReflection:{value:mirror.target.texture},tFloor:{value:old.map},repeatUv:{value:old.map.repeat.clone()},textureMatrix:{value:mirror.matrix},strength:{value:.27}},vertexShader:'uniform mat4 textureMatrix; varying vec4 vReflect; varying vec2 vUv; void main(){vUv=uv; vec4 world=modelMatrix*vec4(position,1.0); vReflect=textureMatrix*world; gl_Position=projectionMatrix*viewMatrix*world;}',fragmentShader:'uniform sampler2D tReflection; uniform sampler2D tFloor; uniform vec2 repeatUv; uniform float strength; varying vec4 vReflect; varying vec2 vUv; void main(){vec2 uv=vReflect.xy/vReflect.w; vec3 refl=texture2D(tReflection,uv).rgb*.4; refl+=texture2D(tReflection,uv+vec2(.003,0.)).rgb*.15;refl+=texture2D(tReflection,uv-vec2(.003,0.)).rgb*.15;refl+=texture2D(tReflection,uv+vec2(0.,.003)).rgb*.15;refl+=texture2D(tReflection,uv-vec2(0.,.003)).rgb*.15; vec3 base=pow(texture2D(tFloor,vUv*repeatUv).rgb,vec3(2.2))*.83; float inFrame=step(0.,uv.x)*step(uv.x,1.)*step(0.,uv.y)*step(uv.y,1.); gl_FragColor=vec4(mix(base,refl,strength*inFrame),1.);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>\n}',toneMapped:true});mirror.mats.push({floor,old,mat});}
  }
  function reflect(){if(!mirror.enabled||S.floor==='roof')return;const c=mirror.camera,level=FY[S.floor]+.105;c.copy(camera);c.position.copy(camera.position);c.position.y=2*level-camera.position.y;const dir=new T.Vector3();camera.getWorldDirection(dir);dir.y=-dir.y;c.up.set(0,-1,0);c.lookAt(c.position.clone().add(dir));c.updateMatrixWorld();
    mirror.matrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(c.projectionMatrix).multiply(c.matrixWorldInverse);
    const hidden=[];for(const m of [...world.floorMeshes,...world.sourceFloors])if(m.visible&&m.position.y<level+.18){hidden.push(m);m.visible=false;}
    const prev=renderer.getRenderTarget();renderer.setRenderTarget(mirror.target);renderer.render(scene,c);renderer.setRenderTarget(prev);hidden.forEach(m=>m.visible=true);
  }
  function setQuality(q){S.quality=clamp(Math.round(Number(q)||0),0,2);S.adaptiveScale=1;mirror.enabled=S.quality===2;if(mirror.enabled)initMirror();mirror.mats.forEach(item=>item.floor.material=mirror.enabled?item.mat:item.old);resize();$('quality').value=String(S.quality);}
  function resize(){const width=window.innerWidth,height=window.innerHeight,maximumPixels=S.quality===2?2073600:S.quality===1?1440000:1000000;
    const ratio=Math.min(window.devicePixelRatio||1,Math.sqrt(maximumPixels/(width*height)),S.quality===2?1.5:1)*S.adaptiveScale;
    renderer.setPixelRatio(ratio);renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();
    if(mirror.target)mirror.target.setSize(480,Math.max(180,Math.round(480*height/width)));
  }
  window.addEventListener('resize',resize);setQuality(0);
  // Audio starts only after explicit user input; no external recordings are fetched.
  function toggleAudio(){S.sound=!S.sound;$('sound').classList.toggle('active',S.sound);$('sound').setAttribute('aria-pressed',S.sound);
    if(!audio&&S.sound){try{const AC=window.AudioContext||window.webkitAudioContext,ctx=new AC(),gain=ctx.createGain(),filter=ctx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=230;const n=ctx.createBuffer(1,ctx.sampleRate*3,ctx.sampleRate),data=n.getChannelData(0);let prev=0;for(let i=0;i<data.length;i++){prev=(prev+(Math.random()*2-1)*.015)/1.015;data[i]=prev;}const src=ctx.createBufferSource();src.buffer=n;src.loop=true;src.connect(filter);filter.connect(gain);gain.connect(ctx.destination);src.start();audio={ctx,gain};}catch{S.sound=false;toast('Audio is unavailable in this browser.');}}
    if(audio){audio.ctx.resume();audio.gain.gain.setTargetAtTime(S.sound?.5:0,audio.ctx.currentTime,.25);}
  }
  $('explore').onclick=requestControl;$('tour').onclick=startTour;$('introTour').onclick=startTour;
  $('help').onclick=()=>{$('intro').classList.remove('closed');document.exitPointerLock?.();};
  $('mapToggle').onclick=()=>{$('plan').classList.toggle('closed');$('mapToggle').classList.toggle('active');};
  $('flow').onclick=()=>{S.flow=!S.flow;$('flow').classList.toggle('active',S.flow);$('flowNote').hidden=!S.flow;world.visibleFloor(S.floor,S.flow,S.guide);};
  $('cinema').onclick=()=>{S.cinema=!S.cinema;document.body.classList.toggle('cinema',S.cinema);$('cinema').classList.toggle('active',S.cinema);toast(S.cinema?'Cinema view / press H to restore controls':'Controls restored');};
  $('settingsToggle').onclick=()=>{$('settings').hidden=!$('settings').hidden;document.exitPointerLock?.();};
  $('sound').onclick=toggleAudio;$('quality').onchange=e=>setQuality(Number(e.target.value));
  $('exposure').oninput=e=>{renderer.toneMappingExposure=Number(e.target.value);$('exposureValue').textContent=Number(e.target.value).toFixed(2);};
  function setSpeedLevel(level){
    S.speedLevel=clamp(Math.round(Number(level)||1),1,5);S.speed=speedLevels[S.speedLevel-1];
    $('speed').value=String(S.speedLevel);$('speedValue').textContent='Level '+S.speedLevel+' / '+S.speed+' m/s';
    document.querySelectorAll('[data-speed]').forEach(button=>{const active=Number(button.dataset.speed)===S.speedLevel;button.classList.toggle('selected',active);button.setAttribute('aria-pressed',String(active));});
    $('speedReadout').textContent=S.speed+' m/s';
  }
  $('speed').oninput=event=>setSpeedLevel(event.target.value);
  document.querySelectorAll('[data-speed]').forEach(button=>button.onclick=()=>setSpeedLevel(button.dataset.speed));
  setSpeedLevel(1);
  $('guide').onchange=e=>{S.guide=e.target.checked;root.traverse(m=>{if(m.userData.routeGuide)m.visible=S.guide&&m.userData.floor===S.floor;});};
  $('closeDetail').onclick=()=>{$('detail').hidden=true;};$('liftPrompt').onclick=()=>transfer(S.floor==='f1'?'f2':'f1');
  $('fullscreen').onclick=()=>{if(document.fullscreenElement)document.exitFullscreen?.();else document.documentElement.requestFullscreen?.().catch(()=>toast('Fullscreen is not available.'));};
  $('capture').onclick=()=>{renderer.render(scene,camera);canvas.toBlob(blob=>{if(!blob)return;const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download='AIDC-'+S.floor+'-'+Date.now()+'.png';a.click();setTimeout(()=>URL.revokeObjectURL(u),3000);},'image/png');};
  document.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>{place(b.dataset.jump);S.started=true;$('intro').classList.add('closed');toast('Quick view / '+pts[b.dataset.jump].name);});
  document.querySelectorAll('[data-floor]').forEach(b=>b.onclick=()=>{const f=b.dataset.floor;place(f==='f1'?'entrance':f==='f2'?'servers':f==='roof'?'cooling':'plant');S.started=true;$('intro').classList.add('closed');toast('Floor quick view / '+names[f]);});
  canvas.addEventListener('click',()=>{if(!S.auto)requestControl();});
  document.addEventListener('pointerlockchange',()=>{S.locked=document.pointerLockElement===canvas;keys.clear();$('resume').hidden=S.locked||S.auto||!S.started||matchMedia('(pointer:coarse)').matches;});
  document.addEventListener('mousemove',e=>{if(S.locked&&!S.auto){S.targetYaw-=e.movementX*.0017;S.targetPitch=clamp(S.targetPitch-e.movementY*.0017,-1.34,1.34);}});
  canvas.addEventListener('pointerdown',e=>{if(!S.locked){lookDrag={x:e.clientX,y:e.clientY,id:e.pointerId};canvas.setPointerCapture?.(e.pointerId);}});
  canvas.addEventListener('pointermove',e=>{if(lookDrag&&e.pointerId===lookDrag.id&&!S.locked&&!S.auto){S.targetYaw-=(e.clientX-lookDrag.x)*.003;S.targetPitch=clamp(S.targetPitch-(e.clientY-lookDrag.y)*.003,-1.34,1.34);lookDrag.x=e.clientX;lookDrag.y=e.clientY;}});
  canvas.addEventListener('pointerup',()=>lookDrag=null);
  window.addEventListener('keydown',e=>{if(e.target instanceof HTMLInputElement||e.target instanceof HTMLSelectElement)return;if(e.ctrlKey||e.metaKey||e.altKey)return;
    if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault();
    keys.add(e.code);if(e.repeat)return;
    if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)&&S.auto){S.auto=false;$('tour').classList.remove('active');$('tourProgress').hidden=true;}
    if(e.code==='KeyE'){if(insideLift())transfer(S.floor==='f1'?'f2':'f1');else openDetails();}
    if(e.code==='Space')openDetails();if(e.code==='KeyH')$('cinema').click();if(e.code==='KeyM')$('mapToggle').click();if(e.code==='KeyF')$('flow').click();if(e.code==='KeyT')startTour();
    if(e.code==='Escape'){$('detail').hidden=true;$('settings').hidden=true;keys.clear();}
    if(/^(Digit|Numpad)[1-5]$/.test(e.code))setSpeedLevel(Number(e.code.slice(-1)));
  });
  window.addEventListener('keyup',e=>keys.delete(e.code));window.addEventListener('blur',()=>{keys.clear();S.vel.set(0,0,0);});
  const stick=$('joystick'),knob=$('knob');stick.addEventListener('pointerdown',e=>{e.preventDefault();stick.setPointerCapture(e.pointerId);stick.dataset.down='1';stickMove(e);});
  function stickMove(e){if(stick.dataset.down!=='1')return;const r=stick.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/38,y=(e.clientY-r.top-r.height/2)/38,l=Math.max(1,Math.hypot(x,y));touchMove={x:x/l,y:y/l};knob.style.transform=`translate(${touchMove.x*32}px,${touchMove.y*32}px)`;}
  stick.addEventListener('pointermove',stickMove);const clearStick=()=>{delete stick.dataset.down;touchMove={x:0,y:0};knob.style.transform='translate(0,0)';};stick.addEventListener('pointerup',clearStick);stick.addEventListener('pointercancel',clearStick);
  $('touchUse').onclick=()=>S.hoverLift?transfer(S.floor==='f1'?'f2':'f1'):openDetails();
  // Stable dolly: damped mouse rotation, no camera roll and no head-bob.
  let last=performance.now(),accumulator=0,adaptationTime=0,slowWindows=0,fastWindows=0;
  const fixedStep=1/120,previousPosition=new T.Vector3();
  function stepSimulation(dt){
    if(S.paused)return;
    if(S.transition){
      const transition=S.transition;transition.t+=dt;
      const progress=clamp((transition.t-.6)/(transition.duration-1.2),0,1),eased=progress*progress*(3-2*progress);
      const height=FY[transition.from]+(FY[transition.f]-FY[transition.from])*eased;
      liftCabin.position.y=height;S.pos.y=height+1.65;
      const closed=clamp(Math.min(transition.t/.6,(transition.duration-transition.t)/.6),0,1),closure=closed*closed*(3-2*closed);
      for(const door of cabinDoors)door.mesh.position.x=door.center+Math.sign(door.center)*1.75*(1-closure);
      if(progress>=1&&S.floor!==transition.f)updateFloor(transition.f);
      if(transition.t>=transition.duration){updateFloor(transition.f);S.pos.y=FY[transition.f]+1.65;liftCabin.visible=false;S.transition=null;$('transfer').classList.remove('show');transition.cb?.();}
    }else if(S.auto){
      const stage=tour[S.tourIndex];
      if(S.node<S.route.length){
        const destination=S.route[S.node],deltaX=destination[0]-72-S.pos.x,deltaZ=destination[1]-56-S.pos.z,distance=Math.hypot(deltaX,deltaZ);
        if(distance<.025){S.node++;}
        else{
          S.targetYaw=Math.atan2(-deltaX,-deltaZ);S.targetPitch=-.025;
          const turn=Math.abs(angleDiff(S.targetYaw,S.yaw)),headingFactor=clamp(1-turn/1.25,.08,1);
          const desiredSpeed=Math.min(S.speed*headingFactor,Math.sqrt(2*12*distance));
          S.tourSpeed+=clamp(desiredSpeed-S.tourSpeed,-18*dt,9*dt);
          const travel=Math.min(distance,S.tourSpeed*dt);
          const travelled=movement(deltaX/distance*travel,deltaZ/distance*travel);
          if(travelled<travel*.15)S.tourSpeed*=.85;
        }
      }else if(stage){
        S.tourSpeed=0;S.dwell+=dt;
        if(stage.look)S.targetYaw=Math.atan2(-(stage.look[0]-72-S.pos.x),-(stage.look[1]-56-S.pos.z));
        if(S.dwell>=(stage.wait||.15)){S.tourIndex++;loadStage();}
      }
    }else if(S.started){
      let forward=(keys.has('KeyW')||keys.has('ArrowUp')?1:0)-(keys.has('KeyS')||keys.has('ArrowDown')?1:0)-touchMove.y;
      let strafe=(keys.has('KeyD')||keys.has('ArrowRight')?1:0)-(keys.has('KeyA')||keys.has('ArrowLeft')?1:0)+touchMove.x;
      const magnitude=Math.max(1,Math.hypot(forward,strafe));forward/=magnitude;strafe/=magnitude;
      const sine=Math.sin(S.yaw),cosine=Math.cos(S.yaw),velocityX=(-sine*forward+cosine*strafe)*S.speed,velocityZ=(-cosine*forward-sine*strafe)*S.speed;
      const damping=1-Math.exp(-dt*(forward||strafe?14:22));
      S.vel.x+=(velocityX-S.vel.x)*damping;S.vel.z+=(velocityZ-S.vel.z)*damping;
      movement(S.vel.x*dt,S.vel.z*dt);
    }
    S.yaw+=angleDiff(S.targetYaw,S.yaw)*(1-Math.exp(-dt*(S.auto?5.5:22)));
    S.pitch+=(S.targetPitch-S.pitch)*(1-Math.exp(-dt*20));
    if(!S.transition)S.pos.y=FY[S.floor]+1.65;
  }
  function loop(now){
    requestAnimationFrame(loop);
    const elapsed=Math.max(0,(now-last)/1000);last=now;
    if(document.hidden||S.paused){accumulator=0;return;}
    const dt=Math.min(.18,elapsed);seconds+=dt;S.frame++;accumulator+=dt;
    world.update(seconds,dt,S.pos,S.floor,S.flow);
    while(accumulator>=fixedStep){previousPosition.copy(S.pos);stepSimulation(fixedStep);accumulator-=fixedStep;}
    updateCamera();camera.position.lerpVectors(previousPosition,S.pos,accumulator/fixedStep);camera.updateMatrixWorld();
    if(mirror.enabled&&S.frame%6===0&&!S.transition)reflect();renderer.render(scene,camera);
    aimAcc+=dt;mapAcc+=dt;fpsAcc+=elapsed;frameCount++;
    if(aimAcc>.2&&S.started&&!S.cinema&&!S.transition){aimAcc=0;aim();}
    if(mapAcc>.2){mapAcc=0;if(!$('plan').classList.contains('closed')&&!S.cinema)drawMap();updateLocation();}
    if(fpsAcc>1){
      S.fps=Math.round(frameCount/fpsAcc);$('fps').textContent=S.fps+' FPS';
      if(seconds-adaptationTime>4&&S.quality<2){
        slowWindows=S.fps<46?slowWindows+1:0;fastWindows=S.fps>57?fastWindows+1:0;
        const adjusted=slowWindows>=2?Math.max(.65,S.adaptiveScale-.1):fastWindows>=8?Math.min(1,S.adaptiveScale+.05):S.adaptiveScale;
        if(adjusted!==S.adaptiveScale){S.adaptiveScale=adjusted;resize();adaptationTime=seconds;slowWindows=0;fastWindows=0;}
      }
      frameCount=0;fpsAcc=0;
    }
  }
  document.addEventListener('visibilitychange',()=>{last=performance.now();accumulator=0;keys.clear();clearStick();S.vel.set(0,0,0);});
  canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();S.paused=true;toast('Graphics were interrupted. Reload this file to resume.');});
  canvas.addEventListener('webglcontextrestored',()=>location.reload());
  place('entrance');previousPosition.copy(S.pos);resize();drawMap();$('loading').hidden=true;requestAnimationFrame(loop);
  let warmStage=0;
  const warmRoutes=()=>{
    if(warmStage>=tour.length)return;
    const index=warmStage++,destination=tour[index],origin=index?tour[index-1]:pts.entrance;
    if(origin.f===destination.f){const route=pathfind(origin.x,origin.y,destination.x,destination.y,destination.f);if(route)cachedRoutes.set(index,route);}
    if(window.requestIdleCallback)requestIdleCallback(warmRoutes,{timeout:1500});else setTimeout(warmRoutes,100);
  };
  setTimeout(warmRoutes,1000);
  const url=new URL(location.href),v=url.searchParams.get('view');if(v&&pts[v]){place(v);S.started=true;$('intro').classList.add('closed');}if(url.searchParams.get('quality'))setQuality(Number(url.searchParams.get('quality')));
  // Deliberate test hooks expose only local simulation state; no network or account data.
  window.AIDC={state:S,world,renderer,camera,grid,place,pathfind,collision,startTour,transfer,updateFloor,setQuality,setSpeedLevel,speedLevels,stepSimulation,movement,openDetails,pts,tour,validateTour:()=>tour.map((p,i)=>{const a=i?tour[i-1]:pts.entrance;if(a.f!==p.f)return{stage:i,transfer:true};const path=pathfind(a.x,a.y,p.x,p.y,p.f);return{stage:i,ok:!!path,nodes:path?.length||0};})};
}
try { startExplore(AIDC_ENGINE); } catch(error) { console.error(error);document.getElementById('loading').innerHTML='<strong>Unable to start WebGL</strong><p>Open this file in a current desktop Chrome or Edge browser with hardware acceleration enabled.</p><pre></pre>';document.querySelector('#loading pre').textContent=error.message; }

})(AIDC_ENGINE);

/* 용어사전(3D 대시보드)으로 복귀 */
document.getElementById('back')?.addEventListener('click', () => { location.href = '../3d/' })
