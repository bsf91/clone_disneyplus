const gulp = require('gulp');
const dartSass = require('gulp-dart-sass');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(dartSass({ outputStyle: 'compressed' }).on('error', dartSass.logError))
        .pipe(gulp.dest('./dist/css'));
}

function watch() {
    gulp.watch('./src/styles/*.scss', styles);
}

exports.styles = styles;
exports.watch = watch;
exports.default = gulp.series(styles, watch);
