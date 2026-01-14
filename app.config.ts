import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    preset: "cloudflare-module",
    allowedHosts: [".zocomputer.io"],
  },
  vite: {
    server: {
      allowedHosts: [".zocomputer.io"],
      port: parseInt(process.env.PORT || "3000")
    },
  },
});
