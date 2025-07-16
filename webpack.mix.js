/**
 * Info
 * -----
 * This contains the configuration for webpack using the laravel-mix dependency.
 * A custom webpack config is also passed to make use of some plugins that are
 * not present within laravel-mix by default.
 *
 * Dependencies
 * -----
 * laravel-mix: https://laravel-mix.com/docs/5.0/installation
 */

/* ========================================================================== */
/* :: Imports  */
/* ========================================================================== */
const mix = require("laravel-mix");
const StylelintPlugin = require("stylelint-webpack-plugin");
const path = require("path");

// Import dotenv so we can use the basepath that is set in .env
require("dotenv").config();

/* ========================================================================== */
/* :: Variables  */
/* ========================================================================== */
const isDev = process.env.NODE_ENV === "development";
const sourcemaps = isDev
	? "inline-source-map"
	: "source-map";

/* ========================================================================== */
/* :: SCSS  */
/* ========================================================================== */
mix
	// Compile the sass to scss, create a seperate .css file
	.sass("src/scss/main.scss", "web/assets/css", {
		sassOptions: {
			/**
			 * Tell the sass-loader to also look in these paths to resolve any
			 * import
			 */
			includePaths: ["src/scss"],
		},
	})
	// Add source maps, different source maps are generated based on NODE_ENV
	.sourceMaps(sourcemaps);

/* ========================================================================== */
/* :: JS  */
/* ========================================================================== */
mix
	// Compile the js to readable js for the browser
	.js("src/js/main.js", "web/assets/js")
	// Add source maps, different source maps are generated based on NODE_ENV
	.sourceMaps(sourcemaps);

/* ========================================================================== */
/* :: Assets  */
/* ========================================================================== */
mix
	// Copy the images
	.copy("src/assets/images", "web/assets/images")
	// Copy the fonts
	.copy("src/assets/fonts", "web/assets/fonts");
	// TODO: enable this rule when css libraries are used
	// Copy the library css
	// .copy("src/assets/scss/_libs", "web/assets/css")
	// TODO: enable this rule when js libraries are used
	// Copy the library js
	// .copy("src/assets/js/_libs", "web/assets/js");

/* ========================================================================== */
/* :: Browsersync  */
/* ========================================================================== */
// Setup browsersync to reload the browser when files have changed
mix.browserSync({
	// The base path set in the .env file
	proxy: process.env.BASE_URL,
	// Port to show the browsersync changes
	port: 9000,
	// Files to watch and refresh the browser with
	files: [
		"src/templates/**/*.twig",
		"src/scss/**/*.scss",
		"src/js/**/*.js",
	],
});

/* ========================================================================== */
/* :: Options  */
/* ========================================================================== */
// Extra options to pass onto laravel-mix
mix.options({
	// Postcss and its config, has autoprefixer by default
	postCss: [
		require("postcss-preset-env")({
			stage: 2,
		}),
	],
});

/* ========================================================================== */
/* :: Custom webpack config  */
/* ========================================================================== */
// Custom webpack configuration, is merged with the laravel-mix config
mix.webpackConfig({
	resolve: {
		alias: {
			// JS - Define where the extensions are stored
			"@extensions": path.resolve(__dirname, "./src/js/extensions"),
			// JS - Define where the globals are stored
			"@globals": path.resolve(__dirname, "./src/js/globals"),
			// JS - Define where the managers are stored
			"@managers": path.resolve(__dirname, "./src/js/managers"),
			// JS - Define where the modules are stored
			"@modules": path.resolve(__dirname, "./src/js/modules"),
			// JS - Define where the utils are stored
			"@utils": path.resolve(__dirname, "./src/js/utils"),
			// JS - Define where the componets are stored
			"@components": path.resolve(__dirname, "./src/js/components"),
			// JS - Define where the pages are stored
			"@pages": path.resolve(__dirname, "./src/js/pages"),
		},
	},
});
