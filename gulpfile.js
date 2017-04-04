const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean', () => {
  return gulp.src([
    'esm', 'bundles', './src/**/*.d.ts', './src/**/*.js',
    './src/**/*.js.map', './src/**/*.metadata.json',
    './src/**/*.ngsummary.json','./src/**/*.ngfactory.ts'
  ]).pipe(clean());
});
