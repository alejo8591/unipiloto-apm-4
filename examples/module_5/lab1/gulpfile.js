var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css');


gulp.task('concat-css', function(){
    return gulp.src(['src/normalize.css', 'src/skeleton.css', 'src/styles.css'])
        .pipe(concatCss('bundle.css'))
        .pipe(gulp.dest('src/css/'));
});

gulp.task('minify-css', ['concat-css'], function(){
  return gulp.src('src/css/bundle.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/'));
});