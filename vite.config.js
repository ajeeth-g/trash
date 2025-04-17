import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "abi.png"],
      manifest: {
        name: "NextDevPath",
        short_name: "NextDev",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#1d4ed8",
        icons: [
          {
            src: "ajeeth.JPG",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "ajeeth.JPG",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
