# Heroku Deployment

## Lesson Objectives

1. Make a new github repository
1. Create a basic express app
1. set up environmental variables
1. Remove `node_modules`
1. Get started with Heroku
1. Create app on heroku
1. Attach MongoDB Atlas
1. Update code for heroku & mongodbAtlas
1. git push to heroku for deployment

## New Github Enterprise Repository

 [github enterprise](https://git.generalassemb.ly/new).
Once your ready we'll also push this up to regular github also by adding an additional push location 

<br>

**Choose**
- a repository name
- public (let your instructors help you if you get stuck, you can always change this later)
- dont initialize with a README
- dont add a gitignore
- dont add a license

Press the `Create Repository` button when you're ready!

## Basic App

in our command line Use a basic Lets Code App with the Big Poppa Code React Starter (We'll use the basic one now)

- `lets-code`
- select `get-started`
- name your project `deployment-test`
- once done cd into `deployment-test` and `git init`
- open your .env file and add your MONGO_URI string
- open your server.js file and make sure your app properly imports this.
- dont forget to require dotenv and run .config() at the top of your server.js file `require('dotenv').config()`

Check out `package.json` make sure everything looks as expected

![package.json](https://www.dropbox.com/s/lu5w3nhazrmp3oi/Screen%20Shot%202021-01-27%20at%204.50.57%20PM.png?dl=1)

<hr>

## Set the Node Engine

[You should always specify a Node.js version that matches the runtime you're developing and testing with](https://devcenter.heroku.com/articles/nodejs-support). Without setting this, Heroku will 'guess' a version Node.js for you. One big gotcha is that some newer/updated npm packages just won't run on an older version of Node.js and vice versa.

# Add MongoDB Locally
Just use your connection string as your mongoURI.

Be sure to that there is a  .env and a .gitignore to exclude your .env file from your git repository.

Add MONGODB_URI to your .env file.


## Test your app

- If your express app doesn't run locally it definitely won't run on Heroku!
- test it out and fix any bugs



## git add/git commit
- `git add .`
- `git commit -m 'first commit'`
- `git branch -M main`
- `git push origin main`
- `git push --set-upstream origin main` (if needed)

Check this step carefully! Make sure `node_modules` are **NOT** on github!! If they made it to github, that means they are not being ignored by `.gitignore`. If you don't properly ignore them now you'll have massive headaches with heroku later!


<hr>


## If You Need to Remove `node_modules`

In order for heroku to work, you can't have `node_modules` in your repo.  Instead, heroku will add this dir itself!

1. go to local repo dir
1. `rm -r node_modules`
1. git: add, commit, push
1. `touch .gitignore`
1. `code .gitignore`
1. add a line that says just `node_modules` to .gitignore
1. save .gitignore
1. git: add, commit, push
1. to get it working locally again: `npm install`


<hr>


## Get started with Heroku

- [Sign up for Heroku](https://signup.heroku.com/)
	- You may need a CC at some point although you will not be charged
- [Install Heroku CLI Tools](https://toolbelt.heroku.com/)
	- Verify by typing `heroku login` anywhere in your terminal
	- Follow prompts to sync up your heroku credentials, DO NOT HEROKU CREATE yet.


<hr>


## Create an app on heroku

- Once you have Heroku CLI, you can access terminal commands to heroku.
- Let's start by creating an app on heroku. If you don't yet have a name for your app it's ok, you can change it later (just make sure you update your git remotes too)
	- `heroku create [unique name]` from your project's root directory where you first initialized git.
	This will check heroku to see if the app name exists, if so you'll get an error message and have to try again.
	- If you don't specify a name, heroku will generate a unique name for you. There names are pretty cool and somewhat thematic so feel free to do either.
	- You can also do this step off their website if you want but since you'll be working in terminal anyway, might as well just do it through terminal.
	- Notice that if you successfully created a heroku app, you can see that the heroku remote was automatically added to your project's repo. Confirm this by typing `git remote -v`, you should see `origin` as well as `heroku`.

## Attach MongoDB Atlas

navigate to your heroku dashboard select your app and go to settings and select `reveal config vars` 

<hr>


## Push Git

- First update your remote repo so you're code is up to date.
	- `git add -A`
	- `git commit -m "updating code for heroku"`
	- `git push origin master`
- Now also push to heroku
	- `git push heroku master`

Wait 1 minute then type `heroku open`. You should have your deployed app open up in your browser.

- If thing's don't work out, relax and try to find out the error.
- `heroku logs`


<hr>

<hr>

## Troubleshooting

<hr>

### Having weird errors?

<hr>

#### Heroku Can't Figure Out Your Language

- the hidden folder `.git` and `package.json` MUST be on the same level in your directory (the root)
- move your files up to `.git` accordingly

<hr>

#### Check that your have ignored node modules

Your node modules should NOT appear on github

![no node modules](https://i.imgur.com/PVYeHAf.png)

If you have not ignored your node modules, follow the steps listed above to remove and ignore them


<hr>

#### Heroku recommends setting the proper node version

[scroll down for an example](https://devcenter.heroku.com/articles/deploying-nodejs)


<hr>

#### Check that your config variables match

In heroku, under your app and its settings, `Reveal Config Vars`

![reveal config vars](https://i.imgur.com/HyPWKAq.png)

In the above example -

In your own app, make sure you have your mongo uri equal to `process.env` and then `.MONGODB_URI`

`const mongoURI = process.env.MONGODB_URI`

It won't work if you make it a different variable name (lowercase, no underscore) - do not change it in heroku! If you cange it in heroku you'll have to hunt how to update more things. Just set it in your own app.

Note: your the variable for the port is not listed, but it must be `PORT` all caps. It is accessed by `process.env.PORT`

<hr>

<hr>

#### You Need to Add More Config Variables

Using the NPM package `dotenv`? If you've added new variables, like `SECRET`, be sure to add those custum config variables 
- In heroku, under your app and its settings, `Reveal Config Vars`

Otherwise you might be looking at a `Internal server error`

![reveal config vars](https://i.imgur.com/HyPWKAq.png)

You must make the variable names match.

#### You changed your heroku URL

If you changed your app name, you'll have to update the git remote url. Get the right url from heroku (see towards the bottom

![right url](https://i.imgur.com/gU905lY.png)

In terminal, in your repo 
- `git remote -v` (should have origin and heroku)
- `git remote remove heroku`
- `git remote add heroku whateverURLherokuListed`

<hr>


### You changed your github project name

![changed github project name](https://i.imgur.com/NOZ16yV.png)

Go back to the main code view and grab the url from the clone or download button

![git clone](https://i.imgur.com/TDZAWNl.png)

- `git remote -v` (should have origin and heroku)
- `git remote remove origin`
- `git remote add origin whateverURLgithubListed`


<hr>

#### Cannot read filetype MIME re: CSS file
- your CSS file is not linked properly/cannot be found/named incorrectly (working locally? see next issue)
- you have a mismatch in opening/closing HTML tags



<hr>

#### Cannot find a file but it is there??? You think you might have changed it?

There is weirdness. If you had named your file `Index.html` and then changed it to `index.html` git, by default, will ignore this change.

Locally, you'll see `index.html` (your updated name). But if you go to github, you'll see it's still `Index.html`. This will 'confuse' heroku as well. 

First try to use git to change the name:

```bash
git mv -f Index.html index.html
```

Success?

![changed file name](https://i.imgur.com/hvqvkTR.png)

go ahead and `git add .` `git commit -m 'file name changed'`

If that fails,
- `touch tempfile`, 
- copy paste your code from the offending file in there
- `rm` the offending file
- `git add .` `git commit -m 'removed Index.html`
- `touch index.html`
- `git add .` `git commit -m 'added index.html`


<hr>

# Now start working on the Taco Lab in this directory
1. As you work on it commit and push to github and when your done push to heroku
1. Before pushing make sure that your commit history doesn't contain your .env so you don't pusblish your atlas password

# NOW WHAT ( Hungry for more deploy these )
1. Deploy Jeopardy HW
1. Deploy React Groceries
1. Deploy Unit 2 Project
1. Deploy OMDB Movie App
