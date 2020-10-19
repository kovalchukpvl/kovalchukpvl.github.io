
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require("gulp-sourcemaps");
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var reload = require('browser-sync').reload;



gulp.task('sync', function () {
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// // Stylesheets
gulp.task('sass', function () {
	return gulp.src('public/sass/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(rename({ suffix: '.min', prefix: '' }))
		.pipe(autoprefixer('last 12 versions'))
		.pipe(sourcemaps.init())
		.pipe(cleanCSS())
		.pipe(gulp.dest('public/css/'))
		.pipe(reload({ stream: true }))
		.pipe(browserSync.stream({ match: '**/*.css' }));
});


gulp.task('default', ['sass', 'sync'], function () {
	gulp.watch('./public/sass/**/*.sass', ['sass']);
	gulp.watch("*.html").on("change", browserSync.reload);
});