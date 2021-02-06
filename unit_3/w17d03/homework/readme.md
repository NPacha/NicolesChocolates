![](/ga_cog.png)

# Project #3: MERN Stack - Solo Project

## Attendance

  - **Each Class Day **: Meet With Your Squad leader and Do A Stand
  - ** Feb 9 - Required to have a write up of 3-5 sentences on what your project Idea is to be reviewed by your Project Lead
  - ** Feb 13 - Present what you have so far to your Squad Leader, If you have no code on Feb 13, it will count as a missing hw that cant be made up
  - ** Feb 20 **: Project presentation day! You're required to be in the class zoom starting at 10:00 AM ET

## Stand-ups
  - What did I work on since the last stand up meeting
  - What am I trying to get done today
  - What is (if anything) is preventing me from getting this done.

## Technical Requirements

### &#x1F534; Mandatory to pass:
#### MVP - Minimum Viable Product

For this project, you will be making another full CRUD app using the technologies outlined below. 

* A working full-stack application, built by you, using the MERN stack: **Node.js, MongoDB/Mongoose, Express and React**.  
* At least _one model_ with full **CRUD**.
* Include **at least one** of the following features:
    - Authorization
      - Include sign up/login functionality, with encrypted passwords & an authorization flow
    - Pull from a third party API - either client side with AJAX or server-side with an NPM
      - NPMs that work with an API: Twitter, Yelp, etc.  Remember the `axios` module can make API calls server side to any URL.  
    - Have two models
      - Have two separate models that don't have to be related
    - Have related models
      - Models can be related in a one-to-many relationship, for example users can have many posts
    - Use a CSS framework like Skeleton or Bootstrap
    - Use React Router
* **Be deployed online** and accessible to the public via **Heroku**
* :heavy_exclamation_mark: A git repository **not inside the class repo**.  
   - *At least* one GitHub commit per day *per person*.
* Use some sort of **daily tracker** that all group members use to help organize your workflow (e.g. Trello).
* **A ``README.md`` file** with explanations of the technologies used, the approach taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc
  - Have a **link to your hosted working app** in the **`README.md`** file in your github repo

### &#x1F535; Stretch Goals (Not Mandatory):
#### SUPER FLY Features ... If You Want to do extra
* Include portfolio-quality styling with animations
* Incorporate **Google Maps**
* Use `socket.io` for real-tme updates (like gmail) and collaborative interaction (like chat rooms).  
* Inside in your `README.md`:
    * Include User Stories
    * Include **wireframes** that you designed during the planning process

#### :heavy_exclamation_mark: Important note about External APIs!

When you are calling External APIs **server-side** that require a key, you should store those keys somewhere private like an `.env` file. They are the only proof that you are you and you are allowed to call that API, after all.

For example, it is very important that you not push your API keys to a public Github repo. Keep them in a `.env` file and make sure you add `.env` to your `.gitignore`. Note that since it won't be pushed into the github repo, your partner won't be able to pull it either. So, make sure both partners write their own local `.env` file with the key!

This is especially true when working with Amazon Web Services (AWS). Here's an example of a [stolen key horror story](https://wptavern.com/ryan-hellyers-aws-nightmare-leaked-access-keys-result-in-a-6000-bill-overnight).

## Make A New Repo & Setup for Heroku Deployment

Before you begin coding, make a new GitHub repo for your project. _Take the following steps to ensure you have the right file structure/set up in order to deploy your site to Heroku._

:heavy_exclamation_mark: You will be using GitHub, **not** GitHub Enterprise!

## Technical Demonstration

All projects will be presented to the class. Your presentation should be:

* Approximately 5 -10 minutes in length
* Shows off all features of the app
* Explain the technical details
* Explain the technical challenges
* Explain which improvements you might make

Additionally, we would you to answer *at least one* of the following questions:

1) What went well for you?
2) What was your your biggest struggle?
3) What was the most useful tool that you relied on the most?

You will be sharing your app and your code.  Be prepared to answer questions from the instructors and other students.

## Meetings with instructors

**By Tuesday**<br>
Your will submit your written project idea to your instructor. Your instructor will inform you if your idea does in fact meet MVP
You will answer the following questions?
1. My app is called...
1. The name of my App's Model is ....
1. My app will include the following stretch goal ( 3rd Party Api, 2 Models, Related Model, React Router,  CSS Framework )
1. Wireframe. please see wireframe lesson and use Draw.io or handwritten wireframe to map out your project.
1. If you can not think of an idea answer the above questions and Extend Either React Bookmarks, React OMDB Movies, or React Blog to the MVP.

## How to Submit Your Project
Your project is due on Sat, Feb 20 at 10:00 am ET. You will present your project and show your code to classmates and instructors.

:heavy_check_mark: Add your roject to [this google sheet](https://docs.google.com/spreadsheets/d/1plSh5tOSHCIt1_LAYQaUxe2KsN8zKoIaecrBfg45a0Q/edit?usp=sharing).  Note that this is the order you will be presenting.

## Where to go for help during project week
1. Seek out help online
2. Seek out help with your classmates
3. Seek out help with our class TA and IAs during the normal hours

## Etc.

<details><summary><strong>Suggested Ways to Get Started</strong></summary>

* **Wireframe** Make a drawing of what your app will look like in all of the stages of the app(what does it look like as soon as you log on to the site? What does it look like while the player is playing? What does it look like when the player wins / loses?).

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
</details>


<details><summary><strong>Think about...</strong></summary>

- **Creativity**  
Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

- **Code Quality**  
Did you follow code style guidance and best practices covered in class, such as spacing, indentation, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**  
Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?
</details>

<details><summary><strong>Useful Resources</strong></summary>

* **[Heroku](http://www.heroku.com)**
* **[Writing Good User Stories](http://www.mariaemerson.com/user-stories/)**
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)**
* **[Mongo Documentation](https://docs.mongodb.com/manual/)**
* **[Mongoose Documentation](http://mongoosejs.com/docs/guide.html)**
* **[Mongo Cheatsheet](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Nova/wiki/Mongo-Cheatsheet)**
</details>
<hr>  

## Inspiration - Projects by Previous SEI Students

- [Movie Finder](https://project-3-moviefinder.herokuapp.com/)
- [DND Encounters](https://dnd-encounters-2021.herokuapp.com/)
- [Motivation Machine](https://motivation-machine.herokuapp.com/)
- [Xila Jewlery App](https://xila-jewelry-app.herokuapp.com/)
