# Ruby - Environment

## PostgreSQL
1. Easy install just download [https://postgresapp.com/](https://postgresapp.com/)
1. Once app is installed just start it by clicking start
![](https://www.dropbox.com/s/302y9ghpz0rdcwe/Screen%20Shot%202021-02-23%20at%2010.17.44%20PM.png?dl=1)
1. Once it is running use this command below in your terminal
```
sudo mkdir -p /etc/paths.d &&
echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp 
```

## Homebrew

1. See if brew is already installed (type `brew` and hit enter to see if it is). You should get a message about example usage, etc.

1. If you haven't install Homebrew, do so by going to http://brew.sh/
	- copy and paste this into the terminal `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` and hit return


1. If brew is installed, run `brew upgrade` to upgrade to the latest version of homebrew
	* Might take a while, might upgrade stuff for postgres, node, heroku, etc.
1. Run `brew update` to update the list of installable programs by homebrew
	* Might say Already up-to-date

## Install rbenv

rbenv is a version manager for Ruby. We don't want to use our system Ruby because we can mess with it. Instead, let's get an up to date version of Ruby that is safe to mess with.

1. Check if rbenv already installed: `rbenv`
1. If already exists, upgrade with `brew upgrade rbenv ruby-build`

Otherwise

1. `$ brew install rbenv ruby-build`

## View Possible Ruby Versions
**See which versions of Ruby you can download**

1. `$ rbenv install --list`

There will be stuff like `rbx` and `jruby`, we are only interested in the ones that start with numbers.

## Install Latest Ruby
**Install the latest version of Ruby**

Get the version of Ruby before `-dev`

1. `$ rbenv install 2.7.0`

* There is no way within rbenv just to get the latest stable version
* You **must** install Ruby 2.2.2 or greater for Rails 5.
* Install might take a long time -- Terminal could just look like it's hanging

> ruby-build: use readline from homebrew
>
> Installed ruby-2.7.0 to /usr/local/var/rbenv/versions/2.7.0

## View Installed Versions of Ruby

1. Run `rbenv versions`

![](https://i.imgur.com/k4F34DP.png)

* system is your system Ruby
* asterisk is next to the version that you are using

## View Currently Running Version of Ruby

1. Run `rbenv version`

## Switch RBENV to a different Version of Ruby

1. `$ rbenv global 2.7.0` or higher
	* Check with `rbenv versions`. Asterisk should be next to 2.7.0
1. `$ rbenv rehash` to tell computer we've switch versions of ruby
	* Confirm switch again with `rbenv versions` `* 2.7.0`


**CLOSE AND RESTART TERMINAL**

## Update Environment to use new Ruby

1. Run `ruby -v` and confirm ruby version _now in use by the system_ is `2.7.0p111` or somesuch
1. `npm i -g yarn`
IF NOT

1. `$ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile`
	* (replace `.bash_profile` with `.zshrc` if you're using zsh)
1. `$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile`
	* (replace `.bash_profile` with `.zshrc` if you're using zsh)
1. Run `ruby -v` and confirm ruby version _now in use by the system_ is `2.7.0p301` or somesuch

## Install a gem

Gems are like NPM packages for Ruby, but they're installed globally, as opposed to multiple times for each application that you build

1. List gems with `gem list`
1. Run `gem install pry` to install a gem called pry.  It's a ruby REPL command
1. Run `rbenv rehash` to tell computer we've installed a new gem
1. List gems with `gem list` look for `pry`
1. Rub `pry` to start pry command
1. Inside pry type `2 + 2`
1. If that works, type quit

Note: 
- If you are getting a permissions error you can aadd `sudo` in front of the command for now.
- Might need to update the gem manager with `gem update --system`


## Install Rails 6

1. Run `gem install rails --pre` to install the rails commands
2. `rbenv rehash`
3. `rails -v`

Note: if Rails already installed, might need to run `bundle update rails`

## Test Rails
3. Run `rails new blog` to create a new app
4. `cd blog`
5. Run `rails s` to start the server
6. Go to `http://localhost:3000`

- Note: You may need to run `rails webpacker:install`

## Rails

In this lesson we will be looking ahead to understand what Ruby will be able to provide for our development stack. We will introduce a number of new topics to gain a simple understanding of their syntax and usages. As we move further into Unit 4, we will tackle the finer details of the syntax for these tools.

## Learning Objects
- Understand what Rails can do from a high level overview
- Learn about Ruby Gems
- Learn about and Install Postgresql 


Ruby's packages (gems) are installed once on the computer, instead of per project like Node.  Install the gem for rails:

```
sudo gem install rails
```

`rails` is command-line program like, `mkdir`, `cd`, and `ls`, etc.

Use `rails` to generate a new rails project:

```
rails new blog
```

Enter user pwd if it prompts you.

To test that the project is set up correctly:

```
cd blog
rails s
```

Go to http://localhost:3000/

To see the power of rails:

```
^c
rails generate scaffold Post name:string title:string content:text
rails db:migrate
rails s
```

Go to http://localhost:3000/posts


## Rails with Postgres

```
cd ../
rails new blog2 -d postgresql
```

This will error, so:

```
sudo gem install pg  -- --with-pg-config=/Applications/Postgres.app/Contents/Versions/latest/bin/pg_config
rbenv rehash
```

if that doesn't work:

```
sudo env ARCHFLAGS="-arch x86_64" gem install pg
```

or install [postgress.app](https://postgresapp.com/) and

```
gem install pg -- --with-pg-config=/Applications/Postgres.app/Contents/Versions/latest/bin/pg_config
```

and possibly

```
gem install pg -- --with-pg-include='/Applications/Postgres.app/Contents/Versions/latest/include/'
```

finally:

```
rails new blog2 -d postgresql
cd blog2
rails webpacker:install
rails s
```

check: http://localhost:3000.  You should get an error! We have not yet created a database. Run the commands below to create our database.

```
^c
rails db:create
```

check: http://localhost:3000

```
rails generate scaffold Post name:string title:string content:text
rails db:migrate
rails s
```

go to http://localhost:3000/posts and create some posts

In `psql` tab

```
psql -l
```

You should see `blog_development` and `blog_test` databases available

```
psql blog2_development
SELECT * FROM posts;
```

