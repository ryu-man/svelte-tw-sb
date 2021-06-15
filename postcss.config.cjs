const production = !process.env.ROLLUP_WATCH;

module.exports = {
	plugins: [
		require("tailwindcss"),
		require("autoprefixer"),

		production &&
			require("cssnano")({
				preset: "default",
			}),
	],
};
