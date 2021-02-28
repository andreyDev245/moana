const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const jsmin = require('gulp-jsmin');
const browserSync = require('browser-sync').create();


let compileFileStyle = [
    './css/style.less',
    './css/responsive.less'
];

let concatFileStyle = [
    './css/style.css',
    './css/responsive.css'
];

let concatFileScript = [
    './js/main.js'
];

gulp.task('compileStyle', () => {
    return gulp.src(compileFileStyle)

    .pipe(less())
    .pipe(autoprefixer({
        cascade: false
    }))

    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
});

gulp.task('concatStyle', () => {
    return gulp.src(concatFileStyle)

    .pipe(cleanCSS({
        compatibility: 'ie8',
        level: 2
    }))

    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
});

gulp.task('concatScript', () => {
    return gulp.src(concatFileScript)

    .pipe(jsmin())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream())
});

gulp.task('browser-Sync', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./css/*less', gulp.parallel('compileStyle'));
   
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch(concatFileScript).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('compileStyle', 'browser-Sync'));
