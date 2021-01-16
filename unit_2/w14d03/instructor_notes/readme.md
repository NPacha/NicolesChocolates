<img src="https://i.imgur.com/ser5chI.png">

<hr>
Title: The Fruits REMIX<br>
Type: Lesson<br>
Duration: 3hrs <br>
Creator: Arthur Bernier Jr<br>
<br>
<hr>
<p align="center">
    <img width="1241" alt="remix" src="https://media.git.generalassemb.ly/user/15881/files/49e47580-eb0e-11ea-858d-999ddab88aa5">
</p>

# Building Better

## Gulp SASS Starter Code

```js
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
var exec = require('child_process').exec;


// Explanation for Students ---- This is the brain child for our self made development server

gulp.task('default', (cb) => {
	gulp.watch('./src/css/**/*.scss',  gulp.task('styles'));
	cb()
});

// This is to watch your files if you still have your server running



// Explanation for Students ---- This is compiles our styles
gulp.task('styles', (cb) => {
	gulp
		.src('src/css/**/*.scss')
		.pipe(
			sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError)
		)
		.pipe(
			autoprefixer({
				browsers: ['last 2 versions']
			})
		)
		.pipe(gulp.dest('./public/css'))
		cb()
});
```

# What does Gulp do and hows it used in the industry today in production applications

<p align="center">
      <img width="241" alt="webpack" src="https://media.git.generalassemb.ly/user/15881/files/cf040c00-1f38-11ea-9236-4aa440fba591">
</p>

    - Gulp is what is known as a task runner.
    - Task runners are used to conduct complicated tasks and put them in a pre-defined list of operations
    - It allows to not only stay DRY in our code but also in our work flow...
    - For example if every time I need to change code, I need to recompile it and ship it to the browser and then delete the old files and then call nodemon , i can just put that string of commands in a gulp task.
    - Gulp is a tool that helps us code, unlike something like React or Express that we actually use to write the code that creates our app.


# Sass - Semantically Awesome Style Sheets
![Sass logo](https://www.interactivesearchmarketing.com/wp-content/uploads/2014/04/sass.png)

## Intro
Sass is a CSS pre-processor, meaning it allows you to use some features that don't exist in CSS just yet and compiles it all into usable CSS. For example you can use: nesting, mixins, functions and more!

> [More info at the Sass Website](https://sass-lang.com/documentation)

#### So how does SASS work?

Sass is its own stylesheet language based off of CSS. To use the language, you must create files with a suffix of `.scss`, in which we can use all those nifty features like listed above. Browsers, however, can't understand `.scss` files. Thus in order for the scss you write to be used, the files have to be _translated_ (or, in other words, compiled) into plain CSS in a file with a normal extension of `.css` so that the browser can read them. We will learn how to translate Sass to CSS in this lesson.

*Note:* Sass can be written with two different syntaxes! The original syntax is known as Sass, and looks quite different from css syntax (it has no curly braces or no semi-colons). The other syntax is SCSS and it is very similar to the CSS syntax. Today's lesson will use SCSS syntax as it's much more familiar to us and thus easier to jump into it.


### First, let's investigate how it works

Let's start small so we can see how Sass compiles .scss into .css. If we look at our index, we can see that the Space Ghost image is far too large. That's simple enough to fix, so let's start there.

##### In your text editor, in the `main.scss` file:

```
.card {
  width: 100px;
}
```
- `⌘S` to save the file

##### In your text editor, open `main.css`. It should look like this:

```
.card {
  width: 100px; }

/*# sourceMappingURL=main.css.map */

```

## Lets Start Building styles into fruits
