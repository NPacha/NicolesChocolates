![](/ga_cog.png)

# CORGI CAROUSEL

![](https://imgur.com/pq7zXBJ.png)

Carousels are essentially slideshows used to cycle through a series of content. Today, we'll be building a very simple one to cycle through a set of images using HTML/CSS/jQuery. 

## Setup

Starter code has been provided for you with all the files linked together and the jQuery library.
  1. `git pull upstream master`
  1. Navigate to the `morning_exercise/corgi-carousel-starter` folder for today.
  1. Open the entire folder in your text editor to follow along and create a carousel with cute little corgis.
  1. Open the `index.html` in your browser.
  
## CSS

Before we can move onto the javascript file to give our carousel buttons some functionality, we need to hide all content of the carousel except the very first one, so the user only sees the first image when they first load the page. 

1. In the `style.css` file, hide all the images in the carousel by adding `display: none` to `.carousel-images img`

1. Show just the first image in the carousel by adding:
    ```
    .carousel-images img:first-of-type {
      display: block;
    }
    ```
   :red_circle: Resource: [:first-of-type selector](https://css-tricks.com/almanac/selectors/f/first-of-type/)
   
 ## JQUERY
 
:red_circle: Before we dive in, remember to include the document ready function (jQuery onload function). 

 
### Now, let's focus on one thing at a time and get our "next" button working.
 
 1. Add event listener onto our 'next' button that runs a function called nextImg when clicked
  
    ```js
    $('.next').on('click', nextImg);
    ```

2. Create the nextImg function and use a console.log to check that the function is working.

    ```js
    const nextImg = () => {
      console.log('clicked');
    }
    ```

3. Check that your event listener and event handler is working.

4. Create an array of the images in the index.html file.
    ```js
    const $imgArray = $('.carousel-images').children();
    ```
    :red_circle: Resource: [.children](https://api.jquery.com/children/)
1. Keep track of which image is currently showing by setting a global index counter variable. 
    ```js
    let currentImgIndex = 0;
    ```
1. Back inside the event handler for our next class, select the currently showing carousel image and hide it.  
    ```js
    $imgArray.eq(currentImgIndex).css('display', 'none');
    ```
    :red_circle: Resource: [.eq](https://api.jquery.com/eq-selector/) 
1. Increment the currentImgIndex so that we cycle to the next image. Use a console.log to check that it's working. 
    ```js
    currentImgIndex++;
    console.log(currentImgIndex);
    ``` 
1. Show the **new** currentImgIndex image 
    ```js
    $imgArray.eq(currentImageIndex).css('display', 'block');
    ```


Great, now our next button works and we can cycle through all the images -- but it breaks when we reach the last one because we're still incrimenting the currentImgIndex but there are only 4 images in our array. Let's fix that.

1. Define another global variable named `highestIndex` so we can count the highest index of images we have in our carousel.
    ```js
    const highestIndex = $imgArray.length -1;
    ```
  
    :red_circle: Remember: `.length` gives us an exact count of how long an array is, but indexes in JavaScript start counting from 0, so we need to account for that by subtracting 1 from the value .length gives us.

1. Back inside our event handler for our 'next' class, let's write an if/else statement so that if we go above the amount of images we have, it'll reset the currentImgIndex back to 0.
  
    ```
    if(currentImgIndex < highestIndex) {
      currentImgIndex ++;
    } else {
      currentImgIndex = 0;
    }
    ```

    :red_circle: Remember to watch where you place this if/else statement! Should it go before you hide the current image or after you hide the current image? Where should it go in relation to the `currentImgIndex++` that we already have in our code?

Excellent! Our 'Next' button now works.

<details><summary>App.js at this point</summary>

  ```js
  $(() => {

  // VARIABLES ===============
  const $imgArray = $('.carousel-images').children();
  let currentImgIndex = 0;
  const highestIndex = $imgArray.length -1;
  

  // EVENT HANDLERS ===============
  const nextImg = () => {
    $imgArray.eq(currentImgIndex).css('display', 'none'); 

    if(currentImgIndex < highestIndex) {
      currentImgIndex ++;
    } else {
      currentImgIndex = 0;
    }

    console.log(currentImgIndex);
    
    $imgArray.eq(currentImgIndex).css('display', 'block');
  };
  
  // EVENT LISTENERS ===============
  $('.next').on('click', nextImg); 


});
  ```

</details>

<details><summary>App.js at this point with notes</summary>

  ```js
  $(() => {

  // VARIABLES ===============
  // create an array containing the direct children of the HTML element with the class of 'carousel-images'
  const $imgArray = $('.carousel-images').children();

  // create a variable for the currentImgIndex
  let currentImgIndex = 0;

  // create a variable for the highest index in the $imgArray
  const highestIndex = $imgArray.length -1;
  

  // EVENT HANDLERS ===============
  // event handler for the next button 
  const nextImg = () => {
    // hide the current image (remember in jQuery we use .eq() instead of bracket notation)
    $imgArray.eq(currentImgIndex).css('display', 'none'); 
    
    // check if the currentImgIndex is the highest index in the $imgArray (see line 11)
    if(currentImgIndex < highestIndex) {
      // if it's NOT the highest index, incriment the currentImgIndex by 1
      currentImgIndex ++;
    } else {
      // if it IS the highest index, reset the currentImgIndex to 0
      currentImgIndex = 0;
    }
    // just to check our work in the browser console
    console.log(currentImgIndex);
    
    // display the NEW currentImgIndex 
    $imgArray.eq(currentImgIndex).css('display', 'block');
  };
  
  // EVENT LISTENERS ===============
  // select the HTML element with the class 'next' and on click, run the nextImg function
  $('.next').on('click', nextImg); 


}); // close onload 
  ```

</details>  


### Now let's do the same thing for the "previous" button! 
1. Add event listener onto our 'previous' button that runs a function called previousImg when clicked
  
    ```js
    $('.previous').on('click', previousImg);
    ```

2. Create the nextImg function and use a console.log to check that the function is working.

    ```js
    const previousImg = () => {
      console.log('clicked');
    }
    ```

3. Check that your event listener and event handler is working.

4. Add the hide/show code to your previousImg function like we did for the next button.

    ```js
      $imgArray.eq(currentImgIndex).css('display', 'none'); 
      $imgArray.eq(currentImgIndex).css('display', 'block');
    ```

5. For our previous button, we want to _decrement_ the image index this time. So, write an if/else statment that says, as long as currentImgIndex is greater than 0, we can keep decrementing. But once it hits 0, reset the currentImgIndex back to the _last_ image index: 
    
    ```js
    if(currentImgIndex > 0) {
      currentImgIndex --;
    } else {
      currentImgIndex = highestIndex;
    }

    console.log(currentImgIndex);
    ```

    :red_circle: Remember watch where you place this in the code!


And there we have it! A fully functional Corgi Carousel. If you're still feeling shaky on what's going on here, use the code below and comment it line for line. Feel free to reference the code with notes above or walkthrough this exercise again on your own at some point. 

<details><summary>App.js at this point</summary>

  ```js
  $(() => {

  // VARIABLES ===============
  const $imgArray = $('.carousel-images').children();
  let currentImgIndex = 0;
  const highestIndex = $imgArray.length -1;
  

  // EVENT HANDLERS ===============
  const nextImg = () => {
    $imgArray.eq(currentImgIndex).css('display', 'none'); 

    if(currentImgIndex < highestIndex) {
      currentImgIndex ++;
    } else {
      currentImgIndex = 0;
    }

    console.log(currentImgIndex);
    
    $imgArray.eq(currentImgIndex).css('display', 'block');
  };

  const previousImg = () => {
    $imgArray.eq(currentImgIndex).css('display', 'none'); 

    if(currentImgIndex > 0) {
      currentImgIndex --;
    } else {
      currentImgIndex = highestIndex;
    }

    console.log(currentImgIndex);

    $imgArray.eq(currentImgIndex).css('display', 'block');
  };
  
  
  // EVENT LISTENERS ===============
  $('.next').on('click', nextImg); 
  $('.previous').on('click', previousImg);
  
}); 
  ```

</details>

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)* <br>
Creator: Jerrica Bobadilla<br>
Adapted From: Madeline O'Moore<br>
Updated by: Ayla Ex
