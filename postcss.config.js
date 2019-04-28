module.exports = {
	plugins: [
		require('postcss-import')({
			plugins: [
				require('stylelint'),
			]
		}),
		require('postcss-font-magician')({
			variants: {
				'Lato': {
					300: [],
					400: []
				}
			}
		}),
		require('postcss-preset-env')({
			stage: 0,
			autoprefixer: {
				grid: true,
			},
			preserve: false,
		}),
		require('postcss-apply'),
		require('postcss-color-hwb'),
		require('css-mqpacker'),
	]
}
