const gulp = require('gulp');
const dartSass = require('gulp-dart-sass');
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(dartSass({ outputStyle: 'compressed' }).on('error', dartSass.logError))
        .pipe(gulp.dest('./dist/css'));
}


function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function watch() {
    gulp.watch('./src/styles/*.scss', styles);
}

exports.build = gulp.series(styles, images);
exports.styles = styles;
exports.watch = watch;
exports.default = gulp.series(styles, images);