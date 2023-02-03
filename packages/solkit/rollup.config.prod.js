import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: ["./src/index.ts"],
    external: ["react", "react-dom"],
    output: {
      file: "./build/index.es.js",
      format: "esm",
      sourcemap: false,
    },
    plugins: [
      peerDepsExternal(),
      typescript({
        useTsconfigDeclarationDir: true,
        exclude: "node_modules/**",
      }),
      terser(),
    ],
  },
];
