[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

# React To Do list

For this homework, you will be creating a to do list using React. 
- [Working Example](https://2s8g5.csb.app/)

<img src="https://i.imgur.com/47LwvRJ.png"/>

#### Learning Objectives

- React State
- Controlling Input in React
- Rendering Data with React

#### Prerequisites

- React State
- React Props
- Capturing Input

## Requirements
- When the page loads, your app should render a list of items from an array of data. You can use the data below to get started.

```js
  const toDoListData = [
    {
      title: "Learn more about React",
      completed: true
    },
    {
      title: "Write a new Component",
      completed: false
    },
    {
      title: "Add some style",
      completed: false
    }
  ];
```

- If the item is not completed, render the item on the page.
- Your app should have an input that allows the user to enter a new item to the to do list.
- When the user submits the form (presses enter) the value in the input should be added as an item on your to do list. 

### Bonuses
- Allow the user to complete an item by clicking on it. When the user clicks on a list item, toggle its completed property to true and no longer display that item. 
- If you get the above bonus completed, try refactoring your app so that the items which are completed remain on the page with a strike through them.
- Style your to do list according to the [Working Example](https://2s8g5.csb.app/) 

## Deliverables

- Working To Do List in React. 
- Submit homework via Github issues.
