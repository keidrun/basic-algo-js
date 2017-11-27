const fs = require('fs'),
  pkg = JSON.parse(fs.readFileSync('./package.json')),
  rimraf = require('rimraf'),
  sequence = require('run-sequence'),
  gulp = require('gulp'),
  babel = require('gulp-babel'),
  plumber = require('gulp-plumber'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  mocha = require('gulp-mocha'),
  istanbul = require('gulp-istanbul'),
  eslint = require('gulp-eslint');

const LIB_NAME = pkg.name;

const DIST_PATH = 'dist',
  SRC_PATH = 'src/**/*.js',
  TEST_PATH = 'test/**/*.js';

gulp.task('lint', () => {
  return gulp
    .src(SRC_PATH)
    .pipe(plumber())
    .pipe(eslint({
      useEslintrc: true
    }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(plumber.stop());
});

gulp.task('clean', ['lint'], callback => {
  return rimraf(DIST_PATH, callback);
});

gulp.task('compile', ['clean'], () => {
  return gulp
    .src(SRC_PATH)
    .pipe(plumber())
    .pipe(
      babel({
        presets: ['es2015']
      })
    )
    .pipe(concat(`${LIB_NAME}.js`))
    .pipe(gulp.dest(DIST_PATH));
});

gulp.task('minify', ['compile'], () => {

  return gulp
    .src(`${DIST_PATH}/${LIB_NAME}.js`)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(
      rename({
        basename: LIB_NAME,
        extname: '.min.js'
      })
    )
    .pipe(gulp.dest(DIST_PATH));
});

gulp.task('pre-test', () => {
  return gulp
    .src(SRC_PATH)
    .pipe(plumber())
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], () => {
  return gulp
    .src(TEST_PATH)
    .pipe(plumber())
    .pipe(mocha())
    .pipe(istanbul.writeReports())
    .pipe(
      istanbul.enforceThresholds({
        thresholds: {
          global: 90
        }
      })
    );
});

gulp.task('build', () => {
  sequence('test', 'minify');
});

gulp.task('watch', () => {
  gulp.watch(SRC_PATH, ['build']);
  gulp.watch(TEST_PATH, ['build']);
});

gulp.task('default', callback => {
  sequence(['build', 'watch'], callback);
});
