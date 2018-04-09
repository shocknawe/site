'use strict';

const gulp = require('gulp');
const sassVariables = require('gulp-sass-variables');
const sass = require('gulp-sass');

gulp.task('styles', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});
