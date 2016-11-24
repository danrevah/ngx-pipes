const gulp = require('gulp');
const tsc = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const merge = require('merge2');
const tsProject = tsc.createProject('tsconfig.json');

gulp.task('build', () => {
  const tsResult = gulp.src(['./src/**/*.ts', '!./src/**/*.spec.ts'])
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  return merge([
    tsResult.js
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./bin')),
    tsResult.dts
      .pipe(gulp.dest('./bin'))
  ]);
});
