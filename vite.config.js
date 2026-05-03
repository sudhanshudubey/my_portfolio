// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { resolve, dirname } from "path";
// import { fileURLToPath } from "url";

// import tailwindcss from "@tailwindcss/vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     alias: {
//       "#components": resolve(
//         dirname(fileURLToPath(import.meta.url)),
//         "src/components"
//       ),
//       "#constants": resolve(
//         dirname(fileURLToPath(import.meta.url)),
//         "src/constants"
//       ),
//       "#store": resolve(dirname(fileURLToPath(import.meta.url)), "src/store"),
//       "#hoc": resolve(dirname(fileURLToPath(import.meta.url)), "src/hoc"),
//       "#windows": resolve(
//         dirname(fileURLToPath(import.meta.url)),
//         "src/windows"
//       ),
//       "#lib": resolve(dirname(fileURLToPath(import.meta.url)), "src/lib"),
//     },
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/",

  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "#components": resolve(__dirname, "src/components"),
      "#constants": resolve(__dirname, "src/constants"),
      "#store": resolve(__dirname, "src/store"),
      "#hoc": resolve(__dirname, "src/hoc"),
      "#windows": resolve(__dirname, "src/windows"),
      "#lib": resolve(__dirname, "src/lib"),
    },
  },
});