/* eslint-disable */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var del = require('del');
var babel = require('gulp-babel');
var compileHandlebars = require('gulp-compile-handlebars')
var ejs = require("gulp-ejs")
var fileinclude = require('gulp-file-include');


function proxy() {
    return browserSync.init({
        server: {
            baseDir: "./build"
        },
        logPrefix: "Schuurneus inc",
        injectChanges: true,
        notify: false,
        ghostMode: true,
        open: "external",
        https: false
    });
}


function styles() {
    return gulp.src('./src/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(
            autoprefixer({
                browsers: ['last 4 versions'],
                cascade: false,
            }),
        )
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());

}

function javascripts() {
    return gulp.src('./src/js/dev/**/*.js')
        .pipe(concat('app.js'))
        // .pipe(babel({
            // presets: ['@babel/env'],
            // sourceType: "module"
        // }))
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

function javascriptsLibs() {
    return gulp.src('./src/js/libs/**/*.js')

        .pipe(concat('libs.js'))
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

function assets() {
    return gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./build/assets'))
        .pipe(browserSync.stream());
}

function clean(done) {
    return del(['build']);
}


// handle templates
function templates() {
    return gulp.src("./src/templates/*.ejs")
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(ejs(require('./src/data/index.js')))

        .pipe(rename(function (path) {
            path.extname = '.html';
        }))
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.stream());

}
// // handle partials
// function partials() {
//   return gulp.src("./src/templates/partials/*.ejs")
//     .pipe(ejs(require('./src/js/dev/data/index.js')))
//     .pipe(rename(function (path) {
//         path.extname = '.html';
//     }))
//     .pipe(gulp.dest('./build/'))
//     .pipe(browserSync.stream());
// 
// }

// handle views
function views() {
    return gulp.src('./src/templates/views/*.ejs')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: './src/templates/'
        }))
        .pipe(rename(function (path) {
            path.prefix = 'view__'
        }))
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.stream());
}

// handle data
function data() {
    return gulp.src('./src/data/*.js')
        .pipe(gulp.dest('./build/data/'))
        .pipe(browserSync.stream());
}

function watch() {
    gulp.watch('./src/js/dev/**/*.js', javascripts).on('change', browserSync.reload);
    gulp.watch('./src/js/dev/**/*.js', templates).on('change', browserSync.reload);
    gulp.watch('./src/js/dev/**/*.js', views).on('change', browserSync.reload);
    gulp.watch('./src/js/libs/**/*.js', javascriptsLibs).on('change', browserSync.reload);
    gulp.watch('./src/scss/**/*.scss', styles).on('change', browserSync.reload);
    gulp.watch('./src/templates/**/*', templates).on('change', browserSync.reload);
    gulp.watch('./src/templates/**/*', views).on('change', browserSync.reload);
    gulp.watch('./src/data/**/*', data).on('change', browserSync.reload);
    gulp.watch('./src/assets/**/*', assets).on('change', browserSync.reload);
}


var build = gulp.series(clean, gulp.parallel(styles, templates, views, javascripts, javascriptsLibs));
var serve = gulp.series(clean, gulp.parallel(proxy, styles, templates, views, data, javascripts, javascriptsLibs, watch));
exports.serve = serve;
exports.build = build;


exports.default = build;
