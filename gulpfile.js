const { src, dest, watch } = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));
const minify = require('gulp-clean-css');

compileSass.compiler = require('node-sass');

const sass = () => {
  return src('./*scss')
  .pipe(compileSass().on('error', compileSass.logError))
  .pipe(minify())
  .pipe(dest('./css/'));
};

const watch = () => {
  watch('./*.scss', sass)
}

exports.sass = sass;
exports.watch = watch;
