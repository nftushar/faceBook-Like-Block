import gulp from 'gulp';
import zip from 'gulp-zip';
import { deleteAsync } from 'del';

gulp.task('clean', async () => await deleteAsync(['languages', 'bundled']));

export const bundle = () => gulp.src([
	'**/*',
	'!bundled/**',
	'!node_modules/**',
	'!src/**',
	'!.eslintrc.js',
	'!.gitignore',
	'!gulpfile.js',
	'!package.json',
	'!package-lock.json',
	'!readme.md',
	'!todo.txt',
	'!webpack.config.js'
]).pipe(
	zip('facebook-button-wp.zip')
).pipe(
	gulp.dest('bundled')
);