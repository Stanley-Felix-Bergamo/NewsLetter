const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemim = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');


function compilarSass() {

    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'));
}


function mimificarImagem() {

    return gulp.src('./src/images/*')
        .pipe(imagemim())
        .pipe(gulp.dest('dist/images'));
}


exports.default = function () {
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.series(compilarSass));
    gulp.watch('./src/images/*', { ignoreInitial: false }, gulp.series(mimificarImagem));
}