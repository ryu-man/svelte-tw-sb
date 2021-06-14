import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import css from "rollup-plugin-css-only";

import pkg from "./package.json";

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
	.replace(/^\w/, (m) => m.toUpperCase())
	.replace(/-\w/g, (m) => m[1].toUpperCase());

const production = !process.env.ROLLUP_WATCH;

export default {
	input: "src/index.js",
	output: [
		{ file: pkg.module, format: "es" },
		{ file: pkg.main, format: "umd", name },
	],
	plugins: [
		svelte({
			// enable run-time checks when not in production

			compilerOptions: {
				dev: !production,
			},
			preprocess: sveltePreprocess({
				defaults: {
					style: "postcss",
				},
				postcss: true,
			}),
		}),
		css({ output: "index.css" }),

		resolve({
			dedupe: ["svelte"],
		}),
		commonjs(),
		production && terser(),
	],
	external: [],
};
