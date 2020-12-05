![ga](../../../ga_cog.png) <br>
Title: HTML CCS JS MINI APP Lesson <br>
Type: Build<br>
Duration: "1:30"<br>
Instructor: Arthur Bernier Jr<br>
Creator: Karolin Rafalski <br>
Updated: Arthur BernierJr <br>
Competencies: CSS <br>
Prerequisites: Basic HTML, CSS

---
# Begin with the End In Mind
1. Review CSS Specificity
1. Review when you should use JQuery Onload Function
1. We will use HTML, CSS and JS together
1. Learn about CSS Architecture and why you should give everything a class
1. Use Clip Path, Transform and The CheckBox Hack to Build Dynamic Pages
1. Use Ajax to Create Dynamic Content
1. Get started doing cool stuff so that you can build upon it later
1. Deploy to GitHub Pages

## Intro


When the web started, monitors were all fairly similar. Even when CSS was created and implemented, the way people viewed websites was still quite similar.

Because of this, CSS was designed to have features similar to print and newspaper layouts and many things were set by pixel size and the goal was to have a design be 'pixel perfect'

As monitor technology improved, more widths and sizes became available. Browser technology also advanced in many ways, including allowing for browsers to be resized to nearly any size. Finally, mobile devices were introduced that were not only  much smaller than a typical monitor, they also had two possible orientations.

## Can I use?

As new technologies arise in HTML and CSS, some browsers are faster to adopt them than others. In the past, IE was often the least able to adapt changes.

To check whether a certain feature is compatible in a browser, we can check a web site called [`Can I use`](https://caniuse.com)

Let's search for `flexbox` (you'll learn about it in a later lesson). As you can see it is fully compatible in all browsers except for IE, where it is partially supported.  


## Should I Prefix?

If you find a feature that is not supported, or not fully supported, you can go to [`Should I Prefix`](http://shouldiprefix.com/)

There is a list of CSS features that either no longer require a prefix (coded in green). Or are in blue. If they are blue, you can expand them and see how you would write the vendor prefixes, so you can have compatibility across browsers.

Things are always changing, but right now a feature called `appearance` requires vendor prefixing. You can see an example below.

For the appearance feature, you would write the property three times. Two times would include the vendor prefix so that it can be used in different browsers.

As you look at older code, you may see vendor prefixes for features that no longer require it. It's ok! It won't break anything. But you won't need to include those vendor prefixes on new work.

![vendor prefix](https://i.imgur.com/OCHkMlT.png)

You can also use a CSS prefixer to write the prefixes for you, then just copy paste [Pleaeease.io](http://pleeease.io/play/)

## Get started

- Navigate to our` GA folder
- then create `index.html` `main.css` inside of a folder called `first_app` 
- You should see HTML content. The background should be blue This lets us know that the HTML and CSS files are properly connected.

## Lets Code Along and build an app header with modern css
![Nova Class](https://media.git.generalassemb.ly/user/15881/files/a0ac2400-7e79-11ea-995f-67579d61e562)


## Here is the functionality we will build in CSS alone without using JS
![nova](https://media.git.generalassemb.ly/user/15881/files/21b9ea00-7e7f-11ea-9644-e2f796d17605)

## Before we build it lets talk about how CSS works

### The breakdown of a CSS Selector

![css-selector](https://media.git.generalassemb.ly/user/15881/files/d3651500-7e97-11ea-8931-de69a2b6003c)

### How CSS is read by the browser
![css-works-1](https://media.git.generalassemb.ly/user/15881/files/c9431680-7e97-11ea-8a3c-4b96c1d8e1f2)

When a webpage is loaded in the browser first the page is loaded, then <br>
the html page is parsed, then the css is loaded and the Dom is created ( more on the Dom next week),<br> 
then the CSS is Parsed and the browser decides how to resolve conflicting CSS and processes final values, <br>
Once that happens we then create the CSS Object Model, then we get the render tree, then we render the website with the visual formatting model, <br>
Then we get our website.

## Forget Everything I just Said
1. You don't need to understand all of that to write good CSS
1. Main takeaway is this , the CSS gets parsed and resolves conflicts between your styles
1. The way css figures out what CSS should be valued as more important is know as CSS Selector Specificity
1. Specificity is what you need to understand

![importance-specificity-sourceorder](https://media.git.generalassemb.ly/user/15881/files/ccd69d80-7e97-11ea-8762-f23952dd1fec)



## Specificity Broken Down
![specifishity](https://media.git.generalassemb.ly/user/15881/files/cfd18e00-7e97-11ea-8f5e-a38930f30cf5)

## Block Element modifier

The BEM approach ensures that everyone who participates in the development of a website works with 
a single codebase and speaks the same language. Using BEM’s proper naming convention will better 
prepare you for design changes made to your website.

## Lets write some CSS

```css
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit; }

html {
    font-size: 10px; }

body {
    box-sizing: border-box; }

body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: #777;
    padding: 3rem; }


```
### This will allow us to reset the font and also normalize our styles agianst all browsers


### Lets build our animations
``` css
@keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-10rem); }
    80% {
        transform: translateX(1rem); }
    100% {
        opacity: 1;
        transform: translate(0); } }

@keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(10rem); }
    80% {
        transform: translateX(-1rem); }
    100% {
        opacity: 1;
        transform: translate(0); } }

@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateY(3rem); }
    100% {
        opacity: 1;
        transform: translate(0); } }

```

### Lets build our header

```css
.header {
    height: 95vh;
    background-image: linear-gradient(to right bottom, rgba(255, 221, 255, 0.8), rgba(153, 50, 204, 0.8));
    background-size: cover;
    background-position: top;
    position: relative;
    -webkit-clip-path: polygon(0% 0%, 100% 100%, 100% 50%, 50% 100%, 0% 50%);
    clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0% 50%); }
.header__logo-box {
    position: absolute;
    top: 4rem;
    left: 4rem; }
.header__logo {
    height: 3.5rem; }
.header__text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center; }

.heading-primary {
    color: #fff;
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 6rem; }
.heading-primary--main {
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3.5rem;
    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;
 }
.heading-primary--sub {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.75rem;
    animation: moveInRight 1s ease-out; }

.heading-secondary {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right, #fdf, #9932CC);
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: .2rem;
    transition: all .2s; }
.heading-secondary:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2); }

.heading-tertiary {
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase; }

```

### Lets build our cool button 


```css

.btn {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    position: relative;
    font-size: 1.6rem;
    border: none;
    cursor: pointer; }
```

### We also need to set the buttons link and visited state and set a transition property

```css

.btn, .btn:link, .btn:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all .2s;
    position: relative;
    font-size: 1.6rem;
    border: none;
    cursor: pointer; }
```


### We also need the buttons hover state and animation we should divide this up

```css
.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
.btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0; }

.btn:active, .btn:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); }

.btn--white {
    background-color: #ffffff;
    color: #777; }
.btn--white::after {
    background-color: #fff; }

.btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s; }

.btn--animated {
    animation: moveInBottom .5s ease-out .75s;
    animation-fill-mode: backwards; }

```

### Lets set create the cool nav with the pure css popup using a hidden checkbox

```css
.navigation__checkbox {
    display: none; }

.navigation__button {
    background-color: #fff;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 6rem;
    right: 6rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
    text-align: center;
    cursor: pointer; }

.navigation__background {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;
    background-image: radial-gradient(#fdf, #9932CC);
    z-index: 1000;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1); }

.navigation__nav {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;
    opacity: 0;
    width: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55); }

.navigation__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    width: 100%; }

.navigation__item {
    margin: 1rem; }

.navigation__link:link, .navigation__link:visited {
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    padding: 1rem 2rem;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
    background-size: 220%;
    transition: all .4s; }
.navigation__link:link span, .navigation__link:visited span {
    margin-right: 1.5rem;
    display: inline-block; }

.navigation__link:hover, .navigation__link:active {
    background-position: 100%;
    color: #9400D3;
    transform: translateX(1rem); }

.navigation__checkbox:checked ~ .navigation__background {
    transform: scale(80); }

.navigation__checkbox:checked ~ .navigation__nav {
    opacity: 1;
    width: 100%; }

.navigation__icon {
    position: relative;
    margin-top: 3.5rem; }
.navigation__icon, .navigation__icon::before, .navigation__icon::after {
    width: 3rem;
    height: 2px;
    background-color: #333;
    display: inline-block; }
.navigation__icon::before, .navigation__icon::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all .2s; }
.navigation__icon::before {
    top: -.8rem; }
.navigation__icon::after {
    top: .8rem; }

.navigation__button:hover .navigation__icon::before {
    top: -1rem; }

.navigation__button:hover .navigation__icon::after {
    top: 1rem; }

.navigation__checkbox:checked + .navigation__button .navigation__icon {
    background-color: transparent; }

.navigation__checkbox:checked + .navigation__button .navigation__icon::before {
    top: 0;
    transform: rotate(135deg); }

.navigation__checkbox:checked + .navigation__button .navigation__icon::after {
    top: 0;
    transform: rotate(-135deg); }
    .card-container {
        display: flex;
        flex-wrap: wrap;
    }

```

### Build Cards and use ajax to populate them with some data

```css

    .card {
        /* Add shadows to create the "card" effect */
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        position: relative;
        flex-basis: 33%;
        margin-top: 3rem;
      }
      
      /* On mouse-over, add a deeper shadow */
      .card:hover {
        box-shadow: 0 16px 32px 0 rgba(0,0,0,0.6);
      }
      .card__value{
        padding: 2px 16px;
      }
      .card > hr {
        position: absolute;
        bottom: 0;
      }

```
```javascript
console.log('oooooh thats how you do it')
$(()=> {
    const $cardContainer = $('<div class="card-container">');
    $('#root > .app').append($cardContainer);


    $.ajax({
        url:'https://www.omdbapi.com/?apikey=53aa2cd6&s=Spiderman'
      }).then(
        (data) => {
          data.Search.forEach((el)=> {
            const $card = $(`<div class="card"><div class="card__value"><img src="https://picsum.photos/200"><h1>${el.Title}</h1><h2>${el.Year}</h2><h2>${el.Type}</h2> <br/></div><hr></div>`);
            $cardContainer.append($card)
          })
        },
        ()=> {
          console.log('this isnt SPARTA');
        }
      );
})
```

### now lets put this on github pages by copying the folder to our desktop and pushing to github
----------------------------------

References:

[Can I use](https://caniuse.com/)

[Should I prefix](http://shouldiprefix.com/)

[Pleaeease.io](http://pleeease.io/play/)

[All About Floats](https://css-tricks.com/all-about-floats/)

[Solving Clearfix](https://css-tricks.com/snippets/css/clear-fix/)

[linear gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)

Citations:

GA Distinguished Falcuty Member - Karolina Rafalski<br>
Jonas.io <br>
Estelle Weyl The Standardista <br>

