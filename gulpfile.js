var gulp = require('gulp');//表示引进gulp模块
gulp.task('sass', function() {
	return gulp.src('src/')
		.pipe(sass())
		.pipe(gulp.dest('dist/'))

});

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    // Other watchers
});