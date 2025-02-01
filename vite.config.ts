import path from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: '/fincol-front/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

