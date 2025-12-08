import path from "path"
import { fileURLToPath } from "url"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // TODO: Update this to match your GitHub repository name if deploying to GitHub Pages (e.g. '/repo-name/')
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
