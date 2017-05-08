var gulp = require('gulp'),
    borwserSync = require('browser-sync').create(),
    reload = borwserSync.reload,
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-minify-css'),
    concat = require('gulp-concat');

gulp.task('browser-sync',function(){
    borwserSync.init({
        server:{
        baseDir:'./'
        }
    });

    gulp.watch('src/sass/**/*.scss',['sassfile']);
    gulp.watch("*.html").on('change',reload);
});

gulp.task('sassfile',function(){
    return gulp.src('./src/sass/**/*.scss')
    .pipe( sass() )
    .pipe( gulp.dest( './dist/scss' ) );
});

gulp.task('build', function() {
    gulp.src('./dist/scss/**/*.css')
    .pipe(concat('hjtip.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(rename('hjtip.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist'));
})