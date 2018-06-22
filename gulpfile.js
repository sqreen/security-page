'use strict';

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-clean-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: "./app/"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('styles', function () {
    gulp.src(['app/scss/style.scss'])
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('app/css/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function () {
    return gulp.src('app/js/main.js')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('app/js/'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch("app/scss/**/*.scss", ['styles']);
    gulp.watch("app/js/main.js", ['scripts']);
    gulp.watch("app/index.html", ['bs-reload']);
});
