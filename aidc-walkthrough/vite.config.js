import { defineConfig } from 'vite'

/* 대시보드(/3d/) 옆 /walk/ 로 배포되므로 자산 경로를 상대경로로 잡는다 */
export default defineConfig({
  base: './',
  build: { outDir: 'dist', emptyOutDir: true },
})
