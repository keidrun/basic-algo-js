const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('./package.json'));
const rimraf = require('rimraf');
const sequence = require('run-sequence');
const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');

const LIB_NAME = pkg.name;

gulp.task('clean', callback => {
  return rimraf('./dist', callback);
});

gulp.task('compile', ['clean'], () => {
  return gulp
    .src('src/**/*.js')
    .pipe(plumber())
    .pipe(
      babel({
        presets: ['es2015']
      })
    )
    .pipe(concat(`${LIB_NAME}.js`))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify', ['compile'], () => {
  return gulp
    .src(`dist/${LIB_NAME}.js`)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(
      rename({
        basename: LIB_NAME,
        extname: '.min.js'
      })
    )
    .pipe(gulp.dest('dist'));
});

gulp.task('pre-test', function() {
  return gulp
    .src('src/**/*.js')
    .pipe(plumber())
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function() {
  return gulp
    .src('test/*.js')
    .pipe(plumber())
    .pipe(mocha())
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});

gulp.task('build', () => {
  sequence('test', 'minify');
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['build']);
});

gulp.task('default', callback => {
  sequence(['build', 'watch'], callback);
});
