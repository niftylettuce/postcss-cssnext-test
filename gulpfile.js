const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssNext = require('postcss-cssnext');

gulp.task('default', () => {
  return gulp
    .src('test.css')
    .pipe(postcss([cssNext()]))
    .pipe(gulp.dest('build/'));
});
