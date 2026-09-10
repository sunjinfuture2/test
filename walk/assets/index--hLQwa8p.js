(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function dv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var f0={exports:{}},lc={},d0={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fa=Symbol.for("react.element"),hv=Symbol.for("react.portal"),pv=Symbol.for("react.fragment"),mv=Symbol.for("react.strict_mode"),gv=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),vv=Symbol.for("react.context"),xv=Symbol.for("react.forward_ref"),yv=Symbol.for("react.suspense"),Sv=Symbol.for("react.memo"),Mv=Symbol.for("react.lazy"),Vh=Symbol.iterator;function Ev(t){return t===null||typeof t!="object"?null:(t=Vh&&t[Vh]||t["@@iterator"],typeof t=="function"?t:null)}var h0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p0=Object.assign,m0={};function so(t,e,n){this.props=t,this.context=e,this.refs=m0,this.updater=n||h0}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function g0(){}g0.prototype=so.prototype;function Md(t,e,n){this.props=t,this.context=e,this.refs=m0,this.updater=n||h0}var Ed=Md.prototype=new g0;Ed.constructor=Md;p0(Ed,so.prototype);Ed.isPureReactComponent=!0;var Gh=Array.isArray,_0=Object.prototype.hasOwnProperty,wd={current:null},v0={key:!0,ref:!0,__self:!0,__source:!0};function x0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_0.call(e,i)&&!v0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:fa,type:t,key:s,ref:o,props:r,_owner:wd.current}}function wv(t,e){return{$$typeof:fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Td(t){return typeof t=="object"&&t!==null&&t.$$typeof===fa}function Tv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wh=/\/+/g;function Ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Tv(""+t.key):e.toString(36)}function dl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fa:case hv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ic(o,0):i,Gh(r)?(n="",t!=null&&(n=t.replace(Wh,"$&/")+"/"),dl(r,e,n,"",function(c){return c})):r!=null&&(Td(r)&&(r=wv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Wh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Gh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ic(s,a);o+=dl(s,e,n,l,r)}else if(l=Ev(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ic(s,a++),o+=dl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var i=[],r=0;return dl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Av(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},hl={transition:null},Cv={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:hl,ReactCurrentOwner:wd};function y0(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!Td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=so;Ye.Fragment=pv;Ye.Profiler=gv;Ye.PureComponent=Md;Ye.StrictMode=mv;Ye.Suspense=yv;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv;Ye.act=y0;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=p0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_0.call(e,l)&&!v0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:fa,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:vv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_v,_context:t},t.Consumer=t};Ye.createElement=x0;Ye.createFactory=function(t){var e=x0.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:xv,render:t}};Ye.isValidElement=Td;Ye.lazy=function(t){return{$$typeof:Mv,_payload:{_status:-1,_result:t},_init:Av}};Ye.memo=function(t,e){return{$$typeof:Sv,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=hl.transition;hl.transition={};try{t()}finally{hl.transition=e}};Ye.unstable_act=y0;Ye.useCallback=function(t,e){return cn.current.useCallback(t,e)};Ye.useContext=function(t){return cn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return cn.current.useEffect(t,e)};Ye.useId=function(){return cn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return cn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};Ye.useRef=function(t){return cn.current.useRef(t)};Ye.useState=function(t){return cn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return cn.current.useTransition()};Ye.version="18.3.1";d0.exports=Ye;var It=d0.exports;const Rv=dv(It);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv=It,bv=Symbol.for("react.element"),Dv=Symbol.for("react.fragment"),Lv=Object.prototype.hasOwnProperty,Uv=Pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Iv={key:!0,ref:!0,__self:!0,__source:!0};function S0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Lv.call(e,i)&&!Iv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:bv,type:t,key:s,ref:o,props:r,_owner:Uv.current}}lc.Fragment=Dv;lc.jsx=S0;lc.jsxs=S0;f0.exports=lc;var ce=f0.exports,M0={exports:{}},Ln={},E0={exports:{}},w0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,Z){var J=D.length;D.push(Z);e:for(;0<J;){var oe=J-1>>>1,Le=D[oe];if(0<r(Le,Z))D[oe]=Z,D[J]=Le,J=oe;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Z=D[0],J=D.pop();if(J!==Z){D[0]=J;e:for(var oe=0,Le=D.length,Xe=Le>>>1;oe<Xe;){var Y=2*(oe+1)-1,ne=D[Y],he=Y+1,me=D[he];if(0>r(ne,J))he<Le&&0>r(me,ne)?(D[oe]=me,D[he]=J,oe=he):(D[oe]=ne,D[Y]=J,oe=Y);else if(he<Le&&0>r(me,J))D[oe]=me,D[he]=J,oe=he;else break e}}return Z}function r(D,Z){var J=D.sortIndex-Z.sortIndex;return J!==0?J:D.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,m=!1,g=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=D)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function S(D){if(x=!1,v(D),!g)if(n(l)!==null)g=!0,V(P);else{var Z=n(c);Z!==null&&G(S,Z.startTime-D)}}function P(D,Z){g=!1,x&&(x=!1,u(R),R=-1),m=!0;var J=h;try{for(v(Z),d=n(l);d!==null&&(!(d.expirationTime>Z)||D&&!w());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,h=d.priorityLevel;var Le=oe(d.expirationTime<=Z);Z=t.unstable_now(),typeof Le=="function"?d.callback=Le:d===n(l)&&i(l),v(Z)}else i(l);d=n(l)}if(d!==null)var Xe=!0;else{var Y=n(c);Y!==null&&G(S,Y.startTime-Z),Xe=!1}return Xe}finally{d=null,h=J,m=!1}}var C=!1,T=null,R=-1,W=5,y=-1;function w(){return!(t.unstable_now()-y<W)}function k(){if(T!==null){var D=t.unstable_now();y=D;var Z=!0;try{Z=T(!0,D)}finally{Z?B():(C=!1,T=null)}}else C=!1}var B;if(typeof _=="function")B=function(){_(k)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Q=j.port2;j.port1.onmessage=k,B=function(){Q.postMessage(null)}}else B=function(){p(k,0)};function V(D){T=D,C||(C=!0,B())}function G(D,Z){R=p(function(){D(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,V(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var Z=3;break;default:Z=h}var J=h;h=Z;try{return D()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,Z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=h;h=D;try{return Z()}finally{h=J}},t.unstable_scheduleCallback=function(D,Z,J){var oe=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?oe+J:oe):J=oe,D){case 1:var Le=-1;break;case 2:Le=250;break;case 5:Le=1073741823;break;case 4:Le=1e4;break;default:Le=5e3}return Le=J+Le,D={id:f++,callback:Z,priorityLevel:D,startTime:J,expirationTime:Le,sortIndex:-1},J>oe?(D.sortIndex=J,e(c,D),n(l)===null&&D===n(c)&&(x?(u(R),R=-1):x=!0,G(S,J-oe))):(D.sortIndex=Le,e(l,D),g||m||(g=!0,V(P))),D},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(D){var Z=h;return function(){var J=h;h=Z;try{return D.apply(this,arguments)}finally{h=J}}}})(w0);E0.exports=w0;var Nv=E0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv=It,bn=Nv;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T0=new Set,Wo={};function Jr(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Wo[t]=e,t=0;t<e.length;t++)T0.add(e[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hu=Object.prototype.hasOwnProperty,Ov=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xh={},jh={};function kv(t){return Hu.call(jh,t)?!0:Hu.call(Xh,t)?!1:Ov.test(t)?jh[t]=!0:(Xh[t]=!0,!1)}function Bv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zv(t,e,n,i){if(e===null||typeof e>"u"||Bv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ad=/[\-:]([a-z])/g;function Cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ad,Cd);qt[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ad,Cd);qt[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ad,Cd);qt[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rd(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zv(e,n,r,i)&&(n=null),i||r===null?kv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),Vu=Symbol.for("react.profiler"),A0=Symbol.for("react.provider"),C0=Symbol.for("react.context"),bd=Symbol.for("react.forward_ref"),Gu=Symbol.for("react.suspense"),Wu=Symbol.for("react.suspense_list"),Dd=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),R0=Symbol.for("react.offscreen"),Yh=Symbol.iterator;function fo(t){return t===null||typeof t!="object"?null:(t=Yh&&t[Yh]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Nc;function Ro(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var Fc=!1;function Oc(t,e){if(!t||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ro(t):""}function Hv(t){switch(t.tag){case 5:return Ro(t.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return t=Oc(t.type,!1),t;case 11:return t=Oc(t.type.render,!1),t;case 1:return t=Oc(t.type,!0),t;default:return""}}function Xu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case Ms:return"Portal";case Vu:return"Profiler";case Pd:return"StrictMode";case Gu:return"Suspense";case Wu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case C0:return(t.displayName||"Context")+".Consumer";case A0:return(t._context.displayName||"Context")+".Provider";case bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dd:return e=t.displayName||null,e!==null?e:Xu(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return Xu(t(e))}catch{}}return null}function Vv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xu(e);case 8:return e===Pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function P0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gv(t){var e=P0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ma(t){t._valueTracker||(t._valueTracker=Gv(t))}function b0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=P0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ju(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function D0(t,e){e=e.checked,e!=null&&Rd(t,"checked",e,!1)}function Yu(t,e){D0(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qu(t,e.type,n):e.hasOwnProperty("defaultValue")&&qu(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $h(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qu(t,e,n){(e!=="number"||Dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Po=Array.isArray;function Ns(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $u(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Po(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function L0(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Zh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function U0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ku(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?U0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ea,I0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ea=Ea||document.createElement("div"),Ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wv=["Webkit","ms","Moz","O"];Object.keys(Uo).forEach(function(t){Wv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Uo[e]=Uo[t]})});function N0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Uo.hasOwnProperty(t)&&Uo[t]?(""+e).trim():e+"px"}function F0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=N0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Xv=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zu(t,e){if(e){if(Xv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Qu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ju=null;function Ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ef=null,Fs=null,Os=null;function Qh(t){if(t=pa(t)){if(typeof ef!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=hc(e),ef(t.stateNode,t.type,e))}}function O0(t){Fs?Os?Os.push(t):Os=[t]:Fs=t}function k0(){if(Fs){var t=Fs,e=Os;if(Os=Fs=null,Qh(t),e)for(t=0;t<e.length;t++)Qh(e[t])}}function B0(t,e){return t(e)}function z0(){}var kc=!1;function H0(t,e,n){if(kc)return t(e,n);kc=!0;try{return B0(t,e,n)}finally{kc=!1,(Fs!==null||Os!==null)&&(z0(),k0())}}function jo(t,e){var n=t.stateNode;if(n===null)return null;var i=hc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var tf=!1;if(Ui)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){tf=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{tf=!1}function jv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Io=!1,Ll=null,Ul=!1,nf=null,Yv={onError:function(t){Io=!0,Ll=t}};function qv(t,e,n,i,r,s,o,a,l){Io=!1,Ll=null,jv.apply(Yv,arguments)}function $v(t,e,n,i,r,s,o,a,l){if(qv.apply(this,arguments),Io){if(Io){var c=Ll;Io=!1,Ll=null}else throw Error(ie(198));Ul||(Ul=!0,nf=c)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function V0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jh(t){if(es(t)!==t)throw Error(ie(188))}function Kv(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Jh(r),t;if(s===i)return Jh(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function G0(t){return t=Kv(t),t!==null?W0(t):null}function W0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=W0(t);if(e!==null)return e;t=t.sibling}return null}var X0=bn.unstable_scheduleCallback,ep=bn.unstable_cancelCallback,Zv=bn.unstable_shouldYield,Qv=bn.unstable_requestPaint,Pt=bn.unstable_now,Jv=bn.unstable_getCurrentPriorityLevel,Ud=bn.unstable_ImmediatePriority,j0=bn.unstable_UserBlockingPriority,Il=bn.unstable_NormalPriority,ex=bn.unstable_LowPriority,Y0=bn.unstable_IdlePriority,cc=null,mi=null;function tx(t){if(mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(cc,t,void 0,(t.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:rx,nx=Math.log,ix=Math.LN2;function rx(t){return t>>>=0,t===0?32:31-(nx(t)/ix|0)|0}var wa=64,Ta=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=bo(a):(s&=o,s!==0&&(i=bo(s)))}else o=n&~r,o!==0?i=bo(o):s!==0&&(i=bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ri(e),r=1<<n,i|=t[n],e&=~r;return i}function sx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ox(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ri(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=sx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function rf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function q0(){var t=wa;return wa<<=1,!(wa&4194240)&&(wa=64),t}function Bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ri(e),t[e]=n}function ax(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ri(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Id(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function $0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var K0,Nd,Z0,Q0,J0,sf=!1,Aa=[],ir=null,rr=null,sr=null,Yo=new Map,qo=new Map,Ki=[],lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tp(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(e.pointerId)}}function po(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=pa(e),e!==null&&Nd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function cx(t,e,n,i,r){switch(e){case"focusin":return ir=po(ir,t,e,n,i,r),!0;case"dragenter":return rr=po(rr,t,e,n,i,r),!0;case"mouseover":return sr=po(sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Yo.set(s,po(Yo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,qo.set(s,po(qo.get(s)||null,t,e,n,i,r)),!0}return!1}function eg(t){var e=Ir(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=V0(n),e!==null){t.blockedOn=e,J0(t.priority,function(){Z0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ju=i,n.target.dispatchEvent(i),Ju=null}else return e=pa(n),e!==null&&Nd(e),t.blockedOn=n,!1;e.shift()}return!0}function np(t,e,n){pl(t)&&n.delete(e)}function ux(){sf=!1,ir!==null&&pl(ir)&&(ir=null),rr!==null&&pl(rr)&&(rr=null),sr!==null&&pl(sr)&&(sr=null),Yo.forEach(np),qo.forEach(np)}function mo(t,e){t.blockedOn===e&&(t.blockedOn=null,sf||(sf=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,ux)))}function $o(t){function e(r){return mo(r,t)}if(0<Aa.length){mo(Aa[0],t);for(var n=1;n<Aa.length;n++){var i=Aa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ir!==null&&mo(ir,t),rr!==null&&mo(rr,t),sr!==null&&mo(sr,t),Yo.forEach(e),qo.forEach(e),n=0;n<Ki.length;n++)i=Ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ki.length&&(n=Ki[0],n.blockedOn===null);)eg(n),n.blockedOn===null&&Ki.shift()}var ks=Bi.ReactCurrentBatchConfig,Fl=!0;function fx(t,e,n,i){var r=ut,s=ks.transition;ks.transition=null;try{ut=1,Fd(t,e,n,i)}finally{ut=r,ks.transition=s}}function dx(t,e,n,i){var r=ut,s=ks.transition;ks.transition=null;try{ut=4,Fd(t,e,n,i)}finally{ut=r,ks.transition=s}}function Fd(t,e,n,i){if(Fl){var r=of(t,e,n,i);if(r===null)$c(t,e,i,Ol,n),tp(t,i);else if(cx(r,t,e,n,i))i.stopPropagation();else if(tp(t,i),e&4&&-1<lx.indexOf(t)){for(;r!==null;){var s=pa(r);if(s!==null&&K0(s),s=of(t,e,n,i),s===null&&$c(t,e,i,Ol,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else $c(t,e,i,null,n)}}var Ol=null;function of(t,e,n,i){if(Ol=null,t=Ld(i),t=Ir(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=V0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ol=t,null}function tg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jv()){case Ud:return 1;case j0:return 4;case Il:case ex:return 16;case Y0:return 536870912;default:return 16}default:return 16}}var Ji=null,Od=null,ml=null;function ng(){if(ml)return ml;var t,e=Od,n=e.length,i,r="value"in Ji?Ji.value:Ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ml=r.slice(t,1<i?1-i:void 0)}function gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ca(){return!0}function ip(){return!1}function Un(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ca:ip,this.isPropagationStopped=ip,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kd=Un(oo),ha=Tt({},oo,{view:0,detail:0}),hx=Un(ha),zc,Hc,go,uc=Tt({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==go&&(go&&t.type==="mousemove"?(zc=t.screenX-go.screenX,Hc=t.screenY-go.screenY):Hc=zc=0,go=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),rp=Un(uc),px=Tt({},uc,{dataTransfer:0}),mx=Un(px),gx=Tt({},ha,{relatedTarget:0}),Vc=Un(gx),_x=Tt({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=Un(_x),xx=Tt({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yx=Un(xx),Sx=Tt({},oo,{data:0}),sp=Un(Sx),Mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wx[t])?!!e[t]:!1}function Bd(){return Tx}var Ax=Tt({},ha,{key:function(t){if(t.key){var e=Mx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ex[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bd,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cx=Un(Ax),Rx=Tt({},uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=Un(Rx),Px=Tt({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bd}),bx=Un(Px),Dx=Tt({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lx=Un(Dx),Ux=Tt({},uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ix=Un(Ux),Nx=[9,13,27,32],zd=Ui&&"CompositionEvent"in window,No=null;Ui&&"documentMode"in document&&(No=document.documentMode);var Fx=Ui&&"TextEvent"in window&&!No,ig=Ui&&(!zd||No&&8<No&&11>=No),ap=" ",lp=!1;function rg(t,e){switch(t){case"keyup":return Nx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function Ox(t,e){switch(t){case"compositionend":return sg(e);case"keypress":return e.which!==32?null:(lp=!0,ap);case"textInput":return t=e.data,t===ap&&lp?null:t;default:return null}}function kx(t,e){if(ws)return t==="compositionend"||!zd&&rg(t,e)?(t=ng(),ml=Od=Ji=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ig&&e.locale!=="ko"?null:e.data;default:return null}}var Bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Bx[t.type]:e==="textarea"}function og(t,e,n,i){O0(i),e=kl(e,"onChange"),0<e.length&&(n=new kd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fo=null,Ko=null;function zx(t){_g(t,0)}function fc(t){var e=Cs(t);if(b0(e))return t}function Hx(t,e){if(t==="change")return e}var ag=!1;if(Ui){var Gc;if(Ui){var Wc="oninput"in document;if(!Wc){var up=document.createElement("div");up.setAttribute("oninput","return;"),Wc=typeof up.oninput=="function"}Gc=Wc}else Gc=!1;ag=Gc&&(!document.documentMode||9<document.documentMode)}function fp(){Fo&&(Fo.detachEvent("onpropertychange",lg),Ko=Fo=null)}function lg(t){if(t.propertyName==="value"&&fc(Ko)){var e=[];og(e,Ko,t,Ld(t)),H0(zx,e)}}function Vx(t,e,n){t==="focusin"?(fp(),Fo=e,Ko=n,Fo.attachEvent("onpropertychange",lg)):t==="focusout"&&fp()}function Gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fc(Ko)}function Wx(t,e){if(t==="click")return fc(e)}function Xx(t,e){if(t==="input"||t==="change")return fc(e)}function jx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:jx;function Zo(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Hu.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function dp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hp(t,e){var n=dp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dp(n)}}function cg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ug(){for(var t=window,e=Dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dl(t.document)}return e}function Hd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Yx(t){var e=ug(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cg(n.ownerDocument.documentElement,n)){if(i!==null&&Hd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=hp(n,s);var o=hp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qx=Ui&&"documentMode"in document&&11>=document.documentMode,Ts=null,af=null,Oo=null,lf=!1;function pp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lf||Ts==null||Ts!==Dl(i)||(i=Ts,"selectionStart"in i&&Hd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Oo&&Zo(Oo,i)||(Oo=i,i=kl(af,"onSelect"),0<i.length&&(e=new kd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ts)))}function Ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},Xc={},fg={};Ui&&(fg=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function dc(t){if(Xc[t])return Xc[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fg)return Xc[t]=e[n];return t}var dg=dc("animationend"),hg=dc("animationiteration"),pg=dc("animationstart"),mg=dc("transitionend"),gg=new Map,mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){gg.set(t,e),Jr(e,[t])}for(var jc=0;jc<mp.length;jc++){var Yc=mp[jc],$x=Yc.toLowerCase(),Kx=Yc[0].toUpperCase()+Yc.slice(1);gr($x,"on"+Kx)}gr(dg,"onAnimationEnd");gr(hg,"onAnimationIteration");gr(pg,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(mg,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function gp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,$v(i,e,void 0,t),t.currentTarget=null}function _g(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;gp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;gp(r,a,c),s=l}}}if(Ul)throw t=nf,Ul=!1,nf=null,t}function _t(t,e){var n=e[hf];n===void 0&&(n=e[hf]=new Set);var i=t+"__bubble";n.has(i)||(vg(e,t,2,!1),n.add(i))}function qc(t,e,n){var i=0;e&&(i|=4),vg(n,t,i,e)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function Qo(t){if(!t[Pa]){t[Pa]=!0,T0.forEach(function(n){n!=="selectionchange"&&(Zx.has(n)||qc(n,!1,t),qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pa]||(e[Pa]=!0,qc("selectionchange",!1,e))}}function vg(t,e,n,i){switch(tg(e)){case 1:var r=fx;break;case 4:r=dx;break;default:r=Fd}n=r.bind(null,e,n,t),r=void 0,!tf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function $c(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}H0(function(){var c=s,f=Ld(n),d=[];e:{var h=gg.get(t);if(h!==void 0){var m=kd,g=t;switch(t){case"keypress":if(gl(n)===0)break e;case"keydown":case"keyup":m=Cx;break;case"focusin":g="focus",m=Vc;break;case"focusout":g="blur",m=Vc;break;case"beforeblur":case"afterblur":m=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=bx;break;case dg:case hg:case pg:m=vx;break;case mg:m=Lx;break;case"scroll":m=hx;break;case"wheel":m=Ix;break;case"copy":case"cut":case"paste":m=yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=op}var x=(e&4)!==0,p=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var _=c,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=jo(_,u),S!=null&&x.push(Jo(_,S,v)))),p)break;_=_.return}0<x.length&&(h=new m(h,g,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Ju&&(g=n.relatedTarget||n.fromElement)&&(Ir(g)||g[Ii]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=c,g=g?Ir(g):null,g!==null&&(p=es(g),g!==p||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=c),m!==g)){if(x=rp,S="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=op,S="onPointerLeave",u="onPointerEnter",_="pointer"),p=m==null?h:Cs(m),v=g==null?h:Cs(g),h=new x(S,_+"leave",m,n,f),h.target=p,h.relatedTarget=v,S=null,Ir(f)===c&&(x=new x(u,_+"enter",g,n,f),x.target=v,x.relatedTarget=p,S=x),p=S,m&&g)t:{for(x=m,u=g,_=0,v=x;v;v=rs(v))_++;for(v=0,S=u;S;S=rs(S))v++;for(;0<_-v;)x=rs(x),_--;for(;0<v-_;)u=rs(u),v--;for(;_--;){if(x===u||u!==null&&x===u.alternate)break t;x=rs(x),u=rs(u)}x=null}else x=null;m!==null&&_p(d,h,m,x,!1),g!==null&&p!==null&&_p(d,p,g,x,!0)}}e:{if(h=c?Cs(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var P=Hx;else if(cp(h))if(ag)P=Xx;else{P=Gx;var C=Vx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=Wx);if(P&&(P=P(t,c))){og(d,P,n,f);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&qu(h,"number",h.value)}switch(C=c?Cs(c):window,t){case"focusin":(cp(C)||C.contentEditable==="true")&&(Ts=C,af=c,Oo=null);break;case"focusout":Oo=af=Ts=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,pp(d,n,f);break;case"selectionchange":if(qx)break;case"keydown":case"keyup":pp(d,n,f)}var T;if(zd)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ws?rg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(ig&&n.locale!=="ko"&&(ws||R!=="onCompositionStart"?R==="onCompositionEnd"&&ws&&(T=ng()):(Ji=f,Od="value"in Ji?Ji.value:Ji.textContent,ws=!0)),C=kl(c,R),0<C.length&&(R=new sp(R,t,null,n,f),d.push({event:R,listeners:C}),T?R.data=T:(T=sg(n),T!==null&&(R.data=T)))),(T=Fx?Ox(t,n):kx(t,n))&&(c=kl(c,"onBeforeInput"),0<c.length&&(f=new sp("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=T))}_g(d,e)})}function Jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=jo(t,n),s!=null&&i.unshift(Jo(t,s,r)),s=jo(t,e),s!=null&&i.push(Jo(t,s,r))),t=t.return}return i}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _p(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=jo(n,s),l!=null&&o.unshift(Jo(n,l,a))):r||(l=jo(n,s),l!=null&&o.push(Jo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Qx=/\r\n?/g,Jx=/\u0000|\uFFFD/g;function vp(t){return(typeof t=="string"?t:""+t).replace(Qx,`
`).replace(Jx,"")}function ba(t,e,n){if(e=vp(e),vp(t)!==e&&n)throw Error(ie(425))}function Bl(){}var cf=null,uf=null;function ff(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var df=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,xp=typeof Promise=="function"?Promise:void 0,ty=typeof queueMicrotask=="function"?queueMicrotask:typeof xp<"u"?function(t){return xp.resolve(null).then(t).catch(ny)}:df;function ny(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),$o(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);$o(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),pi="__reactFiber$"+ao,ea="__reactProps$"+ao,Ii="__reactContainer$"+ao,hf="__reactEvents$"+ao,iy="__reactListeners$"+ao,ry="__reactHandles$"+ao;function Ir(t){var e=t[pi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[pi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yp(t);t!==null;){if(n=t[pi])return n;t=yp(t)}return e}t=n,n=t.parentNode}return null}function pa(t){return t=t[pi]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function hc(t){return t[ea]||null}var pf=[],Rs=-1;function _r(t){return{current:t}}function yt(t){0>Rs||(t.current=pf[Rs],pf[Rs]=null,Rs--)}function mt(t,e){Rs++,pf[Rs]=t.current,t.current=e}var pr={},tn=_r(pr),gn=_r(!1),Wr=pr;function js(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function zl(){yt(gn),yt(tn)}function Sp(t,e,n){if(tn.current!==pr)throw Error(ie(168));mt(tn,e),mt(gn,n)}function xg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,Vv(t)||"Unknown",r));return Tt({},n,i)}function Hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Wr=tn.current,mt(tn,t),mt(gn,gn.current),!0}function Mp(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=xg(t,e,Wr),i.__reactInternalMemoizedMergedChildContext=t,yt(gn),yt(tn),mt(tn,t)):yt(gn),mt(gn,n)}var Ai=null,pc=!1,Zc=!1;function yg(t){Ai===null?Ai=[t]:Ai.push(t)}function sy(t){pc=!0,yg(t)}function vr(){if(!Zc&&Ai!==null){Zc=!0;var t=0,e=ut;try{var n=Ai;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ai=null,pc=!1}catch(r){throw Ai!==null&&(Ai=Ai.slice(t+1)),X0(Ud,vr),r}finally{ut=e,Zc=!1}}return null}var Ps=[],bs=0,Vl=null,Gl=0,Fn=[],On=0,Xr=null,Ci=1,Ri="";function Rr(t,e){Ps[bs++]=Gl,Ps[bs++]=Vl,Vl=t,Gl=e}function Sg(t,e,n){Fn[On++]=Ci,Fn[On++]=Ri,Fn[On++]=Xr,Xr=t;var i=Ci;t=Ri;var r=32-ri(i)-1;i&=~(1<<r),n+=1;var s=32-ri(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ci=1<<32-ri(e)+r|n<<r|i,Ri=s+t}else Ci=1<<s|n<<r|i,Ri=t}function Vd(t){t.return!==null&&(Rr(t,1),Sg(t,1,0))}function Gd(t){for(;t===Vl;)Vl=Ps[--bs],Ps[bs]=null,Gl=Ps[--bs],Ps[bs]=null;for(;t===Xr;)Xr=Fn[--On],Fn[On]=null,Ri=Fn[--On],Fn[On]=null,Ci=Fn[--On],Fn[On]=null}var Pn=null,Rn=null,Mt=!1,ti=null;function Mg(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ep(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Ci,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Rn=null,!0):!1;default:return!1}}function mf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gf(t){if(Mt){var e=Rn;if(e){var n=e;if(!Ep(t,e)){if(mf(t))throw Error(ie(418));e=or(n.nextSibling);var i=Pn;e&&Ep(t,e)?Mg(i,n):(t.flags=t.flags&-4097|2,Mt=!1,Pn=t)}}else{if(mf(t))throw Error(ie(418));t.flags=t.flags&-4097|2,Mt=!1,Pn=t}}}function wp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function Da(t){if(t!==Pn)return!1;if(!Mt)return wp(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ff(t.type,t.memoizedProps)),e&&(e=Rn)){if(mf(t))throw Eg(),Error(ie(418));for(;e;)Mg(t,e),e=or(e.nextSibling)}if(wp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Pn?or(t.stateNode.nextSibling):null;return!0}function Eg(){for(var t=Rn;t;)t=or(t.nextSibling)}function Ys(){Rn=Pn=null,Mt=!1}function Wd(t){ti===null?ti=[t]:ti.push(t)}var oy=Bi.ReactCurrentBatchConfig;function _o(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function La(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tp(t){var e=t._init;return e(t._payload)}function wg(t){function e(u,_){if(t){var v=u.deletions;v===null?(u.deletions=[_],u.flags|=16):v.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=ur(u,_),u.index=0,u.sibling=null,u}function s(u,_,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<_?(u.flags|=2,_):v):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,v,S){return _===null||_.tag!==6?(_=ru(v,u.mode,S),_.return=u,_):(_=r(_,v),_.return=u,_)}function l(u,_,v,S){var P=v.type;return P===Es?f(u,_,v.props.children,S,v.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===qi&&Tp(P)===_.type)?(S=r(_,v.props),S.ref=_o(u,_,v),S.return=u,S):(S=El(v.type,v.key,v.props,null,u.mode,S),S.ref=_o(u,_,v),S.return=u,S)}function c(u,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=su(v,u.mode,S),_.return=u,_):(_=r(_,v.children||[]),_.return=u,_)}function f(u,_,v,S,P){return _===null||_.tag!==7?(_=Vr(v,u.mode,S,P),_.return=u,_):(_=r(_,v),_.return=u,_)}function d(u,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ru(""+_,u.mode,v),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Sa:return v=El(_.type,_.key,_.props,null,u.mode,v),v.ref=_o(u,null,_),v.return=u,v;case Ms:return _=su(_,u.mode,v),_.return=u,_;case qi:var S=_._init;return d(u,S(_._payload),v)}if(Po(_)||fo(_))return _=Vr(_,u.mode,v,null),_.return=u,_;La(u,_)}return null}function h(u,_,v,S){var P=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(u,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sa:return v.key===P?l(u,_,v,S):null;case Ms:return v.key===P?c(u,_,v,S):null;case qi:return P=v._init,h(u,_,P(v._payload),S)}if(Po(v)||fo(v))return P!==null?null:f(u,_,v,S,null);La(u,v)}return null}function m(u,_,v,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,a(_,u,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Sa:return u=u.get(S.key===null?v:S.key)||null,l(_,u,S,P);case Ms:return u=u.get(S.key===null?v:S.key)||null,c(_,u,S,P);case qi:var C=S._init;return m(u,_,v,C(S._payload),P)}if(Po(S)||fo(S))return u=u.get(v)||null,f(_,u,S,P,null);La(_,S)}return null}function g(u,_,v,S){for(var P=null,C=null,T=_,R=_=0,W=null;T!==null&&R<v.length;R++){T.index>R?(W=T,T=null):W=T.sibling;var y=h(u,T,v[R],S);if(y===null){T===null&&(T=W);break}t&&T&&y.alternate===null&&e(u,T),_=s(y,_,R),C===null?P=y:C.sibling=y,C=y,T=W}if(R===v.length)return n(u,T),Mt&&Rr(u,R),P;if(T===null){for(;R<v.length;R++)T=d(u,v[R],S),T!==null&&(_=s(T,_,R),C===null?P=T:C.sibling=T,C=T);return Mt&&Rr(u,R),P}for(T=i(u,T);R<v.length;R++)W=m(T,u,R,v[R],S),W!==null&&(t&&W.alternate!==null&&T.delete(W.key===null?R:W.key),_=s(W,_,R),C===null?P=W:C.sibling=W,C=W);return t&&T.forEach(function(w){return e(u,w)}),Mt&&Rr(u,R),P}function x(u,_,v,S){var P=fo(v);if(typeof P!="function")throw Error(ie(150));if(v=P.call(v),v==null)throw Error(ie(151));for(var C=P=null,T=_,R=_=0,W=null,y=v.next();T!==null&&!y.done;R++,y=v.next()){T.index>R?(W=T,T=null):W=T.sibling;var w=h(u,T,y.value,S);if(w===null){T===null&&(T=W);break}t&&T&&w.alternate===null&&e(u,T),_=s(w,_,R),C===null?P=w:C.sibling=w,C=w,T=W}if(y.done)return n(u,T),Mt&&Rr(u,R),P;if(T===null){for(;!y.done;R++,y=v.next())y=d(u,y.value,S),y!==null&&(_=s(y,_,R),C===null?P=y:C.sibling=y,C=y);return Mt&&Rr(u,R),P}for(T=i(u,T);!y.done;R++,y=v.next())y=m(T,u,R,y.value,S),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?R:y.key),_=s(y,_,R),C===null?P=y:C.sibling=y,C=y);return t&&T.forEach(function(k){return e(u,k)}),Mt&&Rr(u,R),P}function p(u,_,v,S){if(typeof v=="object"&&v!==null&&v.type===Es&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Sa:e:{for(var P=v.key,C=_;C!==null;){if(C.key===P){if(P=v.type,P===Es){if(C.tag===7){n(u,C.sibling),_=r(C,v.props.children),_.return=u,u=_;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===qi&&Tp(P)===C.type){n(u,C.sibling),_=r(C,v.props),_.ref=_o(u,C,v),_.return=u,u=_;break e}n(u,C);break}else e(u,C);C=C.sibling}v.type===Es?(_=Vr(v.props.children,u.mode,S,v.key),_.return=u,u=_):(S=El(v.type,v.key,v.props,null,u.mode,S),S.ref=_o(u,_,v),S.return=u,u=S)}return o(u);case Ms:e:{for(C=v.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(u,_.sibling),_=r(_,v.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=su(v,u.mode,S),_.return=u,u=_}return o(u);case qi:return C=v._init,p(u,_,C(v._payload),S)}if(Po(v))return g(u,_,v,S);if(fo(v))return x(u,_,v,S);La(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,v),_.return=u,u=_):(n(u,_),_=ru(v,u.mode,S),_.return=u,u=_),o(u)):n(u,_)}return p}var qs=wg(!0),Tg=wg(!1),Wl=_r(null),Xl=null,Ds=null,Xd=null;function jd(){Xd=Ds=Xl=null}function Yd(t){var e=Wl.current;yt(Wl),t._currentValue=e}function _f(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Bs(t,e){Xl=t,Xd=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(Xd!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(Xl===null)throw Error(ie(308));Ds=t,Xl.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var Nr=null;function qd(t){Nr===null?Nr=[t]:Nr.push(t)}function Ag(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,qd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ni(t,i)}function Ni(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $i=!1;function $d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ni(t,n)}return r=i.interleaved,r===null?(e.next=e,qd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ni(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Id(t,n)}}function Ap(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jl(t,e,n,i){var r=t.updateQueue;$i=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(h=e,m=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(m,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(m,d,h):g,h==null)break e;d=Tt({},d,h);break e;case 2:$i=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=d):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=d}}function Cp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var ma={},gi=_r(ma),ta=_r(ma),na=_r(ma);function Fr(t){if(t===ma)throw Error(ie(174));return t}function Kd(t,e){switch(mt(na,e),mt(ta,t),mt(gi,ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ku(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ku(e,t)}yt(gi),mt(gi,e)}function $s(){yt(gi),yt(ta),yt(na)}function Rg(t){Fr(na.current);var e=Fr(gi.current),n=Ku(e,t.type);e!==n&&(mt(ta,t),mt(gi,n))}function Zd(t){ta.current===t&&(yt(gi),yt(ta))}var Et=_r(0);function Yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qc=[];function Qd(){for(var t=0;t<Qc.length;t++)Qc[t]._workInProgressVersionPrimary=null;Qc.length=0}var vl=Bi.ReactCurrentDispatcher,Jc=Bi.ReactCurrentBatchConfig,jr=0,wt=null,Nt=null,zt=null,ql=!1,ko=!1,ia=0,ay=0;function $t(){throw Error(ie(321))}function Jd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function eh(t,e,n,i,r,s){if(jr=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?fy:dy,t=n(i,r),ko){s=0;do{if(ko=!1,ia=0,25<=s)throw Error(ie(301));s+=1,zt=Nt=null,e.updateQueue=null,vl.current=hy,t=n(i,r)}while(ko)}if(vl.current=$l,e=Nt!==null&&Nt.next!==null,jr=0,zt=Nt=wt=null,ql=!1,e)throw Error(ie(300));return t}function th(){var t=ia!==0;return ia=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?wt.memoizedState=zt=t:zt=zt.next=t,zt}function Gn(){if(Nt===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=zt===null?wt.memoizedState:zt.next;if(e!==null)zt=e,Nt=t;else{if(t===null)throw Error(ie(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},zt===null?wt.memoizedState=zt=t:zt=zt.next=t}return zt}function ra(t,e){return typeof e=="function"?e(t):e}function eu(t){var e=Gn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((jr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,wt.lanes|=f,Yr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ai(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,Yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tu(t){var e=Gn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ai(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Pg(){}function bg(t,e){var n=wt,i=Gn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,nh(Ug.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,sa(9,Lg.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(ie(349));jr&30||Dg(n,e,r)}return r}function Dg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lg(t,e,n,i){e.value=n,e.getSnapshot=i,Ig(e)&&Ng(t)}function Ug(t,e,n){return n(function(){Ig(e)&&Ng(t)})}function Ig(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function Ng(t){var e=Ni(t,1);e!==null&&si(e,t,1,-1)}function Rp(t){var e=fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},e.queue=t,t=t.dispatch=uy.bind(null,wt,t),[e.memoizedState,t]}function sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Fg(){return Gn().memoizedState}function xl(t,e,n,i){var r=fi();wt.flags|=t,r.memoizedState=sa(1|e,n,void 0,i===void 0?null:i)}function mc(t,e,n,i){var r=Gn();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&Jd(i,o.deps)){r.memoizedState=sa(e,n,s,i);return}}wt.flags|=t,r.memoizedState=sa(1|e,n,s,i)}function Pp(t,e){return xl(8390656,8,t,e)}function nh(t,e){return mc(2048,8,t,e)}function Og(t,e){return mc(4,2,t,e)}function kg(t,e){return mc(4,4,t,e)}function Bg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zg(t,e,n){return n=n!=null?n.concat([t]):null,mc(4,4,Bg.bind(null,e,t),n)}function ih(){}function Hg(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Vg(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Gg(t,e,n){return jr&21?(ai(n,e)||(n=q0(),wt.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function ly(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=Jc.transition;Jc.transition={};try{t(!1),e()}finally{ut=n,Jc.transition=i}}function Wg(){return Gn().memoizedState}function cy(t,e,n){var i=cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Xg(t))jg(e,n);else if(n=Ag(t,e,n,i),n!==null){var r=ln();si(n,t,i,r),Yg(n,e,i)}}function uy(t,e,n){var i=cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xg(t))jg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ai(a,o)){var l=e.interleaved;l===null?(r.next=r,qd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ag(t,e,r,i),n!==null&&(r=ln(),si(n,t,i,r),Yg(n,e,i))}}function Xg(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function jg(t,e){ko=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Id(t,n)}}var $l={readContext:Vn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},fy={readContext:Vn,useCallback:function(t,e){return fi().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:Pp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,Bg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=cy.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=fi();return t={current:t},e.memoizedState=t},useState:Rp,useDebugValue:ih,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=Rp(!1),e=t[0];return t=ly.bind(null,t[1]),fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=fi();if(Mt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Ht===null)throw Error(ie(349));jr&30||Dg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Pp(Ug.bind(null,i,s,t),[t]),i.flags|=2048,sa(9,Lg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=fi(),e=Ht.identifierPrefix;if(Mt){var n=Ri,i=Ci;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ay++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dy={readContext:Vn,useCallback:Hg,useContext:Vn,useEffect:nh,useImperativeHandle:zg,useInsertionEffect:Og,useLayoutEffect:kg,useMemo:Vg,useReducer:eu,useRef:Fg,useState:function(){return eu(ra)},useDebugValue:ih,useDeferredValue:function(t){var e=Gn();return Gg(e,Nt.memoizedState,t)},useTransition:function(){var t=eu(ra)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:Pg,useSyncExternalStore:bg,useId:Wg,unstable_isNewReconciler:!1},hy={readContext:Vn,useCallback:Hg,useContext:Vn,useEffect:nh,useImperativeHandle:zg,useInsertionEffect:Og,useLayoutEffect:kg,useMemo:Vg,useReducer:tu,useRef:Fg,useState:function(){return tu(ra)},useDebugValue:ih,useDeferredValue:function(t){var e=Gn();return Nt===null?e.memoizedState=t:Gg(e,Nt.memoizedState,t)},useTransition:function(){var t=tu(ra)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:Pg,useSyncExternalStore:bg,useId:Wg,unstable_isNewReconciler:!1};function Qn(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gc={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=cr(t),s=Di(i,r);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(si(e,t,r,i),_l(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=cr(t),s=Di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(si(e,t,r,i),_l(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=cr(t),r=Di(n,i);r.tag=2,e!=null&&(r.callback=e),e=ar(t,r,i),e!==null&&(si(e,t,i,n),_l(e,t,i))}};function bp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zo(n,i)||!Zo(r,s):!0}function qg(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=_n(e)?Wr:tn.current,i=e.contextTypes,s=(i=i!=null)?js(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&gc.enqueueReplaceState(e,e.state,null)}function xf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},$d(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=_n(e)?Wr:tn.current,r.context=js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&gc.enqueueReplaceState(r,r.state,null),jl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ks(t,e){try{var n="",i=e;do n+=Hv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function nu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var py=typeof WeakMap=="function"?WeakMap:Map;function $g(t,e,n){n=Di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Zl||(Zl=!0,bf=i),yf(t,e)},n}function Kg(t,e,n){n=Di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){yf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yf(t,e),typeof i!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Lp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new py;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ry.bind(null,t,e,n),e.then(t,t))}function Up(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ip(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Di(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var my=Bi.ReactCurrentOwner,mn=!1;function sn(t,e,n,i){e.child=t===null?Tg(e,null,n,i):qs(e,t.child,n,i)}function Np(t,e,n,i,r){n=n.render;var s=e.ref;return Bs(e,r),i=eh(t,e,n,i,s,r),n=th(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(Mt&&n&&Vd(e),e.flags|=1,sn(t,e,i,r),e.child)}function Fp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!fh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zg(t,e,s,i,r)):(t=El(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zo,n(o,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=ur(s,i),t.ref=e.ref,t.return=e,e.child=t}function Zg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Zo(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return Sf(t,e,n,i,r)}function Qg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(Us,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,mt(Us,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,mt(Us,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,mt(Us,Tn),Tn|=i;return sn(t,e,r,n),e.child}function Jg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sf(t,e,n,i,r){var s=_n(n)?Wr:tn.current;return s=js(e,s),Bs(e,r),n=eh(t,e,n,i,s,r),i=th(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(Mt&&i&&Vd(e),e.flags|=1,sn(t,e,n,r),e.child)}function Op(t,e,n,i,r){if(_n(n)){var s=!0;Hl(e)}else s=!1;if(Bs(e,r),e.stateNode===null)yl(t,e),qg(e,n,i),xf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=_n(n)?Wr:tn.current,c=js(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Dp(e,o,i,c),$i=!1;var h=e.memoizedState;o.state=h,jl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||gn.current||$i?(typeof f=="function"&&(vf(e,n,f,i),l=e.memoizedState),(a=$i||bp(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Cg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Qn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=_n(n)?Wr:tn.current,l=js(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Dp(e,o,i,l),$i=!1,h=e.memoizedState,o.state=h,jl(e,i,o,r);var g=e.memoizedState;a!==d||h!==g||gn.current||$i?(typeof m=="function"&&(vf(e,n,m,i),g=e.memoizedState),(c=$i||bp(e,n,c,i,h,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Mf(t,e,n,i,s,r)}function Mf(t,e,n,i,r,s){Jg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Mp(e,n,!1),Fi(t,e,s);i=e.stateNode,my.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,a,s)):sn(t,e,a,s),e.memoizedState=i.state,r&&Mp(e,n,!0),e.child}function e_(t){var e=t.stateNode;e.pendingContext?Sp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sp(t,e.context,!1),Kd(t,e.containerInfo)}function kp(t,e,n,i,r){return Ys(),Wd(r),e.flags|=256,sn(t,e,n,i),e.child}var Ef={dehydrated:null,treeContext:null,retryLane:0};function wf(t){return{baseLanes:t,cachePool:null,transitions:null}}function t_(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),mt(Et,r&1),t===null)return gf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xc(o,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wf(n),e.memoizedState=Ef,t):rh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return gy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ur(a,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?wf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ef,i}return s=t.child,t=s.sibling,i=ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function rh(t,e){return e=xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ua(t,e,n,i){return i!==null&&Wd(i),qs(e,t.child,null,n),t=rh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=nu(Error(ie(422))),Ua(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xc({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qs(e,t.child,null,o),e.child.memoizedState=wf(o),e.memoizedState=Ef,s);if(!(e.mode&1))return Ua(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=nu(s,i,void 0),Ua(t,e,o,i)}if(a=(o&t.childLanes)!==0,mn||a){if(i=Ht,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ni(t,r),si(i,t,r,-1))}return uh(),i=nu(Error(ie(421))),Ua(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Py.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=or(r.nextSibling),Pn=e,Mt=!0,ti=null,t!==null&&(Fn[On++]=Ci,Fn[On++]=Ri,Fn[On++]=Xr,Ci=t.id,Ri=t.overflow,Xr=e),e=rh(e,i.children),e.flags|=4096,e)}function Bp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),_f(t.return,e,n)}function iu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function n_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bp(t,n,e);else if(t.tag===19)Bp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(mt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Yl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),iu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Yl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}iu(e,!0,n,null,s);break;case"together":iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _y(t,e,n){switch(e.tag){case 3:e_(e),Ys();break;case 5:Rg(e);break;case 1:_n(e.type)&&Hl(e);break;case 4:Kd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;mt(Wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(mt(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?t_(t,e,n):(mt(Et,Et.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);mt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return n_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,Qg(t,e,n)}return Fi(t,e,n)}var i_,Tf,r_,s_;i_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tf=function(){};r_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Fr(gi.current);var s=null;switch(n){case"input":r=ju(t,r),i=ju(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=$u(t,r),i=$u(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Bl)}Zu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};s_=function(t,e,n,i){n!==i&&(e.flags|=4)};function vo(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function vy(t,e,n){var i=e.pendingProps;switch(Gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return _n(e.type)&&zl(),Kt(e),null;case 3:return i=e.stateNode,$s(),yt(gn),yt(tn),Qd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ti!==null&&(Uf(ti),ti=null))),Tf(t,e),Kt(e),null;case 5:Zd(e);var r=Fr(na.current);if(n=e.type,t!==null&&e.stateNode!=null)r_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Kt(e),null}if(t=Fr(gi.current),Da(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[pi]=e,i[ea]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<Do.length;r++)_t(Do[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":qh(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":Kh(i,s),_t("invalid",i)}Zu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ba(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ba(i.textContent,a,t),r=["children",""+a]):Wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_t("scroll",i)}switch(n){case"input":Ma(i),$h(i,s,!0);break;case"textarea":Ma(i),Zh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Bl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=U0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[pi]=e,t[ea]=i,i_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qu(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<Do.length;r++)_t(Do[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":qh(t,i),r=ju(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),_t("invalid",t);break;case"textarea":Kh(t,i),r=$u(t,i),_t("invalid",t);break;default:r=i}Zu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?F0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&I0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xo(t,l):typeof l=="number"&&Xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&Rd(t,s,l,o))}switch(n){case"input":Ma(t),$h(t,i,!1);break;case"textarea":Ma(t),Zh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ns(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ns(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Bl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)s_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Fr(na.current),Fr(gi.current),Da(e)){if(i=e.stateNode,n=e.memoizedProps,i[pi]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:ba(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[pi]=e,e.stateNode=i}return Kt(e),null;case 13:if(yt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&Rn!==null&&e.mode&1&&!(e.flags&128))Eg(),Ys(),e.flags|=98560,s=!1;else if(s=Da(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[pi]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else ti!==null&&(Uf(ti),ti=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?Ft===0&&(Ft=3):uh())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return $s(),Tf(t,e),t===null&&Qo(e.stateNode.containerInfo),Kt(e),null;case 10:return Yd(e.type._context),Kt(e),null;case 17:return _n(e.type)&&zl(),Kt(e),null;case 19:if(yt(Et),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)vo(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yl(t),o!==null){for(e.flags|=128,vo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return mt(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>Zs&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Yl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Mt)return Kt(e),null}else 2*Pt()-s.renderingStartTime>Zs&&n!==1073741824&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=Et.current,mt(Et,i?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return ch(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function xy(t,e){switch(Gd(e),e.tag){case 1:return _n(e.type)&&zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),yt(gn),yt(tn),Qd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zd(e),null;case 13:if(yt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(Et),null;case 4:return $s(),null;case 10:return Yd(e.type._context),null;case 22:case 23:return ch(),null;case 24:return null;default:return null}}var Ia=!1,Jt=!1,yy=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function Af(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var zp=!1;function Sy(t,e){if(cf=Fl,t=ug(),Hd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uf={focusedElem:t,selectionRange:n},Fl=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,p=g.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Qn(e.type,x),p);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){Ct(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return g=zp,zp=!1,g}function Bo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Af(e,n,s)}r=r.next}while(r!==i)}}function _c(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Cf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function o_(t){var e=t.alternate;e!==null&&(t.alternate=null,o_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pi],delete e[ea],delete e[hf],delete e[iy],delete e[ry])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function a_(t){return t.tag===5||t.tag===3||t.tag===4}function Hp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||a_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bl));else if(i!==4&&(t=t.child,t!==null))for(Rf(t,e,n),t=t.sibling;t!==null;)Rf(t,e,n),t=t.sibling}function Pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Pf(t,e,n),t=t.sibling;t!==null;)Pf(t,e,n),t=t.sibling}var Xt=null,Jn=!1;function Hi(t,e,n){for(n=n.child;n!==null;)l_(t,e,n),n=n.sibling}function l_(t,e,n){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(cc,n)}catch{}switch(n.tag){case 5:Jt||Ls(n,e);case 6:var i=Xt,r=Jn;Xt=null,Hi(t,e,n),Xt=i,Jn=r,Xt!==null&&(Jn?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(Jn?(t=Xt,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),$o(t)):Kc(Xt,n.stateNode));break;case 4:i=Xt,r=Jn,Xt=n.stateNode.containerInfo,Jn=!0,Hi(t,e,n),Xt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Af(n,e,o),r=r.next}while(r!==i)}Hi(t,e,n);break;case 1:if(!Jt&&(Ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ct(n,e,a)}Hi(t,e,n);break;case 21:Hi(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Hi(t,e,n),Jt=i):Hi(t,e,n);break;default:Hi(t,e,n)}}function Vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yy),e.forEach(function(i){var r=by.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xt=a.stateNode,Jn=!1;break e;case 3:Xt=a.stateNode.containerInfo,Jn=!0;break e;case 4:Xt=a.stateNode.containerInfo,Jn=!0;break e}a=a.return}if(Xt===null)throw Error(ie(160));l_(s,o,r),Xt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)c_(e,t),e=e.sibling}function c_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),ui(t),i&4){try{Bo(3,t,t.return),_c(3,t)}catch(x){Ct(t,t.return,x)}try{Bo(5,t,t.return)}catch(x){Ct(t,t.return,x)}}break;case 1:qn(e,t),ui(t),i&512&&n!==null&&Ls(n,n.return);break;case 5:if(qn(e,t),ui(t),i&512&&n!==null&&Ls(n,n.return),t.flags&32){var r=t.stateNode;try{Xo(r,"")}catch(x){Ct(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&D0(r,s),Qu(a,o);var c=Qu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?F0(r,d):f==="dangerouslySetInnerHTML"?I0(r,d):f==="children"?Xo(r,d):Rd(r,f,d,c)}switch(a){case"input":Yu(r,s);break;case"textarea":L0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ns(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ns(r,!!s.multiple,s.defaultValue,!0):Ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[ea]=s}catch(x){Ct(t,t.return,x)}}break;case 6:if(qn(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Ct(t,t.return,x)}}break;case 3:if(qn(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$o(e.containerInfo)}catch(x){Ct(t,t.return,x)}break;case 4:qn(e,t),ui(t);break;case 13:qn(e,t),ui(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ah=Pt())),i&4&&Vp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||f,qn(e,t),Jt=c):qn(e,t),ui(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Se=t,f=t.child;f!==null;){for(d=Se=f;Se!==null;){switch(h=Se,m=h.child,h.tag){case 0:case 11:case 14:case 15:Bo(4,h,h.return);break;case 1:Ls(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){Ct(i,n,x)}}break;case 5:Ls(h,h.return);break;case 22:if(h.memoizedState!==null){Wp(d);continue}}m!==null?(m.return=h,Se=m):Wp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=N0("display",o))}catch(x){Ct(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Ct(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qn(e,t),ui(t),i&4&&Vp(t);break;case 21:break;default:qn(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(a_(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xo(r,""),i.flags&=-33);var s=Hp(t);Pf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Hp(t);Rf(t,a,o);break;default:throw Error(ie(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function My(t,e,n){Se=t,u_(t)}function u_(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ia;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=Ia;var c=Jt;if(Ia=o,(Jt=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?Xp(r):l!==null?(l.return=o,Se=l):Xp(r);for(;s!==null;)Se=s,u_(s),s=s.sibling;Se=r,Ia=a,Jt=c}Gp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):Gp(t)}}function Gp(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||_c(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&$o(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Jt||e.flags&512&&Cf(e)}catch(h){Ct(e,e.return,h)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Wp(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Xp(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_c(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{Cf(e)}catch(l){Ct(e,s,l)}break;case 5:var o=e.return;try{Cf(e)}catch(l){Ct(e,o,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var Ey=Math.ceil,Kl=Bi.ReactCurrentDispatcher,sh=Bi.ReactCurrentOwner,Hn=Bi.ReactCurrentBatchConfig,tt=0,Ht=null,Lt=null,Yt=0,Tn=0,Us=_r(0),Ft=0,oa=null,Yr=0,vc=0,oh=0,zo=null,hn=null,ah=0,Zs=1/0,Ti=null,Zl=!1,bf=null,lr=null,Na=!1,er=null,Ql=0,Ho=0,Df=null,Sl=-1,Ml=0;function ln(){return tt&6?Pt():Sl!==-1?Sl:Sl=Pt()}function cr(t){return t.mode&1?tt&2&&Yt!==0?Yt&-Yt:oy.transition!==null?(Ml===0&&(Ml=q0()),Ml):(t=ut,t!==0||(t=window.event,t=t===void 0?16:tg(t.type)),t):1}function si(t,e,n,i){if(50<Ho)throw Ho=0,Df=null,Error(ie(185));da(t,n,i),(!(tt&2)||t!==Ht)&&(t===Ht&&(!(tt&2)&&(vc|=n),Ft===4&&Zi(t,Yt)),vn(t,i),n===1&&tt===0&&!(e.mode&1)&&(Zs=Pt()+500,pc&&vr()))}function vn(t,e){var n=t.callbackNode;ox(t,e);var i=Nl(t,t===Ht?Yt:0);if(i===0)n!==null&&ep(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ep(n),e===1)t.tag===0?sy(jp.bind(null,t)):yg(jp.bind(null,t)),ty(function(){!(tt&6)&&vr()}),n=null;else{switch($0(i)){case 1:n=Ud;break;case 4:n=j0;break;case 16:n=Il;break;case 536870912:n=Y0;break;default:n=Il}n=v_(n,f_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function f_(t,e){if(Sl=-1,Ml=0,tt&6)throw Error(ie(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var i=Nl(t,t===Ht?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Jl(t,i);else{e=i;var r=tt;tt|=2;var s=h_();(Ht!==t||Yt!==e)&&(Ti=null,Zs=Pt()+500,Hr(t,e));do try{Ay();break}catch(a){d_(t,a)}while(!0);jd(),Kl.current=s,tt=r,Lt!==null?e=0:(Ht=null,Yt=0,e=Ft)}if(e!==0){if(e===2&&(r=rf(t),r!==0&&(i=r,e=Lf(t,r))),e===1)throw n=oa,Hr(t,0),Zi(t,i),vn(t,Pt()),n;if(e===6)Zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!wy(r)&&(e=Jl(t,i),e===2&&(s=rf(t),s!==0&&(i=s,e=Lf(t,s))),e===1))throw n=oa,Hr(t,0),Zi(t,i),vn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Pr(t,hn,Ti);break;case 3:if(Zi(t,i),(i&130023424)===i&&(e=ah+500-Pt(),10<e)){if(Nl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=df(Pr.bind(null,t,hn,Ti),e);break}Pr(t,hn,Ti);break;case 4:if(Zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ri(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ey(i/1960))-i,10<i){t.timeoutHandle=df(Pr.bind(null,t,hn,Ti),i);break}Pr(t,hn,Ti);break;case 5:Pr(t,hn,Ti);break;default:throw Error(ie(329))}}}return vn(t,Pt()),t.callbackNode===n?f_.bind(null,t):null}function Lf(t,e){var n=zo;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Jl(t,e),t!==2&&(e=hn,hn=n,e!==null&&Uf(e)),t}function Uf(t){hn===null?hn=t:hn.push.apply(hn,t)}function wy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zi(t,e){for(e&=~oh,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ri(e),i=1<<n;t[n]=-1,e&=~i}}function jp(t){if(tt&6)throw Error(ie(327));zs();var e=Nl(t,0);if(!(e&1))return vn(t,Pt()),null;var n=Jl(t,e);if(t.tag!==0&&n===2){var i=rf(t);i!==0&&(e=i,n=Lf(t,i))}if(n===1)throw n=oa,Hr(t,0),Zi(t,e),vn(t,Pt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,hn,Ti),vn(t,Pt()),null}function lh(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(Zs=Pt()+500,pc&&vr())}}function qr(t){er!==null&&er.tag===0&&!(tt&6)&&zs();var e=tt;tt|=1;var n=Hn.transition,i=ut;try{if(Hn.transition=null,ut=1,t)return t()}finally{ut=i,Hn.transition=n,tt=e,!(tt&6)&&vr()}}function ch(){Tn=Us.current,yt(Us)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ey(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(Gd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zl();break;case 3:$s(),yt(gn),yt(tn),Qd();break;case 5:Zd(i);break;case 4:$s();break;case 13:yt(Et);break;case 19:yt(Et);break;case 10:Yd(i.type._context);break;case 22:case 23:ch()}n=n.return}if(Ht=t,Lt=t=ur(t.current,null),Yt=Tn=e,Ft=0,oa=null,oh=vc=Yr=0,hn=zo=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Nr=null}return t}function d_(t,e){do{var n=Lt;try{if(jd(),vl.current=$l,ql){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ql=!1}if(jr=0,zt=Nt=wt=null,ko=!1,ia=0,sh.current=null,n===null||n.return===null){Ft=1,oa=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Up(o);if(m!==null){m.flags&=-257,Ip(m,o,a,s,e),m.mode&1&&Lp(s,c,e),e=m,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Lp(s,c,e),uh();break e}l=Error(ie(426))}}else if(Mt&&a.mode&1){var p=Up(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Ip(p,o,a,s,e),Wd(Ks(l,a));break e}}s=l=Ks(l,a),Ft!==4&&(Ft=2),zo===null?zo=[s]:zo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=$g(s,l,e);Ap(s,u);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(lr===null||!lr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Kg(s,a,e);Ap(s,S);break e}}s=s.return}while(s!==null)}m_(n)}catch(P){e=P,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function h_(){var t=Kl.current;return Kl.current=$l,t===null?$l:t}function uh(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Ht===null||!(Yr&268435455)&&!(vc&268435455)||Zi(Ht,Yt)}function Jl(t,e){var n=tt;tt|=2;var i=h_();(Ht!==t||Yt!==e)&&(Ti=null,Hr(t,e));do try{Ty();break}catch(r){d_(t,r)}while(!0);if(jd(),tt=n,Kl.current=i,Lt!==null)throw Error(ie(261));return Ht=null,Yt=0,Ft}function Ty(){for(;Lt!==null;)p_(Lt)}function Ay(){for(;Lt!==null&&!Zv();)p_(Lt)}function p_(t){var e=__(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?m_(t):Lt=e,sh.current=null}function m_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xy(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Lt=null;return}}else if(n=vy(n,e,Tn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ft===0&&(Ft=5)}function Pr(t,e,n){var i=ut,r=Hn.transition;try{Hn.transition=null,ut=1,Cy(t,e,n,i)}finally{Hn.transition=r,ut=i}return null}function Cy(t,e,n,i){do zs();while(er!==null);if(tt&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ax(t,s),t===Ht&&(Lt=Ht=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Na||(Na=!0,v_(Il,function(){return zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=ut;ut=1;var a=tt;tt|=4,sh.current=null,Sy(t,n),c_(n,t),Yx(uf),Fl=!!cf,uf=cf=null,t.current=n,My(n),Qv(),tt=a,ut=o,Hn.transition=s}else t.current=n;if(Na&&(Na=!1,er=t,Ql=r),s=t.pendingLanes,s===0&&(lr=null),tx(n.stateNode),vn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Zl)throw Zl=!1,t=bf,bf=null,t;return Ql&1&&t.tag!==0&&zs(),s=t.pendingLanes,s&1?t===Df?Ho++:(Ho=0,Df=t):Ho=0,vr(),null}function zs(){if(er!==null){var t=$0(Ql),e=Hn.transition,n=ut;try{if(Hn.transition=null,ut=16>t?16:t,er===null)var i=!1;else{if(t=er,er=null,Ql=0,tt&6)throw Error(ie(331));var r=tt;for(tt|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var f=Se;switch(f.tag){case 0:case 11:case 15:Bo(8,f,s)}var d=f.child;if(d!==null)d.return=f,Se=d;else for(;Se!==null;){f=Se;var h=f.sibling,m=f.return;if(o_(f),f===c){Se=null;break}if(h!==null){h.return=m,Se=h;break}Se=m}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Se=u;break e}Se=s.return}}var _=t.current;for(Se=_;Se!==null;){o=Se;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Se=v;else e:for(o=_;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_c(9,a)}}catch(P){Ct(a,a.return,P)}if(a===o){Se=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Se=S;break e}Se=a.return}}if(tt=r,vr(),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(cc,t)}catch{}i=!0}return i}finally{ut=n,Hn.transition=e}}return!1}function Yp(t,e,n){e=Ks(n,e),e=$g(t,e,1),t=ar(t,e,1),e=ln(),t!==null&&(da(t,1,e),vn(t,e))}function Ct(t,e,n){if(t.tag===3)Yp(t,t,n);else for(;e!==null;){if(e.tag===3){Yp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){t=Ks(n,t),t=Kg(e,t,1),e=ar(e,t,1),t=ln(),e!==null&&(da(e,1,t),vn(e,t));break}}e=e.return}}function Ry(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(Yt&n)===n&&(Ft===4||Ft===3&&(Yt&130023424)===Yt&&500>Pt()-ah?Hr(t,0):oh|=n),vn(t,e)}function g_(t,e){e===0&&(t.mode&1?(e=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):e=1);var n=ln();t=Ni(t,e),t!==null&&(da(t,e,n),vn(t,n))}function Py(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),g_(t,n)}function by(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),g_(t,n)}var __;__=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,_y(t,e,n);mn=!!(t.flags&131072)}else mn=!1,Mt&&e.flags&1048576&&Sg(e,Gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yl(t,e),t=e.pendingProps;var r=js(e,tn.current);Bs(e,n),r=eh(null,e,i,t,r,n);var s=th();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,Hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$d(e),r.updater=gc,e.stateNode=r,r._reactInternals=e,xf(e,i,t,n),e=Mf(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&Vd(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ly(i),t=Qn(i,t),r){case 0:e=Sf(null,e,i,t,n);break e;case 1:e=Op(null,e,i,t,n);break e;case 11:e=Np(null,e,i,t,n);break e;case 14:e=Fp(null,e,i,Qn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Sf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Op(t,e,i,r,n);case 3:e:{if(e_(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Cg(t,e),jl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ks(Error(ie(423)),e),e=kp(t,e,i,n,r);break e}else if(i!==r){r=Ks(Error(ie(424)),e),e=kp(t,e,i,n,r);break e}else for(Rn=or(e.stateNode.containerInfo.firstChild),Pn=e,Mt=!0,ti=null,n=Tg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),i===r){e=Fi(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return Rg(e),t===null&&gf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ff(i,r)?o=null:s!==null&&ff(i,s)&&(e.flags|=32),Jg(t,e),sn(t,e,o,n),e.child;case 6:return t===null&&gf(e),null;case 13:return t_(t,e,n);case 4:return Kd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=qs(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Np(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,mt(Wl,i._currentValue),i._currentValue=o,s!==null)if(ai(s.value,o)){if(s.children===r.children&&!gn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Di(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_f(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_f(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Bs(e,n),r=Vn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=Qn(i,e.pendingProps),r=Qn(i.type,r),Fp(t,e,i,r,n);case 15:return Zg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),yl(t,e),e.tag=1,_n(i)?(t=!0,Hl(e)):t=!1,Bs(e,n),qg(e,i,r),xf(e,i,r,n),Mf(null,e,i,!0,t,n);case 19:return n_(t,e,n);case 22:return Qg(t,e,n)}throw Error(ie(156,e.tag))};function v_(t,e){return X0(t,e)}function Dy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new Dy(t,e,n,i)}function fh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ly(t){if(typeof t=="function")return fh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bd)return 11;if(t===Dd)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function El(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")fh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return Vr(n.children,r,s,e);case Pd:o=8,r|=8;break;case Vu:return t=Bn(12,n,e,r|2),t.elementType=Vu,t.lanes=s,t;case Gu:return t=Bn(13,n,e,r),t.elementType=Gu,t.lanes=s,t;case Wu:return t=Bn(19,n,e,r),t.elementType=Wu,t.lanes=s,t;case R0:return xc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A0:o=10;break e;case C0:o=9;break e;case bd:o=11;break e;case Dd:o=14;break e;case qi:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function xc(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=R0,t.lanes=n,t.stateNode={isHidden:!1},t}function ru(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function su(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Uy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function dh(t,e,n,i,r,s,o,a,l){return t=new Uy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$d(s),t}function Iy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function x_(t){if(!t)return pr;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(_n(n))return xg(t,n,e)}return e}function y_(t,e,n,i,r,s,o,a,l){return t=dh(n,i,!0,t,r,s,o,a,l),t.context=x_(null),n=t.current,i=ln(),r=cr(n),s=Di(i,r),s.callback=e??null,ar(n,s,r),t.current.lanes=r,da(t,r,i),vn(t,i),t}function yc(t,e,n,i){var r=e.current,s=ln(),o=cr(r);return n=x_(n),e.context===null?e.context=n:e.pendingContext=n,e=Di(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ar(r,e,o),t!==null&&(si(t,r,o,s),_l(t,r,o)),o}function ec(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hh(t,e){qp(t,e),(t=t.alternate)&&qp(t,e)}function Ny(){return null}var S_=typeof reportError=="function"?reportError:function(t){console.error(t)};function ph(t){this._internalRoot=t}Sc.prototype.render=ph.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));yc(t,e,null,null)};Sc.prototype.unmount=ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){yc(null,t,null,null)}),e[Ii]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Q0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ki.length&&e!==0&&e<Ki[n].priority;n++);Ki.splice(n,0,t),n===0&&eg(t)}};function mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $p(){}function Fy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ec(o);s.call(c)}}var o=y_(e,i,t,0,null,!1,!1,"",$p);return t._reactRootContainer=o,t[Ii]=o.current,Qo(t.nodeType===8?t.parentNode:t),qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ec(l);a.call(c)}}var l=dh(t,0,!1,null,null,!1,!1,"",$p);return t._reactRootContainer=l,t[Ii]=l.current,Qo(t.nodeType===8?t.parentNode:t),qr(function(){yc(e,l,n,i)}),l}function Ec(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ec(o);a.call(l)}}yc(e,o,t,r)}else o=Fy(n,e,t,r,i);return ec(o)}K0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bo(e.pendingLanes);n!==0&&(Id(e,n|1),vn(e,Pt()),!(tt&6)&&(Zs=Pt()+500,vr()))}break;case 13:qr(function(){var i=Ni(t,1);if(i!==null){var r=ln();si(i,t,1,r)}}),hh(t,1)}};Nd=function(t){if(t.tag===13){var e=Ni(t,134217728);if(e!==null){var n=ln();si(e,t,134217728,n)}hh(t,134217728)}};Z0=function(t){if(t.tag===13){var e=cr(t),n=Ni(t,e);if(n!==null){var i=ln();si(n,t,e,i)}hh(t,e)}};Q0=function(){return ut};J0=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};ef=function(t,e,n){switch(e){case"input":if(Yu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=hc(i);if(!r)throw Error(ie(90));b0(i),Yu(i,r)}}}break;case"textarea":L0(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};B0=lh;z0=qr;var Oy={usingClientEntryPoint:!1,Events:[pa,Cs,hc,O0,k0,lh]},xo={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ky={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G0(t),t===null?null:t.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||Ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{cc=Fa.inject(ky),mi=Fa}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oy;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mh(e))throw Error(ie(200));return Iy(t,e,null,n)};Ln.createRoot=function(t,e){if(!mh(t))throw Error(ie(299));var n=!1,i="",r=S_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=dh(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,Qo(t.nodeType===8?t.parentNode:t),new ph(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=G0(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return qr(t)};Ln.hydrate=function(t,e,n){if(!Mc(e))throw Error(ie(200));return Ec(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!mh(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=S_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=y_(e,null,t,1,n??null,r,!1,s,o),t[Ii]=e.current,Qo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Sc(e)};Ln.render=function(t,e,n){if(!Mc(e))throw Error(ie(200));return Ec(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!Mc(t))throw Error(ie(40));return t._reactRootContainer?(qr(function(){Ec(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};Ln.unstable_batchedUpdates=lh;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Mc(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Ec(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function M_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M_)}catch(t){console.error(t)}}M_(),M0.exports=Ln;var By=M0.exports,E_,Kp=By;E_=Kp.createRoot,Kp.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gh="169",zy=0,Zp=1,Hy=2,w_=1,Vy=2,wi=3,mr=0,xn=1,Cn=2,fr=0,Hs=1,Qp=2,Jp=3,em=4,Gy=5,Lr=100,Wy=101,Xy=102,jy=103,Yy=104,qy=200,$y=201,Ky=202,Zy=203,If=204,Nf=205,Qy=206,Jy=207,e1=208,t1=209,n1=210,i1=211,r1=212,s1=213,o1=214,Ff=0,Of=1,kf=2,Qs=3,Bf=4,zf=5,Hf=6,Vf=7,_h=0,a1=1,l1=2,dr=0,c1=1,u1=2,f1=3,T_=4,d1=5,h1=6,p1=7,A_=300,Js=301,eo=302,Gf=303,Wf=304,wc=306,Xf=1e3,Or=1001,jf=1002,zn=1003,m1=1004,Oa=1005,ni=1006,ou=1007,kr=1008,Oi=1009,C_=1010,R_=1011,aa=1012,vh=1013,$r=1014,Pi=1015,ga=1016,xh=1017,yh=1018,to=1020,P_=35902,b_=1021,D_=1022,ii=1023,L_=1024,U_=1025,Vs=1026,no=1027,I_=1028,Sh=1029,N_=1030,Mh=1031,Eh=1033,wl=33776,Tl=33777,Al=33778,Cl=33779,Yf=35840,qf=35841,$f=35842,Kf=35843,Zf=36196,Qf=37492,Jf=37496,ed=37808,td=37809,nd=37810,id=37811,rd=37812,sd=37813,od=37814,ad=37815,ld=37816,cd=37817,ud=37818,fd=37819,dd=37820,hd=37821,Rl=36492,pd=36494,md=36495,F_=36283,gd=36284,_d=36285,vd=36286,g1=3200,_1=3201,wh=0,v1=1,Qi="",ei="srgb",xr="srgb-linear",Th="display-p3",Tc="display-p3-linear",tc="linear",xt="srgb",nc="rec709",ic="p3",ss=7680,tm=519,x1=512,y1=513,S1=514,O_=515,M1=516,E1=517,w1=518,T1=519,nm=35044,im="300 es",bi=2e3,rc=2001;class lo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rm=1234567;const Gs=Math.PI/180,la=180/Math.PI;function co(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function on(t,e,n){return Math.max(e,Math.min(n,t))}function Ah(t,e){return(t%e+e)%e}function A1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function C1(t,e,n){return t!==e?(n-t)/(e-t):0}function Vo(t,e,n){return(1-n)*t+n*e}function R1(t,e,n,i){return Vo(t,e,1-Math.exp(-n*i))}function P1(t,e=1){return e-Math.abs(Ah(t,e*2)-e)}function b1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function D1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function L1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function U1(t,e){return t+Math.random()*(e-t)}function I1(t){return t*(.5-Math.random())}function N1(t){t!==void 0&&(rm=t);let e=rm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function F1(t){return t*Gs}function O1(t){return t*la}function k1(t){return(t&t-1)===0&&t!==0}function B1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function z1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function H1(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),f=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*d,l*h,a*c);break;case"YZY":t.set(l*h,a*f,l*d,a*c);break;case"ZXZ":t.set(l*d,l*h,a*f,a*c);break;case"XZX":t.set(a*f,l*g,l*m,a*c);break;case"YXY":t.set(l*m,a*f,l*g,a*c);break;case"ZYZ":t.set(l*g,l*m,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ss(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const V1={DEG2RAD:Gs,RAD2DEG:la,generateUUID:co,clamp:on,euclideanModulo:Ah,mapLinear:A1,inverseLerp:C1,lerp:Vo,damp:R1,pingpong:P1,smoothstep:b1,smootherstep:D1,randInt:L1,randFloat:U1,randFloatSpread:I1,seededRandom:N1,degToRad:F1,radToDeg:O1,isPowerOfTwo:k1,ceilPowerOfTwo:B1,floorPowerOfTwo:z1,setQuaternionFromProperEuler:H1,normalize:nn,denormalize:Ss};class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],m=i[5],g=i[8],x=r[0],p=r[3],u=r[6],_=r[1],v=r[4],S=r[7],P=r[2],C=r[5],T=r[8];return s[0]=o*x+a*_+l*P,s[3]=o*p+a*v+l*C,s[6]=o*u+a*S+l*T,s[1]=c*x+f*_+d*P,s[4]=c*p+f*v+d*C,s[7]=c*u+f*S+d*T,s[2]=h*x+m*_+g*P,s[5]=h*p+m*v+g*C,s[8]=h*u+m*S+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,m=c*s-o*l,g=n*d+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(au.makeScale(e,n)),this}rotate(e){return this.premultiply(au.makeRotation(-e)),this}translate(e,n){return this.premultiply(au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const au=new We;function k_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function G1(){const t=sc("canvas");return t.style.display="block",t}const sm={};function Pl(t){t in sm||(sm[t]=!0,console.warn(t))}function W1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function X1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function j1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const om=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),am=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yo={[xr]:{transfer:tc,primaries:nc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ei]:{transfer:xt,primaries:nc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Tc]:{transfer:tc,primaries:ic,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(am),fromReference:t=>t.applyMatrix3(om)},[Th]:{transfer:xt,primaries:ic,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(am),fromReference:t=>t.applyMatrix3(om).convertLinearToSRGB()}},Y1=new Set([xr,Tc]),lt={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Y1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=yo[e].toReference,r=yo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return yo[t].primaries},getTransfer:function(t){return t===Qi?tc:yo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(yo[e].luminanceCoefficients)}};function Ws(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let os;class q1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{os===void 0&&(os=sc("canvas")),os.width=e.width,os.height=e.height;const i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=os}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ws(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ws(n[i]/255)*255):n[i]=Ws(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $1=0;class B_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=co(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cu(r[o].image)):s.push(cu(r[o]))}else s=cu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function cu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?q1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let K1=0;class yn extends lo{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=Or,r=Or,s=ni,o=kr,a=ii,l=Oi,c=yn.DEFAULT_ANISOTROPY,f=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=co(),this.name="",this.source=new B_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xf:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xf:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=A_;yn.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,n=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],m=l[5],g=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(m+1)/2,P=(u+1)/2,C=(f+h)/4,T=(d+x)/4,R=(g+p)/4;return v>S&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=T/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=R/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=R/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(d-x)/_,this.z=(h-f)/_,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Z1 extends lo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new B_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends Z1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class z_ extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q1 extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _a{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=x;return}if(d!==x||l!==h||c!==m||f!==g){let p=1-a;const u=l*h+c*m+f*g+d*x,_=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const P=Math.sqrt(v),C=Math.atan2(P,u*_);p=Math.sin(p*C)/P,a=Math.sin(a*C)/P}const S=a*_;if(l=l*p+h*S,c=c*p+m*S,f=f*p+g*S,d=d*p+x*S,p===1-a){const P=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=P,c*=P,f*=P,d*=P}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[n]=a*g+f*d+l*m-c*h,e[n+1]=l*g+f*h+c*d-a*m,e[n+2]=c*g+f*m+a*h-l*d,e[n+3]=f*g-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*m*g,this._y=c*m*d-h*f*g,this._z=c*f*g+h*m*d,this._w=c*f*d-h*m*g;break;case"YXZ":this._x=h*f*d+c*m*g,this._y=c*m*d-h*f*g,this._z=c*f*g-h*m*d,this._w=c*f*d+h*m*g;break;case"ZXY":this._x=h*f*d-c*m*g,this._y=c*m*d+h*f*g,this._z=c*f*g+h*m*d,this._w=c*f*d-h*m*g;break;case"ZYX":this._x=h*f*d-c*m*g,this._y=c*m*d+h*f*g,this._z=c*f*g-h*m*d,this._w=c*f*d+h*m*g;break;case"YZX":this._x=h*f*d+c*m*g,this._y=c*m*d+h*f*g,this._z=c*f*g-h*m*d,this._w=c*f*d-h*m*g;break;case"XZY":this._x=h*f*d-c*m*g,this._y=c*m*d-h*f*g,this._z=c*f*g+h*m*d,this._w=c*f*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uu=new N,lm=new _a;class ts{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),Ba.subVectors(this.max,So),as.subVectors(e.a,So),ls.subVectors(e.b,So),cs.subVectors(e.c,So),Vi.subVectors(ls,as),Gi.subVectors(cs,ls),Sr.subVectors(as,cs);let n=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-Sr.z,Sr.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,Sr.z,0,-Sr.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-Sr.y,Sr.x,0];return!fu(n,as,ls,cs,Ba)||(n=[1,0,0,0,1,0,0,0,1],!fu(n,as,ls,cs,Ba))?!1:(za.crossVectors(Vi,Gi),n=[za.x,za.y,za.z],fu(n,as,ls,cs,Ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new N,new N,new N,new N,new N,new N,new N,new N],$n=new N,ka=new ts,as=new N,ls=new N,cs=new N,Vi=new N,Gi=new N,Sr=new N,So=new N,Ba=new N,za=new N,Mr=new N;function fu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Mr.fromArray(t,s);const a=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=e.dot(Mr),c=n.dot(Mr),f=i.dot(Mr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const J1=new ts,Mo=new N,du=new N;class Ac{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):J1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const n=Mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(du)),this.expandByPoint(Mo.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new N,hu=new N,Ha=new N,Wi=new N,pu=new N,Va=new N,mu=new N;class Ch{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){hu.copy(e).add(n).multiplyScalar(.5),Ha.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(hu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ha),a=Wi.dot(this.direction),l=-Wi.dot(Ha),c=Wi.lengthSq(),f=Math.abs(1-o*o);let d,h,m,g;if(f>0)if(d=o*l-a,h=o*a-l,g=s*f,d>=0)if(h>=-g)if(h<=g){const x=1/f;d*=x,h*=x,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(hu).addScaledVector(Ha,h),m}intersectSphere(e,n){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,r,s){pu.subVectors(n,e),Va.subVectors(i,e),mu.crossVectors(pu,Va);let o=this.direction.dot(mu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(Va.crossVectors(Wi,Va));if(l<0)return null;const c=a*this.direction.dot(pu.cross(Wi));if(c<0||l+c>o)return null;const f=-a*Wi.dot(mu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,s,o,a,l,c,f,d,h,m,g,x,p){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,m,g,x,p)}set(e,n,i,r,s,o,a,l,c,f,d,h,m,g,x,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=m,u[7]=g,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*d,g=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=m+g*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=g+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,g=c*f,x=c*d;n[0]=h+x*a,n[4]=g*a-m,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=m*a-g,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,g=c*f,x=c*d;n[0]=h-x*a,n[4]=-o*d,n[8]=g+m*a,n[1]=m+g*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*d,g=a*f,x=a*d;n[0]=l*f,n[4]=g*c-m,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=m*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,x=a*c;n[0]=l*f,n[4]=x-h*d,n[8]=g*d+m,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*d+g,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,x=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+x,n[5]=o*f,n[9]=m*d-g,n[2]=g*d-m,n[6]=a*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eS,e,tS)}lookAt(e,n,i){const r=this.elements;return En.subVectors(e,n),En.lengthSq()===0&&(En.z=1),En.normalize(),Xi.crossVectors(i,En),Xi.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Xi.crossVectors(i,En)),Xi.normalize(),Ga.crossVectors(En,Xi),r[0]=Xi.x,r[4]=Ga.x,r[8]=En.x,r[1]=Xi.y,r[5]=Ga.y,r[9]=En.y,r[2]=Xi.z,r[6]=Ga.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],m=i[13],g=i[2],x=i[6],p=i[10],u=i[14],_=i[3],v=i[7],S=i[11],P=i[15],C=r[0],T=r[4],R=r[8],W=r[12],y=r[1],w=r[5],k=r[9],B=r[13],j=r[2],Q=r[6],V=r[10],G=r[14],D=r[3],Z=r[7],J=r[11],oe=r[15];return s[0]=o*C+a*y+l*j+c*D,s[4]=o*T+a*w+l*Q+c*Z,s[8]=o*R+a*k+l*V+c*J,s[12]=o*W+a*B+l*G+c*oe,s[1]=f*C+d*y+h*j+m*D,s[5]=f*T+d*w+h*Q+m*Z,s[9]=f*R+d*k+h*V+m*J,s[13]=f*W+d*B+h*G+m*oe,s[2]=g*C+x*y+p*j+u*D,s[6]=g*T+x*w+p*Q+u*Z,s[10]=g*R+x*k+p*V+u*J,s[14]=g*W+x*B+p*G+u*oe,s[3]=_*C+v*y+S*j+P*D,s[7]=_*T+v*w+S*Q+P*Z,s[11]=_*R+v*k+S*V+P*J,s[15]=_*W+v*B+S*G+P*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],m=e[14],g=e[3],x=e[7],p=e[11],u=e[15];return g*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*m-i*l*m)+x*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*f-s*l*f)+p*(+n*c*d-n*a*m-s*o*d+i*o*m+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],m=e[11],g=e[12],x=e[13],p=e[14],u=e[15],_=d*p*c-x*h*c+x*l*m-a*p*m-d*l*u+a*h*u,v=g*h*c-f*p*c-g*l*m+o*p*m+f*l*u-o*h*u,S=f*x*c-g*d*c+g*a*m-o*x*m-f*a*u+o*d*u,P=g*d*l-f*x*l-g*a*h+o*x*h+f*a*p-o*d*p,C=n*_+i*v+r*S+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=_*T,e[1]=(x*h*s-d*p*s-x*r*m+i*p*m+d*r*u-i*h*u)*T,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*u+i*l*u)*T,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*m-i*l*m)*T,e[4]=v*T,e[5]=(f*p*s-g*h*s+g*r*m-n*p*m-f*r*u+n*h*u)*T,e[6]=(g*l*s-o*p*s-g*r*c+n*p*c+o*r*u-n*l*u)*T,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*m+n*l*m)*T,e[8]=S*T,e[9]=(g*d*s-f*x*s-g*i*m+n*x*m+f*i*u-n*d*u)*T,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*u+n*a*u)*T,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*m-n*a*m)*T,e[12]=P*T,e[13]=(f*x*r-g*d*r+g*i*h-n*x*h-f*i*p+n*d*p)*T,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*p-n*a*p)*T,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,m=s*f,g=s*d,x=o*f,p=o*d,u=a*d,_=l*c,v=l*f,S=l*d,P=i.x,C=i.y,T=i.z;return r[0]=(1-(x+u))*P,r[1]=(m+S)*P,r[2]=(g-v)*P,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(h+u))*C,r[6]=(p+_)*C,r[7]=0,r[8]=(g+v)*T,r[9]=(p-_)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=us.set(r[0],r[1],r[2]).length();const o=us.set(r[4],r[5],r[6]).length(),a=us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kn.copy(this);const c=1/s,f=1/o,d=1/a;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=f,Kn.elements[5]*=f,Kn.elements[6]*=f,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,n.setFromRotationMatrix(Kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=bi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,g;if(a===bi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===rc)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=bi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,m=(i+r)*f;let g,x;if(a===bi)g=(o+s)*d,x=-2*d;else if(a===rc)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const us=new N,Kn=new St,eS=new N(0,0,0),tS=new N(1,1,1),Xi=new N,Ga=new N,En=new N,cm=new St,um=new _a;class li{constructor(e=0,n=0,i=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return um.setFromEuler(this),this.setFromQuaternion(um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Rh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nS=0;const fm=new N,fs=new _a,Si=new St,Wa=new N,Eo=new N,iS=new N,rS=new _a,dm=new N(1,0,0),hm=new N(0,1,0),pm=new N(0,0,1),mm={type:"added"},sS={type:"removed"},ds={type:"childadded",child:null},gu={type:"childremoved",child:null};class Vt extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new N,n=new li,i=new _a,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new We}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(dm,e)}rotateY(e){return this.rotateOnAxis(hm,e)}rotateZ(e){return this.rotateOnAxis(pm,e)}translateOnAxis(e,n){return fm.copy(e).applyQuaternion(this.quaternion),this.position.add(fm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dm,e)}translateY(e){return this.translateOnAxis(hm,e)}translateZ(e){return this.translateOnAxis(pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Wa.copy(e):Wa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Eo,Wa,this.up):Si.lookAt(Wa,Eo,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(Si),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mm),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sS),gu.child=e,this.dispatchEvent(gu),gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mm),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,iS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,rS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new N(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new N,Mi=new N,_u=new N,Ei=new N,hs=new N,ps=new N,gm=new N,vu=new N,xu=new N,yu=new N,Su=new dt,Mu=new dt,Eu=new dt;class kn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Zn.subVectors(r,n),Mi.subVectors(i,n),_u.subVectors(e,n);const o=Zn.dot(Zn),a=Zn.dot(Mi),l=Zn.dot(_u),c=Mi.dot(Mi),f=Mi.dot(_u),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-a*f)*h,g=(o*f-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Su.setScalar(0),Mu.setScalar(0),Eu.setScalar(0),Su.fromBufferAttribute(e,n),Mu.fromBufferAttribute(e,i),Eu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Su,s.x),o.addScaledVector(Mu,s.y),o.addScaledVector(Eu,s.z),o}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),Mi.subVectors(e,n),Zn.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Zn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;hs.subVectors(r,i),ps.subVectors(s,i),vu.subVectors(e,i);const l=hs.dot(vu),c=ps.dot(vu);if(l<=0&&c<=0)return n.copy(i);xu.subVectors(e,r);const f=hs.dot(xu),d=ps.dot(xu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(hs,o);yu.subVectors(e,s);const m=hs.dot(yu),g=ps.dot(yu);if(g>=0&&m<=g)return n.copy(s);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(ps,a);const p=f*g-m*d;if(p<=0&&d-f>=0&&m-g>=0)return gm.subVectors(s,r),a=(d-f)/(d-f+(m-g)),n.copy(r).addScaledVector(gm,a);const u=1/(p+x+h);return o=x*u,a=h*u,n.copy(i).addScaledVector(hs,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const H_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class De{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=Ah(e,1),n=on(n,0,1),i=on(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=wu(o,s,e+1/3),this.g=wu(o,s,e),this.b=wu(o,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,n=ei){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ei){const i=H_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}copyLinearToSRGB(e){return this.r=lu(e.r),this.g=lu(e.g),this.b=lu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return lt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(on(Qt.r*255,0,255))*65536+Math.round(on(Qt.g*255,0,255))*256+Math.round(on(Qt.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=lt.workingColorSpace){return lt.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=ei){lt.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==ei?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(Xa);const i=Vo(ji.h,Xa.h,n),r=Vo(ji.s,Xa.s,n),s=Vo(ji.l,Xa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new De;De.NAMES=H_;let oS=0;class ns extends lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=co(),this.name="",this.type="Material",this.blending=Hs,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=If,this.blendDst=Nf,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==If&&(i.blendSrc=this.blendSrc),this.blendDst!==Nf&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cc extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new N,ja=new Je;class oi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=nm,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ja.fromBufferAttribute(this,n),ja.applyMatrix3(e),this.setXY(n,ja.x,ja.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ss(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ss(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ss(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ss(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ss(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nm&&(e.usage=this.usage),e}}class V_ extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class G_ extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class en extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let aS=0;const Nn=new St,Tu=new Vt,ms=new N,wn=new ts,wo=new ts,Bt=new N;class ci extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=co(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k_(e)?G_:V_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return Tu.lookAt(e),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new en(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ac);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(wn.min,wo.min),wn.expandByPoint(Bt),Bt.addVectors(wn.max,wo.max),wn.expandByPoint(Bt)):(wn.expandByPoint(wo.min),wn.expandByPoint(wo.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Bt.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(e,c),Bt.add(ms)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new N,l[R]=new N;const c=new N,f=new N,d=new N,h=new Je,m=new Je,g=new Je,x=new N,p=new N;function u(R,W,y){c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,W),d.fromBufferAttribute(i,y),h.fromBufferAttribute(s,R),m.fromBufferAttribute(s,W),g.fromBufferAttribute(s,y),f.sub(c),d.sub(c),m.sub(h),g.sub(h);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(x.copy(f).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(w),p.copy(d).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(w),a[R].add(x),a[W].add(x),a[y].add(x),l[R].add(p),l[W].add(p),l[y].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,W=_.length;R<W;++R){const y=_[R],w=y.start,k=y.count;for(let B=w,j=w+k;B<j;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new N,S=new N,P=new N,C=new N;function T(R){P.fromBufferAttribute(r,R),C.copy(P);const W=a[R];v.copy(W),v.sub(P.multiplyScalar(P.dot(W))).normalize(),S.crossVectors(C,W);const w=S.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,w)}for(let R=0,W=_.length;R<W;++R){const y=_[R],w=y.start,k=y.count;for(let B=w,j=w+k;B<j;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,f=new N,d=new N;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*f;for(let u=0;u<f;u++)h[g++]=c[m++]}return new oi(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ci,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _m=new St,Er=new Ch,Ya=new Ac,vm=new N,qa=new N,$a=new N,Ka=new N,Au=new N,Za=new N,xm=new N,Qa=new N;class ht extends Vt{constructor(e=new ci,n=new Cc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Za.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Au.fromBufferAttribute(d,e),o?Za.addScaledVector(Au,f):Za.addScaledVector(Au.sub(n),f))}n.add(Za)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(Ya.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Ya,vm)===null||Er.origin.distanceToSquared(vm)>(e.far-e.near)**2))&&(_m.copy(s).invert(),Er.copy(e.ray).applyMatrix4(_m),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const p=h[g],u=o[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,P=v;S<P;S+=3){const C=a.getX(S),T=a.getX(S+1),R=a.getX(S+2);r=Ja(this,u,e,i,c,f,d,C,T,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){const _=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);r=Ja(this,o,e,i,c,f,d,_,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const p=h[g],u=o[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,P=v;S<P;S+=3){const C=S,T=S+1,R=S+2;r=Ja(this,u,e,i,c,f,d,C,T,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,u=x;p<u;p+=3){const _=p,v=p+1,S=p+2;r=Ja(this,o,e,i,c,f,d,_,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function lS(t,e,n,i,r,s,o,a){let l;if(e.side===xn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===mr,a),l===null)return null;Qa.copy(a),Qa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Qa);return c<n.near||c>n.far?null:{distance:c,point:Qa.clone(),object:t}}function Ja(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,qa),t.getVertexPosition(l,$a),t.getVertexPosition(c,Ka);const f=lS(t,e,n,i,qa,$a,Ka,xm);if(f){const d=new N;kn.getBarycoord(xm,qa,$a,Ka,d),r&&(f.uv=kn.getInterpolatedAttribute(r,a,l,c,d,new Je)),s&&(f.uv1=kn.getInterpolatedAttribute(s,a,l,c,d,new Je)),o&&(f.normal=kn.getInterpolatedAttribute(o,a,l,c,d,new N),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};kn.getNormal(qa,$a,Ka,h.normal),f.face=h,f.barycoord=d}return f}class Dn extends ci{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(f,3)),this.setAttribute("uv",new en(d,2));function g(x,p,u,_,v,S,P,C,T,R,W){const y=S/T,w=P/R,k=S/2,B=P/2,j=C/2,Q=T+1,V=R+1;let G=0,D=0;const Z=new N;for(let J=0;J<V;J++){const oe=J*w-B;for(let Le=0;Le<Q;Le++){const Xe=Le*y-k;Z[x]=Xe*_,Z[p]=oe*v,Z[u]=j,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[p]=0,Z[u]=C>0?1:-1,f.push(Z.x,Z.y,Z.z),d.push(Le/T),d.push(1-J/R),G+=1}}for(let J=0;J<R;J++)for(let oe=0;oe<T;oe++){const Le=h+oe+Q*J,Xe=h+oe+Q*(J+1),Y=h+(oe+1)+Q*(J+1),ne=h+(oe+1)+Q*J;l.push(Le,Xe,ne),l.push(Xe,Y,ne),D+=6}a.addGroup(m,D,W),m+=D,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=io(t[n]);for(const r in i)e[r]=i[r]}return e}function cS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function W_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const uS={clone:io,merge:rn};var fS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fS,this.fragmentShader=dS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=cS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class X_ extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new N,ym=new Je,Sm=new Je;class An extends X_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,n){return this.getViewBounds(e,ym,Sm),n.subVectors(Sm,ym)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const gs=-90,_s=1;class hS extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(gs,_s,e,n);r.layers=this.layers,this.add(r);const s=new An(gs,_s,e,n);s.layers=this.layers,this.add(s);const o=new An(gs,_s,e,n);o.layers=this.layers,this.add(o);const a=new An(gs,_s,e,n);a.layers=this.layers,this.add(a);const l=new An(gs,_s,e,n);l.layers=this.layers,this.add(l);const c=new An(gs,_s,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class j_ extends yn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Js,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pS extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new j_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ni}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Dn(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:fr});s.uniforms.tEquirect.value=n;const o=new ht(r,s),a=n.minFilter;return n.minFilter===kr&&(n.minFilter=ni),new hS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Cu=new N,mS=new N,gS=new We;class br{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cu.subVectors(i,n).cross(mS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Cu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gS.getNormalMatrix(e),r=this.coplanarPoint(Cu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new Ac,el=new N;class Ph{constructor(e=new br,n=new br,i=new br,r=new br,s=new br,o=new br){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],m=r[8],g=r[9],x=r[10],p=r[11],u=r[12],_=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,p-m,S-u).normalize(),i[1].setComponents(l+s,h+c,p+m,S+u).normalize(),i[2].setComponents(l+o,h+f,p+g,S+_).normalize(),i[3].setComponents(l-o,h-f,p-g,S-_).normalize(),i[4].setComponents(l-a,h-d,p-x,S-v).normalize(),n===bi)i[5].setComponents(l+a,h+d,p+x,S+v).normalize();else if(n===rc)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Y_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _S(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<d.length;m++){const g=d[h],x=d[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let m=0,g=d.length;m<g;m++){const x=d[m];t.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class _i extends ci{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,m=[],g=[],x=[],p=[];for(let u=0;u<f;u++){const _=u*h-o;for(let v=0;v<c;v++){const S=v*d-s;g.push(S,-_,0),x.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const v=_+c*u,S=_+c*(u+1),P=_+1+c*(u+1),C=_+1+c*u;m.push(v,S,C),m.push(S,P,C)}this.setIndex(m),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(x,3)),this.setAttribute("uv",new en(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.widthSegments,e.heightSegments)}}var vS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ES=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,TS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,CS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,DS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,HS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qS="gl_FragColor = linearToOutputTexel( gl_FragColor );",$S=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,JS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_M=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,CM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,IM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,YM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$E=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:vS,alphahash_pars_fragment:xS,alphamap_fragment:yS,alphamap_pars_fragment:SS,alphatest_fragment:MS,alphatest_pars_fragment:ES,aomap_fragment:wS,aomap_pars_fragment:TS,batching_pars_vertex:AS,batching_vertex:CS,begin_vertex:RS,beginnormal_vertex:PS,bsdfs:bS,iridescence_fragment:DS,bumpmap_pars_fragment:LS,clipping_planes_fragment:US,clipping_planes_pars_fragment:IS,clipping_planes_pars_vertex:NS,clipping_planes_vertex:FS,color_fragment:OS,color_pars_fragment:kS,color_pars_vertex:BS,color_vertex:zS,common:HS,cube_uv_reflection_fragment:VS,defaultnormal_vertex:GS,displacementmap_pars_vertex:WS,displacementmap_vertex:XS,emissivemap_fragment:jS,emissivemap_pars_fragment:YS,colorspace_fragment:qS,colorspace_pars_fragment:$S,envmap_fragment:KS,envmap_common_pars_fragment:ZS,envmap_pars_fragment:QS,envmap_pars_vertex:JS,envmap_physical_pars_fragment:uM,envmap_vertex:eM,fog_vertex:tM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:rM,gradientmap_pars_fragment:sM,lightmap_pars_fragment:oM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:lM,lights_pars_begin:cM,lights_toon_fragment:fM,lights_toon_pars_fragment:dM,lights_phong_fragment:hM,lights_phong_pars_fragment:pM,lights_physical_fragment:mM,lights_physical_pars_fragment:gM,lights_fragment_begin:_M,lights_fragment_maps:vM,lights_fragment_end:xM,logdepthbuf_fragment:yM,logdepthbuf_pars_fragment:SM,logdepthbuf_pars_vertex:MM,logdepthbuf_vertex:EM,map_fragment:wM,map_pars_fragment:TM,map_particle_fragment:AM,map_particle_pars_fragment:CM,metalnessmap_fragment:RM,metalnessmap_pars_fragment:PM,morphinstance_vertex:bM,morphcolor_vertex:DM,morphnormal_vertex:LM,morphtarget_pars_vertex:UM,morphtarget_vertex:IM,normal_fragment_begin:NM,normal_fragment_maps:FM,normal_pars_fragment:OM,normal_pars_vertex:kM,normal_vertex:BM,normalmap_pars_fragment:zM,clearcoat_normal_fragment_begin:HM,clearcoat_normal_fragment_maps:VM,clearcoat_pars_fragment:GM,iridescence_pars_fragment:WM,opaque_fragment:XM,packing:jM,premultiplied_alpha_fragment:YM,project_vertex:qM,dithering_fragment:$M,dithering_pars_fragment:KM,roughnessmap_fragment:ZM,roughnessmap_pars_fragment:QM,shadowmap_pars_fragment:JM,shadowmap_pars_vertex:eE,shadowmap_vertex:tE,shadowmask_pars_fragment:nE,skinbase_vertex:iE,skinning_pars_vertex:rE,skinning_vertex:sE,skinnormal_vertex:oE,specularmap_fragment:aE,specularmap_pars_fragment:lE,tonemapping_fragment:cE,tonemapping_pars_fragment:uE,transmission_fragment:fE,transmission_pars_fragment:dE,uv_pars_fragment:hE,uv_pars_vertex:pE,uv_vertex:mE,worldpos_vertex:gE,background_vert:_E,background_frag:vE,backgroundCube_vert:xE,backgroundCube_frag:yE,cube_vert:SE,cube_frag:ME,depth_vert:EE,depth_frag:wE,distanceRGBA_vert:TE,distanceRGBA_frag:AE,equirect_vert:CE,equirect_frag:RE,linedashed_vert:PE,linedashed_frag:bE,meshbasic_vert:DE,meshbasic_frag:LE,meshlambert_vert:UE,meshlambert_frag:IE,meshmatcap_vert:NE,meshmatcap_frag:FE,meshnormal_vert:OE,meshnormal_frag:kE,meshphong_vert:BE,meshphong_frag:zE,meshphysical_vert:HE,meshphysical_frag:VE,meshtoon_vert:GE,meshtoon_frag:WE,points_vert:XE,points_frag:jE,shadow_vert:YE,shadow_frag:qE,sprite_vert:$E,sprite_frag:KE},fe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},hi={basic:{uniforms:rn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:rn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new De(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:rn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:rn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:rn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new De(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:rn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:rn([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:rn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:rn([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:rn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:rn([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:rn([fe.common,fe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:rn([fe.lights,fe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};hi.physical={uniforms:rn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const tl={r:0,b:0,g:0},Tr=new li,ZE=new St;function QE(t,e,n,i,r,s,o){const a=new De(0);let l=s===!0?0:1,c,f,d=null,h=0,m=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function x(_){let v=!1;const S=g(_);S===null?u(a,l):S&&S.isColor&&(u(S,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(_,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===wc)?(f===void 0&&(f=new ht(new Dn(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:io(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Tr.copy(v.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),f.material.uniforms.envMap.value=S,f.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(ZE.makeRotationFromEuler(Tr)),f.material.toneMapped=lt.getTransfer(S.colorSpace)!==xt,(d!==S||h!==S.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=S,h=S.version,m=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ht(new _i(2,2),new ki({name:"BackgroundMaterial",uniforms:io(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=lt.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,v){_.getRGB(tl,W_(t)),i.buffers.color.setClear(tl.r,tl.g,tl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:x,addToRenderList:p}}function JE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,w,k,B,j){let Q=!1;const V=d(B,k,w);s!==V&&(s=V,c(s.object)),Q=m(y,B,k,j),Q&&g(y,B,k,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,S(y,w,k,B),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function f(y){return t.deleteVertexArray(y)}function d(y,w,k){const B=k.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let Q=j[w.id];Q===void 0&&(Q={},j[w.id]=Q);let V=Q[B];return V===void 0&&(V=h(l()),Q[B]=V),V}function h(y){const w=[],k=[],B=[];for(let j=0;j<n;j++)w[j]=0,k[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:k,attributeDivisors:B,object:y,attributes:{},index:null}}function m(y,w,k,B){const j=s.attributes,Q=w.attributes;let V=0;const G=k.getAttributes();for(const D in G)if(G[D].location>=0){const J=j[D];let oe=Q[D];if(oe===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),J===void 0||J.attribute!==oe||oe&&J.data!==oe.data)return!0;V++}return s.attributesNum!==V||s.index!==B}function g(y,w,k,B){const j={},Q=w.attributes;let V=0;const G=k.getAttributes();for(const D in G)if(G[D].location>=0){let J=Q[D];J===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(J=y.instanceColor));const oe={};oe.attribute=J,J&&J.data&&(oe.data=J.data),j[D]=oe,V++}s.attributes=j,s.attributesNum=V,s.index=B}function x(){const y=s.newAttributes;for(let w=0,k=y.length;w<k;w++)y[w]=0}function p(y){u(y,0)}function u(y,w){const k=s.newAttributes,B=s.enabledAttributes,j=s.attributeDivisors;k[y]=1,B[y]===0&&(t.enableVertexAttribArray(y),B[y]=1),j[y]!==w&&(t.vertexAttribDivisor(y,w),j[y]=w)}function _(){const y=s.newAttributes,w=s.enabledAttributes;for(let k=0,B=w.length;k<B;k++)w[k]!==y[k]&&(t.disableVertexAttribArray(k),w[k]=0)}function v(y,w,k,B,j,Q,V){V===!0?t.vertexAttribIPointer(y,w,k,j,Q):t.vertexAttribPointer(y,w,k,B,j,Q)}function S(y,w,k,B){x();const j=B.attributes,Q=k.getAttributes(),V=w.defaultAttributeValues;for(const G in Q){const D=Q[G];if(D.location>=0){let Z=j[G];if(Z===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const J=Z.normalized,oe=Z.itemSize,Le=e.get(Z);if(Le===void 0)continue;const Xe=Le.buffer,Y=Le.type,ne=Le.bytesPerElement,he=Y===t.INT||Y===t.UNSIGNED_INT||Z.gpuType===vh;if(Z.isInterleavedBufferAttribute){const me=Z.data,He=me.stride,Ue=Z.offset;if(me.isInstancedInterleavedBuffer){for(let qe=0;qe<D.locationSize;qe++)u(D.location+qe,me.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let qe=0;qe<D.locationSize;qe++)p(D.location+qe);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let qe=0;qe<D.locationSize;qe++)v(D.location+qe,oe/D.locationSize,Y,J,He*ne,(Ue+oe/D.locationSize*qe)*ne,he)}else{if(Z.isInstancedBufferAttribute){for(let me=0;me<D.locationSize;me++)u(D.location+me,Z.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let me=0;me<D.locationSize;me++)p(D.location+me);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let me=0;me<D.locationSize;me++)v(D.location+me,oe/D.locationSize,Y,J,oe*ne,oe/D.locationSize*me*ne,he)}}else if(V!==void 0){const J=V[G];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(D.location,J);break;case 3:t.vertexAttrib3fv(D.location,J);break;case 4:t.vertexAttrib4fv(D.location,J);break;default:t.vertexAttrib1fv(D.location,J)}}}}_()}function P(){R();for(const y in i){const w=i[y];for(const k in w){const B=w[k];for(const j in B)f(B[j].object),delete B[j];delete w[k]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const k in w){const B=w[k];for(const j in B)f(B[j].object),delete B[j];delete w[k]}delete i[y.id]}function T(y){for(const w in i){const k=i[w];if(k[y.id]===void 0)continue;const B=k[y.id];for(const j in B)f(B[j].object),delete B[j];delete k[y.id]}}function R(){W(),o=!0,s!==r&&(s=r,c(s.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:W,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function ew(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function a(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let m=0;for(let g=0;g<d;g++)m+=f[g];n.update(m,i,1)}function l(c,f,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],f[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=f[x];for(let x=0;x<h.length;x++)n.update(g,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ii&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Oi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Pi&&!R)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:P,maxSamples:C}}function nw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new br,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||g===null||g.length===0||s&&!p)s?f(null):c();else{const _=s?0:i,v=_*4;let S=u.clippingState||null;l.value=S,S=f(g,h,v,m);for(let P=0;P!==v;++P)S[P]=n[P];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,g){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const u=m+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,S=m;v!==x;++v,S+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function iw(t){let e=new WeakMap;function n(o,a){return a===Gf?o.mapping=Js:a===Wf&&(o.mapping=eo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gf||a===Wf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class q_ extends X_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Is=4,Mm=[.125,.215,.35,.446,.526,.582],Ur=20,Ru=new q_,Em=new De;let Pu=null,bu=0,Du=0,Lu=!1;const Dr=(1+Math.sqrt(5))/2,vs=1/Dr,wm=[new N(-Dr,vs,0),new N(Dr,vs,0),new N(-vs,0,Dr),new N(vs,0,Dr),new N(0,Dr,-vs),new N(0,Dr,vs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Pu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pu,bu,Du),this._renderer.xr.enabled=Lu,e.scissorTest=!1,nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Js||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:ga,format:ii,colorSpace:xr,depthBuffer:!1},r=Am(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rw(s)),this._blurMaterial=sw(s,e,n)}return r}_compileMaterial(e){const n=new ht(this._lodPlanes[0],e);this._renderer.compile(n,Ru)}_sceneToCubeUV(e,n,i,r){const a=new An(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Em),f.toneMapping=dr,f.autoClear=!1;const m=new Cc({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new ht(new Dn,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Em),x=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;nl(r,_*v,u>2?v:0,v,v),f.setRenderTarget(r),x&&f.render(g,a),f.render(e,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Js||e.mapping===eo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;nl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ru)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wm[(r-s-1)%wm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new ht(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ur-1),x=s/g,p=isFinite(s)?1+Math.floor(f*x):Ur;p>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ur}`);const u=[];let _=0;for(let T=0;T<Ur;++T){const R=T/x,W=Math.exp(-R*R/2);u.push(W),T===0?_+=W:T<p&&(_+=2*W)}for(let T=0;T<u.length;T++)u[T]=u[T]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const S=this._sizeLods[r],P=3*S*(r>v-Is?r-v+Is:0),C=4*(this._cubeSize-S);nl(n,P,C,3*S,2*S),l.setRenderTarget(n),l.render(d,Ru)}}function rw(t){const e=[],n=[],i=[];let r=t;const s=t-Is+1+Mm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Is?l=Mm[o-t+Is-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,g=6,x=3,p=2,u=1,_=new Float32Array(x*g*m),v=new Float32Array(p*g*m),S=new Float32Array(u*g*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,R=C>2?0:-1,W=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];_.set(W,x*g*C),v.set(h,p*g*C);const y=[C,C,C,C,C,C];S.set(y,u*g*C)}const P=new ci;P.setAttribute("position",new oi(_,x)),P.setAttribute("uv",new oi(v,p)),P.setAttribute("faceIndex",new oi(S,u)),e.push(P),r>Is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Am(t,e,n){const i=new Kr(t,e,n);return i.texture.mapping=wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function sw(t,e,n){const i=new Float32Array(Ur),r=new N(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Cm(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Rm(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function bh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ow(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gf||l===Wf,f=l===Js||l===eo;if(c||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Tm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new Tm(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function aw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Pl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lw(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const x=m[g];for(let p=0,u=x.length;p<u;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let x=0;if(m!==null){const _=m.array;x=m.version;for(let v=0,S=_.length;v<S;v+=3){const P=_[v+0],C=_[v+1],T=_[v+2];h.push(P,C,C,T,T,P)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const P=v+0,C=v+1,T=v+2;h.push(P,C,C,T,T,P)}}else return;const p=new(k_(h)?G_:V_)(h,1);p.version=x;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function cw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function c(h,m,g){g!==0&&(t.drawElementsInstanced(i,m,s,h*o,g),n.update(m,i,g))}function f(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];n.update(p,i,1)}function d(h,m,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<h.length;u++)c(h[u]/o,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,x,0,g);let u=0;for(let _=0;_<g;_++)u+=m[_];for(let _=0;_<x.length;_++)n.update(u,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function uw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function fw(t,e,n){const i=new WeakMap,r=new dt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let P=a.attributes.position.count*S,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*C*4*d),R=new z_(T,P,C,d);R.type=Pi,R.needsUpdate=!0;const W=S*4;for(let w=0;w<d;w++){const k=u[w],B=_[w],j=v[w],Q=P*C*4*w;for(let V=0;V<k.count;V++){const G=V*W;g===!0&&(r.fromBufferAttribute(k,V),T[Q+G+0]=r.x,T[Q+G+1]=r.y,T[Q+G+2]=r.z,T[Q+G+3]=0),x===!0&&(r.fromBufferAttribute(B,V),T[Q+G+4]=r.x,T[Q+G+5]=r.y,T[Q+G+6]=r.z,T[Q+G+7]=0),p===!0&&(r.fromBufferAttribute(j,V),T[Q+G+8]=r.x,T[Q+G+9]=r.y,T[Q+G+10]=r.z,T[Q+G+11]=j.itemSize===4?r.w:1)}}h={count:d,texture:R,size:new Je(P,C)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function dw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class $_ extends yn{constructor(e,n,i,r,s,o,a,l,c,f=Vs){if(f!==Vs&&f!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Vs&&(i=$r),i===void 0&&f===no&&(i=to),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const K_=new yn,Pm=new $_(1,1),Z_=new z_,Q_=new Q1,J_=new j_,bm=[],Dm=[],Lm=new Float32Array(16),Um=new Float32Array(9),Im=new Float32Array(4);function uo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bm[r];if(s===void 0&&(s=new Float32Array(r),bm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Rc(t,e){let n=Dm[e];n===void 0&&(n=new Int32Array(e),Dm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function hw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function _w(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Im.set(i),t.uniformMatrix2fv(this.addr,!1,Im),kt(n,i)}}function vw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Um.set(i),t.uniformMatrix3fv(this.addr,!1,Um),kt(n,i)}}function xw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Lm.set(i),t.uniformMatrix4fv(this.addr,!1,Lm),kt(n,i)}}function yw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function ww(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function Rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Pm.compareFunction=O_,s=Pm):s=K_,n.setTexture2D(e||s,r)}function Pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Q_,r)}function bw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||J_,r)}function Dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Z_,r)}function Lw(t){switch(t){case 5126:return hw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return _w;case 35675:return vw;case 35676:return xw;case 5124:case 35670:return yw;case 35667:case 35671:return Sw;case 35668:case 35672:return Mw;case 35669:case 35673:return Ew;case 5125:return ww;case 36294:return Tw;case 36295:return Aw;case 36296:return Cw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return Dw}}function Uw(t,e){t.uniform1fv(this.addr,e)}function Iw(t,e){const n=uo(e,this.size,2);t.uniform2fv(this.addr,n)}function Nw(t,e){const n=uo(e,this.size,3);t.uniform3fv(this.addr,n)}function Fw(t,e){const n=uo(e,this.size,4);t.uniform4fv(this.addr,n)}function Ow(t,e){const n=uo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function kw(t,e){const n=uo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Bw(t,e){const n=uo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zw(t,e){t.uniform1iv(this.addr,e)}function Hw(t,e){t.uniform2iv(this.addr,e)}function Vw(t,e){t.uniform3iv(this.addr,e)}function Gw(t,e){t.uniform4iv(this.addr,e)}function Ww(t,e){t.uniform1uiv(this.addr,e)}function Xw(t,e){t.uniform2uiv(this.addr,e)}function jw(t,e){t.uniform3uiv(this.addr,e)}function Yw(t,e){t.uniform4uiv(this.addr,e)}function qw(t,e,n){const i=this.cache,r=e.length,s=Rc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||K_,s[o])}function $w(t,e,n){const i=this.cache,r=e.length,s=Rc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Q_,s[o])}function Kw(t,e,n){const i=this.cache,r=e.length,s=Rc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||J_,s[o])}function Zw(t,e,n){const i=this.cache,r=e.length,s=Rc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Z_,s[o])}function Qw(t){switch(t){case 5126:return Uw;case 35664:return Iw;case 35665:return Nw;case 35666:return Fw;case 35674:return Ow;case 35675:return kw;case 35676:return Bw;case 5124:case 35670:return zw;case 35667:case 35671:return Hw;case 35668:case 35672:return Vw;case 35669:case 35673:return Gw;case 5125:return Ww;case 36294:return Xw;case 36295:return jw;case 36296:return Yw;case 35678:case 36198:case 36298:case 36306:case 35682:return qw;case 35679:case 36299:case 36307:return $w;case 35680:case 36300:case 36308:case 36293:return Kw;case 36289:case 36303:case 36311:case 36292:return Zw}}class Jw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Lw(n.type)}}class e2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Qw(n.type)}}class t2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Uu=/(\w+)(\])?(\[|\.)?/g;function Nm(t,e){t.seq.push(e),t.map[e.id]=e}function n2(t,e,n){const i=t.name,r=i.length;for(Uu.lastIndex=0;;){const s=Uu.exec(i),o=Uu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Nm(n,c===void 0?new Jw(a,t,e):new e2(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new t2(a),Nm(n,d)),n=d}}}class bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);n2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Fm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const i2=37297;let r2=0;function s2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function o2(t){const e=lt.getPrimaries(lt.workingColorSpace),n=lt.getPrimaries(t);let i;switch(e===n?i="":e===ic&&n===nc?i="LinearDisplayP3ToLinearSRGB":e===nc&&n===ic&&(i="LinearSRGBToLinearDisplayP3"),t){case xr:case Tc:return[i,"LinearTransferOETF"];case ei:case Th:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Om(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+s2(t.getShaderSource(e),o)}else return r}function a2(t,e){const n=o2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function l2(t,e){let n;switch(e){case c1:n="Linear";break;case u1:n="Reinhard";break;case f1:n="Cineon";break;case T_:n="ACESFilmic";break;case h1:n="AgX";break;case p1:n="Neutral";break;case d1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const il=new N;function c2(){lt.getLuminanceCoefficients(il);const t=il.x.toFixed(4),e=il.y.toFixed(4),n=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function f2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function d2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Lo(t){return t!==""}function km(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h2=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(t){return t.replace(h2,m2)}const p2=new Map;function m2(t,e){let n=Ge[e];if(n===void 0){const i=p2.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xd(n)}const g2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zm(t){return t.replace(g2,_2)}function _2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function v2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===w_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Vy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function x2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Js:case eo:e="ENVMAP_TYPE_CUBE";break;case wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function y2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function S2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case _h:e="ENVMAP_BLENDING_MULTIPLY";break;case a1:e="ENVMAP_BLENDING_MIX";break;case l1:e="ENVMAP_BLENDING_ADD";break}return e}function M2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function E2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=v2(n),c=x2(n),f=y2(n),d=S2(n),h=M2(n),m=u2(n),g=f2(s),x=r.createProgram();let p,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Lo).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Lo).join(`
`),u.length>0&&(u+=`
`)):(p=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),u=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==dr?"#define TONE_MAPPING":"",n.toneMapping!==dr?Ge.tonemapping_pars_fragment:"",n.toneMapping!==dr?l2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,a2("linearToOutputTexel",n.outputColorSpace),c2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Lo).join(`
`)),o=xd(o),o=km(o,n),o=Bm(o,n),a=xd(a),a=km(a,n),a=Bm(a,n),o=zm(o),a=zm(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===im?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=_+p+o,S=_+u+a,P=Fm(r,r.VERTEX_SHADER,v),C=Fm(r,r.FRAGMENT_SHADER,S);r.attachShader(x,P),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(w){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(P).trim(),j=r.getShaderInfoLog(C).trim();let Q=!0,V=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,C);else{const G=Om(r,P,"vertex"),D=Om(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+k+`
`+G+`
`+D)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||j==="")&&(V=!1);V&&(w.diagnostics={runnable:Q,programLog:k,vertexShader:{log:B,prefix:p},fragmentShader:{log:j,prefix:u}})}r.deleteShader(P),r.deleteShader(C),R=new bl(r,x),W=d2(r,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let W;this.getAttributes=function(){return W===void 0&&T(this),W};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,i2)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=r2++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=C,this}let w2=0;class T2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new A2(e),n.set(e,i)),i}}class A2{constructor(e){this.id=w2++,this.code=e,this.usedTimes=0}}function C2(t,e,n,i,r,s,o){const a=new Rh,l=new T2,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,m=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,w,k,B,j){const Q=B.fog,V=j.geometry,G=y.isMeshStandardMaterial?B.environment:null,D=(y.isMeshStandardMaterial?n:e).get(y.envMap||G),Z=D&&D.mapping===wc?D.image.height:null,J=x[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Le=oe!==void 0?oe.length:0;let Xe=0;V.morphAttributes.position!==void 0&&(Xe=1),V.morphAttributes.normal!==void 0&&(Xe=2),V.morphAttributes.color!==void 0&&(Xe=3);let Y,ne,he,me;if(J){const dn=hi[J];Y=dn.vertexShader,ne=dn.fragmentShader}else Y=y.vertexShader,ne=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);const He=t.getRenderTarget(),Ue=j.isInstancedMesh===!0,qe=j.isBatchedMesh===!0,nt=!!y.map,$e=!!y.matcap,b=!!D,Gt=!!y.aoMap,je=!!y.lightMap,Ke=!!y.bumpMap,Ne=!!y.normalMap,ye=!!y.displacementMap,ue=!!y.emissiveMap,A=!!y.metalnessMap,M=!!y.roughnessMap,O=y.anisotropy>0,q=y.clearcoat>0,te=y.dispersion>0,$=y.iridescence>0,Re=y.sheen>0,pe=y.transmission>0,Me=O&&!!y.anisotropyMap,it=q&&!!y.clearcoatMap,ae=q&&!!y.clearcoatNormalMap,Ee=q&&!!y.clearcoatRoughnessMap,Be=$&&!!y.iridescenceMap,ze=$&&!!y.iridescenceThicknessMap,we=Re&&!!y.sheenColorMap,Qe=Re&&!!y.sheenRoughnessMap,Ve=!!y.specularMap,pt=!!y.specularColorMap,L=!!y.specularIntensityMap,ve=pe&&!!y.transmissionMap,X=pe&&!!y.thicknessMap,ee=!!y.gradientMap,ge=!!y.alphaMap,xe=y.alphaTest>0,et=!!y.alphaHash,bt=!!y.extensions;let fn=dr;y.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(fn=t.toneMapping);const rt={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Y,fragmentShader:ne,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:qe,batchingColor:qe&&j._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&j.instanceColor!==null,instancingMorph:Ue&&j.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:He===null?t.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:xr,alphaToCoverage:!!y.alphaToCoverage,map:nt,matcap:$e,envMap:b,envMapMode:b&&D.mapping,envMapCubeUVHeight:Z,aoMap:Gt,lightMap:je,bumpMap:Ke,normalMap:Ne,displacementMap:m&&ye,emissiveMap:ue,normalMapObjectSpace:Ne&&y.normalMapType===v1,normalMapTangentSpace:Ne&&y.normalMapType===wh,metalnessMap:A,roughnessMap:M,anisotropy:O,anisotropyMap:Me,clearcoat:q,clearcoatMap:it,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ee,dispersion:te,iridescence:$,iridescenceMap:Be,iridescenceThicknessMap:ze,sheen:Re,sheenColorMap:we,sheenRoughnessMap:Qe,specularMap:Ve,specularColorMap:pt,specularIntensityMap:L,transmission:pe,transmissionMap:ve,thicknessMap:X,gradientMap:ee,opaque:y.transparent===!1&&y.blending===Hs&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:xe,alphaHash:et,combine:y.combine,mapUv:nt&&p(y.map.channel),aoMapUv:Gt&&p(y.aoMap.channel),lightMapUv:je&&p(y.lightMap.channel),bumpMapUv:Ke&&p(y.bumpMap.channel),normalMapUv:Ne&&p(y.normalMap.channel),displacementMapUv:ye&&p(y.displacementMap.channel),emissiveMapUv:ue&&p(y.emissiveMap.channel),metalnessMapUv:A&&p(y.metalnessMap.channel),roughnessMapUv:M&&p(y.roughnessMap.channel),anisotropyMapUv:Me&&p(y.anisotropyMap.channel),clearcoatMapUv:it&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&p(y.sheenRoughnessMap.channel),specularMapUv:Ve&&p(y.specularMap.channel),specularColorMapUv:pt&&p(y.specularColorMap.channel),specularIntensityMapUv:L&&p(y.specularIntensityMap.channel),transmissionMapUv:ve&&p(y.transmissionMap.channel),thicknessMapUv:X&&p(y.thicknessMap.channel),alphaMapUv:ge&&p(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ne||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!V.attributes.uv&&(nt||ge),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Xe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:fn,decodeVideoTexture:nt&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===xt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Cn,flipSided:y.side===xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:bt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&y.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function _(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)w.push(k),w.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(v(w,y),S(w,y),w.push(t.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function v(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function S(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function P(y){const w=x[y.type];let k;if(w){const B=hi[w];k=uS.clone(B.uniforms)}else k=y.uniforms;return k}function C(y,w){let k;for(let B=0,j=f.length;B<j;B++){const Q=f[B];if(Q.cacheKey===w){k=Q,++k.usedTimes;break}}return k===void 0&&(k=new E2(t,w,y,s),f.push(k)),k}function T(y){if(--y.usedTimes===0){const w=f.indexOf(y);f[w]=f[f.length-1],f.pop(),y.destroy()}}function R(y){l.remove(y)}function W(){l.dispose()}return{getParameters:u,getProgramCacheKey:_,getUniforms:P,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:f,dispose:W}}function R2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function P2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Vm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,g,x,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=p),e++,u}function a(d,h,m,g,x,p){const u=o(d,h,m,g,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(d,h,m,g,x,p){const u=o(d,h,m,g,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||P2),i.length>1&&i.sort(h||Vm),r.length>1&&r.sort(h||Vm)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function b2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Gm,t.set(i,[o])):r>=s.length?(o=new Gm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function D2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new De};break;case"SpotLight":n={position:new N,direction:new N,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new De,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new De,groundColor:new De};break;case"RectAreaLight":n={color:new De,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function L2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let U2=0;function I2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function N2(t){const e=new D2,n=L2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new St,o=new St;function a(c){let f=0,d=0,h=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let m=0,g=0,x=0,p=0,u=0,_=0,v=0,S=0,P=0,C=0,T=0;c.sort(I2);for(let W=0,y=c.length;W<y;W++){const w=c[W],k=w.color,B=w.intensity,j=w.distance,Q=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=k.r*B,d+=k.g*B,h+=k.b*B;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],B);T++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const G=w.shadow,D=n.get(w);D.shadowIntensity=G.intensity,D.shadowBias=G.bias,D.shadowNormalBias=G.normalBias,D.shadowRadius=G.radius,D.shadowMapSize=G.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=w.shadow.matrix,_++}i.directional[m]=V,m++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(k).multiplyScalar(B),V.distance=j,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[x]=V;const G=w.shadow;if(w.map&&(i.spotLightMap[P]=w.map,P++,G.updateMatrices(w),w.castShadow&&C++),i.spotLightMatrix[x]=G.matrix,w.castShadow){const D=n.get(w);D.shadowIntensity=G.intensity,D.shadowBias=G.bias,D.shadowNormalBias=G.normalBias,D.shadowRadius=G.radius,D.shadowMapSize=G.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=Q,S++}x++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(k).multiplyScalar(B),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=V,p++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const G=w.shadow,D=n.get(w);D.shadowIntensity=G.intensity,D.shadowBias=G.bias,D.shadowNormalBias=G.normalBias,D.shadowRadius=G.radius,D.shadowMapSize=G.mapSize,D.shadowCameraNear=G.camera.near,D.shadowCameraFar=G.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=w.shadow.matrix,v++}i.point[g]=V,g++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(B),V.groundColor.copy(w.groundColor).multiplyScalar(B),i.hemi[u]=V,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==p||R.hemiLength!==u||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==S||R.numSpotMaps!==P||R.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,R.directionalLength=m,R.pointLength=g,R.spotLength=x,R.rectAreaLength=p,R.hemiLength=u,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=S,R.numSpotMaps=P,R.numLightProbes=T,i.version=U2++)}function l(c,f){let d=0,h=0,m=0,g=0,x=0;const p=f.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const v=c[u];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(v.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Wm(t){const e=new N2(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function F2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Wm(t),e.set(r,[a])):s>=o.length?(a=new Wm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class O2 extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k2 extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const B2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function H2(t,e,n){let i=new Ph;const r=new Je,s=new Je,o=new dt,a=new O2({depthPacking:_1}),l=new k2,c={},f=n.maxTextureSize,d={[mr]:xn,[xn]:mr,[Cn]:Cn},h=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:B2,fragmentShader:z2}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new ci;g.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ht(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w_;let u=this.type;this.render=function(C,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const W=t.getRenderTarget(),y=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),k=t.state;k.setBlending(fr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=u!==wi&&this.type===wi,j=u===wi&&this.type!==wi;for(let Q=0,V=C.length;Q<V;Q++){const G=C[Q],D=G.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Z=D.getFrameExtents();if(r.multiply(Z),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Z.x),r.x=s.x*Z.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Z.y),r.y=s.y*Z.y,D.mapSize.y=s.y)),D.map===null||B===!0||j===!0){const oe=this.type!==wi?{minFilter:zn,magFilter:zn}:{};D.map!==null&&D.map.dispose(),D.map=new Kr(r.x,r.y,oe),D.map.texture.name=G.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const J=D.getViewportCount();for(let oe=0;oe<J;oe++){const Le=D.getViewport(oe);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),k.viewport(o),D.updateMatrices(G,oe),i=D.getFrustum(),S(T,R,D.camera,G,this.type)}D.isPointLightShadow!==!0&&this.type===wi&&_(D,R),D.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(W,y,w)};function _(C,T){const R=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Kr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,R,h,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,R,m,x,null)}function v(C,T,R,W){let y=null;const w=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)y=w;else if(y=R.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=y.uuid,B=T.uuid;let j=c[k];j===void 0&&(j={},c[k]=j);let Q=j[B];Q===void 0&&(Q=y.clone(),j[B]=Q,T.addEventListener("dispose",P)),y=Q}if(y.visible=T.visible,y.wireframe=T.wireframe,W===wi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=t.properties.get(y);k.light=R}return y}function S(C,T,R,W,y){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===wi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const B=e.update(C),j=C.material;if(Array.isArray(j)){const Q=B.groups;for(let V=0,G=Q.length;V<G;V++){const D=Q[V],Z=j[D.materialIndex];if(Z&&Z.visible){const J=v(C,Z,W,y);C.onBeforeShadow(t,C,T,R,B,J,D),t.renderBufferDirect(R,null,B,J,C,D),C.onAfterShadow(t,C,T,R,B,J,D)}}}else if(j.visible){const Q=v(C,j,W,y);C.onBeforeShadow(t,C,T,R,B,Q,null),t.renderBufferDirect(R,null,B,Q,C,null),C.onAfterShadow(t,C,T,R,B,Q,null)}}const k=C.children;for(let B=0,j=k.length;B<j;B++)S(k[B],T,R,W,y)}function P(C){C.target.removeEventListener("dispose",P);for(const R in c){const W=c[R],y=C.target.uuid;y in W&&(W[y].dispose(),delete W[y])}}}const V2={[Ff]:Of,[kf]:Hf,[Bf]:Vf,[Qs]:zf,[Of]:Ff,[Hf]:kf,[Vf]:Bf,[zf]:Qs};function G2(t){function e(){let L=!1;const ve=new dt;let X=null;const ee=new dt(0,0,0,0);return{setMask:function(ge){X!==ge&&!L&&(t.colorMask(ge,ge,ge,ge),X=ge)},setLocked:function(ge){L=ge},setClear:function(ge,xe,et,bt,fn){fn===!0&&(ge*=bt,xe*=bt,et*=bt),ve.set(ge,xe,et,bt),ee.equals(ve)===!1&&(t.clearColor(ge,xe,et,bt),ee.copy(ve))},reset:function(){L=!1,X=null,ee.set(-1,0,0,0)}}}function n(){let L=!1,ve=!1,X=null,ee=null,ge=null;return{setReversed:function(xe){ve=xe},setTest:function(xe){xe?he(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(xe){X!==xe&&!L&&(t.depthMask(xe),X=xe)},setFunc:function(xe){if(ve&&(xe=V2[xe]),ee!==xe){switch(xe){case Ff:t.depthFunc(t.NEVER);break;case Of:t.depthFunc(t.ALWAYS);break;case kf:t.depthFunc(t.LESS);break;case Qs:t.depthFunc(t.LEQUAL);break;case Bf:t.depthFunc(t.EQUAL);break;case zf:t.depthFunc(t.GEQUAL);break;case Hf:t.depthFunc(t.GREATER);break;case Vf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=xe}},setLocked:function(xe){L=xe},setClear:function(xe){ge!==xe&&(t.clearDepth(xe),ge=xe)},reset:function(){L=!1,X=null,ee=null,ge=null}}}function i(){let L=!1,ve=null,X=null,ee=null,ge=null,xe=null,et=null,bt=null,fn=null;return{setTest:function(rt){L||(rt?he(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(rt){ve!==rt&&!L&&(t.stencilMask(rt),ve=rt)},setFunc:function(rt,dn,vi){(X!==rt||ee!==dn||ge!==vi)&&(t.stencilFunc(rt,dn,vi),X=rt,ee=dn,ge=vi)},setOp:function(rt,dn,vi){(xe!==rt||et!==dn||bt!==vi)&&(t.stencilOp(rt,dn,vi),xe=rt,et=dn,bt=vi)},setLocked:function(rt){L=rt},setClear:function(rt){fn!==rt&&(t.clearStencil(rt),fn=rt)},reset:function(){L=!1,ve=null,X=null,ee=null,ge=null,xe=null,et=null,bt=null,fn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},d=new WeakMap,h=[],m=null,g=!1,x=null,p=null,u=null,_=null,v=null,S=null,P=null,C=new De(0,0,0),T=0,R=!1,W=null,y=null,w=null,k=null,B=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,V=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(G)[1]),Q=V>=1):G.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Q=V>=2);let D=null,Z={};const J=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),Le=new dt().fromArray(J),Xe=new dt().fromArray(oe);function Y(L,ve,X,ee){const ge=new Uint8Array(4),xe=t.createTexture();t.bindTexture(L,xe),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<X;et++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ve,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(ve+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return xe}const ne={};ne[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(t.DEPTH_TEST),s.setFunc(Qs),je(!1),Ke(Zp),he(t.CULL_FACE),b(fr);function he(L){c[L]!==!0&&(t.enable(L),c[L]=!0)}function me(L){c[L]!==!1&&(t.disable(L),c[L]=!1)}function He(L,ve){return f[L]!==ve?(t.bindFramebuffer(L,ve),f[L]=ve,L===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ve),L===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ue(L,ve){let X=h,ee=!1;if(L){X=d.get(ve),X===void 0&&(X=[],d.set(ve,X));const ge=L.textures;if(X.length!==ge.length||X[0]!==t.COLOR_ATTACHMENT0){for(let xe=0,et=ge.length;xe<et;xe++)X[xe]=t.COLOR_ATTACHMENT0+xe;X.length=ge.length,ee=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,ee=!0);ee&&t.drawBuffers(X)}function qe(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const nt={[Lr]:t.FUNC_ADD,[Wy]:t.FUNC_SUBTRACT,[Xy]:t.FUNC_REVERSE_SUBTRACT};nt[jy]=t.MIN,nt[Yy]=t.MAX;const $e={[qy]:t.ZERO,[$y]:t.ONE,[Ky]:t.SRC_COLOR,[If]:t.SRC_ALPHA,[n1]:t.SRC_ALPHA_SATURATE,[e1]:t.DST_COLOR,[Qy]:t.DST_ALPHA,[Zy]:t.ONE_MINUS_SRC_COLOR,[Nf]:t.ONE_MINUS_SRC_ALPHA,[t1]:t.ONE_MINUS_DST_COLOR,[Jy]:t.ONE_MINUS_DST_ALPHA,[i1]:t.CONSTANT_COLOR,[r1]:t.ONE_MINUS_CONSTANT_COLOR,[s1]:t.CONSTANT_ALPHA,[o1]:t.ONE_MINUS_CONSTANT_ALPHA};function b(L,ve,X,ee,ge,xe,et,bt,fn,rt){if(L===fr){g===!0&&(me(t.BLEND),g=!1);return}if(g===!1&&(he(t.BLEND),g=!0),L!==Gy){if(L!==x||rt!==R){if((p!==Lr||v!==Lr)&&(t.blendEquation(t.FUNC_ADD),p=Lr,v=Lr),rt)switch(L){case Hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qp:t.blendFunc(t.ONE,t.ONE);break;case Jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case em:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case em:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}u=null,_=null,S=null,P=null,C.set(0,0,0),T=0,x=L,R=rt}return}ge=ge||ve,xe=xe||X,et=et||ee,(ve!==p||ge!==v)&&(t.blendEquationSeparate(nt[ve],nt[ge]),p=ve,v=ge),(X!==u||ee!==_||xe!==S||et!==P)&&(t.blendFuncSeparate($e[X],$e[ee],$e[xe],$e[et]),u=X,_=ee,S=xe,P=et),(bt.equals(C)===!1||fn!==T)&&(t.blendColor(bt.r,bt.g,bt.b,fn),C.copy(bt),T=fn),x=L,R=!1}function Gt(L,ve){L.side===Cn?me(t.CULL_FACE):he(t.CULL_FACE);let X=L.side===xn;ve&&(X=!X),je(X),L.blending===Hs&&L.transparent===!1?b(fr):b(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const ee=L.stencilWrite;o.setTest(ee),ee&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ye(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(L){W!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),W=L)}function Ke(L){L!==zy?(he(t.CULL_FACE),L!==y&&(L===Zp?t.cullFace(t.BACK):L===Hy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),y=L}function Ne(L){L!==w&&(Q&&t.lineWidth(L),w=L)}function ye(L,ve,X){L?(he(t.POLYGON_OFFSET_FILL),(k!==ve||B!==X)&&(t.polygonOffset(ve,X),k=ve,B=X)):me(t.POLYGON_OFFSET_FILL)}function ue(L){L?he(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function A(L){L===void 0&&(L=t.TEXTURE0+j-1),D!==L&&(t.activeTexture(L),D=L)}function M(L,ve,X){X===void 0&&(D===null?X=t.TEXTURE0+j-1:X=D);let ee=Z[X];ee===void 0&&(ee={type:void 0,texture:void 0},Z[X]=ee),(ee.type!==L||ee.texture!==ve)&&(D!==X&&(t.activeTexture(X),D=X),t.bindTexture(L,ve||ne[L]),ee.type=L,ee.texture=ve)}function O(){const L=Z[D];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(L){Le.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Le.copy(L))}function we(L){Xe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Xe.copy(L))}function Qe(L,ve){let X=l.get(ve);X===void 0&&(X=new WeakMap,l.set(ve,X));let ee=X.get(L);ee===void 0&&(ee=t.getUniformBlockIndex(ve,L.name),X.set(L,ee))}function Ve(L,ve){const ee=l.get(ve).get(L);a.get(ve)!==ee&&(t.uniformBlockBinding(ve,ee,L.__bindingPointIndex),a.set(ve,ee))}function pt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,Z={},f={},d=new WeakMap,h=[],m=null,g=!1,x=null,p=null,u=null,_=null,v=null,S=null,P=null,C=new De(0,0,0),T=0,R=!1,W=null,y=null,w=null,k=null,B=null,Le.set(0,0,t.canvas.width,t.canvas.height),Xe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:me,bindFramebuffer:He,drawBuffers:Ue,useProgram:qe,setBlending:b,setMaterial:Gt,setFlipSided:je,setCullFace:Ke,setLineWidth:Ne,setPolygonOffset:ye,setScissorTest:ue,activeTexture:A,bindTexture:M,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:te,texImage2D:Ee,texImage3D:Be,updateUBOMapping:Qe,uniformBlockBinding:Ve,texStorage2D:it,texStorage3D:ae,texSubImage2D:$,texSubImage3D:Re,compressedTexSubImage2D:pe,compressedTexSubImage3D:Me,scissor:ze,viewport:we,reset:pt}}function Xm(t,e,n,i){const r=W2(i);switch(n){case b_:return t*e;case L_:return t*e;case U_:return t*e*2;case I_:return t*e/r.components*r.byteLength;case Sh:return t*e/r.components*r.byteLength;case N_:return t*e*2/r.components*r.byteLength;case Mh:return t*e*2/r.components*r.byteLength;case D_:return t*e*3/r.components*r.byteLength;case ii:return t*e*4/r.components*r.byteLength;case Eh:return t*e*4/r.components*r.byteLength;case wl:case Tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Al:case Cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qf:case Kf:return Math.max(t,16)*Math.max(e,8)/4;case Yf:case $f:return Math.max(t,8)*Math.max(e,8)/2;case Zf:case Qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case nd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case id:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case od:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ad:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ld:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case cd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ud:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case fd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Rl:case pd:case md:return Math.ceil(t/4)*Math.ceil(e/4)*16;case F_:case gd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case _d:case vd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function W2(t){switch(t){case Oi:case C_:return{byteLength:1,components:1};case aa:case R_:case ga:return{byteLength:2,components:1};case xh:case yh:return{byteLength:2,components:4};case $r:case vh:case Pi:return{byteLength:4,components:1};case P_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function X2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return m?new OffscreenCanvas(A,M):sc("canvas")}function x(A,M,O){let q=1;const te=ue(A);if((te.width>O||te.height>O)&&(q=O/Math.max(te.width,te.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(q*te.width),Re=Math.floor(q*te.height);d===void 0&&(d=g($,Re));const pe=M?g($,Re):d;return pe.width=$,pe.height=Re,pe.getContext("2d").drawImage(A,0,0,$,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+Re+")."),pe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==zn&&A.minFilter!==ni}function u(A){t.generateMipmap(A)}function _(A,M,O,q,te=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=M;if(M===t.RED&&(O===t.FLOAT&&($=t.R32F),O===t.HALF_FLOAT&&($=t.R16F),O===t.UNSIGNED_BYTE&&($=t.R8)),M===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&($=t.R8UI),O===t.UNSIGNED_SHORT&&($=t.R16UI),O===t.UNSIGNED_INT&&($=t.R32UI),O===t.BYTE&&($=t.R8I),O===t.SHORT&&($=t.R16I),O===t.INT&&($=t.R32I)),M===t.RG&&(O===t.FLOAT&&($=t.RG32F),O===t.HALF_FLOAT&&($=t.RG16F),O===t.UNSIGNED_BYTE&&($=t.RG8)),M===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&($=t.RG8UI),O===t.UNSIGNED_SHORT&&($=t.RG16UI),O===t.UNSIGNED_INT&&($=t.RG32UI),O===t.BYTE&&($=t.RG8I),O===t.SHORT&&($=t.RG16I),O===t.INT&&($=t.RG32I)),M===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&($=t.RGB8UI),O===t.UNSIGNED_SHORT&&($=t.RGB16UI),O===t.UNSIGNED_INT&&($=t.RGB32UI),O===t.BYTE&&($=t.RGB8I),O===t.SHORT&&($=t.RGB16I),O===t.INT&&($=t.RGB32I)),M===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&($=t.RGBA8UI),O===t.UNSIGNED_SHORT&&($=t.RGBA16UI),O===t.UNSIGNED_INT&&($=t.RGBA32UI),O===t.BYTE&&($=t.RGBA8I),O===t.SHORT&&($=t.RGBA16I),O===t.INT&&($=t.RGBA32I)),M===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),M===t.RGBA){const Re=te?tc:lt.getTransfer(q);O===t.FLOAT&&($=t.RGBA32F),O===t.HALF_FLOAT&&($=t.RGBA16F),O===t.UNSIGNED_BYTE&&($=Re===xt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(A,M){let O;return A?M===null||M===$r||M===to?O=t.DEPTH24_STENCIL8:M===Pi?O=t.DEPTH32F_STENCIL8:M===aa&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===$r||M===to?O=t.DEPTH_COMPONENT24:M===Pi?O=t.DEPTH_COMPONENT32F:M===aa&&(O=t.DEPTH_COMPONENT16),O}function S(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==zn&&A.minFilter!==ni?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function P(A){const M=A.target;M.removeEventListener("dispose",P),T(M),M.isVideoTexture&&f.delete(M)}function C(A){const M=A.target;M.removeEventListener("dispose",C),W(M)}function T(A){const M=i.get(A);if(M.__webglInit===void 0)return;const O=A.source,q=h.get(O);if(q){const te=q[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(A),Object.keys(q).length===0&&h.delete(O)}i.remove(A)}function R(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const O=A.source,q=h.get(O);delete q[M.__cacheKey],o.memory.textures--}function W(A){const M=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let te=0;te<M.__webglFramebuffer[q].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[q][te]);else t.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)t.deleteFramebuffer(M.__webglFramebuffer[q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=A.textures;for(let q=0,te=O.length;q<te;q++){const $=i.get(O[q]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(O[q])}i.remove(A)}let y=0;function w(){y=0}function k(){const A=y;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),y+=1,A}function B(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function j(A,M){const O=i.get(A);if(A.isVideoTexture&&Ne(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(O,A,M);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+M)}function Q(A,M){const O=i.get(A);if(A.version>0&&O.__version!==A.version){Xe(O,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+M)}function V(A,M){const O=i.get(A);if(A.version>0&&O.__version!==A.version){Xe(O,A,M);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+M)}function G(A,M){const O=i.get(A);if(A.version>0&&O.__version!==A.version){Y(O,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+M)}const D={[Xf]:t.REPEAT,[Or]:t.CLAMP_TO_EDGE,[jf]:t.MIRRORED_REPEAT},Z={[zn]:t.NEAREST,[m1]:t.NEAREST_MIPMAP_NEAREST,[Oa]:t.NEAREST_MIPMAP_LINEAR,[ni]:t.LINEAR,[ou]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},J={[x1]:t.NEVER,[T1]:t.ALWAYS,[y1]:t.LESS,[O_]:t.LEQUAL,[S1]:t.EQUAL,[w1]:t.GEQUAL,[M1]:t.GREATER,[E1]:t.NOTEQUAL};function oe(A,M){if(M.type===Pi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ni||M.magFilter===ou||M.magFilter===Oa||M.magFilter===kr||M.minFilter===ni||M.minFilter===ou||M.minFilter===Oa||M.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,D[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Z[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Z[M.minFilter]),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===zn||M.minFilter!==Oa&&M.minFilter!==kr||M.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Le(A,M){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",P));const q=M.source;let te=h.get(q);te===void 0&&(te={},h.set(q,te));const $=B(M);if($!==A.__cacheKey){te[$]===void 0&&(te[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),te[$].usedTimes++;const Re=te[A.__cacheKey];Re!==void 0&&(te[A.__cacheKey].usedTimes--,Re.usedTimes===0&&R(M)),A.__cacheKey=$,A.__webglTexture=te[$].texture}return O}function Xe(A,M,O){let q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=t.TEXTURE_3D);const te=Le(A,M),$=M.source;n.bindTexture(q,A.__webglTexture,t.TEXTURE0+O);const Re=i.get($);if($.version!==Re.__version||te===!0){n.activeTexture(t.TEXTURE0+O);const pe=lt.getPrimaries(lt.workingColorSpace),Me=M.colorSpace===Qi?null:lt.getPrimaries(M.colorSpace),it=M.colorSpace===Qi||pe===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ae=x(M.image,!1,r.maxTextureSize);ae=ye(M,ae);const Ee=s.convert(M.format,M.colorSpace),Be=s.convert(M.type);let ze=_(M.internalFormat,Ee,Be,M.colorSpace,M.isVideoTexture);oe(q,M);let we;const Qe=M.mipmaps,Ve=M.isVideoTexture!==!0,pt=Re.__version===void 0||te===!0,L=$.dataReady,ve=S(M,ae);if(M.isDepthTexture)ze=v(M.format===no,M.type),pt&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,ze,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,ze,ae.width,ae.height,0,Ee,Be,null));else if(M.isDataTexture)if(Qe.length>0){Ve&&pt&&n.texStorage2D(t.TEXTURE_2D,ve,ze,Qe[0].width,Qe[0].height);for(let X=0,ee=Qe.length;X<ee;X++)we=Qe[X],Ve?L&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,we.width,we.height,Ee,Be,we.data):n.texImage2D(t.TEXTURE_2D,X,ze,we.width,we.height,0,Ee,Be,we.data);M.generateMipmaps=!1}else Ve?(pt&&n.texStorage2D(t.TEXTURE_2D,ve,ze,ae.width,ae.height),L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,Ee,Be,ae.data)):n.texImage2D(t.TEXTURE_2D,0,ze,ae.width,ae.height,0,Ee,Be,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,ze,Qe[0].width,Qe[0].height,ae.depth);for(let X=0,ee=Qe.length;X<ee;X++)if(we=Qe[X],M.format!==ii)if(Ee!==null)if(Ve){if(L)if(M.layerUpdates.size>0){const ge=Xm(we.width,we.height,M.format,M.type);for(const xe of M.layerUpdates){const et=we.data.subarray(xe*ge/we.data.BYTES_PER_ELEMENT,(xe+1)*ge/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,xe,we.width,we.height,1,Ee,et,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,we.width,we.height,ae.depth,Ee,we.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,ze,we.width,we.height,ae.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,we.width,we.height,ae.depth,Ee,Be,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,ze,we.width,we.height,ae.depth,0,Ee,Be,we.data)}else{Ve&&pt&&n.texStorage2D(t.TEXTURE_2D,ve,ze,Qe[0].width,Qe[0].height);for(let X=0,ee=Qe.length;X<ee;X++)we=Qe[X],M.format!==ii?Ee!==null?Ve?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,we.width,we.height,Ee,we.data):n.compressedTexImage2D(t.TEXTURE_2D,X,ze,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?L&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,we.width,we.height,Ee,Be,we.data):n.texImage2D(t.TEXTURE_2D,X,ze,we.width,we.height,0,Ee,Be,we.data)}else if(M.isDataArrayTexture)if(Ve){if(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,ze,ae.width,ae.height,ae.depth),L)if(M.layerUpdates.size>0){const X=Xm(ae.width,ae.height,M.format,M.type);for(const ee of M.layerUpdates){const ge=ae.data.subarray(ee*X/ae.data.BYTES_PER_ELEMENT,(ee+1)*X/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,ae.width,ae.height,1,Ee,Be,ge)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ee,Be,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ze,ae.width,ae.height,ae.depth,0,Ee,Be,ae.data);else if(M.isData3DTexture)Ve?(pt&&n.texStorage3D(t.TEXTURE_3D,ve,ze,ae.width,ae.height,ae.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ee,Be,ae.data)):n.texImage3D(t.TEXTURE_3D,0,ze,ae.width,ae.height,ae.depth,0,Ee,Be,ae.data);else if(M.isFramebufferTexture){if(pt)if(Ve)n.texStorage2D(t.TEXTURE_2D,ve,ze,ae.width,ae.height);else{let X=ae.width,ee=ae.height;for(let ge=0;ge<ve;ge++)n.texImage2D(t.TEXTURE_2D,ge,ze,X,ee,0,Ee,Be,null),X>>=1,ee>>=1}}else if(Qe.length>0){if(Ve&&pt){const X=ue(Qe[0]);n.texStorage2D(t.TEXTURE_2D,ve,ze,X.width,X.height)}for(let X=0,ee=Qe.length;X<ee;X++)we=Qe[X],Ve?L&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,Ee,Be,we):n.texImage2D(t.TEXTURE_2D,X,ze,Ee,Be,we);M.generateMipmaps=!1}else if(Ve){if(pt){const X=ue(ae);n.texStorage2D(t.TEXTURE_2D,ve,ze,X.width,X.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,Be,ae)}else n.texImage2D(t.TEXTURE_2D,0,ze,Ee,Be,ae);p(M)&&u(q),Re.__version=$.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Y(A,M,O){if(M.image.length!==6)return;const q=Le(A,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+O);const $=i.get(te);if(te.version!==$.__version||q===!0){n.activeTexture(t.TEXTURE0+O);const Re=lt.getPrimaries(lt.workingColorSpace),pe=M.colorSpace===Qi?null:lt.getPrimaries(M.colorSpace),Me=M.colorSpace===Qi||Re===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const it=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let ee=0;ee<6;ee++)!it&&!ae?Ee[ee]=x(M.image[ee],!0,r.maxCubemapSize):Ee[ee]=ae?M.image[ee].image:M.image[ee],Ee[ee]=ye(M,Ee[ee]);const Be=Ee[0],ze=s.convert(M.format,M.colorSpace),we=s.convert(M.type),Qe=_(M.internalFormat,ze,we,M.colorSpace),Ve=M.isVideoTexture!==!0,pt=$.__version===void 0||q===!0,L=te.dataReady;let ve=S(M,Be);oe(t.TEXTURE_CUBE_MAP,M);let X;if(it){Ve&&pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Qe,Be.width,Be.height);for(let ee=0;ee<6;ee++){X=Ee[ee].mipmaps;for(let ge=0;ge<X.length;ge++){const xe=X[ge];M.format!==ii?ze!==null?Ve?L&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,xe.width,xe.height,ze,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Qe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,xe.width,xe.height,ze,we,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Qe,xe.width,xe.height,0,ze,we,xe.data)}}}else{if(X=M.mipmaps,Ve&&pt){X.length>0&&ve++;const ee=ue(Ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){Ve?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ee[ee].width,Ee[ee].height,ze,we,Ee[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,Ee[ee].width,Ee[ee].height,0,ze,we,Ee[ee].data);for(let ge=0;ge<X.length;ge++){const et=X[ge].image[ee].image;Ve?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,et.width,et.height,ze,we,et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Qe,et.width,et.height,0,ze,we,et.data)}}else{Ve?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ze,we,Ee[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,ze,we,Ee[ee]);for(let ge=0;ge<X.length;ge++){const xe=X[ge];Ve?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,ze,we,xe.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Qe,ze,we,xe.image[ee])}}}p(M)&&u(t.TEXTURE_CUBE_MAP),$.__version=te.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ne(A,M,O,q,te,$){const Re=s.convert(O.format,O.colorSpace),pe=s.convert(O.type),Me=_(O.internalFormat,Re,pe,O.colorSpace);if(!i.get(M).__hasExternalTextures){const ae=Math.max(1,M.width>>$),Ee=Math.max(1,M.height>>$);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,$,Me,ae,Ee,M.depth,0,Re,pe,null):n.texImage2D(te,$,Me,ae,Ee,0,Re,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ke(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,te,i.get(O).__webglTexture,0,je(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,te,i.get(O).__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(A,M,O){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer){const q=M.depthTexture,te=q&&q.isDepthTexture?q.type:null,$=v(M.stencilBuffer,te),Re=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=je(M);Ke(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,$,M.width,M.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,$,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,$,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,A)}else{const q=M.textures;for(let te=0;te<q.length;te++){const $=q[te],Re=s.convert($.format,$.colorSpace),pe=s.convert($.type),Me=_($.internalFormat,Re,pe,$.colorSpace),it=je(M);O&&Ke(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,it,Me,M.width,M.height):Ke(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,it,Me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const q=i.get(M.depthTexture).__webglTexture,te=je(M);if(M.depthTexture.format===Vs)Ke(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(M.depthTexture.format===no)Ke(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function He(A){const M=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",te)};q.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=q}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");me(M.__webglFramebuffer,A)}else if(O){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=t.createRenderbuffer(),he(M.__webglDepthbuffer[q],A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,$)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),he(M.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(A,M,O){const q=i.get(A);M!==void 0&&ne(q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&He(A)}function qe(A){const M=A.texture,O=i.get(A),q=i.get(M);A.addEventListener("dispose",C);const te=A.textures,$=A.isWebGLCubeRenderTarget===!0,Re=te.length>1;if(Re||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=M.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[pe]=[];for(let Me=0;Me<M.mipmaps.length;Me++)O.__webglFramebuffer[pe][Me]=t.createFramebuffer()}else O.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)O.__webglFramebuffer[pe]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Re)for(let pe=0,Me=te.length;pe<Me;pe++){const it=i.get(te[pe]);it.__webglTexture===void 0&&(it.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Ke(A)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pe=0;pe<te.length;pe++){const Me=te[pe];O.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[pe]);const it=s.convert(Me.format,Me.colorSpace),ae=s.convert(Me.type),Ee=_(Me.internalFormat,it,ae,Me.colorSpace,A.isXRRenderTarget===!0),Be=je(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,Ee,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,O.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),he(O.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),oe(t.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)ne(O.__webglFramebuffer[pe][Me],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me);else ne(O.__webglFramebuffer[pe],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let pe=0,Me=te.length;pe<Me;pe++){const it=te[pe],ae=i.get(it);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),oe(t.TEXTURE_2D,it),ne(O.__webglFramebuffer,A,it,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),p(it)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,q.__webglTexture),oe(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)ne(O.__webglFramebuffer[Me],A,M,t.COLOR_ATTACHMENT0,pe,Me);else ne(O.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,pe,0);p(M)&&u(pe),n.unbindTexture()}A.depthBuffer&&He(A)}function nt(A){const M=A.textures;for(let O=0,q=M.length;O<q;O++){const te=M[O];if(p(te)){const $=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Re=i.get(te).__webglTexture;n.bindTexture($,Re),u($),n.unbindTexture()}}}const $e=[],b=[];function Gt(A){if(A.samples>0){if(Ke(A)===!1){const M=A.textures,O=A.width,q=A.height;let te=t.COLOR_BUFFER_BIT;const $=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(A),pe=M.length>1;if(pe)for(let Me=0;Me<M.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Me]);const it=i.get(M[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,it,0)}t.blitFramebuffer(0,0,O,q,0,0,O,q,te,t.NEAREST),l===!0&&($e.length=0,b.length=0,$e.push(t.COLOR_ATTACHMENT0+Me),A.depthBuffer&&A.resolveDepthBuffer===!1&&($e.push($),b.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,$e))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let Me=0;Me<M.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Me]);const it=i.get(M[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,it,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function je(A){return Math.min(r.maxSamples,A.samples)}function Ke(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ne(A){const M=o.render.frame;f.get(A)!==M&&(f.set(A,M),A.update())}function ye(A,M){const O=A.colorSpace,q=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==xr&&O!==Qi&&(lt.getTransfer(O)===xt?(q!==ii||te!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=w,this.setTexture2D=j,this.setTexture2DArray=Q,this.setTexture3D=V,this.setTextureCube=G,this.rebindTextures=Ue,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Ke}function j2(t,e){function n(i,r=Qi){let s;const o=lt.getTransfer(r);if(i===Oi)return t.UNSIGNED_BYTE;if(i===xh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===yh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===P_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===C_)return t.BYTE;if(i===R_)return t.SHORT;if(i===aa)return t.UNSIGNED_SHORT;if(i===vh)return t.INT;if(i===$r)return t.UNSIGNED_INT;if(i===Pi)return t.FLOAT;if(i===ga)return t.HALF_FLOAT;if(i===b_)return t.ALPHA;if(i===D_)return t.RGB;if(i===ii)return t.RGBA;if(i===L_)return t.LUMINANCE;if(i===U_)return t.LUMINANCE_ALPHA;if(i===Vs)return t.DEPTH_COMPONENT;if(i===no)return t.DEPTH_STENCIL;if(i===I_)return t.RED;if(i===Sh)return t.RED_INTEGER;if(i===N_)return t.RG;if(i===Mh)return t.RG_INTEGER;if(i===Eh)return t.RGBA_INTEGER;if(i===wl||i===Tl||i===Al||i===Cl)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yf||i===qf||i===$f||i===Kf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$f)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zf||i===Qf||i===Jf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zf||i===Qf)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jf)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===cd||i===ud||i===fd||i===dd||i===hd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ed)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===td)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nd)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===id)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rd)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sd)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===od)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ad)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ld)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cd)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ud)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fd)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dd)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hd)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rl||i===pd||i===md)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Rl)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===md)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===F_||i===gd||i===_d||i===vd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_d)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===to?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Y2 extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Br extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q2={type:"move"};class Iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Br;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const $2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Z2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new yn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ki({vertexShader:$2,fragmentShader:K2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ht(new _i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q2 extends lo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,m=null,g=null;const x=new Z2,p=n.getContextAttributes();let u=null,_=null;const v=[],S=[],P=new Je;let C=null;const T=new An;T.layers.enable(1),T.viewport=new dt;const R=new An;R.layers.enable(2),R.viewport=new dt;const W=[T,R],y=new Y2;y.layers.enable(1),y.layers.enable(2);let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=v[Y];return ne===void 0&&(ne=new Iu,v[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=v[Y];return ne===void 0&&(ne=new Iu,v[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=v[Y];return ne===void 0&&(ne=new Iu,v[Y]=ne),ne.getHandSpace()};function B(Y){const ne=S.indexOf(Y.inputSource);if(ne===-1)return;const he=v[ne];he!==void 0&&(he.update(Y.inputSource,Y.frame,c||o),he.dispatchEvent({type:Y.type,data:Y.inputSource}))}function j(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<v.length;Y++){const ne=S[Y];ne!==null&&(S[Y]=null,v[Y].disconnect(ne))}w=null,k=null,x.reset(),e.setRenderTarget(u),m=null,h=null,d=null,r=null,_=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Kr(m.framebufferWidth,m.framebufferHeight,{format:ii,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ne=null,he=null,me=null;p.depth&&(me=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=p.stencil?no:Vs,he=p.stencil?to:$r);const He={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(He),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Kr(h.textureWidth,h.textureHeight,{format:ii,type:Oi,depthTexture:new $_(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(Y){for(let ne=0;ne<Y.removed.length;ne++){const he=Y.removed[ne],me=S.indexOf(he);me>=0&&(S[me]=null,v[me].disconnect(he))}for(let ne=0;ne<Y.added.length;ne++){const he=Y.added[ne];let me=S.indexOf(he);if(me===-1){for(let Ue=0;Ue<v.length;Ue++)if(Ue>=S.length){S.push(he),me=Ue;break}else if(S[Ue]===null){S[Ue]=he,me=Ue;break}if(me===-1)break}const He=v[me];He&&He.connect(he)}}const V=new N,G=new N;function D(Y,ne,he){V.setFromMatrixPosition(ne.matrixWorld),G.setFromMatrixPosition(he.matrixWorld);const me=V.distanceTo(G),He=ne.projectionMatrix.elements,Ue=he.projectionMatrix.elements,qe=He[14]/(He[10]-1),nt=He[14]/(He[10]+1),$e=(He[9]+1)/He[5],b=(He[9]-1)/He[5],Gt=(He[8]-1)/He[0],je=(Ue[8]+1)/Ue[0],Ke=qe*Gt,Ne=qe*je,ye=me/(-Gt+je),ue=ye*-Gt;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ue),Y.translateZ(ye),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),He[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const A=qe+ye,M=nt+ye,O=Ke-ue,q=Ne+(me-ue),te=$e*nt/M*A,$=b*nt/M*A;Y.projectionMatrix.makePerspective(O,q,te,$,A,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Z(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ne=Y.near,he=Y.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(he=x.depthFar)),y.near=R.near=T.near=ne,y.far=R.far=T.far=he,(w!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,k=y.far);const me=Y.parent,He=y.cameras;Z(y,me);for(let Ue=0;Ue<He.length;Ue++)Z(He[Ue],me);He.length===2?D(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),J(Y,y,me)};function J(Y,ne,he){he===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(he.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=la*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let oe=null;function Le(Y,ne){if(f=ne.getViewerPose(c||o),g=ne,f!==null){const he=f.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let me=!1;he.length!==y.cameras.length&&(y.cameras.length=0,me=!0);for(let Ue=0;Ue<he.length;Ue++){const qe=he[Ue];let nt=null;if(m!==null)nt=m.getViewport(qe);else{const b=d.getViewSubImage(h,qe);nt=b.viewport,Ue===0&&(e.setRenderTargetTextures(_,b.colorTexture,h.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(_))}let $e=W[Ue];$e===void 0&&($e=new An,$e.layers.enable(Ue),$e.viewport=new dt,W[Ue]=$e),$e.matrix.fromArray(qe.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(qe.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(nt.x,nt.y,nt.width,nt.height),Ue===0&&(y.matrix.copy($e.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),me===!0&&y.cameras.push($e)}const He=r.enabledFeatures;if(He&&He.includes("depth-sensing")){const Ue=d.getDepthInformation(he[0]);Ue&&Ue.isValid&&Ue.texture&&x.init(e,Ue,r.renderState)}}for(let he=0;he<v.length;he++){const me=S[he],He=v[he];me!==null&&He!==void 0&&He.update(me,ne,c||o)}oe&&oe(Y,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Xe=new Y_;Xe.setAnimationLoop(Le),this.setAnimationLoop=function(Y){oe=Y},this.dispose=function(){}}}const Ar=new li,J2=new St;function eT(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,W_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,_,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,_,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===xn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===xn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const _=e.get(u),v=_.envMap,S=_.envMapRotation;v&&(p.envMap.value=v,Ar.copy(S),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),p.envMapRotation.value.setFromMatrix4(J2.makeRotationFromEuler(Ar)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,_,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===xn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const _=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=r[_.id];S===void 0&&(g(_),S=f(_),r[_.id]=S,_.addEventListener("dispose",p));const P=v.program;i.updateUBOMapping(_,P);const C=e.render.frame;s[_.id]!==C&&(h(_),s[_.id]=C)}function f(_){const v=d();_.__bindingPointIndex=v;const S=t.createBuffer(),P=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],S=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,T=S.length;C<T;C++){const R=Array.isArray(S[C])?S[C]:[S[C]];for(let W=0,y=R.length;W<y;W++){const w=R[W];if(m(w,C,W,P)===!0){const k=w.__offset,B=Array.isArray(w.value)?w.value:[w.value];let j=0;for(let Q=0;Q<B.length;Q++){const V=B[Q],G=x(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,k+j,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,j),j+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,v,S,P){const C=_.value,T=v+"_"+S;if(P[T]===void 0)return typeof C=="number"||typeof C=="boolean"?P[T]=C:P[T]=C.clone(),!0;{const R=P[T];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return P[T]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(_){const v=_.uniforms;let S=0;const P=16;for(let T=0,R=v.length;T<R;T++){const W=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,w=W.length;y<w;y++){const k=W[y],B=Array.isArray(k.value)?k.value:[k.value];for(let j=0,Q=B.length;j<Q;j++){const V=B[j],G=x(V),D=S%P,Z=D%G.boundary,J=D+Z;S+=Z,J!==0&&P-J<G.storage&&(S+=P-J),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=G.storage}}}const C=S%P;return C>0&&(S+=P-C),_.__size=S,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class nT{constructor(e={}){const{canvas:n=G1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=dr,this.toneMappingExposure=1;const v=this;let S=!1,P=0,C=0,T=null,R=-1,W=null;const y=new dt,w=new dt;let k=null;const B=new De(0);let j=0,Q=n.width,V=n.height,G=1,D=null,Z=null;const J=new dt(0,0,Q,V),oe=new dt(0,0,Q,V);let Le=!1;const Xe=new Ph;let Y=!1,ne=!1;const he=new St,me=new St,He=new N,Ue=new dt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function $e(){return T===null?G:1}let b=i;function Gt(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gh}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",xe,!1),b===null){const U="webgl2";if(b=Gt(U,E),b===null)throw Gt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let je,Ke,Ne,ye,ue,A,M,O,q,te,$,Re,pe,Me,it,ae,Ee,Be,ze,we,Qe,Ve,pt,L;function ve(){je=new aw(b),je.init(),Ve=new j2(b,je),Ke=new tw(b,je,e,Ve),Ne=new G2(b),Ke.reverseDepthBuffer&&Ne.buffers.depth.setReversed(!0),ye=new uw(b),ue=new R2,A=new X2(b,je,Ne,ue,Ke,Ve,ye),M=new iw(v),O=new ow(v),q=new _S(b),pt=new JE(b,q),te=new lw(b,q,ye,pt),$=new dw(b,te,q,ye),ze=new fw(b,Ke,A),ae=new nw(ue),Re=new C2(v,M,O,je,Ke,pt,ae),pe=new eT(v,ue),Me=new b2,it=new F2(je),Be=new QE(v,M,O,Ne,$,h,l),Ee=new H2(v,$,Ke),L=new tT(b,ye,Ke,Ne),we=new ew(b,je,ye),Qe=new cw(b,je,ye),ye.programs=Re.programs,v.capabilities=Ke,v.extensions=je,v.properties=ue,v.renderLists=Me,v.shadowMap=Ee,v.state=Ne,v.info=ye}ve();const X=new Q2(v,b);this.xr=X,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const E=je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(Q,V,!1))},this.getSize=function(E){return E.set(Q,V)},this.setSize=function(E,U,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=E,V=U,n.width=Math.floor(E*G),n.height=Math.floor(U*G),z===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Q*G,V*G).floor()},this.setDrawingBufferSize=function(E,U,z){Q=E,V=U,G=z,n.width=Math.floor(E*z),n.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,U,z,H){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,U,z,H),Ne.viewport(y.copy(J).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,U,z,H){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,U,z,H),Ne.scissor(w.copy(oe).multiplyScalar(G).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(E){Ne.setScissorTest(Le=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(E=!0,U=!0,z=!0){let H=0;if(E){let F=!1;if(T!==null){const le=T.texture.format;F=le===Eh||le===Mh||le===Sh}if(F){const le=T.texture.type,_e=le===Oi||le===$r||le===aa||le===to||le===xh||le===yh,Te=Be.getClearColor(),Ce=Be.getClearAlpha(),Fe=Te.r,Oe=Te.g,Pe=Te.b;_e?(m[0]=Fe,m[1]=Oe,m[2]=Pe,m[3]=Ce,b.clearBufferuiv(b.COLOR,0,m)):(g[0]=Fe,g[1]=Oe,g[2]=Pe,g[3]=Ce,b.clearBufferiv(b.COLOR,0,g))}else H|=b.COLOR_BUFFER_BIT}U&&(H|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(H|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),Me.dispose(),it.dispose(),ue.dispose(),M.dispose(),O.dispose(),$.dispose(),pt.dispose(),L.dispose(),Re.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ih),X.removeEventListener("sessionend",Nh),yr.stop()};function ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=ye.autoReset,U=Ee.enabled,z=Ee.autoUpdate,H=Ee.needsUpdate,F=Ee.type;ve(),ye.autoReset=E,Ee.enabled=U,Ee.autoUpdate=z,Ee.needsUpdate=H,Ee.type=F}function xe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function et(E){const U=E.target;U.removeEventListener("dispose",et),bt(U)}function bt(E){fn(E),ue.remove(E)}function fn(E){const U=ue.get(E).programs;U!==void 0&&(U.forEach(function(z){Re.releaseProgram(z)}),E.isShaderMaterial&&Re.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,H,F,le){U===null&&(U=qe);const _e=F.isMesh&&F.matrixWorld.determinant()<0,Te=lv(E,U,z,H,F);Ne.setMaterial(H,_e);let Ce=z.index,Fe=1;if(H.wireframe===!0){if(Ce=te.getWireframeAttribute(z),Ce===void 0)return;Fe=2}const Oe=z.drawRange,Pe=z.attributes.position;let ct=Oe.start*Fe,gt=(Oe.start+Oe.count)*Fe;le!==null&&(ct=Math.max(ct,le.start*Fe),gt=Math.min(gt,(le.start+le.count)*Fe)),Ce!==null?(ct=Math.max(ct,0),gt=Math.min(gt,Ce.count)):Pe!=null&&(ct=Math.max(ct,0),gt=Math.min(gt,Pe.count));const At=gt-ct;if(At<0||At===1/0)return;pt.setup(F,H,Te,z,Ce);let Sn,ot=we;if(Ce!==null&&(Sn=q.get(Ce),ot=Qe,ot.setIndex(Sn)),F.isMesh)H.wireframe===!0?(Ne.setLineWidth(H.wireframeLinewidth*$e()),ot.setMode(b.LINES)):ot.setMode(b.TRIANGLES);else if(F.isLine){let be=H.linewidth;be===void 0&&(be=1),Ne.setLineWidth(be*$e()),F.isLineSegments?ot.setMode(b.LINES):F.isLineLoop?ot.setMode(b.LINE_LOOP):ot.setMode(b.LINE_STRIP)}else F.isPoints?ot.setMode(b.POINTS):F.isSprite&&ot.setMode(b.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ot.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))ot.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const be=F._multiDrawStarts,Wt=F._multiDrawCounts,at=F._multiDrawCount,Yn=Ce?q.get(Ce).bytesPerElement:1,is=ue.get(H).currentProgram.getUniforms();for(let Mn=0;Mn<at;Mn++)is.setValue(b,"_gl_DrawID",Mn),ot.render(be[Mn]/Yn,Wt[Mn])}else if(F.isInstancedMesh)ot.renderInstances(ct,At,F.count);else if(z.isInstancedBufferGeometry){const be=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Wt=Math.min(z.instanceCount,be);ot.renderInstances(ct,At,Wt)}else ot.render(ct,At)};function rt(E,U,z){E.transparent===!0&&E.side===Cn&&E.forceSinglePass===!1?(E.side=xn,E.needsUpdate=!0,xa(E,U,z),E.side=mr,E.needsUpdate=!0,xa(E,U,z),E.side=Cn):xa(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),p=it.get(z),p.init(U),_.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==z&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const le=F.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){const Te=le[_e];rt(Te,z,F),H.add(Te)}else rt(le,z,F),H.add(le)}),_.pop(),p=null,H},this.compileAsync=function(E,U,z=null){const H=this.compile(E,U,z);return new Promise(F=>{function le(){if(H.forEach(function(_e){ue.get(_e).currentProgram.isReady()&&H.delete(_e)}),H.size===0){F(E);return}setTimeout(le,10)}je.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let dn=null;function vi(E){dn&&dn(E)}function Ih(){yr.stop()}function Nh(){yr.start()}const yr=new Y_;yr.setAnimationLoop(vi),typeof self<"u"&&yr.setContext(self),this.setAnimationLoop=function(E){dn=E,X.setAnimationLoop(E),E===null?yr.stop():yr.start()},X.addEventListener("sessionstart",Ih),X.addEventListener("sessionend",Nh),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,T),p=it.get(E,_.length),p.init(U),_.push(p),me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Xe.setFromProjectionMatrix(me),ne=this.localClippingEnabled,Y=ae.init(this.clippingPlanes,ne),x=Me.get(E,u.length),x.init(),u.push(x),X.enabled===!0&&X.isPresenting===!0){const le=v.xr.getDepthSensingMesh();le!==null&&bc(le,U,-1/0,v.sortObjects)}bc(E,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(D,Z),nt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,nt&&Be.addToRenderList(x,E),this.info.render.frame++,Y===!0&&ae.beginShadows();const z=p.state.shadowsArray;Ee.render(z,E,U),Y===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=x.opaque,F=x.transmissive;if(p.setupLights(),U.isArrayCamera){const le=U.cameras;if(F.length>0)for(let _e=0,Te=le.length;_e<Te;_e++){const Ce=le[_e];Oh(H,F,E,Ce)}nt&&Be.render(E);for(let _e=0,Te=le.length;_e<Te;_e++){const Ce=le[_e];Fh(x,E,Ce,Ce.viewport)}}else F.length>0&&Oh(H,F,E,U),nt&&Be.render(E),Fh(x,E,U);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(v,E,U),pt.resetDefaultState(),R=-1,W=null,_.pop(),_.length>0?(p=_[_.length-1],Y===!0&&ae.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function bc(E,U,z,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Xe.intersectsSprite(E)){H&&Ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(me);const _e=$.update(E),Te=E.material;Te.visible&&x.push(E,_e,Te,z,Ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Xe.intersectsObject(E))){const _e=$.update(E),Te=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ue.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ue.copy(_e.boundingSphere.center)),Ue.applyMatrix4(E.matrixWorld).applyMatrix4(me)),Array.isArray(Te)){const Ce=_e.groups;for(let Fe=0,Oe=Ce.length;Fe<Oe;Fe++){const Pe=Ce[Fe],ct=Te[Pe.materialIndex];ct&&ct.visible&&x.push(E,_e,ct,z,Ue.z,Pe)}}else Te.visible&&x.push(E,_e,Te,z,Ue.z,null)}}const le=E.children;for(let _e=0,Te=le.length;_e<Te;_e++)bc(le[_e],U,z,H)}function Fh(E,U,z,H){const F=E.opaque,le=E.transmissive,_e=E.transparent;p.setupLightsView(z),Y===!0&&ae.setGlobalState(v.clippingPlanes,z),H&&Ne.viewport(y.copy(H)),F.length>0&&va(F,U,z),le.length>0&&va(le,U,z),_e.length>0&&va(_e,U,z),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Oh(E,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Kr(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?ga:Oi,minFilter:kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const le=p.state.transmissionRenderTarget[H.id],_e=H.viewport||y;le.setSize(_e.z,_e.w);const Te=v.getRenderTarget();v.setRenderTarget(le),v.getClearColor(B),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),nt&&Be.render(z);const Ce=v.toneMapping;v.toneMapping=dr;const Fe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),Y===!0&&ae.setGlobalState(v.clippingPlanes,H),va(E,z,H),A.updateMultisampleRenderTarget(le),A.updateRenderTargetMipmap(le),je.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Pe=0,ct=U.length;Pe<ct;Pe++){const gt=U[Pe],At=gt.object,Sn=gt.geometry,ot=gt.material,be=gt.group;if(ot.side===Cn&&At.layers.test(H.layers)){const Wt=ot.side;ot.side=xn,ot.needsUpdate=!0,kh(At,z,H,Sn,ot,be),ot.side=Wt,ot.needsUpdate=!0,Oe=!0}}Oe===!0&&(A.updateMultisampleRenderTarget(le),A.updateRenderTargetMipmap(le))}v.setRenderTarget(Te),v.setClearColor(B,j),Fe!==void 0&&(H.viewport=Fe),v.toneMapping=Ce}function va(E,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let F=0,le=E.length;F<le;F++){const _e=E[F],Te=_e.object,Ce=_e.geometry,Fe=H===null?_e.material:H,Oe=_e.group;Te.layers.test(z.layers)&&kh(Te,U,z,Ce,Fe,Oe)}}function kh(E,U,z,H,F,le){E.onBeforeRender(v,U,z,H,F,le),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,U,z,H,E,le),F.transparent===!0&&F.side===Cn&&F.forceSinglePass===!1?(F.side=xn,F.needsUpdate=!0,v.renderBufferDirect(z,U,H,F,E,le),F.side=mr,F.needsUpdate=!0,v.renderBufferDirect(z,U,H,F,E,le),F.side=Cn):v.renderBufferDirect(z,U,H,F,E,le),E.onAfterRender(v,U,z,H,F,le)}function xa(E,U,z){U.isScene!==!0&&(U=qe);const H=ue.get(E),F=p.state.lights,le=p.state.shadowsArray,_e=F.state.version,Te=Re.getParameters(E,F.state,le,U,z),Ce=Re.getProgramCacheKey(Te);let Fe=H.programs;H.environment=E.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(E.isMeshStandardMaterial?O:M).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",et),Fe=new Map,H.programs=Fe);let Oe=Fe.get(Ce);if(Oe!==void 0){if(H.currentProgram===Oe&&H.lightsStateVersion===_e)return zh(E,Te),Oe}else Te.uniforms=Re.getUniforms(E),E.onBeforeCompile(Te,v),Oe=Re.acquireProgram(Te,Ce),Fe.set(Ce,Oe),H.uniforms=Te.uniforms;const Pe=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=ae.uniform),zh(E,Te),H.needsLights=uv(E),H.lightsStateVersion=_e,H.needsLights&&(Pe.ambientLightColor.value=F.state.ambient,Pe.lightProbe.value=F.state.probe,Pe.directionalLights.value=F.state.directional,Pe.directionalLightShadows.value=F.state.directionalShadow,Pe.spotLights.value=F.state.spot,Pe.spotLightShadows.value=F.state.spotShadow,Pe.rectAreaLights.value=F.state.rectArea,Pe.ltc_1.value=F.state.rectAreaLTC1,Pe.ltc_2.value=F.state.rectAreaLTC2,Pe.pointLights.value=F.state.point,Pe.pointLightShadows.value=F.state.pointShadow,Pe.hemisphereLights.value=F.state.hemi,Pe.directionalShadowMap.value=F.state.directionalShadowMap,Pe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pe.spotShadowMap.value=F.state.spotShadowMap,Pe.spotLightMatrix.value=F.state.spotLightMatrix,Pe.spotLightMap.value=F.state.spotLightMap,Pe.pointShadowMap.value=F.state.pointShadowMap,Pe.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Oe,H.uniformsList=null,Oe}function Bh(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=bl.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function zh(E,U){const z=ue.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function lv(E,U,z,H,F){U.isScene!==!0&&(U=qe),A.resetTextureUnits();const le=U.fog,_e=H.isMeshStandardMaterial?U.environment:null,Te=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:xr,Ce=(H.isMeshStandardMaterial?O:M).get(H.envMap||_e),Fe=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Oe=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!z.morphAttributes.position,ct=!!z.morphAttributes.normal,gt=!!z.morphAttributes.color;let At=dr;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(At=v.toneMapping);const Sn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ot=Sn!==void 0?Sn.length:0,be=ue.get(H),Wt=p.state.lights;if(Y===!0&&(ne===!0||E!==W)){const In=E===W&&H.id===R;ae.setState(H,E,In)}let at=!1;H.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Wt.state.version||be.outputColorSpace!==Te||F.isBatchedMesh&&be.batching===!1||!F.isBatchedMesh&&be.batching===!0||F.isBatchedMesh&&be.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&be.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&be.instancing===!1||!F.isInstancedMesh&&be.instancing===!0||F.isSkinnedMesh&&be.skinning===!1||!F.isSkinnedMesh&&be.skinning===!0||F.isInstancedMesh&&be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&be.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&be.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&be.instancingMorph===!1&&F.morphTexture!==null||be.envMap!==Ce||H.fog===!0&&be.fog!==le||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ae.numPlanes||be.numIntersection!==ae.numIntersection)||be.vertexAlphas!==Fe||be.vertexTangents!==Oe||be.morphTargets!==Pe||be.morphNormals!==ct||be.morphColors!==gt||be.toneMapping!==At||be.morphTargetsCount!==ot)&&(at=!0):(at=!0,be.__version=H.version);let Yn=be.currentProgram;at===!0&&(Yn=xa(H,U,F));let is=!1,Mn=!1,Dc=!1;const Rt=Yn.getUniforms(),zi=be.uniforms;if(Ne.useProgram(Yn.program)&&(is=!0,Mn=!0,Dc=!0),H.id!==R&&(R=H.id,Mn=!0),is||W!==E){Ke.reverseDepthBuffer?(he.copy(E.projectionMatrix),X1(he),j1(he),Rt.setValue(b,"projectionMatrix",he)):Rt.setValue(b,"projectionMatrix",E.projectionMatrix),Rt.setValue(b,"viewMatrix",E.matrixWorldInverse);const In=Rt.map.cameraPosition;In!==void 0&&In.setValue(b,He.setFromMatrixPosition(E.matrixWorld)),Ke.logarithmicDepthBuffer&&Rt.setValue(b,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Rt.setValue(b,"isOrthographic",E.isOrthographicCamera===!0),W!==E&&(W=E,Mn=!0,Dc=!0)}if(F.isSkinnedMesh){Rt.setOptional(b,F,"bindMatrix"),Rt.setOptional(b,F,"bindMatrixInverse");const In=F.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Rt.setValue(b,"boneTexture",In.boneTexture,A))}F.isBatchedMesh&&(Rt.setOptional(b,F,"batchingTexture"),Rt.setValue(b,"batchingTexture",F._matricesTexture,A),Rt.setOptional(b,F,"batchingIdTexture"),Rt.setValue(b,"batchingIdTexture",F._indirectTexture,A),Rt.setOptional(b,F,"batchingColorTexture"),F._colorsTexture!==null&&Rt.setValue(b,"batchingColorTexture",F._colorsTexture,A));const Lc=z.morphAttributes;if((Lc.position!==void 0||Lc.normal!==void 0||Lc.color!==void 0)&&ze.update(F,z,Yn),(Mn||be.receiveShadow!==F.receiveShadow)&&(be.receiveShadow=F.receiveShadow,Rt.setValue(b,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(zi.envMap.value=Ce,zi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(zi.envMapIntensity.value=U.environmentIntensity),Mn&&(Rt.setValue(b,"toneMappingExposure",v.toneMappingExposure),be.needsLights&&cv(zi,Dc),le&&H.fog===!0&&pe.refreshFogUniforms(zi,le),pe.refreshMaterialUniforms(zi,H,G,V,p.state.transmissionRenderTarget[E.id]),bl.upload(b,Bh(be),zi,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(bl.upload(b,Bh(be),zi,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Rt.setValue(b,"center",F.center),Rt.setValue(b,"modelViewMatrix",F.modelViewMatrix),Rt.setValue(b,"normalMatrix",F.normalMatrix),Rt.setValue(b,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const In=H.uniformsGroups;for(let Uc=0,fv=In.length;Uc<fv;Uc++){const Hh=In[Uc];L.update(Hh,Yn),L.bind(Hh,Yn)}}return Yn}function cv(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function uv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,U,z){ue.get(E.texture).__webglTexture=U,ue.get(E.depthTexture).__webglTexture=z;const H=ue.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const z=ue.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,z=0){T=E,P=U,C=z;let H=!0,F=null,le=!1,_e=!1;if(E){const Ce=ue.get(E);if(Ce.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(b.FRAMEBUFFER,null),H=!1;else if(Ce.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Ce.__hasExternalTextures)A.rebindTextures(E,ue.get(E.texture).__webglTexture,ue.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Pe=E.depthTexture;if(Ce.__boundDepthTexture!==Pe){if(Pe!==null&&ue.has(Pe)&&(E.width!==Pe.image.width||E.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(_e=!0);const Oe=ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?F=Oe[U][z]:F=Oe[U],le=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?F=ue.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?F=Oe[z]:F=Oe,y.copy(E.viewport),w.copy(E.scissor),k=E.scissorTest}else y.copy(J).multiplyScalar(G).floor(),w.copy(oe).multiplyScalar(G).floor(),k=Le;if(Ne.bindFramebuffer(b.FRAMEBUFFER,F)&&H&&Ne.drawBuffers(E,F),Ne.viewport(y),Ne.scissor(w),Ne.setScissorTest(k),le){const Ce=ue.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ce.__webglTexture,z)}else if(_e){const Ce=ue.get(E.texture),Fe=U||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ce.__webglTexture,z||0,Fe)}R=-1},this.readRenderTargetPixels=function(E,U,z,H,F,le,_e){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){Ne.bindFramebuffer(b.FRAMEBUFFER,Te);try{const Ce=E.texture,Fe=Ce.format,Oe=Ce.type;if(!Ke.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&z>=0&&z<=E.height-F&&b.readPixels(U,z,H,F,Ve.convert(Fe),Ve.convert(Oe),le)}finally{const Ce=T!==null?ue.get(T).__webglFramebuffer:null;Ne.bindFramebuffer(b.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,U,z,H,F,le,_e){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){const Ce=E.texture,Fe=Ce.format,Oe=Ce.type;if(!Ke.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-H&&z>=0&&z<=E.height-F){Ne.bindFramebuffer(b.FRAMEBUFFER,Te);const Pe=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Pe),b.bufferData(b.PIXEL_PACK_BUFFER,le.byteLength,b.STREAM_READ),b.readPixels(U,z,H,F,Ve.convert(Fe),Ve.convert(Oe),0);const ct=T!==null?ue.get(T).__webglFramebuffer:null;Ne.bindFramebuffer(b.FRAMEBUFFER,ct);const gt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await W1(b,gt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Pe),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,le),b.deleteBuffer(Pe),b.deleteSync(gt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,z=0){E.isTexture!==!0&&(Pl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-z),F=Math.floor(E.image.width*H),le=Math.floor(E.image.height*H),_e=U!==null?U.x:0,Te=U!==null?U.y:0;A.setTexture2D(E,0),b.copyTexSubImage2D(b.TEXTURE_2D,z,0,0,_e,Te,F,le),Ne.unbindTexture()},this.copyTextureToTexture=function(E,U,z=null,H=null,F=0){E.isTexture!==!0&&(Pl("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],U=arguments[2],F=arguments[3]||0,z=null);let le,_e,Te,Ce,Fe,Oe;z!==null?(le=z.max.x-z.min.x,_e=z.max.y-z.min.y,Te=z.min.x,Ce=z.min.y):(le=E.image.width,_e=E.image.height,Te=0,Ce=0),H!==null?(Fe=H.x,Oe=H.y):(Fe=0,Oe=0);const Pe=Ve.convert(U.format),ct=Ve.convert(U.type);A.setTexture2D(U,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);const gt=b.getParameter(b.UNPACK_ROW_LENGTH),At=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Sn=b.getParameter(b.UNPACK_SKIP_PIXELS),ot=b.getParameter(b.UNPACK_SKIP_ROWS),be=b.getParameter(b.UNPACK_SKIP_IMAGES),Wt=E.isCompressedTexture?E.mipmaps[F]:E.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Wt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Wt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Te),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ce),E.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,F,Fe,Oe,le,_e,Pe,ct,Wt.data):E.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,F,Fe,Oe,Wt.width,Wt.height,Pe,Wt.data):b.texSubImage2D(b.TEXTURE_2D,F,Fe,Oe,le,_e,Pe,ct,Wt),b.pixelStorei(b.UNPACK_ROW_LENGTH,gt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,At),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Sn),b.pixelStorei(b.UNPACK_SKIP_ROWS,ot),b.pixelStorei(b.UNPACK_SKIP_IMAGES,be),F===0&&U.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(E,U,z=null,H=null,F=0){E.isTexture!==!0&&(Pl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0);let le,_e,Te,Ce,Fe,Oe,Pe,ct,gt;const At=E.isCompressedTexture?E.mipmaps[F]:E.image;z!==null?(le=z.max.x-z.min.x,_e=z.max.y-z.min.y,Te=z.max.z-z.min.z,Ce=z.min.x,Fe=z.min.y,Oe=z.min.z):(le=At.width,_e=At.height,Te=At.depth,Ce=0,Fe=0,Oe=0),H!==null?(Pe=H.x,ct=H.y,gt=H.z):(Pe=0,ct=0,gt=0);const Sn=Ve.convert(U.format),ot=Ve.convert(U.type);let be;if(U.isData3DTexture)A.setTexture3D(U,0),be=b.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),be=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);const Wt=b.getParameter(b.UNPACK_ROW_LENGTH),at=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Yn=b.getParameter(b.UNPACK_SKIP_PIXELS),is=b.getParameter(b.UNPACK_SKIP_ROWS),Mn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,At.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,At.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ce),b.pixelStorei(b.UNPACK_SKIP_ROWS,Fe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Oe),E.isDataTexture||E.isData3DTexture?b.texSubImage3D(be,F,Pe,ct,gt,le,_e,Te,Sn,ot,At.data):U.isCompressedArrayTexture?b.compressedTexSubImage3D(be,F,Pe,ct,gt,le,_e,Te,Sn,At.data):b.texSubImage3D(be,F,Pe,ct,gt,le,_e,Te,Sn,ot,At),b.pixelStorei(b.UNPACK_ROW_LENGTH,Wt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,at),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Yn),b.pixelStorei(b.UNPACK_SKIP_ROWS,is),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Mn),F===0&&U.generateMipmaps&&b.generateMipmap(be),Ne.unbindTexture()},this.initRenderTarget=function(E){ue.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Ne.unbindTexture()},this.resetState=function(){P=0,C=0,T=null,Ne.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Th?"display-p3":"srgb",n.unpackColorSpace=lt.workingColorSpace===Tc?"display-p3":"srgb"}}class Dh{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=n,this.far=i}clone(){return new Dh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class iT extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ro extends ns{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oc=new N,ac=new N,jm=new St,To=new Ch,rl=new Ac,Nu=new N,Ym=new N;class rT extends Vt{constructor(e=new ci,n=new ro){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)oc.fromBufferAttribute(n,r-1),ac.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=oc.distanceTo(ac);e.setAttribute("lineDistance",new en(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(r),rl.radius+=s,e.ray.intersectsSphere(rl)===!1)return;jm.copy(r).invert(),To.copy(e.ray).applyMatrix4(jm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=m,p=g-1;x<p;x+=c){const u=f.getX(x),_=f.getX(x+1),v=sl(this,e,To,l,u,_);v&&n.push(v)}if(this.isLineLoop){const x=f.getX(g-1),p=f.getX(m),u=sl(this,e,To,l,x,p);u&&n.push(u)}}else{const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=m,p=g-1;x<p;x+=c){const u=sl(this,e,To,l,x,x+1);u&&n.push(u)}if(this.isLineLoop){const x=sl(this,e,To,l,g-1,m);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function sl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(oc.fromBufferAttribute(o,r),ac.fromBufferAttribute(o,s),n.distanceSqToSegment(oc,ac,Nu,Ym)>i)return;Nu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Nu);if(!(l<e.near||l>e.far))return{distance:l,point:Ym.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const qm=new N,$m=new N;class ca extends rT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)qm.fromBufferAttribute(n,r),$m.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+qm.distanceTo($m);e.setAttribute("lineDistance",new en(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gr extends ci{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],m=[];let g=0;const x=[],p=i/2;let u=0;_(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new en(d,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(m,2));function _(){const S=new N,P=new N;let C=0;const T=(n-e)/i;for(let R=0;R<=s;R++){const W=[],y=R/s,w=y*(n-e)+e;for(let k=0;k<=r;k++){const B=k/r,j=B*l+a,Q=Math.sin(j),V=Math.cos(j);P.x=w*Q,P.y=-y*i+p,P.z=w*V,d.push(P.x,P.y,P.z),S.set(Q,T,V).normalize(),h.push(S.x,S.y,S.z),m.push(B,1-y),W.push(g++)}x.push(W)}for(let R=0;R<r;R++)for(let W=0;W<s;W++){const y=x[W][R],w=x[W+1][R],k=x[W+1][R+1],B=x[W][R+1];e>0&&(f.push(y,w,B),C+=3),n>0&&(f.push(w,k,B),C+=3)}c.addGroup(u,C,0),u+=C}function v(S){const P=g,C=new Je,T=new N;let R=0;const W=S===!0?e:n,y=S===!0?1:-1;for(let k=1;k<=r;k++)d.push(0,p*y,0),h.push(0,y,0),m.push(.5,.5),g++;const w=g;for(let k=0;k<=r;k++){const j=k/r*l+a,Q=Math.cos(j),V=Math.sin(j);T.x=W*V,T.y=p*y,T.z=W*Q,d.push(T.x,T.y,T.z),h.push(0,y,0),C.x=Q*.5+.5,C.y=V*.5*y+.5,m.push(C.x,C.y),g++}for(let k=0;k<r;k++){const B=P+k,j=w+k;S===!0?f.push(j,j+1,B):f.push(j+1,j,B),R+=3}c.addGroup(u,R,S===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const ol=new N,al=new N,Fu=new N,ll=new kn;class ua extends ci{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Gs*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},m=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:p,c:u}=ll;if(x.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),ll.getNormal(Fu),d[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const v=(_+1)%3,S=d[_],P=d[v],C=ll[f[_]],T=ll[f[v]],R=`${S}_${P}`,W=`${P}_${S}`;W in h&&h[W]?(Fu.dot(h[W].normal)<=s&&(m.push(C.x,C.y,C.z),m.push(T.x,T.y,T.z)),h[W]=null):R in h||(h[R]={index0:c[_],index1:c[v],normal:Fu.clone()})}}for(const g in h)if(h[g]){const{index0:x,index1:p}=h[g];ol.fromBufferAttribute(a,x),al.fromBufferAttribute(a,p),m.push(ol.x,ol.y,ol.z),m.push(al.x,al.y,al.z)}this.setAttribute("position",new en(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Zr extends ci{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new N,h=new N,m=[],g=[],x=[],p=[];for(let u=0;u<=i;u++){const _=[],v=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const C=P/n;d.x=-e*Math.cos(r+C*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(C+S,1-v),_.push(c++)}f.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const v=f[u][_+1],S=f[u][_],P=f[u+1][_],C=f[u+1][_+1];(u!==0||o>0)&&m.push(v,S,C),(u!==i-1||l<Math.PI)&&m.push(S,P,C)}this.setIndex(m),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(x,3)),this.setAttribute("uv",new en(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ev extends ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tv extends ns{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pc extends Vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class sT extends Pc{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Ou=new St,Km=new N,Zm=new N;class nv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ph,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Km.setFromMatrixPosition(e.matrixWorld),n.position.copy(Km),Zm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Zm),n.updateMatrixWorld(),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qm=new St,Ao=new N,ku=new N;class oT extends nv{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ao.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ao),ku.copy(i.position),ku.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(ku),i.updateMatrixWorld(),r.makeTranslation(-Ao.x,-Ao.y,-Ao.z),Qm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qm)}}class aT extends Pc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new oT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lT extends nv{constructor(){super(new q_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cT extends Pc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new lT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class uT extends Pc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Jm=new St;class fT{constructor(e,n,i=0,r=1/0){this.ray=new Ch(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Rh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Jm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jm),this}intersectObject(e,n=!0,i=[]){return yd(e,this,i,n),i.sort(e0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)yd(e[r],this,i,n);return i.sort(e0),i}}function e0(t,e){return t.distance-e.distance}function yd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)yd(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gh);const dT={cooling:{label:"냉각 계통",color:"#1111FF"},power:{label:"전력 계통",color:"#F3B81C"},it:{label:"IT · 컴퓨트",color:"#D936E7"},mgmt:{label:"감시 · 제어",color:"#30353C"}},t0={"cooling-tower":{cat:"cooling",name:"냉각탑",en:"Cooling Tower",short:"물의 증발잠열을 이용해 시설의 열을 대기로 최종 방출하는 옥외 열방출 설비.",desc:"순환수의 일부를 증발시켜 나머지 물의 온도를 낮추는 증발식 열방출 장치로, 주로 수랭식 칠러의 응축기 열을 제거한다. 외기 습구온도에 근접한 낮은 수온을 만들 수 있어 열방출 효율이 높지만, 증발·블로다운으로 물을 소비하기 때문에 WUE(물 사용 효율)와 수질 관리(레지오넬라, 스케일)가 핵심 운영 이슈다.",facts:["성능 기준: 외기 습구온도(Wet-bulb) 기준 접근온도","물 소비 발생 → WUE 관리 및 보충수(Make-up water) 필요","팬·충진재(Fill)·살수계통으로 구성, 겨울철 결빙 대책 필요"],rel:["chiller","dry-cooler","fws","water-treatment"]},"dry-cooler":{cat:"cooling",name:"드라이쿨러 · 유체냉각기",en:"Dry Cooler / Fluid Cooler",short:"물 소비 없이 공기-액체 열교환으로 고온수 루프의 열을 방출하는 설비.",desc:"밀폐 배관 내 냉각수를 핀 코일과 팬으로 직접 외기에 냉각하는 건식 열방출 장치. 액체냉각 서버는 37~40°C(99°F급)의 높은 공급수온을 허용하므로, 많은 기후대에서 냉동기 없이 드라이쿨러만으로 연중 열방출이 가능하다. 혹서기에는 코일 전면에 물을 분무하는 단열보조(Adiabatic Assist)로 성능을 확보한다.",facts:["고온수 루프(액랭용 FWS)의 주 열방출 수단","물 소비 최소화 → 저(低)WUE 설계에 유리","외기 약 32°C(90°F) 초과 시 단열분무 보조 가동"],rel:["cdu","fws","cooling-tower"]},chiller:{cat:"cooling",name:"칠러 (냉동기)",en:"Chiller",short:"냉동 사이클로 냉수를 생산해 공랭 구역과 저온 부하에 공급하는 설비.",desc:"압축기-응축기-팽창밸브-증발기로 이루어진 냉동 사이클로 냉수(예: 공급 23°C/73°F급)를 만들어 팬월·CRAH 등 공기냉각 계통에 공급한다. 외기가 충분히 낮을 때는 냉동기를 거치지 않고 외기로 직접 냉각하는 프리쿨링(Water-side Economizer) 운전으로 소비전력을 크게 줄일 수 있으며, 일반적으로 N+1 이상 이중화로 구성한다.",facts:["수랭식(냉각탑 연계) 또는 공랭식(일체형) 구분","프리쿨링(이코노마이저) 내장형이 AI DC 표준 추세","이중화: N+1 구성 + 축열조 연계 정전 대비"],rel:["cooling-tower","fws","crah","tes"]},pumps:{cat:"cooling",name:"순환 펌프",en:"FWS Circulation Pumps",short:"FWS 냉각수를 순환시키는 펌프. 듀티/스탠바이(N+1)로 이중화.",desc:"냉각수 계통의 유량과 차압을 유지하는 심장 역할의 설비로, 가변속(VFD) 제어로 부하에 따라 유량을 조절해 반송동력을 절감한다. 정전 시에도 서버 냉각수 흐름이 끊기면 수십 초 내 GPU가 과열되므로, 액체냉각 시설에서는 CDU와 함께 주요 펌프를 UPS 전원에 연결하는 것이 일반적이다.",facts:["가변속(VFD) 운전으로 에너지 절감","듀티/스탠바이 또는 N+1 이중화 구성","액랭 시설: 펌프·CDU를 UPS 전원으로 백업"],rel:["fws","cdu","ups","tes"]},tes:{cat:"cooling",name:"축열조",en:"Thermal Energy Storage Tank",short:"정전 시 칠러 재기동까지 약 5분간 냉각을 유지하는 냉수 저장 탱크.",desc:"냉각수를 대량 저장해 두었다가 정전·설비 고장 시 냉열원으로 사용하는 버퍼 탱크. 발전기가 기동되고 칠러가 재가동될 때까지의 공백(수 분)을 메우는 라이드스루(Ride-through) 기능이 핵심이며, AI 랙은 열밀도가 높아 이 몇 분의 공백도 치명적이기 때문에 액체냉각 시설의 필수 요소로 자리잡았다.",facts:["대표 설계치: 약 5분 내외 냉각 라이드스루","칠러·펌프 재기동 시간의 열적 버퍼 역할","UPS(전력 백업)의 냉각판 대응 개념"],rel:["chiller","pumps","ups","generator"]},"water-treatment":{cat:"cooling",name:"수처리 설비",en:"Water Treatment / Chemical Dosing",short:"냉각수의 pH·부식·미생물을 관리하는 약품주입 및 여과 설비.",desc:"냉각수 배관과 열교환기를 보호하기 위해 수질을 관리하는 설비. FWS는 pH 7~9 유지, 부식억제제 주입, 10μm급 여과가 기본이며, CDU로 들어가는 최종 급수에는 약 500μm 듀플렉스 스트레이너를 둔다. 서버에 직접 닿는 TCS는 훨씬 엄격한 기준(부식억제제+살균제, 낮은 전도도·경도)이 적용된다.",facts:["FWS 기준: pH 7~9, 부식억제제 필수 (ASHRAE 기준)","CDU 급수단 듀플렉스 스트레이너(~500μm)","TCS는 살균제 포함, 더 엄격한 고청정 수질 요구"],rel:["fws","tcs","cdu","cooling-tower"]},cdu:{cat:"cooling",name:"CDU",en:"Coolant Distribution Unit",short:"시설 냉각수(FWS)와 서버 냉각수(TCS)를 열교환기로 분리·중계하는 핵심 장치.",desc:"액체냉각 시스템의 관문 설비. 내부의 판형 열교환기가 시설수(FWS)와 서버측 냉각수(TCS)를 수리적으로 완전히 분리하고, 이중화 펌프·제어밸브·필터·센서로 TCS의 유량·온도·압력을 칩 요구조건에 맞게 정밀 제어한다. 랙 내장형(In-rack), 열(Row) 배치형, 대용량 실외/기계실형(Liquid-to-Liquid) 등으로 구분되며, 정전 대비를 위해 UPS 전원으로 백업한다.",facts:["구성: 판형 열교환기 + 듀티/스탠바이 펌프 + 필터 + 제어밸브","FWS와 TCS의 수질·압력을 격리 (누수 리스크 분리)","형태: In-rack / In-row / 시설형(MW급 Liquid-to-Liquid)"],rel:["tcs","fws","manifold","cold-plate","pumps"]},manifold:{cat:"cooling",name:"매니폴드",en:"Coolant Manifold",short:"TCS 냉각수를 랙 안의 각 서버로 분배·회수하는 분기 배관.",desc:"CDU에서 나온 냉각수를 랙 단위·서버 단위로 나누어 공급(Supply)하고 회수(Return)하는 분배 배관. 랙 후면 수직형 또는 상부 수평형으로 설치되며, 서버 착탈 시 냉각수가 새지 않도록 드립리스 퀵 디스커넥트(QD) 커플링으로 각 서버 콜드플레이트 회로와 연결된다.",facts:["공급/회수(Supply/Return) 한 쌍으로 구성","드립리스 퀵커넥터(QD)로 무누수 착탈","랙 후면 수직형·열 상부 수평형 배치"],rel:["cdu","cold-plate","tcs","gpu-rack"]},"cold-plate":{cat:"cooling",name:"콜드플레이트",en:"Cold Plate (Direct-to-Chip)",short:"GPU·CPU 등 고발열 칩 위에 직접 부착해 액체로 열을 흡수하는 금속 열교환 판.",desc:"미세 유로가 가공된 구리 판을 칩 패키지에 직접 밀착시켜, 내부를 흐르는 냉각수로 열을 흡수하는 Direct-to-Chip(D2C) 액체냉각의 핵심 부품. 공기 대비 물의 열용량이 압도적으로 커서 1,000W가 넘는 최신 GPU도 안정적으로 냉각할 수 있으며, 서버 팬 부하를 크게 줄여 컴퓨팅 전력의 10~15%를 절감하는 효과가 있다.",facts:["GPU·CPU 등 주요 열원에 직접 부착 (D2C 방식)","칩 발열의 대부분을 액체로 직접 회수","서버 팬 전력 절감 → 전체 효율 개선"],rel:["manifold","tcs","gpu-rack","cdu"]},tcs:{cat:"cooling",name:"TCS 루프",en:"Technology Cooling System",short:"CDU 2차측 — 서버 콜드플레이트에 직접 들어가는 고청정 냉각수 계통.",desc:"CDU에서 서버까지 이어지는 서버측 냉각수 루프. 칩에 직접 닿는 물이므로 PG25(프로필렌글리콜 25% + 처리수 75%) 같은 부식억제·동결방지 냉각액을 쓰고, 살균제 포함의 엄격한 수질 기준을 적용한다. 공급 온도는 칩 요구조건에 맞춰 CDU가 제어하며, 회수 온도는 공급보다 약 10~15°C 높아진다.",facts:["냉각액: PG25 등 (부식억제 + 동결방지)","수질: FWS보다 훨씬 엄격 (살균제, 저경도, 저부유물)","온도는 칩 사양 기준으로 CDU가 정밀 제어"],rel:["cdu","cold-plate","manifold","fws","water-treatment"]},fws:{cat:"cooling",name:"FWS 루프",en:"Facility Water System",short:"시설 측 1차 냉각수 계통 — 배관·펌프·밸브·열방출 설비 전체.",desc:"데이터센터 운영자가 관리하는 시설 냉각수 인프라로, CDU·팬월에 냉각수를 공급하고 냉각탑·드라이쿨러·칠러로 열을 배출한다. AI 시설은 보통 두 개의 온도 루프로 나뉜다: 팬월용 저온 냉수 루프(예: 23°C 공급)와 CDU용 고온수 루프(예: 37°C 공급). 고온수 운전이 가능할수록 냉동기 의존도가 줄어 효율이 크게 향상된다.",facts:["이중 루프 구조: 냉수(공랭용) + 고온수(액랭용)","고온수 운전 → 프리쿨링 극대화, PUE 개선","CDU를 경계로 TCS와 수리적으로 분리"],rel:["tcs","cdu","chiller","dry-cooler","cooling-tower","pumps"]},crah:{cat:"cooling",name:"팬월 · 항온항습실",en:"Fan Wall / CRAH Gallery",short:"냉수 코일과 팬으로 데이터홀 공기를 냉각하는 공조 설비. 도면의 항온항습실.",desc:"냉수 코일에 공기를 통과시켜 데이터홀 온도를 유지하는 공기냉각 설비. 벽면 일체형 대형 팬 어레이(팬월)가 최근 표준으로, 도면의 전산동 북측 항온항습실 갤러리에 일렬로 설치되어 전산실로 냉기를 공급한다. 액체냉각 시대에도 랙 발열의 약 10~20%(네트워크 장비, 전원부, 잔여 발열)는 여전히 공기로 배출되므로, 액랭 데이터홀에도 팬월은 반드시 병설된다.",facts:["냉수 코일 + EC팬 어레이 구성, N+1 이중화","액랭 랙에서도 잔여 공랭부하 처리 필수","냉수 대신 냉매를 쓰면 CRAC로 구분"],rel:["fws","containment","chiller"]},containment:{cat:"cooling",name:"열통로 격리",en:"Hot / Cold Aisle Containment",short:"서버의 열기와 냉기가 섞이지 않도록 통로를 물리적으로 분리하는 구조.",desc:"랙 열(Row)을 마주보게 배치하고 뜨거운 배기 통로(Hot Aisle) 또는 차가운 흡기 통로(Cold Aisle)를 패널·도어로 밀폐해 공기 혼합을 차단하는 기법. 공급 온도를 높게 유지할 수 있어 냉방 효율이 크게 개선되며, 공랭 구역 설계의 기본 전제다.",facts:["열기·냉기 혼합(Bypass/Recirculation) 차단","공조 공급온도 상향 → 프리쿨링 시간 확대","핫아일 격리형이 대세 (배기측 밀폐)"],rel:["crah","gpu-rack"]},gis:{cat:"power",name:"GIS (가스절연개폐장치)",en:"Gas-Insulated Switchgear",short:"특고압 수전 계통을 SF6 가스로 절연해 좁은 실내에 수용하는 개폐장치. 도면 공급동 GIS실.",desc:"한전 계통에서 인입된 특고압(22.9kV~154kV)을 차단기·단로기·모선과 함께 SF6 절연가스 탱크 안에 밀폐 수용한 수전 설비. 기중절연(AIS) 대비 설치 면적이 1/10 수준으로 작아 도면처럼 공급동 지하 GIS실에 배치할 수 있으며, 습기·먼지의 영향을 받지 않아 신뢰성이 높다. 여기서 받은 전력이 변압기를 거쳐 전기실 수배전반으로 공급된다.",facts:["특고압 수전의 관문 — 차단기·단로기·모선 일체형","SF6 절연으로 설치 면적 대폭 축소 (옥내화 가능)","후단: 변압기 → 수배전반 → UPS 순서로 급전"],rel:["transformer","switchgear","busway"]},transformer:{cat:"power",name:"변압기 · 수전설비",en:"Transformer / Utility Intake",short:"한전 계통의 특고압을 시설 배전 전압으로 낮추는 수전 설비.",desc:"전력회사 송배전 계통에서 받은 특고압(예: 22.9kV~154kV)을 시설에서 쓰는 저압(예: 380/415/480V)으로 강압하는 설비. AI 데이터센터는 캠퍼스 단위로 수백 MW를 수전하기도 하며, 변압기 용량과 계통 인입 여건이 부지 선정의 최우선 조건이 된다.",facts:["수전(인입) → 변압 → 수배전반으로 이어지는 관문","유입식(옥외)·몰드식(옥내) 구분","AI DC는 전력 인입 용량이 부지 선정의 핵심"],rel:["gis","switchgear","generator","busway"]},switchgear:{cat:"power",name:"수배전반 · 스위치기어",en:"Switchgear",short:"차단기와 보호계전기로 전력을 분배·차단·보호하는 배전반. 도면의 전기실.",desc:"변압기에서 받은 전력을 각 계통으로 분배하고, 고장 전류를 차단기로 신속히 차단해 설비와 인명을 보호하는 배전의 중추. 도면의 지하·지상 전기실-1/2에 열반(Line-up)으로 설치된다. 상용 전원과 비상발전기 사이의 절체(ATS)도 이 단계에서 이루어지며, 이중화 등급(N, N+1, 2N)에 따라 계통 구성이 달라진다.",facts:["차단기 + 보호계전기 + 계측으로 구성","상용/비상 전원 자동절체(ATS) 수행","이중화 토폴로지(N+1, 2N 등)의 골격"],rel:["transformer","generator","ups","busway"]},generator:{cat:"power",name:"비상 발전기",en:"Backup Generator",short:"정전 시 수십 초 내 기동해 시설 전체에 전력을 공급하는 비상 전원. 도면 공급동 비상발전기실.",desc:"상용 전원 상실 시 자동 기동해 데이터센터 전 부하를 담당하는 디젤(또는 가스) 발전기. 기동에서 정격 출력까지 수십 초가 걸리므로 그 공백은 UPS가 메운다. 도면처럼 공급동 발전기실에 병렬 설치되며, 급기(DA)·배기 덕트와 유류탱크실이 함께 배치된다. 현장 연료탱크로 통상 24~72시간 무보급 운전이 가능하도록 설계한다.",facts:["자동 기동 + 부하 인수: 수십 초 이내","연료 저장: 24~72시간 연속운전 기준","UPS(순간 공백)·축열조(냉각 공백)와 한 세트"],rel:["ups","switchgear","tes","battery","fuel"]},ups:{cat:"power",name:"UPS (무정전 전원장치)",en:"Uninterruptible Power Supply",short:"정전 순간부터 발전기 기동까지 끊김 없이 전력을 공급하는 장치.",desc:"배터리에 저장된 에너지를 인버터로 변환해, 정전 발생 순간부터 발전기가 부하를 인수할 때까지의 공백(수 초~수십 초)을 무순단으로 메우는 장치. 전압 강하·서지 같은 전력 품질 문제도 함께 걸러낸다. 액체냉각 시설에서는 IT 부하뿐 아니라 CDU·냉각 펌프까지 UPS로 백업하는 것이 표준이다.",facts:["백업 시간: 통상 수 분 (발전기 인수까지)","더블컨버전 방식이 데이터센터 표준","IT부하 + CDU·펌프까지 백업 (액랭 시설)"],rel:["battery","generator","pdu","cdu"]},battery:{cat:"power",name:"배터리 (축전지실)",en:"Battery / Energy Storage",short:"UPS의 에너지원. 리튬이온 전환으로 공간·수명이 크게 개선. 도면의 축전지실.",desc:"UPS가 사용하는 에너지 저장 장치로, 도면처럼 각 층 전기실 사이의 전용 축전지실에 설치된다. 기존 납축전지에서 리튬이온(LFP 등)으로 빠르게 전환되며 설치 면적과 수명, 충전 속도가 크게 개선되었다. 열폭주 위험 관리를 위한 소화·환기·이격 등 소방 규정이 함께 강화되고 있다.",facts:["리튬이온(LFP) 전환 추세 — 공간 50%↓ 수명 2배↑","수 분 단위 백업 용량으로 설계","열폭주 대비 소방·환기 요건 적용"],rel:["ups","generator","fire-gas"]},busway:{cat:"power",name:"버스웨이",en:"Busway / Busduct",short:"천장을 따라 설치되는 모선 배전 시스템 — 탭오프로 랙·PDU에 급전.",desc:"절연 하우징 안에 동/알루미늄 모선을 넣어 데이터홀 상부를 따라 배전하는 시스템. 원하는 위치에 탭오프 박스를 꽂아 PDU나 랙으로 전력을 내릴 수 있어, 케이블 트레이 방식보다 증설·재배치가 훨씬 유연하다. 랙당 100kW가 넘는 AI 시대에 대전류 배전 수단으로 채택이 급증했다.",facts:["상부 배전 + 플러그인 탭오프 구조","증설·랙 재배치에 유연 (케이블 대비)","대전류(수백~수천 A) 배전에 적합"],rel:["pdu","ups","switchgear","gpu-rack"]},pdu:{cat:"power",name:"PDU (분전반)",en:"Power Distribution Unit",short:"데이터홀 안에서 전력을 회로별로 나누고 차단·계측하는 분전 설비.",desc:"UPS/버스웨이에서 받은 전력을 랙 단위 회로로 분기하고, 회로별 차단기와 전력 계측 기능을 제공하는 데이터홀 내 분전 설비. 랙 안에 설치되어 서버에 직접 콘센트를 제공하는 랙 PDU(rPDU)와 구분된다. 회로별 실시간 계측은 용량 관리와 PUE 산출의 기초 데이터가 된다.",facts:["플로어형 PDU와 랙형 rPDU로 구분","회로별 차단 + 지능형 전력 계측","A/B 이중 전원 급전 구조의 말단"],rel:["busway","ups","gpu-rack","bms"]},fuel:{cat:"power",name:"유류 저장·이송 설비",en:"Fuel Storage & Transfer",short:"발전기 연료를 저장·이송하는 유류탱크실과 유류펌프실. 도면 공급동 서측.",desc:"비상발전기의 연속 운전을 담보하는 연료 인프라. 도면처럼 옥외 유류탱크(대용량 저장)와 발전기실 인접 유류탱크실(일일 서비스 탱크), 이송용 유류펌프실로 구성된다. 대용량 저장조에서 펌프로 각 발전기의 서비스 탱크로 연료를 이송하며, 누유 감지·방유제·소방 설비가 법적으로 요구된다.",facts:["옥외 저장탱크 + 서비스탱크 2단 구성","24~72시간 무보급 연속운전 용량 확보","누유 감지·방유제 등 위험물 안전 규정 적용"],rel:["generator","fire-gas"]},"gpu-rack":{cat:"it",name:"GPU 랙",en:"AI Compute Rack (e.g. NVL72)",short:"수십 개의 GPU를 하나로 묶은 AI 학습·추론용 초고밀도 랙.",desc:"AI 데이터센터의 핵심 부하. 예컨대 NVIDIA GB200/GB300 NVL72는 랙 하나에 72개 GPU와 36개 CPU를 NVLink로 묶어 단일 거대 가속기처럼 동작시키며, 랙당 전력이 120~140kW급에 달한다. 일반 랙(5~15kW)의 10배가 넘는 열밀도 때문에 Direct-to-Chip 액체냉각이 사실상 필수이고, 전력·냉각·바닥하중 설계 전체가 이 랙을 기준으로 결정된다.",facts:["랙당 전력: 120~140kW급 (일반 랙의 10배+)","랙 내 NVLink로 GPU 72개가 단일 도메인 구성","액체냉각(콜드플레이트) 필수 + 잔여 공랭 병행"],rel:["cold-plate","manifold","network","pdu","busway"]},network:{cat:"it",name:"네트워크 패브릭",en:"Network Fabric (InfiniBand / Ethernet)",short:"수천 개 GPU를 하나처럼 묶는 초고속 East-West 통신망.",desc:"AI 학습은 GPU 간 데이터 교환(East-West 트래픽)이 성능을 좌우하므로, 스파인-리프(Spine-Leaf) 구조의 무손실·저지연 패브릭을 별도로 구축한다. InfiniBand(NDR 400Gb/s급) 또는 RoCE 이더넷이 쓰이며, 컴퓨트/스토리지/관리망을 분리하고 GPU별로 스위치 경로를 최적화(rail-optimized)하는 것이 SuperPOD형 설계의 특징이다.",facts:["스파인-리프 토폴로지, 무손실·저지연 지향","InfiniBand NDR 400Gb/s급 또는 RoCE 이더넷","컴퓨트/스토리지/In-band 관리망 분리 구성"],rel:["gpu-rack","storage","mmr","bms"]},storage:{cat:"it",name:"고성능 스토리지",en:"High-Performance Storage",short:"학습 데이터와 체크포인트를 공급·저장하는 병렬 스토리지 시스템.",desc:"수천 개 GPU에 학습 데이터를 끊김 없이 공급하고, 학습 중간 상태(체크포인트)를 초고속으로 기록하는 스토리지 계층. 병렬 파일시스템(Lustre 계열 등)과 NVMe 올플래시가 표준이며, 전용 스토리지 패브릭으로 컴퓨트 트래픽과 분리한다. 체크포인트 쓰기 대역폭이 부족하면 GPU 전체가 대기하므로 성능 설계가 중요하다.",facts:["병렬 파일시스템 + NVMe 올플래시 구성","체크포인트 쓰기 성능이 핵심 지표","전용 스토리지 패브릭으로 트래픽 분리"],rel:["network","gpu-rack"]},mmr:{cat:"it",name:"MMR · MDF (통신실)",en:"Meet-Me Room / Main Distribution Frame",short:"통신사 회선이 인입·상호접속되는 통신 관문. 도면 1층 양측 MMR/MDF실.",desc:"외부 통신사업자의 광케이블이 건물로 인입되어 시설 내부망과 상호접속되는 공간. MDF(주배선반)는 외부 케이블과 내부 배선을 연결하는 분계점이고, MMR(Meet-Me Room)은 복수의 통신사·클라우드 사업자가 교차 연결(Cross-connect)되는 방이다. 도면처럼 동·서 양측에 이중화 배치해 단일 경로 장애를 방지하며, TPS 샤프트를 통해 각 층 전산실로 연결된다.",facts:["통신 인입의 이중화: 동·서 양측 분리 배치","MDF(분계점) → TPS(수직 샤프트) → 전산실 순서","복수 통신사 상호접속(Cross-connect) 지점"],rel:["network","storage"]},bms:{cat:"mgmt",name:"DCIM · BMS (상황실)",en:"DC Infrastructure Mgmt / Building Mgmt System",short:"전력·냉각·환경을 통합 감시하고 제어하는 시설 관제 시스템. 도면 1층 상황실.",desc:"변압기부터 랙까지의 전력 계통(EPMS), 냉각 설비, 온습도·누수 센서를 통합 감시·제어하는 시스템. 도면의 1층 상황실·스크린룸이 관제 거점이다. 냉각수 온도·유량 제어, 설비 기동 시퀀스, 경보 관리가 BMS의 영역이고, 용량 관리·자산 관리·PUE 분석은 DCIM이 담당한다. 액체냉각 도입으로 누수 감지와 CDU 연동 제어의 중요성이 크게 높아졌다.",facts:["EPMS(전력) + 냉각 제어 + 환경 감시 통합","누수 감지(Leak Detection)가 액랭 시대 필수 항목","PUE·용량·자산 관리는 DCIM 영역"],rel:["pdu","cdu","crah","network"]},"fire-gas":{cat:"mgmt",name:"가스계 소화설비",en:"Clean Agent Fire Suppression",short:"물 없이 불활성가스로 전산실 화재를 진압하는 소화 시스템. 도면의 소화가스실.",desc:"물을 쓸 수 없는 전산실·전기실을 보호하기 위해 불활성가스(IG-541 등)나 청정약제를 방출해 산소 농도를 낮춰 소화하는 설비. 도면의 소화가스실에 고압 실린더 뱅크가 설치되고, 각 보호구역까지 배관·노즐로 연결된다. 초기 연기를 감지하는 고감도 공기흡입형 감지기(VESDA)와 연동되며, 리튬이온 배터리실은 열폭주 특성 때문에 별도의 강화 기준이 적용된다.",facts:["불활성가스 방출로 산소 농도 저감 소화","고감도 흡입형 연기감지(VESDA) 연동","축전지실은 열폭주 대비 강화 기준 적용"],rel:["battery","bms"]}},Wn=72,Xn=56,iv=1,hT=[0,13.5,27,40.5],cl=hT.slice();function Qr(t,e,n){return new N(t-Wn,n,e-Xn)}const Ze={scene:null,groupReg:{},pickables:[],wallsFade:[],flows:[],floorMeshes:{b1:[],f1:[],f2:[],roof:[]},slabs:[],currentFloor:null,floorTerms:null};function pT(t){Ze.scene=t,Ze.groupReg={},Ze.pickables=[],Ze.wallsFade=[],Ze.flows=[],Ze.floorMeshes={b1:[],f1:[],f2:[],roof:[]},Ze.slabs=[],Ze.currentFloor=null,Ze.floorTerms=null}function Ut(t){Ze.currentFloor=t}function jn(t){Ze.currentFloor&&Ze.floorMeshes[Ze.currentFloor]&&(t.userData.floor=Ze.currentFloor,Ze.floorMeshes[Ze.currentFloor].push(t))}function n0(t){jn(t)}function de(t,e){if(t&&Ze.groupReg[t])return Ze.groupReg[t];const n=new Br;return n.userData={term:t||null,cat:e||null},Ze.scene.add(n),t&&(Ze.groupReg[t]=n),n}function mT(t){const e=new De(t);return e.multiplyScalar(.86),e}function pn(t,e){const n=new tv({color:new De(t)});return e!==void 0&&(n.transparent=!0,n.opacity=e),n.userData={baseOp:e===void 0?1:e},n}function Lh(t,e,n,i){const r=new ca(new ua(e),new ro({color:mT(i),transparent:!0,opacity:.55}));return r.material.userData={baseOp:.55},r.position.copy(n.position),r.rotation.copy(n.rotation),r.userData.isEdge=!0,t.add(r),jn(r),r}function I(t,e,n,i,r,s,o,a,l){l=l||{};const c=i,f=Math.max(i+o-c,1e-4),d=new Dn(r,f,s),h=new ht(d,pn(a,l.op));return h.position.set(e+r/2-Wn,c+f/2,n+s/2-Xn),l.ry&&(h.rotation.y=l.ry),t.add(h),Ze.pickables.push(h),jn(h),h.userData.hasEdge=!l.noedge,l.noedge||Lh(t,d,h,l.edge||a),h}function Ae(t,e,n,i,r,s,o,a){const l=new Cc({color:new De(o),side:Cn,transparent:a!==void 0,opacity:a===void 0?1:a});l.userData={baseOp:a===void 0?1:a};const c=new ht(new _i(r,s),l);return c.rotation.x=-Math.PI/2,c.position.set(e+r/2-Wn,i,n+s/2-Xn),c.userData.floorTop=!0,t.add(c),jn(c),c}function gT(t,e,n,i,r,s,o){const a=new ki({uniforms:{uColor:{value:new De(o)},uAspect:{value:r/s}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 uColor;uniform float uAspect;varying vec2 vUv;void main(){vec2 p=(vUv-0.5)*vec2(uAspect,1.0);float radius=0.045;vec2 q=abs(p)-(vec2(uAspect*0.5,0.5)-vec2(radius));float sd=length(max(q,0.0))+min(max(q.x,q.y),0.0)-radius;float inset=max(0.0,-sd);float edgeFade=smoothstep(0.0,0.10,inset);gl_FragColor=vec4(uColor,edgeFade*0.54);}",transparent:!0,depthWrite:!1,side:Cn});a.userData={baseOp:1};const l=new ht(new _i(r,s),a);return l.rotation.x=-Math.PI/2,l.position.set(e+r/2-Wn,i,n+s/2-Xn),l.renderOrder=-10,l.userData.floorTop=!0,l.userData.groundSurface=!0,t.add(l),l}const i0={cx:62,cy:53};function _T(t,e,n,i){const r=t.material;if(!r||r.isShaderMaterial||t.isLineSegments)return;const s=e,o=n,a=i;r.transparent=!0;const l=r.userData&&r.userData.baseOp!==void 0?r.userData.baseOp:r.opacity!==void 0?r.opacity:1;r.userData={...r.userData||{},baseOp:Math.min(l,.999)};const c=(i0.cx-Wn).toFixed(4),f=(i0.cy-Xn).toFixed(4);r.onBeforeCompile=d=>{d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vSiteP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ vec4 sw4 = modelMatrix * vec4(position, 1.0); vSiteP = sw4.xz; }`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vSiteP;`).replace("#include <opaque_fragment>","{ vec2 sdp = vSiteP / 1.8; vec2 sq = abs(sdp - vec2("+c+", "+f+")) - vec2("+s.toFixed(1)+", "+o.toFixed(1)+"); float ssd = length(max(sq, vec2(0.0))) + min(max(sq.x, sq.y), 0.0); diffuseColor.a *= (1.0 - smoothstep(-"+a.toFixed(1)+`, 0.0, ssd)); }
#include <opaque_fragment>`)},r.needsUpdate=!0}function st(t,e,n,i,r,s,o,a){a=a||{};const l=i,c=Math.max(i+s-l,1e-4),f=new Gr(a.rTop!==void 0?a.rTop:r,r,c,a.seg||18),d=new ht(f,pn(o,a.op));return d.position.set(e-Wn,l+c/2,n-Xn),t.add(d),Ze.pickables.push(d),jn(d),d}function an(t,e,n,i,r,s){s=s||{};const o=Qr(e[0],e[1],e[2]),a=Qr(n[0],n[1],n[2]),l=new N().subVectors(a,o),c=l.length(),f=new Gr(i,i,c,s.seg||10),d=new ht(f,pn(r,s.op));return d.position.copy(o).add(a).multiplyScalar(.5),d.quaternion.setFromUnitVectors(new N(0,1,0),l.normalize()),t.add(d),s.pick!==!1&&Ze.pickables.push(d),jn(d),d}function vT(t){const e=(t||"").toUpperCase();return e==="#E2793B"||e==="#EF9D76"?"heat":e==="#0FA396"||e==="#57C7BD"?"tcs":e==="#EBB410"||e==="#D9A312"||e==="#F0C744"?"power":e==="#9CC6E4"?"condensate":e==="#3E9CD6"||e==="#42AEE8"?"chilled":null}function xT(t){return t==="condensate"?["#8FC8E8","#BCE0F2"]:t==="chilled"?["#5FB1E8","#93D2F2"]:t==="tcs"?["#57C7BD","#F0A876"]:t==="heat"?["#F5A86B","#E8875C"]:null}function r0(t){const e={h:0,s:0,l:0};return t.getHSL(e),t.setHSL(e.h,Math.min(1,e.s*1.08+.02),Math.max(.3,e.l*.96)),t}function yT(t,e,n,i,r){const s=t.geometry.attributes.position,o=s.count,a=new Float32Array(o*3);t.geometry.computeBoundingBox();const l=t.geometry.boundingBox.min.y,c=t.geometry.boundingBox.max.y,f=Math.max(.001,c-l),d=new De(e),h=new De(n),m=new De;for(let g=0;g<o;g++){const x=(s.getY(g)-l)/f,p=i+(r-i)*x;m.copy(d).lerp(h,Math.max(0,Math.min(1,p))),a[g*3]=m.r,a[g*3+1]=m.g,a[g*3+2]=m.b}t.geometry.setAttribute("color",new oi(a,3)),t.material.vertexColors=!0,t.material.color.set(16777215),t.material.userData.flowGradient=!0,t.material.needsUpdate=!0}function ft(t,e,n,i,r){i=i||.32;const s=[],o=[],a=vT(n);for(let m=0;m<e.length;m++)s.push(Qr(e[m][0],e[m][1],e[m][2]));const l=xT(a),c=Math.max(1,e.length-1);for(let m=0;m<e.length-1;m++){const g=an(t,e[m],e[m+1],i,n,{seg:10});l?yT(g,l[0],l[1],m/c,(m+1)/c):a&&r0(g.material.color),g.userData.flowPart=!0,o.push(g)}for(let m=1;m<e.length-1;m++){const g=l?new De(l[0]).lerp(new De(l[1]),m/c):new De(n);a&&!l&&r0(g);const x=new ht(new Zr(i*1.12,10,10),pn("#ffffff"));x.material.color.copy(g),x.position.copy(s[m]),x.userData.flowPart=!0,t.add(x),jn(x),o.push(x)}if(!a)return;const f=[0];let d=0;for(let m=1;m<s.length;m++)d+=s[m].distanceTo(s[m-1]),f.push(d);const h=[];if(r!==!1||a==="tcs"){const m=Math.max(5,Math.round(d/9)),g=[1,.68,.4,.18];for(let x=0;x<m;x++)for(let p=0;p<g.length;p++){const u=g[p],_=new tv({color:new De(n),emissive:new De(n),emissiveIntensity:.9,transparent:!0,opacity:u,depthWrite:!1,depthTest:!0});_.userData={baseOp:u,flowBaseColor:new De(n)};const v=Math.max(.3,i*(1.35-p*.11)),S=new ht(new Zr(v,10,10),_);S.renderOrder=30,S.userData.flowPart=!0,S.userData.flowParticle=!0,S.userData.flowU=x/m-p*.0085,t.add(S),jn(S),h.push(S)}}Ze.flows.push({vs:s,lens:f,tot:d,dots:h,parts:o,key:a,off:Math.random(),enabled:!0})}function di(t,e,n,i,r,s){st(t,e,n,i,r+.2,.34,s||"#A39E90",{seg:20}),st(t,e,n,i+.17,r*.92,.17,"#F3F4F6",{seg:20});const o=I(t,e-r*.85,n-.2,i+.31,r*1.7,.4,.16,"#8A93A0",{noedge:!0});o.rotation.y=.5;const a=I(t,e-r*.85,n-.2,i+.31,r*1.7,.4,.16,"#8A93A0",{noedge:!0});a.rotation.y=-1.05,st(t,e,n,i+.28,.23,.31,"#66788C",{seg:10})}function tr(t,e,n,i,r,s){const o=[new ht(new Gr(r+.17,r+.17,.31,20),pn("#7FA3C4")),new ht(new Gr(r*.9,r*.9,.16,20),pn("#F2F6FA")),new ht(new Gr(.21,.21,.37,10),pn("#5C7C9E")),new ht(new Dn(r*1.65,.2,.34),pn("#5C7C9E")),new ht(new Dn(r*1.65,.2,.34),pn("#5C7C9E"))];for(let a=0;a<o.length;a++){const l=o[a];l.rotation.x=Math.PI/2,l.position.copy(Qr(e,n,i)),t.add(l),jn(l)}o[3].rotation.y=.6,o[4].rotation.y=-.9}function rv(t,e,n,i,r,s){s=s||"#9AA3AD",I(t,e-.34,n,i,.16,.16,r,s,{noedge:!0}),I(t,e+.18,n,i,.16,.16,r,s,{noedge:!0});for(let o=1;o<r/1.3;o++)I(t,e-.34,n,i+o*1.3,.68,.14,.14,s,{noedge:!0})}function Ie(t,e,n,i,r,s,o,a,l,c){const f=de(null,null),d=c||"#FAFBFD",h=n,m=s*iv,g=new Dn(i,m,r),x=new ht(g,pn(d,l?.45:.95));c||(x.material.emissive=new De("#9a9ca0")),x.material.depthWrite=!l,x.userData.structureMesh=!0,x.position.set(t+i/2-Wn,h+m/2,e+r/2-Xn),f.add(x),jn(x);const p=l?"#DEE2E5":"#C5CBD0",u=new ca(new ua(g),new ro({color:new De(p),transparent:!0,opacity:l?.58:.78,depthTest:!0,depthWrite:!1}));return u.material.userData={baseOp:l?.58:.78},u.position.copy(x.position),u.userData.isEdge=!0,u.userData.structure=!0,u.userData.interiorWall=!!l,f.add(u),jn(u),l||Ze.wallsFade.push({m:x,e:u,n:new N(o,0,a)}),x}function Li(t,e,n,i,r,s,o,a,l,c){const f=c===void 0?.55:c,d=de(null,null),h=n,m=s*iv,g=new Dn(i,m,r),x=new ht(g,pn(a||"#E9EBED",f));x.material.depthWrite=!1,x.userData.structureMesh=!0,x.userData.slabMesh=!0,x.position.set(t+i/2-Wn,h-m/2,e+r/2-Xn),d.add(x),jn(x);const p=Lh(d,g,x,"#969EA6");p.userData.structure=!0;const u=Ae(d,t,e,n+.03,i,r,l||"#E8EAEC",Math.min(.6,f));return Ze.slabs.push({m:x,e:p,top:u,zTop:h,floor:o,baseOp:f}),x}const K={slab:"#EDEFF2",roof:"#EEF0F3",groundTop:"#F2F4F6",slabTop:"#F5F6F8",roofTop:"#F5F6F8",cream:"#F7F2E7",cream2:"#F0E8D6",rackBody:"#6B3B52",rackDoor:"#8A4E6C",tray:"#A9D98B",blue:"#A4C9F2",blueD:"#79A9E6",cdu:"#79C0F2",teal:"#8FD9CB",yel:"#FFD34D",yelD:"#F0B429",purp:"#C9BCF2",gray:"#DDE3E8",steel:"#CFD9E2",wood:"#D9B98F",rose:"#EFC0B4",zoneElec:"#FBE9B8",zoneMech:"#CFE2F5",zoneHall:"#DDE1F8",zoneCrah:"#F7DEEA",zoneOffice:"#F3EDDA",zoneMeet:"#D8F0EC",zoneCore:"#EAEDF0"},re={x0:0,x1:105.3,y0:0,y1:38.6},se={x0:4.2,x1:63.9,y0:54,y1:104},jt={b1:0,f1:13.5,f2:27,roof:40.5},nr=8.7,ke=12.5,vt=13.5;function ST(t){return pT(t),CT(),RT(),PT(),bT(),DT(),UT(),ET(),AT(),TT(),LT(),Ze.floorTerms=MT(),Ze}function MT(){const t={b1:[],f1:[],f2:[],roof:[]};for(const e in Ze.groupReg){const n={};Ze.groupReg[e].traverse(i=>{if(!i.isMesh||i.userData.flowParticle)return;const r=i.userData.floor;!r||!t[r]||n[r]||(n[r]=!0,t[r].push(e))})}return t}const s0=.05,o0=.08;function ET(){Ut(null);const t=de(null,null),e={b1:[0,13.5],f1:[13.5,27],f2:[27,40.5],roof:[40.5,40.5]};for(const r in e){const s=e[r][0],o=e[r][1];for(const a of[re,se]){const l=o>s?new Dn(a.x1-a.x0,o-s,a.y1-a.y0):new _i(a.x1-a.x0,a.y1-a.y0).rotateX(-Math.PI/2),c=new ca(new ua(l),new ro({color:0,transparent:!0,opacity:s0,depthTest:!1,depthWrite:!1}));c.material.userData={baseOp:s0},c.position.set(a.x0+(a.x1-a.x0)/2-Wn,s+(o-s)/2,a.y0+(a.y1-a.y0)/2-Xn),c.renderOrder=60,c.userData.ghostShell=!0,c.userData.shellFloor=r,c.visible=!1,t.add(c)}}const n={x0:-14,y0:-10,w:152,d:126},i=new ca(new ua(new _i(n.w,n.d)),new ro({color:0,transparent:!0,opacity:o0,depthTest:!1,depthWrite:!1}));i.material.userData={baseOp:o0},i.rotation.x=-Math.PI/2,i.position.set(n.x0+n.w/2-Wn,vt+.05,n.y0+n.d/2-Xn),i.renderOrder=60,i.userData.ghostShell=!0,i.userData.shellFloor="ground",i.visible=!1,t.add(i)}const wT="#d7dce4",a0=.55;function TT(){Ut(null);const t=de(null,null),e={x0:31.5,x1:38.5,y0:re.y1,y1:se.y0},n={x0:-14,x1:se.x0,y0:se.y0,y1:se.y1};for(const i in jt)for(const r of i==="b1"||i==="f1"?[re,se,e,n]:[re,se,e]){const s=new _i(r.x1-r.x0,r.y1-r.y0).rotateX(-Math.PI/2),o=new ht(s,new Cc({color:new De(wT),side:Cn,transparent:!0,opacity:a0,depthWrite:!1}));o.material.userData={baseOp:a0},o.position.set(r.x0+(r.x1-r.x0)/2-Wn,jt[i]+.04,r.y0+(r.y1-r.y0)/2-Xn),o.userData.focusFloor=!0,o.userData.floor=i,o.visible=!1,t.add(o)}}function AT(){Ut(null);const t=de(null,null),e={b1:[0,13.5],f1:[13.5,27],f2:[27,40.5],roof:[40.5,40.5]};for(const n in e){const i=e[n][0],r=e[n][1];for(const s of[re,se]){const o=r>i?new Dn(s.x1-s.x0,r-i,s.y1-s.y0):new _i(s.x1-s.x0,s.y1-s.y0).rotateX(-Math.PI/2),a=new ca(new ua(o),new ro({color:new De("#9aa0a6"),transparent:!0,opacity:.7,depthWrite:!1}));a.material.userData={baseOp:.7},a.position.set(s.x0+(s.x1-s.x0)/2-Wn,i+(r-i)/2,s.y0+(s.y1-s.y0)/2-Xn),a.userData.envelope=!0,a.userData.floor=n,a.visible=!1,t.add(a)}}}function CT(){Ut(null);const t="#E9E2D2",e=de(null,null),n=I(e,-14,-10,-1.2,152,126,1.2,K.slab,{noedge:!0});n.userData.underground=!0;const i=Lh(e,n.geometry,n,"#969EA6");i.userData.underground=!0;const r=gT(e,-32,-26,-1.15,190,160,K.groundTop);r.userData.underground=!0;const s=Ae(e,-14,-10,.04,152,126,"#E2E5E9");s.userData.underground=!0;function o(g,x,p,u,_,v){const S=Ie(g+.08,x+.08,-1,p-.16,u-.16,vt+1,_,v,!1,t);S.userData.terrain=!0,S.userData.underground=!0,S.material.depthWrite=!1,S.material.side=Cn,_T(S,76,63,16);const P=Ae(e,g,x,vt+.02,p,u,K.slabTop);P.userData.terrain=!0}o(-14,-10,152,10,0,-1),o(-14,0,14,38.6,-1,0),o(105.3,0,32.7,38.6,1,0),o(-14,38.6,45,15.4,0,1),o(39,38.6,99,15.4,0,1),o(-14,54,se.x0+14,50,-1,0),o(63.9,54,74.1,50,.7,.7),o(-14,104,152,12,0,1);const a=de(null,null);function l(g,x,p,u,_,v){Ae(a,g-.3,x-.3,vt+.05,p*u+.6,_+.6,v);for(let S=0;S<=p;S++)I(a,g+S*u-.06,x,vt,.12,_,.08,"#FFFFFF",{noedge:!0});I(a,g,x+(_-.12),vt,p*u,.12,.08,"#FFFFFF",{noedge:!0})}function c(g,x,p,u,_,v){Ae(a,g-.3,x-.3,vt+.05,_+.6,p*u+.6,v);for(let S=0;S<=p;S++)I(a,g,x+S*u-.06,vt,_,.12,.08,"#FFFFFF",{noedge:!0});I(a,g+(_-.12),x,vt,.12,p*u,.08,"#FFFFFF",{noedge:!0})}const f="#E4E6E9";c(-12,14,6,2.6,5,f),l(3,41.5,4,2.6,5,f),l(16.5,41.5,5,2.6,5,f),l(2,47.6,11,2.6,4.6,f),l(41,41.5,5,3.4,5,"#AFCBEA");for(let g=0;g<5;g++)I(e,42.2+g*3.4,43.6,vt+.02,1,1,.09,"#3F6FB5",{noedge:!0});c(108.2,5,8,3,4.6,"#CDE8D2"),Ae(a,114.5,.5,vt+.04,21.5,37.6,"#E1E4E7");for(const g of[115.5,127]){for(let x=0;x<=14;x++)I(a,g,1.2+x*2.5,vt,9.6,.12,.08,"#FFFFFF",{noedge:!0});I(a,g+4.75,1.2,vt,.12,35,.08,"#FFFFFF",{noedge:!0})}Ae(a,66,52.5,vt+.05,10,63.5,"#DDE0E4"),Ae(a,39.5,46.8,vt+.05,99,5.2,"#DDE0E4");for(let g=0;g<6;g++)I(a,66.8+g*1.5,88,vt,1,4.6,.09,"#FFFFFF",{noedge:!0});Ae(a,64.4,70,vt+.06,1.8,18,"#EFE9DC"),Ae(a,76.5,56,vt+.06,56,46,"#DCE8D8"),Ae(a,80,62,vt+.08,3,36,"#EFE9DC"),Ae(a,80,76,vt+.08,46,3,"#EFE9DC");function d(g,x,p){p=p||1,st(a,g,x,vt,.22*p,1.5*p,"#B99B72",{seg:8});const u=new ht(new Zr(1.5*p,10,8),pn("#A8CFA0"));u.position.copy(Qr(g,x,vt+2.3*p)),a.add(u)}d(88,60),d(98,66,1.2),d(110,62),d(120,72,1.1),d(92,86,1.2),d(104,92),d(116,88,1.3),d(126,98),d(84,100,1.1),d(70,110),d(96,108,1.2),d(124,52),a.traverse(g=>{g.userData.siteDetail=!0}),Ut("b1");const h=de(null,null);function m(g,x,p,u,_,v){const S="#D8DCE0";I(h,g,x,0,.6,u,4.8,S,{noedge:!0}),I(h,g+p-.6,x,0,.6,u,4.8,S,{noedge:!0}),_&&I(h,g,x+u-.6,0,p,.6,4.8,S,{noedge:!0}),v&&I(h,g+p-.6,x,0,.6,u,4.8,S,{noedge:!0});const P=I(h,g,x,4.8,p,u,.5,"#E4E7EA",{op:.55});P.material.depthWrite=!1,Ae(h,g,x,.1,p,u,"#D9DDE2")}m(32.5,re.y1,5,se.y0-re.y1,!1,!1),m(se.x1,58,12,4.5,!0,!0),Ut(null)}function RT(){Ut("b1"),function(){const e=de(null,null);Ae(e,7,3,.08,41,24,K.zoneElec),Ae(e,48,3,.08,18,13,K.zoneElec),Ae(e,48,18,.08,12,10,K.zoneElec),Ae(e,70,3,.08,28,13,K.zoneMech),Ae(e,70,18,.08,28,15,K.zoneMech),Ae(e,0,0,.08,7,38.6,K.zoneCore),Ae(e,98.3,0,.08,7,38.6,K.zoneCore)}(),Ie(re.x0,re.y0,0,re.x1-re.x0,1.1,ke,0,-1,!1),Ie(re.x0,re.y1-1.1,0,re.x1-re.x0,1.1,ke,0,1,!1),Ie(re.x0,1.1,0,1.1,re.y1-2.2,ke,-1,0,!1),Ie(re.x1-1.1,1.1,0,1.1,re.y1-2.2,ke,1,0,!1),Ie(7,1.1,0,.7,36.4,ke,0,0,!0),Ie(98.3,1.1,0,.7,36.4,ke,0,0,!0),Ie(47.2,1.1,0,.7,28,ke,0,0,!0),Ie(66.5,1.1,0,.7,36.4,ke,0,0,!0),Ie(48,16.2,0,18,.7,ke,0,0,!0),Ie(70,16.2,0,28,.7,ke,0,0,!0),function(){const e=de("switchgear","power");for(let n=0;n<3;n++){const i=5.5+n*7;for(let r=0;r<6;r++){const s=10+r*5.6;I(e,s,i,0,4.8,3.1,2.5,K.yel),I(e,s+.4,i+2.95,.8,4,.28,1.4,"#FFEBAF"),I(e,s+.7,i+3.1,2,1.4,.2,.34,"#4A525C",{noedge:!0}),I(e,s+2.9,i+3.1,2,1.1,.2,.34,"#E86A44",{noedge:!0})}}}(),function(){const e=de("transformer","power");for(let n=0;n<3;n++){const i=49.5+n*5.6;I(e,i,5,0,4.4,5,3.2,K.yel);for(let r=0;r<3;r++)I(e,i-.4,5.5+r*1.4,.5,.4,.9,2.2,"#F0B429",{noedge:!0}),I(e,i+4.4,5.5+r*1.4,.5,.4,.9,2.2,"#F0B429",{noedge:!0});for(let r=0;r<3;r++){st(e,i+.9+r*1.3,7.5,3.2,.28,.9,"#EDE7D8");const s=new ht(new Zr(.24,10,10),pn("#E0AC2E"));s.position.copy(Qr(i+.9+r*1.3,7.5,4.3)),e.add(s),n0(s)}I(e,i+.4,11.5,0,3.6,1.6,2.2,"#F2CE6A",{noedge:!0})}}(),function(){const e=de("battery","power");for(let n=0;n<2;n++)for(let i=0;i<2;i++){const r=49+n*5.6,s=19+i*4.6;I(e,r,s,0,4.8,3.4,2.3,K.yel);for(let o=0;o<3;o++)I(e,r+.3,s+3.25,.35+o*.72,4.2,.24,.42,"#FFEBAF");I(e,r,s+3.25,2.35,4.8,.2,.2,"#E86A44",{noedge:!0})}}(),function(){const e=de("chiller","cooling");function n(o,a){I(e,o,a,0,15,4.6,.8,K.steel,{noedge:!0}),an(e,[o+.8,a+1.4,2.2],[o+14.2,a+1.4,2.2],1.15,K.blue,{seg:16}),an(e,[o+.8,a+3.2,3.8],[o+14.2,a+3.2,3.8],1.15,K.blueD,{seg:16}),st(e,o+4.6,a+2.3,4.6,1.1,1.6,"#DCE6EF"),st(e,o+9.5,a+2.3,4.6,1.1,1.6,"#DCE6EF"),ft(e,[[o+4.6,a+2.3,5.7],[o+9.5,a+2.3,5.7]],"#AEC2D4",.3,!1),I(e,o+12.8,a+1,.8,1.6,.4,3.4,"#454E58")}n(71.5,4),n(71.5,10);const i=de("pumps","cooling");function r(o,a){I(i,o-1.1,a-1.1,0,2.2,2.2,.4,K.steel,{noedge:!0}),st(i,o,a,.4,.88,.95,"#9FBFDF"),st(i,o,a,1.35,.68,1.75,"#DCE6EF"),st(i,o,a,3.1,.76,.28,"#9FBFDF"),ft(i,[[o,a,.7],[o-1.9,a,.7]],"#9FB6CC",.32,!1)}r(90,5),r(90,8.8),r(90,12.6);const s=de("water-treatment","cooling");I(s,94,10.5,0,3.4,3,4.2,K.teal),I(s,94.4,13.4,2.6,1.5,.26,1.1,"#454E58"),st(s,95,6.5,0,.65,2.3,"#BFE3DC"),st(s,96.8,6.5,0,.65,2.3,"#BFE3DC"),ft(s,[[94.8,10.5,3.4],[95,7.5,2.6]],"#72B6A8",.22,!1)}(),function(){const e=de("tes","cooling");function n(r,s){st(e,r,s,0,3.4,6.8,"#E7EDF2",{seg:26});const o=new ht(new Zr(3.4,26,12,0,Math.PI*2,0,Math.PI/2),pn("#DDE5EB"));o.position.copy(Qr(r,s,6.8)),e.add(o),Ze.pickables.push(o),n0(o),st(e,r,s,2.2,3.55,.28,"#C5D3DE",{seg:26}),st(e,r,s,4.7,3.55,.28,"#C5D3DE",{seg:26}),rv(e,r+3.9,s,0,6.4)}n(76,25.5),n(88,25.5);const i=de(null,null);for(let r=0;r<8;r++)I(i,71+r*3.2,20,0,1.2,12,.5,"#C9D3DC",{noedge:!0})}(),function(){const e=de(null,null);Ae(e,10,57,.08,30,40,K.zoneElec),Ae(e,se.x0,72,.08,5,14,K.zoneMech),Ae(e,40.5,60,.08,8,12,K.zoneCore),Ae(e,49,57,.08,14,18,"#D9DDE2"),Ae(e,49,80,.08,14,16,"#D9DDE2"),Ae(e,27,se.y1-1,.08,12,5,K.zoneCore),Ie(se.x0,se.y0,0,se.x1-se.x0,1.1,ke,0,-1,!1),Ie(se.x0,se.y1-1.1,0,se.x1-se.x0,1.1,ke,0,1,!1),Ie(se.x0,se.y0+1.1,0,1.1,se.y1-se.y0-2.2,ke,-1,0,!1),Ie(se.x1-1.1,se.y0+1.1,0,1.1,se.y1-se.y0-2.2,ke,1,0,!1),Ie(40,se.y0+1.1,0,.7,44,ke,0,0,!0),Ie(9.4,se.y0+1.1,0,.7,44,ke,0,0,!0);const n=de("gis","power");for(let a=0;a<3;a++){const l=60+a*13;I(n,12,l,0,3.4,6.4,2.6,K.gray),an(n,[16.5,l+1.6,1.9],[30,l+1.6,1.9],1.05,"#D6E0EA",{seg:14}),an(n,[16.5,l+4.8,1.9],[30,l+4.8,1.9],1.05,"#D6E0EA",{seg:14});for(let c=0;c<3;c++)st(n,19+c*4,l+3.2,2.6,.75,1.7,"#CBD8E4",{seg:14}),st(n,19+c*4,l+3.2,4.3,.34,1.1,"#EDE7D8");I(n,31,l+.9,0,2.4,4.6,1.7,"#C2CFDA",{noedge:!0})}const i=de("fuel","power");for(let a=0;a<2;a++){const l=75+a*5;I(i,5,l-1.1,0,2.2,2.2,.4,K.steel,{noedge:!0}),st(i,6.1,l,.4,.8,.9,"#E8C25A"),st(i,6.1,l,1.3,.6,1.5,"#EBDEC0")}function r(a){Ae(e,-9.5,a-1.5,.09,12.5,13,"#DFE3E7");for(let l=0;l<3;l++){const c=a+l*4;an(i,[-8.5,c,1.6],[1.5,c,1.6],1.35,"#EBDEC0",{seg:16}),I(i,-7.5,c-.5,0,1.4,1,.9,"#CFC2A4",{noedge:!0}),I(i,-.5,c-.5,0,1.4,1,.9,"#CFC2A4",{noedge:!0}),st(i,-3.5,c,2.95,.28,.5,"#CFC2A4")}}r(58),r(88),ft(i,[[-3,74,.8],[3,77,.8],[6.1,76.5,.8]],"#DCC998",.22,!1);for(const[a,l]of[[-2.8,74.1],[0,75.5],[3,77],[5.2,76.75]])I(i,a-.35,l-.35,0,.7,.7,.58,"#CFC2A4",{noedge:!0});const o=de(null,null);I(o,41.5,62,0,2.6,5.6,2.4,"#4A5560"),I(o,44.7,62,0,2.6,5.6,2.4,"#4A5560"),I(o,41.8,65.2,1.5,2,.22,.6,"#7FD8C8",{noedge:!0})}()}function PT(){Ut("f1"),Li(re.x0,re.y0,jt.f1,re.x1-re.x0,re.y1-re.y0,1,"f1"),Li(se.x0,se.y0,jt.f1,se.x1-se.x0,se.y1-se.y0,1,"f1"),Li(31.5,re.y1,jt.f1,7,se.y0-re.y1,1,"f1");const t=jt.f1;(function(){const n=de(null,null);Ae(n,7,0,t+.08,91.3,4.2,K.zoneCrah),Ae(n,12,6,t+.08,28,13,K.zoneElec),Ae(n,42,6,t+.08,16,13,K.zoneElec),Ae(n,60,6,t+.08,28,13,K.zoneElec),Ae(n,.6,5,t+.08,6.4,11,K.zoneCore),Ae(n,98.3,5,t+.08,6.4,11,K.zoneCore),Ae(n,20,23,t+.08,14,13,K.zoneCore),Ae(n,36,23,t+.08,12,10,K.zoneCore),Ae(n,62,23,t+.08,32,13,K.zoneOffice),Ae(n,47,70,t+.08,16,16,K.zoneOffice),Ae(n,47,62,t+.08,8,7,K.zoneCore),Ae(n,47,87,t+.08,13,8,K.zoneOffice)})(),Ie(re.x0,re.y0,t,re.x1-re.x0,1.1,ke,0,-1,!1),Ie(re.x0,re.y1-1.1,t,re.x1-re.x0,1.1,ke,0,1,!1),Ie(re.x0,1.1,t,1.1,re.y1-2.2,ke,-1,0,!1),Ie(re.x1-1.1,1.1,t,1.1,re.y1-2.2,ke,1,0,!1),Ie(se.x0,se.y0,t,se.x1-se.x0,1.1,ke,0,-1,!1),Ie(se.x0,se.y1-1.1,t,se.x1-se.x0,1.1,ke,0,1,!1),Ie(se.x0,se.y0+1.1,t,1.1,se.y1-se.y0-2.2,ke,-1,0,!1),Ie(se.x1-1.1,se.y0+1.1,t,1.1,se.y1-se.y0-2.2,ke,1,0,!1),Ie(32,re.y1,t,.6,se.y0-re.y1,ke,0,0,!0),Ie(37.9,re.y1,t,.6,se.y0-re.y1,ke,0,0,!0),Ie(7,4.4,t,91.3,.7,ke,0,0,!0),Ie(10.8,4.9,t,.7,15,ke,0,0,!0),Ie(41,4.9,t,.7,15,ke,0,0,!0),Ie(58.8,4.9,t,.7,15,ke,0,0,!0),Ie(12,20.8,t,82,.7,ke,0,0,!0),function(){const n=de("crah","cooling");for(let i=0;i<8;i++){const r=10+i*11.4;I(n,r,.8,t,6.6,2.8,nr*.82,K.blue),I(n,r+.3,.95,t+nr*.82,6,2.5,.55,"#8FA9C0"),tr(n,r+1.8,3.75,t+1.7,1.1),tr(n,r+4.8,3.75,t+1.7,1.1),tr(n,r+1.8,3.75,t+3.9,1.1),tr(n,r+4.8,3.75,t+3.9,1.1)}}(),function(){const n=de("ups","power");for(let i=0;i<4;i++){const r=14+i*6.4;I(n,r,7,t,5.4,3.1,2.6,K.yel),I(n,r+.5,10,t+1.9,3.4,.26,.55,"#454E58"),I(n,r+.8,10.15,t+2.05,1.2,.18,.26,"#57D0A8",{noedge:!0});for(let s=0;s<4;s++)I(n,r+.5,10.1,t+.4+s*.34,3.4,.16,.22,"#E8C25A",{noedge:!0})}for(let i=0;i<4;i++){const r=14+i*6.4;I(n,r,14.5,t,5.4,3.1,2.6,K.yel),I(n,r+.4,17.45,t+.5,4.4,.26,1.5,"#FFEBAF")}}(),function(){const n=de("battery","power");for(let i=0;i<2;i++)for(let r=0;r<2;r++){const s=43.5+i*6.8,o=7.5+r*6.4;I(n,s,o,t,5.8,3.6,2.4,K.yel);for(let a=0;a<3;a++)I(n,s+.35,o+3.45,t+.35+a*.75,5.1,.24,.44,"#FFEBAF");I(n,s,o+3.45,t+2.45,5.8,.2,.2,"#E86A44",{noedge:!0})}}(),function(){const n=de("switchgear","power");for(let i=0;i<2;i++){const r=7.5+i*7;for(let s=0;s<5;s++){const o=61.5+s*5.3;I(n,o,r,t,4.6,3.1,2.5,K.yel),I(n,o+.4,r+2.95,t+.8,3.8,.26,1.35,"#FFEBAF"),I(n,o+.6,r+3.1,t+1.95,1.3,.2,.33,"#4A525C",{noedge:!0})}}}(),function(){const n=de("mmr","it");for(let i=0;i<3;i++){I(n,1.6,6+i*3.4,t,4.2,2.6,2.5,K.purp);for(let r=0;r<4;r++)I(n,1.75,8.45+i*3.4,t+.4+r*.5,3.9,.2,.3,"#DED8F7")}for(let i=0;i<2;i++){I(n,99.4,6.5+i*3.8,t,4.2,2.8,2.5,K.purp);for(let r=0;r<3;r++)I(n,99.55,9.15+i*3.8,t+.45+r*.55,3.9,.2,.32,"#DED8F7")}}(),function(){const n=de("bms","mgmt");for(let r=0;r<3;r++){const s=I(n,66+r*7.4,24.2,t+1,6.6,.4,3.6,"#4A5560");s.rotation.y=(r-1)*.12,I(n,66.6+r*7.4,24.1,t+1.8,2.1,.22,1.4,r===0?"#7FD8C8":r===1?"#F2C94C":"#E8836A",{noedge:!0,ry:(r-1)*.12}),I(n,69.4+r*7.4,24.1,t+1.6,2.5,.22,1.9,"#8FB4D8",{noedge:!0,ry:(r-1)*.12})}const i=de(null,null);I(i,68,30,t+1.05,10,2.6,.4,K.wood),I(i,69,30.6,t,.9,1.4,2.1,K.wood,{noedge:!0}),I(i,76,30.6,t,.9,1.4,2.1,K.wood,{noedge:!0}),I(i,70.4,30.4,t+1.5,1.7,.2,1.1,"#5E7A94"),I(i,73.2,30.4,t+1.5,1.7,.2,1.1,"#5E7A94")}(),function(){const n=de(null,null);I(n,22,26,t,2.8,2.2,.4,K.wood,{noedge:!0}),I(n,22,26,t+.4,2.8,2.2,1.5,K.cream2),I(n,26,25,t,2.5,2,2.4,K.cream2),I(n,23,31,t,2.2,1.9,1.5,K.cream2),I(n,50,73,t,7.4,2.4,1.1,K.wood),I(n,50.5,79,t,4.6,1.8,.5,K.rose),I(n,50.5,79,t+.5,4.6,.6,.65,K.rose,{noedge:!0}),I(n,56.5,79,t,4.6,1.8,.5,K.rose),I(n,56.5,79.6,t+.5,4.6,.6,.65,K.rose,{noedge:!0}),I(n,50,89.5,t,7,2.6,1.05,K.wood);for(let r=0;r<3;r++)I(n,50.6+r*2.2,88.4,t,.9,.9,1.1,"#8A93A0",{noedge:!0}),I(n,50.6+r*2.2,92.5,t,.9,.9,1.1,"#8A93A0",{noedge:!0});const i=de("fuel","power");for(const r of[58,88])Ae(n,-13.6,r-2,vt+.06,2.9,4,"#DFE3E7"),st(i,-12.2,r,vt,1.05,2.8,"#EBDEC0",{seg:14}),st(i,-12.2,r,vt+2.8,1.1,.22,"#CFC2A4",{seg:14})}()}function bT(){Ut("f2"),Li(re.x0,re.y0,jt.f2,re.x1-re.x0,re.y1-re.y0,1,"f2"),Li(se.x0,se.y0,jt.f2,se.x1-se.x0,se.y1-se.y0,1,"f2"),Li(31.5,re.y1,jt.f2,7,se.y0-re.y1,1,"f2");const t=jt.f2,e=[16,23.6,31.2,38.8,46.4,54,61.6,69.2,76.8];(function(){const i=de(null,null);Ae(i,7,0,t+.08,91.3,4.2,K.zoneCrah),Ae(i,10,5,t+.08,85,16.5,K.zoneHall),Ae(i,12,24,t+.08,21,10,K.zoneElec),Ae(i,34,24,t+.08,17,10,K.zoneElec),Ae(i,52,24,t+.08,7,10,K.zoneCore),Ae(i,60,24,t+.08,17,10,K.zoneElec),Ae(i,78,24,t+.08,16,10,K.zoneElec),Ae(i,.6,5,t+.08,6.4,11,K.zoneCore),Ae(i,98.3,5,t+.08,6.4,11,K.zoneCore),Ae(i,32,re.y1+1,t+.08,6,13,K.zoneCore),Ae(i,9,57,t+.08,29,36,K.zoneMech),Ae(i,se.x0,55,t+.08,5,7,K.zoneMech),Ae(i,se.x0,90,t+.08,5,7,K.zoneMech),Ae(i,43,55,t+.08,20,12,K.zoneOffice),Ae(i,43,67,t+.08,20,21,K.zoneOffice),Ae(i,43,88,t+.08,20,14,K.zoneMeet)})(),Ie(re.x0,re.y0,t,re.x1-re.x0,1.1,ke,0,-1,!1),Ie(re.x0,re.y1-1.1,t,re.x1-re.x0,1.1,ke,0,1,!1),Ie(re.x0,1.1,t,1.1,re.y1-2.2,ke,-1,0,!1),Ie(re.x1-1.1,1.1,t,1.1,re.y1-2.2,ke,1,0,!1),Ie(se.x0,se.y0,t,se.x1-se.x0,1.1,ke,0,-1,!1),Ie(se.x0,se.y1-1.1,t,se.x1-se.x0,1.1,ke,0,1,!1),Ie(se.x0,se.y0+1.1,t,1.1,se.y1-se.y0-2.2,ke,-1,0,!1),Ie(se.x1-1.1,se.y0+1.1,t,1.1,se.y1-se.y0-2.2,ke,1,0,!1),Ie(32,re.y1,t,.6,se.y0-re.y1,ke,0,0,!0),Ie(37.9,re.y1,t,.6,se.y0-re.y1,ke,0,0,!0),Ie(7,4.4,t,91.3,.7,ke,0,0,!0),Ie(12,22.4,t,82,.7,ke,0,0,!0),Ie(7,1.8,t,.7,35,ke,0,0,!0),Ie(97.6,1.8,t,.7,35,ke,0,0,!0),Ie(42.3,se.y0+1.1,t,.7,48,ke,0,0,!0),function(){const i=de("crah","cooling");for(let r=0;r<10;r++){const s=8.6+r*9.1;I(i,s,.8,t,6.4,2.8,nr*.82,K.blue),I(i,s+.3,.95,t+nr*.82,5.8,2.5,.55,"#8FA9C0"),tr(i,s+1.7,3.75,t+1.7,1.1),tr(i,s+4.7,3.75,t+1.7,1.1),tr(i,s+1.7,3.75,t+3.9,1.1),tr(i,s+4.7,3.75,t+3.9,1.1)}}(),function(){const i=de("gpu-rack","it");for(const o of e)for(const a of[-1,1]){const l=o+(a>0?.78:-1.93);for(let c=0;c<6;c++){const f=6+c*2.25;I(i,l,f,t,1.15,1.9,2.6,K.rackBody),I(i,a>0?l-.06:l+1.15,f+.15,t+.2,.06,1.6,2.2,K.rackDoor,{noedge:!0}),I(i,a>0?l-.04:l+1.17,f+1.55,t+2.42,.05,.16,.12,"#5FE3A8",{noedge:!0})}I(i,l+(a>0,.42),6,t+2.95,.3,6*2.25-.35,.1,K.tray,{noedge:!0})}const r=de("storage","it");for(let o=0;o<4;o++){I(r,83+o%2*3.2,7+Math.floor(o/2)*4.4,t,2.6,2.9,2.6,K.purp);for(let a=0;a<4;a++)I(r,83.15+o%2*3.2,9.75+Math.floor(o/2)*4.4,t+.4+a*.55,2.3,.2,.3,"#DED8F7")}const s=de("network","it");for(let o=0;o<4;o++){I(s,90.5+o%2*3.2,7+Math.floor(o/2)*4.4,t,2.6,2.9,2.6,K.purp);for(let a=0;a<3;a++)I(s,90.65+o%2*3.2,9.75+Math.floor(o/2)*4.4,t+.35+a*.5,2.3,.2,.22,"#7A6CC9",{noedge:!0});I(s,90.65+o%2*3.2,9.75+Math.floor(o/2)*4.4,t+2.15,2.3,.2,.36,"#DED8F7")}}(),function(){const i=de("containment","cooling");for(const r of e)I(i,r-.78,5.7,t+3.1,1.56,6*2.25+.4,.12,"#CFE4F0",{op:.28}),I(i,r-.78,5.6,t+2.6,1.56,.1,.5,"#CFE4F0",{op:.24}),I(i,r-.78,5.7+6*2.25+.3,t+2.6,1.56,.1,.5,"#CFE4F0",{op:.24})}(),function(){const i=de("cdu","cooling");for(let s=0;s<5;s++){const o=20+s*12;I(i,o,22.6,t,3,2.4,2.4,K.cdu),I(i,o+.3,24.9,t+1.8,1.2,.2,.4,"#454E58"),an(i,[o+.8,25,t+.9],[o+.8,25.5,t+.9],.24,"#0FA396",{seg:10}),an(i,[o+1.8,25,t+.9],[o+1.8,25.5,t+.9],.24,"#E2793B",{seg:10})}const r=de("cold-plate","cooling");I(r,e[2]+.9,11,t+2.62,.5,.7,.5,"#0FA396")}(),function(){const i=de("ups","power");for(let a=0;a<3;a++){const l=14+a*6.2;I(i,l,25,t,5.2,3.1,2.6,K.yel),I(i,l+.5,28,t+1.9,3.2,.26,.55,"#454E58"),I(i,l+.8,28.15,t+2.05,1.2,.18,.26,"#57D0A8",{noedge:!0})}const r=de("battery","power");for(const a of[35.5,41.7,61.5,67.7]){I(r,a,25,t,5.2,3.4,2.3,K.yel);for(let l=0;l<3;l++)I(r,a+.3,28.25,t+.35+l*.72,4.6,.24,.42,"#FFEBAF");I(r,a,28.25,t+2.35,5.2,.2,.2,"#E86A44",{noedge:!0})}const s=de("switchgear","power");for(let a=0;a<2;a++){const l=79+a*5.4;I(s,l,25,t,4.6,3.1,2.5,K.yel),I(s,l+.4,27.95,t+.8,3.8,.26,1.35,"#FFEBAF")}const o=de("pdu","power");for(let a=0;a<2;a++){const l=89.5+a*4.4;I(o,l,25,t,3.6,3,2.5,K.yel);for(let c=0;c<3;c++)I(o,l+.4,27.85,t+.5+c*.5,2.8,.18,.32,"#E8C25A",{noedge:!0});an(o,[l+1,27.9,t+2.2],[l+1,28.2,t+2.2],.5,"#FFEBAF",{seg:14})}}(),function(){const i=de("busway","power");for(const r of[8,16]){I(i,14,r-.55,t+5.1,66,1.1,1,K.yel);for(const s of e)I(i,s-.7,r-.7,t+4.6,1.4,1.4,.6,K.yelD),ft(i,[[s,r,t+4.7],[s,r,t+3.1]],"#EBB410",.2,!1)}}(),function(){const i=de("fire-gas","mgmt");for(let r=0;r<6;r++){const s=33+r%3*1.5,o=42+Math.floor(r/3)*2.2;st(i,s,o,t,.58,3.2,"#F7CE55"),st(i,s,o,t+3.2,.24,.5,"#A39E90")}I(i,33,47.5,t,4,2.6,2.2,"#DDE3E8")}(),function(){const i=de("generator","power");function r(a,l){I(i,a,l,t,12,5.2,.9,"#CFC2A4",{noedge:!0}),I(i,a+.3,l+.2,t+.9,2.6,4.8,5.4,"#F5C542");for(let c=0;c<4;c++)I(i,a+.15,l+.6+c*1.05,t+1.6,.18,.7,4.2,"#D9A93C",{noedge:!0});I(i,a+3.2,l+.5,t+.9,5,4.2,4.2,K.yel),an(i,[a+8.6,l+2.6,t+3],[a+11.4,l+2.6,t+3],1.5,"#F7CE55",{seg:16}),st(i,a+11.4,l+2.6,t+3,.5,.24,"#E0AC2E"),an(i,[a+3.7,l+.9,t+5.8],[a+7.6,l+.9,t+5.8],.55,"#AFB6BD",{seg:12}),ft(i,[[a+7.6,l+.9,t+5.8],[a+8.4,l+.9,t+5.8],[a+8.4,l+.9,t+7.2]],"#8E8B82",.3,!1),I(i,a+4.8,l+4.8,t+5.3,2,.24,1.2,"#454E58")}r(11,60),r(24,60),r(11,78),r(24,78);const s=de(null,null);for(let a=0;a<7;a++)I(s,9.3,57+a*5.4,t+1+a%2*.8,.3,4,3,"#C6CDD3",{noedge:!0});I(s,16,55.2,t,10,1.6,4.5,"#DDE3E8",{op:.85}),I(s,16,93.2,t,10,1.6,4.5,"#DDE3E8",{op:.85});const o=de("fuel","power");for(const a of[56,91])st(o,6.6,a+2.5,t,1.6,4.4,"#EBDEC0",{seg:16}),st(o,6.6,a+2.5,t+4.4,1.66,.3,"#DCC998",{seg:16}),ft(o,[[6.6,a+2.5,t+1],[10.5,a+4,t+1]],"#DCC998",.2,!1)}(),function(){const i=de(null,null);I(i,46,58,t,8,2.2,1.05,K.wood),I(i,47,58.4,t+1.1,1.6,.2,1,"#5E7A94"),I(i,50.5,58.4,t+1.1,1.6,.2,1,"#5E7A94"),I(i,47.5,61,t,1,1,1.1,"#8A93A0",{noedge:!0}),I(i,51,61,t,1,1,1.1,"#8A93A0",{noedge:!0});for(let r=0;r<3;r++)I(i,46,69+r*6.4,t,8,2.2,1.05,K.wood),I(i,47,69.4+r*6.4,t+1.1,1.6,.2,1,"#5E7A94"),I(i,50.5,69.4+r*6.4,t+1.1,1.6,.2,1,"#5E7A94"),I(i,47.5,72+r*6.4,t,1,1,1.1,"#8A93A0",{noedge:!0}),I(i,51,72+r*6.4,t,1,1,1.1,"#8A93A0",{noedge:!0});Ie(43,87.6,t,20,.5,nr*.7,0,0,!0),Ie(53,88,t,.5,14,nr*.7,0,0,!0);for(const r of[45,55.5]){I(i,r,92,t,6.4,2.8,1.05,K.wood);for(let s=0;s<3;s++)I(i,r+.5+s*2.1,90.8,t,.9,.9,1.1,"#8A93A0",{noedge:!0}),I(i,r+.5+s*2.1,95.2,t,.9,.9,1.1,"#8A93A0",{noedge:!0})}}()}function DT(){Ut("roof"),Li(re.x0,re.y0,jt.roof,re.x1-re.x0,re.y1-re.y0,1,"roof",K.roof,K.roofTop,.8),Li(se.x0,se.y0,jt.roof,se.x1-se.x0,se.y1-se.y0,1,"roof",K.roof,K.roofTop,.62),Li(31.5,re.y1,jt.roof,7,se.y0-re.y1,1,"roof",K.roof,K.roofTop,.62);const t=jt.roof;(function(){const n=de(null,null);I(n,re.x0,re.y0,t,re.x1-re.x0,.5,1.1,K.roof,{noedge:!0}),I(n,re.x0,re.y1-.5,t,re.x1-re.x0,.5,1.1,K.roof,{noedge:!0}),I(n,re.x0,re.y0,t,.5,re.y1-re.y0,1.1,K.roof,{noedge:!0}),I(n,re.x1-.5,re.y0,t,.5,re.y1-re.y0,1.1,K.roof,{noedge:!0})})(),function(){const n=de("cooling-tower","cooling");function i(r,s){I(n,r,s,t,10,8,1.4,"#EAE2D2"),I(n,r+.3,s+.3,t+1.4,9.4,7.4,4.2,K.cream2);for(let o=0;o<4;o++)I(n,r+.6,s+7.5,t+1.8+o*.85,8.8,.22,.34,"#DCCFB4",{noedge:!0}),I(n,r+9.5,s+.6,t+1.8+o*.85,.22,6.8,.34,"#D4C7AC",{noedge:!0});I(n,r,s,t+5.6,10,8,.7,K.cream),di(n,r+2.7,s+2.4,t+6.3,1.4),di(n,r+7.3,s+2.4,t+6.3,1.4),di(n,r+2.7,s+5.7,t+6.3,1.4),di(n,r+7.3,s+5.7,t+6.3,1.4),rv(n,r+10.3,s+4,t,6.2)}i(12,7),i(26,7),i(40,7)}(),function(){const n=de("dry-cooler","cooling");function i(r,s){I(n,r,s,t,7.4,1.5,.85,K.steel,{noedge:!0});const o=I(n,r+.55,s+.4,t+.55,6.3,.4,3.7,"#F2D9B8");o.rotation.x=-.42;const a=I(n,r+.55,s+4.85,t+.55,6.3,.4,3.7,"#F2D9B8");a.rotation.x=.42,I(n,r+.3,s+.3,t+3.4,6.8,4.9,.42,K.cream2),di(n,r+2,s+2.7,t+3.85,1.2,"#B08A62"),di(n,r+5.4,s+2.7,t+3.85,1.2,"#B08A62")}i(62,7),i(72,7),i(82,7)}(),function(){const n=de(null,null);I(n,62,22,t,7,5.4,2.6,K.cream2),di(n,65.5,24.7,t+2.6,1.4),I(n,74,22.5,t,6,4.6,2,K.cream2);for(let i=0;i<3;i++)I(n,74.3,27,t+.4+i*.55,5.4,.2,.22,"#D4C7AC",{noedge:!0});for(const i of[62,80])I(n,16,i,t,4,4,1,K.cream2),di(n,18,i+2,t+1,1.3)}()}function LT(){Ut("b1"),function(){const e=de("gis","power");ft(e,[[24,66,1.8],[35,58,1.8],[35,40,1.8],[35,24,2.2],[28,14,2.6]],"#EBB410",.34)}(),function(){const e=de("switchgear","power");ft(e,[[26,14,2.6],[44,14,2.6],[51,10,3]],"#EBB410",.3,!1),ft(e,[[56,10,3],[76,30,3],[101.5,30,3],[101.5,30,29.5],[93,27,29.5]],"#EBB410",.34),ft(e,[[24,8,2.8],[3.6,8,2.8],[3.6,8,16.1],[15,8.5,16.1]],"#EBB410",.3)}(),function(){const e=de("fws","cooling");ft(e,[[17,12,42.1],[17,33,42.1],[96,33,42.1],[96,33,3.6],[86,12,3.9]],"#9CC6E4",.42)}(),function(){const e=de("fws","cooling");ft(e,[[80,6,2.4],[60,2.5,2.4],[9.5,2.5,2.4],[9.5,2.5,30.9],[94,2.5,30.9]],"#3E9CD6",.42),Ut("f1"),ft(e,[[9.5,2.5,17.4],[94,2.5,17.4]],"#3E9CD6",.3);for(const n of[16,39,62,85])ft(e,[[n,2.5,17.4],[n,2.5,15.7]],"#3E9CD6",.2,!1);Ut("f2");for(const n of[16,39,62,85])ft(e,[[n,2.5,30.9],[n,2.5,29.2]],"#3E9CD6",.2,!1)}(),Ut("f2"),function(){const e=de("fws","cooling");ft(e,[[21,25.6,29.7],[60,25.6,29.7],[96.5,25.6,29.7],[96.5,25.6,42.1],[96.5,9,42.1],[90,9,42.1]],"#E2793B",.42)}(),function(){const e=de("tcs","cooling"),n=de("manifold","cooling"),i=[16,23.6,31.2,38.8,46.4,54,61.6,69.2,76.8];for(let r=0;r<5;r++){const s=21.5+r*12;ft(e,[[s,22.6,29.4],[s,20.8,30.5]],"#0FA396",.26,!1)}ft(e,[[16,20.8,30.5],[76.8,20.8,30.5]],"#0FA396",.28);for(const r of i)ft(n,[[r,20.8,30.5],[r,6,30.5]],"#0FA396",.22,!1)}(),function(){const e=de("busway","power");ft(e,[[80,24.5,29.8],[80,16,32.6],[16,16,32.6]],"#EBB410",.28),ft(e,[[80,24.5,29.8],[80,8,32.6],[16,8,32.6]],"#EBB410",.28)}(),function(){const e=de("generator","power");ft(e,[[23,60,33.6],[35,52,33.6],[35,40,33.6],[80,40,33.6],[101.5,33,33.6],[101.5,30,29.8]],"#EBB410",.3)}(),Ut(null)}function UT(){Ut("b1"),function(){const e=de("switchgear","power");for(const s of[7,14,21]){I(e,9.5,s-.5,4.4,35,1,.16,K.tray,{noedge:!0});for(let o=0;o<8;o++)I(e,10.5+o*4.4,s-.5,4.1,.16,1,.3,"#8FA083",{noedge:!0})}const n=de("pumps","cooling");ft(n,[[87.6,4.5,1.2],[87.6,13.5,1.2]],"#9FB6CC",.34,!1);for(const s of[5,8.8,12.6])ft(n,[[87.6,s,1.2],[88.9,s,.9]],"#9FB6CC",.24,!1),st(n,87.6,s,1.7,.28,.5,"#5C7C9E");const i=de(null,null);an(i,[71.5,21.2,1.15],[95.5,21.2,1.15],.34,"#C4D6E4",{seg:12,pick:!1}),an(i,[71.5,22.6,1.15],[95.5,22.6,1.15],.34,"#E8C9AF",{seg:12,pick:!1});const r=de("gis","power");Ae(r,34.6,59,.12,1.1,39,"#C8CFD8"),Ae(r,37.2,59,.12,1.1,39,"#C8CFD8")}(),function(){Ut("f1");const e=jt.f1,n=de("crah","cooling");I(n,8,.9,e+nr*.82+.85,96,2.2,1.4,"#D3DEE8",{op:.92});for(let s=0;s<8;s++){const o=10+s*11.4;I(n,o+2.5,1.2,e+nr*.82+.55,1.6,1.6,.32,"#B9CAD9",{noedge:!0})}const i=de("ups","power");for(const s of[8.6,16.1]){I(i,13.4,s-.5,e+4.2,27,1,.16,K.tray,{noedge:!0});for(let o=0;o<6;o++)I(i,14.6+o*4.4,s-.5,e+3.9,.16,1,.3,"#8FA083",{noedge:!0})}const r=de(null,null);I(r,30.5,27.5,e,1.5,2.6,1.1,"#E8A33D"),I(r,30.7,28,e+1.1,1.1,1.3,.9,"#4A5560"),I(r,30.35,30.1,e+.2,1.8,.16,.14,"#8A93A0",{noedge:!0}),I(r,30.35,30.35,e+.2,1.8,.16,.14,"#8A93A0",{noedge:!0}),I(r,27,30.5,e,2.4,2,.35,K.wood,{noedge:!0}),I(r,27,30.5,e+.35,2.4,2,1.1,K.cream2),I(r,47.6,71,e,.4,2.6,2.3,"#30353C"),I(r,47.55,71.4,e+.9,.5,1.8,1,"#7FD8C8",{noedge:!0});for(const s of[69.4,84.6])I(r,60.8,s,e,1.3,1.3,.75,"#C9D3DC",{noedge:!0}),st(r,61.45,s+.65,e+.75,.5,1.3,"#A8CFA0",{seg:10})}(),function(){Ut("f2");const e=jt.f2,n=[16,23.6,31.2,38.8,46.4,54,61.6,69.2,76.8],i=de("pdu","power");for(const a of n)I(i,a-.75,19.85,e,1.5,1.3,2.2,K.gray),I(i,a-.45,21.1,e+1.5,.9,.14,.4,"#454E58",{noedge:!0});const r=de("network","it");I(r,14,11.6,e+4.5,66,.8,.14,"#B9AEE0",{noedge:!0});for(const a of n)I(r,a-.4,11.5,e+4.2,.8,1,.3,"#9D8FD4",{noedge:!0});const s=de("fire-gas","mgmt");for(const a of[33,34.5])st(s,a,46.6,e,.58,3.2,"#F7CE55"),st(s,a,46.6,e+3.2,.24,.5,"#A39E90");ft(s,[[33,42,e+3.9],[36,42,e+3.9],[36,46.6,e+3.9]],"#C9B98A",.16,!1);const o=de(null,null);Ae(o,10,68.5,e+.1,27,1.6,"#E9D9A8"),Ae(o,10,86.5,e+.1,27,1.6,"#E9D9A8")}(),function(){Ut("roof");const e=jt.roof,n=de(null,null),i={x0:14,y0:21,w:30,dpt:12,h:2.6};for(let s=0;s<4;s++)for(let o=0;o<2;o++)I(n,i.x0+1+s*((i.w-2.6)/3),i.y0+1+o*(i.dpt-2.6),e,.6,.6,i.h,"#9AA5B1",{noedge:!0});I(n,i.x0,i.y0,e+i.h,i.w,.55,.5,"#8A96A3",{noedge:!0}),I(n,i.x0,i.y0+i.dpt-.55,e+i.h,i.w,.55,.5,"#8A96A3",{noedge:!0}),I(n,i.x0,i.y0,e+i.h,.55,i.dpt,.5,"#8A96A3",{noedge:!0}),I(n,i.x0+i.w-.55,i.y0,e+i.h,.55,i.dpt,.5,"#8A96A3",{noedge:!0}),Ae(n,i.x0,i.y0,e+i.h+.52,i.w,i.dpt,"#CBD4DC",.96);for(let s=0;s<3;s++){const o=i.x0+1.6+s*9.6;I(n,o,i.y0+2,e+i.h+.55,8,5.2,2.4,"#CFE0EE"),an(n,[o+.8,i.y0+3.2,e+i.h+1.4],[o+7.2,i.y0+3.2,e+i.h+1.4],.75,K.blue,{seg:14}),an(n,[o+.8,i.y0+5.6,e+i.h+2.2],[o+7.2,i.y0+5.6,e+i.h+2.2],.75,K.blueD,{seg:14}),di(n,o+2.2,i.y0+4.6,e+i.h+2.95,1.05),di(n,o+5.8,i.y0+4.6,e+i.h+2.95,1.05)}const r=de("cooling-tower","cooling");ft(r,[[13,16.8,e+1.2],[49,16.8,e+1.2]],"#9CC6E4",.3,!1);for(const s of[17,31,45])ft(r,[[s,16.8,e+1.2],[s,15.2,e+1.6]],"#9CC6E4",.22,!1)}(),Ut(null)}const IT=[["cooling-tower",[31,11,47.7]],["dry-cooler",[75.5,9.5,45]],["crah",[50,2.2,32.6]],["gpu-rack",[24.4,12,30.4]],["containment",[46.4,12,30.4]],["cold-plate",[32.4,11.3,29.9]],["manifold",[23.6,8,30.7]],["tcs",[46,20.8,30.6]],["cdu",[45.5,23.8,29.4]],["busway",[47,8,32.7]],["pdu",[91.5,26.5,29.6]],["storage",[85.5,9,29.8]],["network",[93,9,29.8]],["mmr",[3.8,9,16.1]],["ups",[24,8.6,16.3]],["battery",[50,10.6,16.1]],["switchgear",[26,12,2.6]],["transformer",[55,7.5,3.4]],["gis",[22,73,3.2]],["fuel",[-3.5,62,3.6]],["generator",[17,82,32]],["fire-gas",[34.8,43,30.8]],["chiller",[79,6.3,2.6]],["pumps",[90,8.8,2.2]],["water-treatment",[95.7,12,4.4]],["tes",[82,25.5,7]],["fws",[9.5,2.5,21.5]],["bms",[77,25,17.3]]],Sd={b1:cl[0],f1:cl[1],f2:cl[2],roof:cl[3]},Co=["b1","f1","f2","roof"],NT={b1:"B1",f1:"1F",f2:"2F",roof:"PH"},sv=72,ov=56,av=(t,e)=>[t-sv,e-ov],Cr={floor:{color:9870241,roughness:.34,metalness:.03},wallOut:{color:13028304,roughness:.88,metalness:0},wallIn:{color:14080734,roughness:.84,metalness:0},rack:{color:3817286,roughness:.52,metalness:.32},steel:{color:12173254,roughness:.3,metalness:.8},cabinet:{color:13883346,roughness:.52,metalness:.35},insulate:{color:15198699,roughness:.92,metalness:0}},zr={h:0,s:0,l:0},ul=new N;function FT(t){const e=t.geometry;return e?(e.boundingBox||e.computeBoundingBox(),e.boundingBox.getSize(ul),Math.max(ul.x,ul.y,ul.z)):99}function OT(t){const e=t.userData;if(e.slabMesh||e.floorTop)return{spec:Cr.floor,force:!0};if(e.structureMesh)return{spec:e.interiorWall?Cr.wallIn:Cr.wallOut,force:!0};t.material.color.getHSL(zr);const i=zr.l;let r;i<.34?r=Cr.rack:i<.62?r=Cr.steel:i<.84?r=Cr.cabinet:r=Cr.insulate;const s=FT(t),o=zr.s>.55&&i>.35&&i<.7&&s<.6;return{spec:r,force:!1,desat:o?.55:.06}}function kT(t){const e=new Br;e.name="facility",t.add(e),ST(e),e.traverse(o=>{if(o.isLineSegments||o.isLine){o.visible=!1;return}if(!o.isMesh||!o.material||!o.material.color)return;const a=o.userData;if(a.ghostShell||a.envelope||a.focusFloor||a.terrain&&!a.floorTop||a.groundSurface){o.visible=!1,a.hideAlways=!0;return}const c=OT(o),f=new ev({color:o.material.color.clone(),roughness:c.spec.roughness,metalness:c.spec.metalness});c.force?f.color.setHex(c.spec.color):(f.color.getHSL(zr),f.color.setHSL(zr.h,zr.s*c.desat,zr.l),f.color.lerp(new De(c.spec.color),.45)),o.material=f,o.material.transparent=!1,o.material.opacity=1,o.material.depthWrite=!0,o.castShadow=!1,o.receiveShadow=!0});const n=BT(t,e),i=HT(e),r=VT(),s=GT(e);return{root:e,colliders:i,terms:r,aimMeshes:s,lights:n}}function BT(t,e){const n=new sT(15660025,12172997,.85);t.add(n);const i=new uT(15265267,.28);t.add(i);const r=new cT(16777215,.25);r.position.set(60,120,40),t.add(r);const s=new Br;s.name="ceilingLights",e.add(s);const o=new Dn(2.4,.06,.16),a=new ev({color:16777215,emissive:16774114,emissiveIntensity:.9,roughness:1}),l=[["b1",2,103,2,37],["b1",6,62,56,102],["f1",2,103,2,37],["f1",6,62,56,102],["f2",2,103,2,37],["f2",6,62,56,102]],c=[];for(const[h,m,g,x,p]of l){const u=Sd[h]+11.4;for(let _=m+4;_<g;_+=7)for(let v=x+4;v<p;v+=7){const[S,P]=av(_,v),C=new ht(o,a);C.position.set(S,u,P),C.userData.floor=h,C.userData.fixture=!0,s.add(C),c.push({floor:h,x:S,y:u-1.4,z:P})}}const f=16,d=[];for(let h=0;h<f;h++){const m=new aT(16773855,0,30,2);t.add(m),d.push(m)}return{hemi:n,key:r,group:s,lampPoints:c,pool:d}}function zT(t,e,n){const{lampPoints:i,pool:r}=t,s=[];for(let o=0;o<i.length;o++){const a=i[o];if(a.floor!==n)continue;const l=a.x-e.x,c=a.z-e.z,f=l*l+c*c;f<40*40&&s.push({p:a,d2:f})}s.sort((o,a)=>o.d2-a.d2);for(let o=0;o<r.length;o++){const a=r[o];o<s.length?(a.position.set(s[o].p.x,s[o].p.y,s[o].p.z),a.intensity=95):a.intensity=0}}function HT(t){const e=[],n=new ts,i=(r,s,o)=>{r.isEmpty()||r.max.y-r.min.y<.4||(r.max.x-r.min.x)*(r.max.z-r.min.z)<.02||e.push({x0:r.min.x,x1:r.max.x,z0:r.min.z,z1:r.max.z,y0:r.min.y,y1:r.max.y,floor:s,wall:o})};return t.traverse(r=>{if(!r.isMesh||!r.visible)return;const s=r.userData;if(s.slabMesh||s.floorTop||s.terrain||s.groundSurface||s.flowPart||s.flowParticle||s.fixture)return;let o=!1;for(let a=r;a;a=a.parent)if(a.userData&&a.userData.term){o=!0;break}!o&&!s.structureMesh||(n.setFromObject(r),i(n.clone(),s.floor||null,!o))}),e}function VT(t){const e=[],n=new ts,i={};for(const[r,s]of IT)i[r]=s;for(const r in Ze.groupReg){const s=Ze.groupReg[r];if(n.setFromObject(s),n.isEmpty())continue;const o=n.getCenter(new N),a=i[r];e.push({id:r,group:s,center:o,box:n.clone(),spot:a?new N(a[0]-sv,a[2],a[1]-ov):o.clone()})}return e}function GT(t){const e=[];for(const n in Ze.groupReg)Ze.groupReg[n].traverse(i=>{!i.isMesh||i.userData.flowParticle||(i.userData.aimTerm=n,e.push(i))});return t.traverse(n=>{if(!n.isMesh||n.userData.aimTerm)return;const i=n.userData;(i.structureMesh||i.slabMesh||i.floorTop)&&e.push(n)}),e}const Bu={E:-Math.PI/2,W:Math.PI/2},zu=[{id:"f2-hall",floor:"f2",label:"2층 전산실 (86 m 축)",x:11,y:31,yaw:Bu.E},{id:"f1-hall",floor:"f1",label:"1층 주 복도 (99 m 축)",x:101,y:29,yaw:Bu.W},{id:"b1-mech",floor:"b1",label:"지하 기계실 (55 m 축)",x:11,y:33,yaw:Bu.E}],xs=2;class WT{constructor(e){this.boxes=e,this.cells=new Map;for(let n=0;n<e.length;n++){const i=e[n],r=Math.floor(i.x0/xs),s=Math.floor(i.x1/xs),o=Math.floor(i.z0/xs),a=Math.floor(i.z1/xs);for(let l=r;l<=s;l++)for(let c=o;c<=a;c++){const f=l+","+c;let d=this.cells.get(f);d||(d=[],this.cells.set(f,d)),d.push(n)}}}hits(e,n,i,r,s){const o=Math.floor(e/xs),a=Math.floor(n/xs),l=this._seen||(this._seen=new Set);l.clear();for(let c=-1;c<=1;c++)for(let f=-1;f<=1;f++){const d=this.cells.get(o+c+","+(a+f));if(d)for(let h=0;h<d.length;h++){const m=d[h];if(l.has(m))continue;l.add(m);const g=this.boxes[m];if(g.y1<=s||g.y0>=r)continue;const x=Math.max(g.x0,Math.min(e,g.x1)),p=Math.max(g.z0,Math.min(n,g.z1)),u=e-x,_=n-p;if(u*u+_*_<i*i)return!0}}return!1}move(e,n,i,r,s){const o=e.y+.2,a=s;n!==0&&!this.hits(e.x+n,e.z,r,o,a)&&(e.x+=n),i!==0&&!this.hits(e.x,e.z+i,r,o,a)&&(e.z+=i)}findFree(e,n,i,r,s){if(!this.hits(e,n,i,r,s))return[e,n];for(let o=1;o<=12;o++){const a=o*.8;for(let l=0;l<12;l++){const c=l/12*Math.PI*2,f=e+Math.cos(c)*a,d=n+Math.sin(c)*a;if(!this.hits(f,d,i,r,s))return[f,d]}}return[e,n]}}const ys=1.65,XT=.32,jT=.28,YT=22,qT=30,l0=V1.degToRad(80),Go=[{id:"stroll",label:"천천히",walk:.9},{id:"normal",label:"보통",walk:1.4},{id:"brisk",label:"빠르게",walk:2.6},{id:"fast",label:"아주 빠르게",walk:5},{id:"dash",label:"질주",walk:12}],$T=2.1,KT=.12,Uh=.0022,ZT=5e-4,QT=.009,c0=1.22;class JT{constructor(e,n){this.camera=e,this.dom=n,this.pos=new N(0,ys,0),this.vel=new N,this.yaw=0,this.pitch=0,this.floorY=0,this.eyeTarget=ys,this.eyeCurrent=ys,this.walkSpeed=1.4,this.mouseSensitivity=Uh,this.locked=!1,this.enabled=!0,this.keys=new Set,this.grid=null,this.moving=!1,this.bobPhase=0,this.headBob=!0,this._onKeyDown=this._onKeyDown.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onLockChange=this._onLockChange.bind(this)}attach(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),document.addEventListener("mousemove",this._onMouseMove),document.addEventListener("pointerlockchange",this._onLockChange)}detach(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("mousemove",this._onMouseMove),document.removeEventListener("pointerlockchange",this._onLockChange)}requestLock(){this.dom.requestPointerLock&&this.dom.requestPointerLock()}stepSensitivity(e){const n=this.mouseSensitivity*(e>0?c0:1/c0);return this.mouseSensitivity=Math.max(ZT,Math.min(QT,n)),this.mouseSensitivity}_onLockChange(){this.locked=document.pointerLockElement===this.dom,this.locked||this.keys.clear(),this.onLockChange&&this.onLockChange(this.locked)}_onKeyDown(e){this.enabled&&(!e.ctrlKey&&!e.metaKey&&!e.altKey&&(eA.has(e.code)||e.code==="Space")&&e.preventDefault(),this.keys.add(e.code),this.onKeyDown&&this.onKeyDown(e))}_onKeyUp(e){this.keys.delete(e.code)}_onMouseMove(e){!this.locked||!this.enabled||(this.yaw-=e.movementX*this.mouseSensitivity,this.pitch-=e.movementY*this.mouseSensitivity,this.pitch=Math.max(-l0,Math.min(l0,this.pitch)))}placeAt(e,n,i,r){this.pos.set(e,i+ys,n),this.floorY=i,this.eyeCurrent=this.eyeTarget=ys,this.vel.set(0,0,0),r!==void 0&&(this.yaw=r),this.pitch=0,this.syncCamera()}syncCamera(){this.camera.position.copy(this.pos),this.camera.rotation.set(0,0,0,"YXZ"),this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch}update(e){if(!this.enabled)return;e=Math.min(e,.05);const n=this.keys;let i=0,r=0;(n.has("KeyW")||n.has("ArrowUp"))&&(i+=1),(n.has("KeyS")||n.has("ArrowDown"))&&(i-=1),(n.has("KeyD")||n.has("ArrowRight"))&&(r+=1),(n.has("KeyA")||n.has("ArrowLeft"))&&(r-=1);const s=Math.hypot(i,r);s>1&&(i/=s,r/=s);const o=n.has("ShiftLeft")||n.has("ShiftRight"),a=this.walkSpeed*(o?$T:1),l=Math.sin(this.yaw),c=Math.cos(this.yaw),f=(-l*i+c*r)*a,d=(-c*i-l*r)*a,h=Math.abs(f)+Math.abs(d)>.001?YT:qT;this.vel.x=u0(this.vel.x,f,h*e),this.vel.z=u0(this.vel.z,d,h*e);const m=Math.hypot(this.vel.x,this.vel.z);if(this.moving=m>.05,m>1e-4){const x=this.vel.x*e,p=this.vel.z*e;if(this.grid){const u=Math.max(1,Math.ceil(Math.hypot(x,p)/KT)),_=x/u,v=p/u;for(let S=0;S<u;S++)this.grid.move(this.pos,_,v,XT,this.floorY+jT)}else this.pos.x+=x,this.pos.z+=p}this.eyeTarget=this.floorY+ys,this.eyeCurrent+=(this.eyeTarget-this.eyeCurrent)*Math.min(1,e/.12);let g=this.eyeCurrent;if(this.headBob){this.moving&&(this.bobPhase+=e*(m/1.4)*5.8);const x=this.headBob?Math.min(.011,.011*(m/1.4)):0;g+=Math.sin(this.bobPhase)*x,this.moving||(this.bobPhase+=(0-this.bobPhase%(Math.PI*2))*e*3)}this.pos.y=g,this.syncCamera()}}const eA=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);function u0(t,e,n){return t<e?Math.min(t+n,e):t>e?Math.max(t-n,e):t}const fl=3,tA="#8c949e",nA="#4a5460",iA="rgba(255, 255, 255, 0.92)";class rA{constructor(e,n=208){this.colliders=e;let i=1/0,r=-1/0,s=1/0,o=-1/0;for(const c of e)c.x0<i&&(i=c.x0),c.x1>r&&(r=c.x1),c.z0<s&&(s=c.z0),c.z1>o&&(o=c.z1);this.x0=i-fl,this.z0=s-fl;const a=r-i+fl*2,l=o-s+fl*2;this.k=n/a,this.w=n,this.h=Math.round(l*this.k),this.baked=new Map}px(e){return(e-this.x0)*this.k}pz(e){return(e-this.z0)*this.k}_bake(e){const n=document.createElement("canvas");n.width=this.w,n.height=this.h;const i=n.getContext("2d");for(const r of[!1,!0]){i.fillStyle=r?tA:nA;for(const s of this.colliders){if(s.floor!==e||!!s.wall!==r)continue;const o=this.px(s.x0),a=this.pz(s.z0);i.fillRect(o,a,Math.max(1,(s.x1-s.x0)*this.k),Math.max(1,(s.z1-s.z0)*this.k))}}return this.baked.set(e,n),n}draw(e,n,i,r,s){e.clearRect(0,0,this.w,this.h),e.fillStyle=iA,e.fillRect(0,0,this.w,this.h),e.drawImage(this.baked.get(n)||this._bake(n),0,0);const o=this.px(i),a=this.pz(r);e.save(),e.translate(o,a),e.rotate(-s),e.beginPath(),e.moveTo(0,-7),e.lineTo(4.6,5.2),e.lineTo(0,2.6),e.lineTo(-4.6,5.2),e.closePath(),e.fillStyle="#e0115f",e.fill(),e.strokeStyle="#fff",e.lineWidth=1.2,e.stroke(),e.restore()}}function sA({ready:t,locked:e,gateOpen:n,floorLabel:i,speedIdx:r,sens:s,fps:o,aimed:a,aimedTerm:l,openTerm:c,cats:f,spawns:d,mapRef:h,mapSize:m,onStart:g,onGateClose:x,onHelp:p,onSpeed:u,onSens:_,onGoto:v,onClose:S}){const P=Math.round(s/Uh*100);return ce.jsxs("div",{className:"hud",children:[t&&n&&ce.jsx("div",{className:"gate",children:ce.jsxs("div",{className:"gate-card",children:[ce.jsx("button",{className:"gate-x",onClick:x,"aria-label":"닫기",children:"×"}),ce.jsx("div",{className:"gate-title",children:"AI 데이터센터 내부 둘러보기"}),ce.jsx("div",{className:"gate-sub",children:"충주 데이터센터 · 실측 도면 기반"}),ce.jsx("button",{className:"gate-go",onClick:g,children:"화면을 클릭해 시작"}),ce.jsxs("div",{className:"gate-keys",children:[ce.jsxs("div",{children:[ce.jsx("kbd",{children:"W"}),ce.jsx("kbd",{children:"A"}),ce.jsx("kbd",{children:"S"}),ce.jsx("kbd",{children:"D"}),ce.jsx("span",{children:"이동"})]}),ce.jsxs("div",{children:[ce.jsx("kbd",{children:"마우스"}),ce.jsx("span",{children:"둘러보기"})]}),ce.jsxs("div",{children:[ce.jsx("kbd",{children:"Shift"}),ce.jsx("span",{children:"달리기"})]}),ce.jsxs("div",{children:[ce.jsx("kbd",{children:"Space"}),ce.jsx("span",{children:"장비 설명"})]}),ce.jsxs("div",{children:[ce.jsx("kbd",{children:"1"}),"–",ce.jsx("kbd",{children:Go.length}),ce.jsx("span",{children:"이동 속도"})]}),ce.jsxs("div",{children:[ce.jsx("kbd",{children:"["}),ce.jsx("kbd",{children:"]"}),ce.jsx("span",{children:"마우스 감도"})]}),ce.jsxs("div",{children:[ce.jsx("kbd",{children:"PgUp"}),ce.jsx("kbd",{children:"PgDn"}),ce.jsx("span",{children:"층 이동"})]}),ce.jsxs("div",{children:[ce.jsx("kbd",{children:"Esc"}),ce.jsx("span",{children:"창 닫기"})]})]}),ce.jsxs("div",{className:"gate-spawn",children:[ce.jsx("span",{className:"gate-spawn-label",children:"시작 위치"}),d.map(C=>ce.jsx("button",{onClick:()=>v(C.id),children:C.label},C.id))]})]})}),ce.jsxs("div",{className:"top",children:[ce.jsx("span",{className:"floor",children:i}),ce.jsx("span",{className:"sep"}),ce.jsx("span",{className:"speed",children:Go.map((C,T)=>ce.jsx("button",{className:T===r?"on":"",onClick:()=>u(T),title:`${C.walk} m/s · 숫자 ${T+1}`,children:C.label},C.id))}),ce.jsx("span",{className:"sep"}),ce.jsxs("span",{className:"sens",title:"마우스 감도 — [ 느리게 · ] 빠르게",children:[ce.jsx("button",{onClick:()=>_(-1),"aria-label":"감도 낮추기",children:"["}),ce.jsxs("em",{children:["감도 ",P,"%"]}),ce.jsx("button",{onClick:()=>_(1),"aria-label":"감도 높이기",children:"]"})]}),ce.jsxs("span",{className:"fps",children:[o," fps"]}),ce.jsx("button",{className:"help",onClick:p,"aria-label":"조작 도움말",children:"?"})]}),ce.jsxs("div",{className:"map",style:{width:m.w,height:m.h},children:[ce.jsx("canvas",{ref:h,width:m.w,height:m.h}),ce.jsx("span",{className:"map-floor",children:i})]}),t&&!n&&!e&&ce.jsx("div",{className:"resume",children:"화면을 클릭하면 시선 조작이 켜집니다"}),e&&a&&!c&&ce.jsxs("div",{className:"aim",style:{"--cat":f[l.cat].color},children:[ce.jsx("div",{className:"aim-name",children:l.name}),ce.jsxs("div",{className:"aim-key",children:[ce.jsx("kbd",{children:"Space"})," 설명 보기"]})]}),c&&ce.jsxs("div",{className:"panel",style:{"--cat":f[c.cat].color},children:[ce.jsx("button",{className:"panel-x",onClick:S,"aria-label":"닫기",children:"×"}),ce.jsxs("div",{className:"panel-head",children:[ce.jsx("div",{className:"panel-name",children:c.name}),ce.jsx("div",{className:"panel-en",children:c.en})]}),ce.jsx("p",{className:"panel-desc",children:c.desc}),ce.jsx("ul",{className:"panel-facts",children:c.facts.map(C=>ce.jsx("li",{children:C},C))}),ce.jsxs("div",{className:"panel-foot",children:[ce.jsx("kbd",{children:"Space"})," 닫고 계속 걷기 · ",ce.jsx("kbd",{children:"Esc"})," 닫기"]})]})]})}function oA(){const t=It.useRef(null),e=It.useRef(null),n=It.useRef(null),[i,r]=It.useState(!1),[s,o]=It.useState(!1),[a,l]=It.useState(!0),[c,f]=It.useState("f2"),[d,h]=It.useState(1),[m,g]=It.useState(Uh),[x,p]=It.useState(null),[u,_]=It.useState(null),[v,S]=It.useState(0),[P,C]=It.useState({w:208,h:160}),T=It.useRef(null);return It.useEffect(()=>{T.current=u},[u]),It.useEffect(()=>{const R=t.current;if(!R)return;const W=document.createElement("canvas");W.className="gl",R.appendChild(W);const y=new nT({canvas:W,antialias:!0,powerPreference:"high-performance"});y.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),y.outputColorSpace=ei,y.toneMapping=T_,y.toneMappingExposure=.82,y.setClearColor(856084,1);const w=new iT;w.fog=new Dh(14673130,22,130),w.background=new De(14673130);const k=new An(58,1,.05,400),B=kT(w),j=new WT(B.colliders),Q=new rA(B.colliders);C({w:Q.w,h:Q.h});let V=null;const G=new JT(k,W);G.grid=j,G.attach(),G.onLockChange=ye=>o(ye);let D="f2";const Z=ye=>{const ue=zu.find($=>$.id===ye)||zu[0],[A,M]=av(ue.x,ue.y),O=Sd[ue.floor],[q,te]=j.findFree(A,M,.32,O+1.85,O+.28);D=ue.floor,G.floorY=O,G.placeAt(q,te,O,ue.yaw),f(ue.floor),J(ue.floor)},J=ye=>{const ue=Co[Co.indexOf(ye)+1];B.root.traverse(A=>{const M=A.userData;if(!M)return;if(M.hideAlways){A.visible=!1;return}const O=M.floor;O&&(A.visible=O===ye||O===ue&&(M.slabMesh||M.floorTop))})},oe=ye=>{const ue=Co.indexOf(D),A=Math.max(0,Math.min(Co.length-1,ue+ye));if(A===ue)return;const M=Co[A];D=M;const O=Sd[M],[q,te]=j.findFree(G.pos.x,G.pos.z,.32,O+1.85,O+.28);G.floorY=O,G.pos.set(q,O+1.65,te),G.eyeCurrent=G.eyeTarget=O+1.65,f(M),J(M),R.classList.add("flash"),setTimeout(()=>R.classList.remove("flash"),320)},Le=new fT;Le.far=6.5;const Xe=[[0,0],[.09,0],[-.09,0],[0,.09],[0,-.09]],Y=new Je,ne=[];let he=null;const me=ye=>{for(;ye;){if(!ye.visible)return!1;ye=ye.parent}return!0};function He(){let ye=null,ue=1/0;for(let A=0;A<Xe.length;A++){Y.set(Xe[A][0],Xe[A][1]),Le.setFromCamera(Y,k),ne.length=0,Le.intersectObjects(B.aimMeshes,!1,ne);for(let M=0;M<ne.length;M++){const O=ne[M];if(O.distance>=ue)break;if(!me(O.object))continue;const q=O.object.userData.aimTerm;q&&(ye=q,ue=O.distance);break}}return ye}G.onKeyDown=ye=>{if(ye.code==="Space")_(ue=>ue?null:he);else if(ye.code==="Escape")T.current?_(null):l(!1);else if(ye.code==="BracketLeft")g(G.stepSensitivity(-1));else if(ye.code==="BracketRight")g(G.stepSensitivity(1));else if(ye.code==="PageUp")oe(1);else if(ye.code==="PageDown")oe(-1);else if(ye.code.startsWith("Digit")){const ue=Number(ye.code.slice(5))-1;ue>=0&&ue<Go.length&&(h(ue),G.walkSpeed=Go[ue].walk)}},W.addEventListener("mousedown",()=>{G.locked||G.requestLock()});const Ue=()=>{const ye=R.clientWidth,ue=R.clientHeight;!ye||!ue||(y.setSize(ye,ue,!1),k.aspect=ye/ue,k.updateProjectionMatrix())},qe=new ResizeObserver(Ue);qe.observe(R),Ue(),Z("f2-hall"),r(!0);let nt=0,$e=performance.now(),b=0,Gt=0,je=0,Ke=0;const Ne=ye=>{nt=requestAnimationFrame(Ne);const ue=(ye-$e)/1e3;if($e=ye,G.update(ue),zT(B.lights,k.position,D),je+=ue,je>=.05){je=0;const A=He();A!==he&&(he=A,p(A))}y.render(w,k),Ke+=ue,Ke>=.1&&(Ke=0,!V&&e.current&&(V=e.current.getContext("2d")),V&&Q.draw(V,D,G.pos.x,G.pos.z,G.yaw)),b+=ue,Gt++,b>=.5&&(S(Math.round(Gt/b)),b=0,Gt=0)};return nt=requestAnimationFrame(Ne),n.current={lock:()=>G.requestLock(),setSpeed:ye=>{G.walkSpeed=Go[ye].walk},setBob:ye=>{G.headBob=ye},stepSens:ye=>g(G.stepSensitivity(ye)),goto:ye=>Z(ye),floorUp:()=>oe(1),floorDown:()=>oe(-1)},()=>{cancelAnimationFrame(nt),qe.disconnect(),G.detach(),y.dispose(),R.removeChild(W)}},[]),ce.jsxs("div",{className:"walk-root",children:[ce.jsx("div",{className:"viewport",ref:t}),ce.jsx(sA,{ready:i,locked:s,gateOpen:a,floor:c,floorLabel:NT[c],speedIdx:d,sens:m,fps:v,aimed:x,aimedTerm:x?t0[x]:null,openTerm:u?t0[u]:null,cats:dT,spawns:zu,mapRef:e,mapSize:P,onStart:()=>{l(!1),n.current&&n.current.lock()},onGateClose:()=>l(!1),onHelp:()=>l(!0),onSpeed:R=>{h(R),n.current&&n.current.setSpeed(R)},onSens:R=>n.current&&n.current.stepSens(R),onGoto:R=>n.current&&n.current.goto(R),onClose:()=>_(null)})]})}E_(document.getElementById("root")).render(ce.jsx(Rv.StrictMode,{children:ce.jsx(oA,{})}));
