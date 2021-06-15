const production = !process.env.ROLLUP_WATCH;

module.exports = (config = {}) => {
	const { tailwind = {} } = config;
	const currentTailwindConfig = require("./tailwind.config.cjs");

	return [
		require("postcss-import")(),
		require("tailwindcss")({ ...currentTailwindConfig, ...tailwind }),
		require("autoprefixer")(),

		production &&
			require("cssnano")({
				preset: "default",
			}),
	].filter(Boolean);
};
