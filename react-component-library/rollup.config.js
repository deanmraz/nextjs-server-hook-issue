import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

export default {
  input: ["src/index.ts", "src/TestComponent/index.ts"],
  output: [
    {
      dir: "build",
      format: "cjs",
      sourcemap: true
    }
  ],
  preserveModules: true, // Important if we want to code split
  plugins: [
    peerDepsExternal(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    copy({
      targets: [
        {
          src: "src/variables.scss",
          dest: "build",
          rename: "variables.scss"
        },
        {
          src: "src/typography.scss",
          dest: "build",
          rename: "typography.scss"
        }
      ]
    })
  ]
};
