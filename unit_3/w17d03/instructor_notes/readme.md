# MERN STACK

![MERN-stack-1](https://media.git.generalassemb.ly/user/15881/files/72724900-67eb-11eb-9814-9038c7d8ac64)

![](https://www.dropbox.com/s/hgt6kbjb7nh06ki/React-Architecture.png?dl=1)

# To Get Started
1. Reinstall `npm i -g big-poppa-code-react-starter`
1. run `lets-code` choose `project-starter`
1. If you have issues with lets-code just clone https://git.generalassemb.ly/arthurbernierjr/w17-d03-starter

# Professional SRC Folder Structure

1. Pages - For Page Level Components
1. Components - For Pieces of Pages and Reusable Components
1. SCSS - For Sass StyleSheets
1. Router- For React Router Files

![](https://media.git.generalassemb.ly/user/15881/files/5e801480-67f6-11eb-94f5-ba9b4caa9fbf)

# Agenda

1. We will build a Blog Application that will allow us to Create a new Blog, See A List of Blogs We Created, Update an Individual Blog, Delete the Blog Bost
1. First we will create a Model with Mongoose Schema and Mongoose model
1. We will then create a Blog Controller with our Model that will contain 5 Rest API Routes Create, Index, Show, Delete and Update
1. We will update our server to have a catch all that will allow us to always send our React App to the user when they hit a route that the server doesn't have
1. Then we will build a React FrontEnd with React Router, We will create a HomePage that has all the Blogs Listed, A ShowPage to show each individual Blog Post, An EditPage that lets us edit a Blog Post, A New Page That Lets Us Actually Create New Blogs 
1. Edit Page will also let us Delete the Blog Post



## Adding Comments

![](https://www.dropbox.com/s/lpk32aya3fv6a86/Screen%20Shot%202021-02-05%20at%208.19.57%20PM.png?dl=1)

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
    return <Route path={`/${post.title}`} component={() => <BlogPost content={post} />} />
})}
```


</details>

