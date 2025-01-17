/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsConfigPaths(), react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
