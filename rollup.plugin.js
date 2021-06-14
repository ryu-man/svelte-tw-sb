const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = (config = {}) => {
	const { tailwind = {} } = config;
	const currentTailwindConfig = require("./tailwind.config.cjs");

	return [
		require("tailwindcss")({ ...currentTailwindConfig, ...tailwind }),
		require("autoprefixer"),

		!dev &&
			require("cssnano")({
				preset: "default",
			}),
	].filter(Boolean);
};
