import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.VERCEL ? "/" : "/camufle-company/",
  plugins: [react()],
  server: { port: 5173, open: false },
});
