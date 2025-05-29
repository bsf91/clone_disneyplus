const gulp = require('gulp');
const dartSass = require('gulp-dart-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Minificar JavaScript
function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

// Compilar SCSS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(dartSass({ outputStyle: 'compressed' }).on('error', dartSass.logError))
        .pipe(gulp.dest('./dist/css'));
}

// Otimizar imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Assistir mudanças
function watch() {
    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./src/scripts/*.js', scripts);
    gulp.watch('./src/images/**/*', images);
}

// Exportações
exports.build = gulp.series(html, styles, images, scripts);
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;
exports.default = gulp.series(styles, images, scripts, watch);
