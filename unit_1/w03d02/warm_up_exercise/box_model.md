[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# CSS Box Model

The box model is integral to all CSS you wrote. Everything in the browser is
a box (regardless of it's visual shape). The box model is important for
understanding how we can leverage that to build great websites.

## Prerequisites

- HTML
- CSS Selectors
- Styling elements with CSS

## Objectives

By the end of this, developers should be able to:

- Explain the box model and answer questions about it
- Use the different pieces of the box model

## Introduction

Everything on the web is a box. Absolutely everything.

Don't believe me? Let's go to any site and add the following to the head tag:

```html
<style>
  * {
    border: 1px solid red !important
  }
</style>
```

Everything on the page should be outlined in a red box now. Because everything
on the web is a box - which we call the **box model**.

## The Parts of the Box Model

The box model is made up of four parts:

1. Content
1. Padding
1. Border
1. Margin

The four parts are in that order starting from inside the element and working
outwards. Meaning, the content is the center-most piece of the box model and the
margin is the outer most piece of the box model.

![Cat Box Model](https://i.pinimg.com/originals/e7/3e/51/e73e51acfa2cfc7c87139ad874a54ce2.jpg)

These four parts together control the size of elements on the page.

## We Do: Play Around with the Box Model

Open up [this CodePen](https://codepen.io/underwater/pen/jOWjWbr), which has two `div` elements inside the body. We've applied some border, margin, and padding to the element. Using this codepen, explore the following questions:

1. What happens to the size of the div when you change the contents?
2. Give the box more padding What happens to the size of the divs?
3. Give the box more margin. What happens to the size of the divs?
4. Increase the size of the border. What happens to the borders?

## Seeing the Box Model

Your browser's developer tools give us a great way to see the box model in action (and to
interact with it). In [the CodePen from the previous
exercise](https://codepen.io/underwater/pen/jOWjWbr), right click on
the box and select `Inspect` from the drop down menu.

The box model diagram will be at the bottom of the developer tools. Try changing the
border, margin, or padding from here!

![Box Model](https://cdn-media-1.freecodecamp.org/images/0*fL7IZ5XJwHsQth-a.png)

## Tips & Tricks

### Box Sizing

You probably want something like this at the top of your css:

```css
* {
  box-sizing: border-box;
}
```

The `box-sizing` property controls how the size of a box is calculated.
Specifically, is the border included in the width calculation of the box? By
setting it to `border-box`, we're including the border in the height and width
calculation.

#### You Do: See it in action

Want to see what this looks like? [Check out this CodePen](https://codepen.io/ZakkMann/pen/bGbXeBZ). Open up that codepen and scroll to the bottom of the CSS column. Add `10px` of padding to the `.item` element. What happens? Notice how with `width` property is set to `100%`?

Fix this by setting the `box-sizing` property to `border-box` on all elements
(at the top of the CSS column).

### Fat Fingers

Do you have a hard time clicking links, especially on mobile phones? You can
make this easier by adding padding to the `a` tag.

> Knowing what you know about the box model, why does that work?

### Aspect Ratio Boxes

Achieving aspect ratios in CSS is really challenging - unless we leverage the
box model and some good, old fashioned math!

Want an element to be a perfect square? Give it a `width` and then set the
`padding-top` to `100%`!

Want a 16:9 box? Well `9 / 16 = 0.5625`, times 100 that's `56.25%`. Set the
padding top to `56.25%` and you'll have a perfect 16:9 box!

[Try it out in this CodePen](https://codepen.io/ZakkMann/pen/yLBmJXN)

You can read more about this in [this CSS Tricks article](https://css-tricks.com/aspect-ratio-boxes/)

<hr>
<br>

### Display

## a) Inline display 

The default display for some tags, such as `<em>`, `<strong>`, and `<a>`, is called inline. Inline elements have a box that wraps tightly around their content, only taking up the amount of space necessary to display their content and not requiring a new line after each element. The height and width of these elements cannot be specified in the CSS document. For example, the text of an anchor tag will, by default, be displayed on the same line as the text inside of an emphasize element. Each of these will only be as wide as necessary to contain their content.

#### `display` can make any element an inline element

Ex:

`h1 {
  display: inline;
}`


## b) Block Display 

Some elements are not displayed in the same line as the content around them. These are called block-level elements. These elements fill the entire width of the page and, unless specified, are the height necessary to accommodate the content inside of them.

Elements that are block-level by default include all levels of heading elements `<p>`, `<div>` and `<footer>`. [let's take a look at the documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
  
## c) Inline-block display 
`Inline-block` display combines features of both `inline` and `block` elements. `Inline-block` elements can appear next to each other and we can specify their dimensions using the `width` and `height` properties. Images are the best example of default `inline-block` elements.

#### You Do: See it in action

Make the items in the list display next to one another [Use this codepen](https://codepen.io/madeline10302/pen/qBEgNGw)


## Closing

Everything on the web is a box! And every box is made up of four parts: content,
padding, border, and margin. Those four pieces together determine the size of
every element on the page.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
