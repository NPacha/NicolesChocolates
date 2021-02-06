# Assesment

## MVP

1. As A User I should be able to go to the webpage and see a form.
1. When I as a user fill in the form with a movie title and click submit a list of movies should display below the form
1. If I enter another movie into the form and click enter I should get a new list of movies.


## Below is the markdown from when we worked with the OMDBAPI Previously.
### Differences
1. Previously we only grabbed 1 Movie at a time
1. Now I want you to grab an entire list (your going to have to read the docs to find that out)

### Hints 
1. USE POSTMAN, you won't know what your data is gonna look like unless you test your requests in Postman
1. Make sure your API Key works, if it doesn't find out why. Did you follow all the steps from OMDB, all fails just request a new one.
1. Don't over complicate the details PAY CLOSE ATTENTION, to the what the data you are fetching looks like and use that to figure out how you should display it
1. Dont forget how arrays work, make sure you create a state variable to store your list of movies from the API request.


# Jog Our Memory (everything below is from the original markdown, they are not the instructions for how to get to mvp, you must solve for the mvp on your own, Final Code from the previous class is at the bottom of the markdown)

## API Keys

Many APIs are restricted. Maintaining data on a server can get expensive and the data on a lot of these sites is valuable.

The two main ways individuals/companies can get access to APIs is through API keys - a special set of characters that is purchased through the website. Every time you make a request, the key must be used, this lets the API keep track of how many requests you make and limit/charge you accordingly.

The other way is OAuth. OAuth is a tangent to what we'll talk about today, but if you want to learn more, here is a [good start](https://stackoverflow.com/questions/4201431/what-exactly-is-oauth-open-authorization).

Typically, API keys go in as query parameters. Query parameters go at the end of a URL. They start with a `?` and then have key value pairs. Many key-value pairs can be used and each key-value pair can be used by separating them with an equal sign.

Here is an example of a request to OMDB (open movie data base), for a movie with the title `Eraserhead` and the `apikey` (this is a fake key).

```
http://www.omdbapi.com/?t=Eraserhead&apikey=x9903Ddc
```

A response in JSON will be sent and could be seen in the browser

![eraserhead omdb json](https://i.imgur.com/PvhRgo8.png)


## Mini Movie App

We're going to build a tiny React single page app that has a text input, a button and when a user inputs a movie, they will get a set of movies that match from OMDB.

### Setup

In Your code folder (NOT SEIR_RUTH) because we are going to be deploying this app
- `lets-code`
- select `get-started`
- name your project movies
- `cd movies`
- `git init`


## Lets delete the Home.js file and we'll remove it from the App.js file



### Setting Up Our Form

We're going to be making requests to OMDB using `fetch`. We'll be viewing those results in Chrome's Console. Once we build out the functionality, we'll start incorporating our data into our web page.

Go to [request an api key from OMDB](http://www.omdbapi.com/apikey.aspx)

Fill out the form, you should get an email asking you to validate your key within a few minutes. Hold on to this key, we'll be using it soon enough.


An http request requires:
- headers (fetch handles most of this for us)
- a url to send the request
- a method (get, post, put, delete...)
- a way to send data if it is a post or put request
- a way to wait for the response before doing something with the incoming data (We'll use promises, but there is a newer way with async/await that you can research on your own)
- a way to do something with the incoming data
- a way to handle errors

Let's build our first fetch request.

`fetch` is a function. it takes two arguments the second is optional and it **MUST** be an object. We'll code this out together after we put together our query string

**App.js**

Let's build our form and form functionality. We've done this before and it seems like a lot of boilerplate functionality. Because react has reusable components, you could just build this functionality once per project. But you may find that you want different behaviors for different inputs.

We're going to break our request into multiple parts and then concatenate it. This will help us see each piece and what it does, and then possibly, help us have more flexibility as we build more complex/varied requests

- `baseURl` : `'http://www.omdbapi.com/?'` the start of our request beginning with `http://`, after the last `/` we have a question mark, that will start our query parameters
- `apikey`: `'apikey='` + `'your api key here'` `apikey` is the specific key OMDB is looking for, then we'll add our own api key (no spaces).
- `option`: `'&t='` the ampersand `&` lets us know that there is another query parameter coming up. `t=` is the next key, it matches the type of search we want to do. There are a few searches in the OMDB documentation. Perhaps later on, we'd want to use a different one?.
- `title`: `''` - the movie title we'd like to search for. We'll be able to enter what we want using our input and form
-   `searchURL:` `''` - here we'll end up concatenating all the pieces to make a working url.

```js
	const [query, updateQuery] = useState({
		baseURL: 'http://www.omdbapi.com/?',
		apiKey: 'apikey=' + '8d432cb5',
		option: '&t=',
		title: '',
		searchURL: ''
	});
```

Next we'll have to add our form(and we'll add an anchor tag at the bottom, if we've successfully built our URL, we should be able to click on it and see our JSON from OMBD):

```jsx
	return (
		<div className="Page-wrapper">
			<h2>Arete App</h2>
			<h3>{name}</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title"> Title</label>
				<input
					id="title"
					type="text"
					value={query.title}
					onChange={handleChange}
				/>
				<input type="submit" value="Find Movie Info" />
			</form>
			<a href={query.searchURL}>{query.searchURL}</a>
		</div>
	);
```

Finally, we have to add our `handleChange` and `handleSubmit` functionality. And let's not forget to bind those in our constructor

```js
	const [name, upDateName] = useState('Arthur');
	const [query, updateQuery] = useState({
		baseURL: 'http://www.omdbapi.com/?',
		apiKey: 'apikey=' + '8d432cb5',
		option: '&t=',
		title: '',
		searchURL: ''
	});
	const handleChange = event => {
		updateQuery({ ...query, ...{ [event.target.id]: event.target.value } });
	};
	const handleSubmit = event => {
		event.preventDefault();
		updateQuery({
			...query,
			searchURL: query.baseURL + query.apiKey + query.option + query.title
		}, );
	};
```





our searchURL should look like (the api key is fake, it should be the one you got via email).



```js
http://www.omdbapi.com/?apikey=9999999&t=Eraserhead
```

When you click on your anchor tag, you should be taken to the JSON view:

![OMDB response](https://i.imgur.com/ojU0Qrp.png)


Note: including your API key in the `app.js` and then pushing it up to github makes your API key findable. OMDB keys are not that valuable, so it shouldn't be a worry.

However, there are services that cost thousands of dollars a month. People write bots to look for exposed API keys to steal them. We don't have time to cover hiding API keys today. But keep it in mind for your projects.

Hint: We can call the API on the back end and restrict our backend.... No time for that now, but if you were interested you have the necessary tools

### Using Fetch

Rather than render the `a` tag, we want to be able display the data we want on on our web page. Let's start out by getting our JSON from OMDB to console log. When we are doing a get request, all we need to do is put a string as our first argument.

We have a one little GOTCHA - we have to make sure that state has been set, before we make our request. So we'll have to use another Hook Called UseEffect, this hook will allow us to wait for some state to change and then perform a function only after that happens. We need to wait until our query.searchURL changes.

Were also going to need a `movie state variable to store the movie we find`
```jsx
  import React, { useState, useEffect } from 'react';

  export default function App(props) {
    const [name, upDateName] = useState('Arthur');
    const [query, updateQuery] = useState({
      baseURL: 'http://www.omdbapi.com/?',
      apiKey: 'apikey=' + '8d432cb5',
      option: '&t=',
      title: '',
      searchURL: ''
    });
    const [movie, updateMovie] = useState({});
    useEffect(() => {
      query.searchURL.length > 0 &&
        (async () => {
          try {
            const response = await fetch(query.searchURL);
            const data = await response.json();
            updateMovie({ ...movie, ...data });
          } catch (e) {
            console.error(e);
          }
        })();
    }, [query]);
    const handleChange = event => {
      updateQuery({ ...query, ...{ [event.target.id]: event.target.value } });
    };
    const handleSubmit = async event => {
      event.preventDefault();
      await updateQuery({
        ...query,
        searchURL: query.baseURL + query.apiKey + query.option + query.title
      });
    };
    return (
      <div className="Page-wrapper">
        <h2>Arete App</h2>
        <h3>{name}</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title"> Title</label>
          <input
            id="title"
            type="text"
            value={query.title}
            onChange={handleChange}
          />
          <input type="submit" value="Find Movie Info" />
        </form>
        <a href={query.searchURL}>{query.searchURL}</a>
        {Object.keys(movie).length ? movie.Title : ''}
      </div>
    );
  }
```

Expected Appearance:
![success OMDB Eraserhead console response](https://i.imgur.com/ADtTqUz.png)

## Rendering our response in the Browser


Let's make a movie component that will render a view of our movie

```jsx
import React from 'react';
const MovieInfo = (props)=>{
  return (
    <div>
     <h1>Title: {props.movie.Title}</h1>
     <h2>Year: {props.movie.Year}</h2>
     <img src={props.movie.Poster} alt={props.movie.Title}/>
     <h3>Genre: {props.movie.Genre}</h3>
     <h4>Plot: {props.movie.Plot}</h4>
 </div>
  )
}

export default MovieInfo;

```

**Gotcha!** - the data that came back to us from OMDB set the keys to have a capital letter- we need to make sure we match our data


Finally, let's swap out our `a` tag with our component and pass in our movie data as props we'll render nothing if there is no data.

And also lets clear the form. And add a little main tag and some classNames for style.


**Entire code**

**App.js**

```jsx
import React, { useState, useEffect } from 'react';
import MovieInfo from './MovieInfo';
export default function App(props) {
	const [query, updateQuery] = useState({
		baseURL: 'http://www.omdbapi.com/?',
		apiKey: 'apikey=' + '8d432cb5',
		option: '&t=',
		title: '',
		searchURL: ''
	});
	const [movie, updateMovie] = useState({});
	useEffect(() => {
		query.searchURL.length > 0 &&
			(async () => {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					updateMovie({ ...movie, ...data });
					updateQuery({ ...query, title: '' });
				} catch (e) {
					console.error(e);
				}
			})();
	}, [query]);
	const handleChange = event => {
		updateQuery({ ...query, ...{ [event.target.id]: event.target.value } });
	};
	const handleSubmit = async event => {
		event.preventDefault();
		await updateQuery({
			...query,
			searchURL: query.baseURL + query.apiKey + query.option + query.title
		});
	};
	return (
		<div className="Page-wrapper">
			<form onSubmit={handleSubmit}>
				<label htmlFor="title"> Title</label>
				<input
					id="title"
					type="text"
					value={query.title}
					onChange={handleChange}
				/>
				<input type="submit" value="Find Movie Info" />
			</form>
			<main className="Page">
				{Object.keys(movie).length ? <MovieInfo movie={movie} /> : ''}
			</main>
		</div>
	);
}

```
**MovieInfo.js**

```js
import React from 'react';
const MovieInfo = props => {
	return (
		<div className="column">
			<h1>Title: {props.movie.Title}</h1>
			<h2>Year: {props.movie.Year}</h2>
			<img src={props.movie.Poster} alt={props.movie.Title} />
			<h3>Genre: {props.movie.Genre}</h3>
			<h4>Plot: {props.movie.Plot}</h4>
		</div>
	);
};

export default MovieInfo;


```

