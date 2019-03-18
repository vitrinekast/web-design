/* eslint-disable */
'use strict';

var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );
var sourcemaps = require( 'gulp-sourcemaps' );
var imagemin = require( 'gulp-imagemin' );
var cleanCSS = require( 'gulp-clean-css' );
var rename = require( 'gulp-rename' );
var concat = require( 'gulp-concat' );
var browserSync = require( 'browser-sync' ).create();
var del = require( 'del' );
var babel = require( 'gulp-babel' );


function proxy() {
	return browserSync.init( {
		server: {
			baseDir: "./build"
		},
		logPrefix: "Schuurneus inc",
		injectChanges: true,
		notify: false,
		ghostMode: true,
		open: "external",
        https: true

	} );
}


function styles() {
	return gulp.src( './src/scss/app.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass( { outputStyle: 'expanded' } ).on( 'error', sass.logError ) )
		.pipe(
			autoprefixer( {
				browsers: [ 'last 4 versions' ],
				cascade: false,
			} ),
		)
		.pipe( sourcemaps.write( '.' ) )
		.pipe( gulp.dest( './build/css' ) )
		.pipe( browserSync.stream() );

}

function javascripts() {
	return gulp.src( './src/js/dev/**/*.js' )
		.pipe( concat( 'app.js' ) )
		.pipe( babel( {
			presets: [ '@babel/env' ]
		} ) )
		.pipe( gulp.dest( './build/js' ) )
		.pipe( browserSync.stream() );
}

function javascriptsLibs() {
	return gulp.src( './src/js/libs/**/*.js' )

		.pipe( concat( 'libs.js' ) )
		.pipe( babel( {
			presets: [ '@babel/env' ]
		} ) )
		.pipe( gulp.dest( './build/js' ) )
		.pipe( browserSync.stream() );
}

function assets() {
	return gulp.src( './src/assets/**/*' )
		.pipe( gulp.dest( './build/assets' ) )
		.pipe( browserSync.stream() );
}

function clean( done ) {
	return del( [ 'build' ] );
}

function templates() {
	return gulp.src( './src/templates/*.html' )
		.pipe( gulp.dest( './build/' ) )
		.pipe( browserSync.stream() );
}

function watch() {
	gulp.watch( './src/js/dev/*.js', javascripts ).on( 'change', browserSync.reload );
	gulp.watch( './src/js/libs/**/*.js', javascriptsLibs ).on( 'change', browserSync.reload );
	gulp.watch( './src/scss/**/*.scss', styles ).on( 'change', browserSync.reload );
	gulp.watch( './src/templates/**/*', templates ).on( 'change', browserSync.reload );
	gulp.watch( './src/assets/**/*', assets ).on( 'change', browserSync.reload );
}


var build = gulp.series( clean, gulp.parallel( styles, templates, javascripts ) );
var serve = gulp.series( clean, gulp.parallel( proxy, styles, templates, javascripts, javascriptsLibs, watch ) );
exports.serve = serve;
exports.build = build;


exports.default = build;
