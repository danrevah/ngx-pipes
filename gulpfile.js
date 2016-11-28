const gulp = require('gulp');
const tsc = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const merge = require('merge2');
const clean = require('gulp-clean');
const tsProject = tsc.createProject('tsconfig.json');

gulp.task('clean', () => {
  const tsResult = gulp.src(['./src/**/*.d.ts', './src/**/*.js', './src/**/*.js', './src/**/*.js.map']);
  return tsResult.pipe(clean());
});

gulp.task('release', ['clean'], () => {
  const tsResult = gulp.src(['./src/**/*.ts', '!./src/**/*.spec.ts'])
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  return merge([
    tsResult.js
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./src')),
    tsResult.dts
      .pipe(gulp.dest('./src'))
  ]);
});
