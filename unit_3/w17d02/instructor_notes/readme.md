
## What is React Router?
Up to this point, our React applications have been limited in size, allowing us to use basic control flow in our components' render methods to determine what gets rendered to our users. However, as our React applications grow in size and scope, we need an easier and more robust way of rendering different components. Additionally, we will want the ability to set information in the url parameters to make it easier for users to identify where they are in the application.

React Router, while not the only, is the most commonly-used routing library for React. It is relatively straightforward to configure and integrates with the component architecture nicely (itself being nothing but a collection of components). Once configured, it essentially serves as the root component in a React application and renders other application components within itself depending on the path in the url.

Right now, our React applications have only been showing one screen. The application that we just generated has only one component and we cannot navigate around to multiple pages.

In multi-page applications, a user will click a links in the navigation or elsewhere to open up a new file and render this new file in the browser.  In that way, the user will be able to navigate to all of the various pages of a website.

With Single Page Applications we need to use a tool called Routing to match the routes in our application’s URL’s different React components!

## What is Routing

Routing is the process of selecting a path for traffic in your application. Routing is the tool that enables you to navigate to different pages without reloading the entire application

In order to create Routes in react, we will need a separate component that loads all of our Routes into the dom and matches them to the appropriate components. 

Instead of immediately attaching our Component APP to the DOM on render, we want to see what URL the user has landed on and serve of the correct component. 

Due to this we now need a Router.js Component, to hold all of our routes. This will be the first component we add to render into our HTML. 

Our folder structer might look like

- Root
    - Router.js
    - Components
        - App.js

Let’s look at what our Router component might look like! 


```js
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function App() {
  return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <Route path="/" exact component={App} />
            <Route path="/about" component={About} />
        </BrowserRouter>
    );
}

```


__Let's breakdown the code above__

1. We need to import the `BrowserRouter`, `Route` and `Link` components from the `react-router-dom`  library 
2. `BrowserRouter` needs to surround all of the routes of our application. It will handle mounting and unmounting the correct components at the correct URL’s
3. `Route` allows us to add a specific route to our applications. It has two required properties path should be equal to the url
component should be the component that you want to appear when you match the path in the browser
4. `exact` is an optional parameter that tells the browser to match this path exactly
5. `Link` is used to create the links in your application. It will be used in place of anchor tags. Instead of adding an `href` attribute we add a `to` attribute which will be equal to the path we are linking to.


### Rendering Dynamic Routes

<details><summary>View Rendering Dyanmic Routes</summary>
We were able to get our basic routing structure down! Go us! Now we want to make dynamic routes. What are dynamic routes?

Think about a blog. With a blog a user should be able to create a blog post and the blog post will be able to be accessed from a unique URL. In our application, we need to mirror this concept by allowing dynamic routes to be created.

Can you think of how we might do this?

If you said `.map()` then you are correct! Let’s take for instance the mock data below:

```js

let mockBlog = [
    {
        title: 'First Blog Post',
        description: 'My first blog post!'
    },
    {
        title: 'Second Blog Post',
        description: 'My Second blog post!'
    },
    {
        title: 'Third Blog Post',
        description: 'My Third blog post!'
    }
];

```

If we wanted to turn this data into routes and dynamically display each blog posts data, we could map over the array and render Routes!

Then we could pass each newly rendered component a prop with the content for the blog post! We will need to create a new component for the blog posts. We could title it `BlogPost`.

Finally, we would have to use map again to create the navigational links!


```js
{state.data.map((post,index) => {
    return <Route path={`/${post.title}`} render={() => <BlogPost content={post} />} />
})}
```


</details>

## Awesome! You now know how to Route between pages in React!
1. Lets add this functionality to our Grocery API and Frontend 
