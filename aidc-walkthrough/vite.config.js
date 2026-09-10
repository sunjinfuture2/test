import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/* GitHub Pages: https://sunjinfuture2.github.io/test2/ 로 서비스되므로
   자산 경로를 저장소 이름 기준 상대경로로 잡는다 */
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { outDir: 'dist', emptyOutDir: true },
})
