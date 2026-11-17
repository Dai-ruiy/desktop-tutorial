import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
export default defineConfig({define:{'process.env.NODE_ENV': JSON.stringify('production')},plugins:[react(),tailwindcss()],resolve:{alias:{'@':path.resolve(__dirname,'src')}},build:{minify:'oxc',outDir:'assets-ui',emptyOutDir:true,lib:{entry:'src/main.tsx',formats:['es'],fileName:()=> 'ui.js'},rollupOptions:{output:{assetFileNames:'ui.[ext]'}}}})
