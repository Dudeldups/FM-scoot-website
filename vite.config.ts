/// <reference types="vitest" />
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }: { mode: string }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return defineConfig({
    base: process.env.VITE_BASE_PATH,
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
    },
  });
};
