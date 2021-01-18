// Explanation for Students ---- This is requires the gulp package from node modules
// Gulp exports an object with many methods
// task , watch, src and pipe will be the main ones we use today but see the gulp docs to expand and also see how you might refactor it to no longer use task and maybe use exports, series and parallells
// i don't use them here because they are more magic and make it harder to show what's happening
const gulp = require('gulp');

// Explanation for Students ---- This is for compiling SASS, we haven't learned SASS yet but this is as good a chance as any to to talk about how we could compile it.
const sass = require('gulp-sass');

// Explanation for Students ---- This is for those pesky experimental features of css that are not available in all browsers without prefixes like webkit and moz
const autoprefixer = require('gulp-autoprefixer');

// Explanation for Students ---- This is a NODEJS standard method that lets us call scripts in our package.json or node_modules from our code
const exec = require('child_process').exec;

const nodemon = require('gulp-nodemon');
//Require nodemon


// Explanation for Students ---- This is the brain child for our self made development server

gulp.task('default', (cb) => {
    nodemon({
        script: 'server.js',
        env: { NODE_ENV: 'development' }
    })
    //Listening if there are any changes to this folder, and if so, it will run gulp.task
    gulp.watch('./src/css/**/*.scss', gulp.task('styles'));
	cb();
});

// This is to watch your files if you still have your server running



// Explanation for Students ---- This is compiles our styles
gulp.task('styles', (cb) => {
    gulp
        //Where are we looking in to pull stuff/our files from
        .src('src/css/**/*.scss')
        //Changes scss into css
		.pipe(
            sass({})
            .on('error', sass.logError)
		)
		.pipe(
			autoprefixer({
				browsers: ['last 2 versions']
			})
		)
		.pipe(
            gulp.dest('./public/css')
            )

		cb();
});