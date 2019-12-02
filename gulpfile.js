const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const rigger = require('gulp-rigger');

//compile scss into css
function style () {
	//1.where is my scss
	return gulp.src('./css/**/*.css')
	//4. stream changes to all browsers
	.pipe(browserSync.stream());
}

function html () {
	 return gulp.src('./*.html')
	.pipe(rigger())
	.pipe(gulp.dest('build/'))
};

function watch () {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./css/**/*css', style);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
exports.html = html;
