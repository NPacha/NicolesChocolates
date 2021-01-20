

## Lets Code
1. open up your terminal
1. cd into student examples for today
1. then run ```lets-code```
1. Listen to my instructions


# Exercise on State

# Hooks: `useState`

In this section, we'll cover the simplest hook, `useState`, and how it can be used to store and update information.

To get started, we'll dive into a counter example 
```jsx
function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div>
      <span>Current Count: ${count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
```



## Initial State

Back to this line:

```js
const [count, setCount] = useState(0)
```

We see that we call `useState` with a value of `0`. This argument is the initial state - in this example, `count` will be assigned to `0`.


## Calling the update function

Moving on to the next two lines:

```js
const increment = () => setCount(count + 1)
const decrement = () => setCount(count - 1)
```

Here, we are creating two new functions that will call `setCount`. These functions are then assigned to the buttons as handlers:

```jsx
return (
  <div>
    <span>Current Count: ${count}</span>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
)
```


Much simpler! 👏

We can call `useState` as many times as we need.

## Look at Our Files
1. Lets look at the scripts in our package.json (can you identify the dev script)
1. We will be working in the src folder
1. Lets Locate App.js and Home.js

```jsx
import React, { useState } from 'react';

export default function Home(props) {
	const [cardText, updateCardText] = useState('');

	const addACard = element => {
		let promptCardText = window.prompt('Enter Your Text', 'enter text here');
		const list = document.getElementById(element);
		const card = document.createElement('li');
		card.innerText = promptCardText;
		list.appendChild(card);
		return;
	};
	const addGerman = event => {
		return addACard('german-list');
	};
	const addKellie = event => {
		return addACard('kellie-list');
	};
	const addAllegra = event => {
		return addACard('allegra-list');
	};
	const addNicole = event => {
		return addACard('nicole-list');
	};
	return (
		<div className="Page">
			<div className="column">
				<h2 className="heading german">German</h2>
				<ul id="german-list">
					<li>1 Card</li>
					<li>43 Card</li>
				</ul>
				<button onClick={addGerman}>Add A Card</button>
			</div>
			<div className="column">
				<h2 className="heading kellie">Kellie</h2>
				<ul id="kellie-list">
					<li>1 Card</li>
					<li>3 Card</li>
				</ul>
				<button onClick={addKellie}>Add A Card</button>
			</div>
			<div className="column">
				<h2 className="heading allegra">Allegra</h2>
				<ul id="allegra-list">
					<li>1 Card</li>
					<li>2 Card</li>
				</ul>
				<button onClick={addAllegra}>Add A Card</button>
			</div>
			<div className="column">
				<h2 className="heading nicole">Nicole</h2>
				<ul id="nicole-list">
					<li>1 Card</li>
					<li>2 Card</li>
				</ul>
				<button onClick={addNicole}>Add A Card</button>
			</div>
		</div>
	);
}
```

### Alot is happening here lets break this down
- note: the classNames are defined in our stylesheet, lets take that for granted and discuss it later
1. First we have a functional component inside of that functional we are
using a React Hook Called UseState `State` should sound fammiliar
1. what we need to understand is that when useState is invoked it returns an array with
2 values. A Value of a certain dataType and a function that has
one Job, to update that value.
1. We are using array destructuring which works like this
    ```js
    const arthursNameArray = ['Arthur', 'Bernier']
    const [firstName, lastName] = arthursNameArray
    // i now have 2 constants 
    // firstName which has what value
    // lastName which has what value

    // now think of this as a function

    const createArrayWithUpdater = (arr) => {
     return [arr, (newValue)=> {
     arr.push(newValue)
    }]
    }
    
    const [myArr, updateMyArr] = createArrayWithUpdater([1,2,3])
    ```
    <img width="842" alt="Screen Shot 2020-08-21 at 2 36 39 PM" src="https://media.git.generalassemb.ly/user/15881/files/26ae1d80-e3cc-11ea-9dae-a6ca2e6fcaf0"> 
1. also we have multiple functions inside the scope of this function
It appears that they all call the original addACard Function and add a card to an individual list (lets demonstrate)
1. This functionality should make sense to us because we aren't yet using state, lets change that
1. Now that we see that lets go ahead and add some functionality

### Lets Use State Ourself in a simple location
1. Go to the App.js file
1. Lets update our code to add a button that changes the state of our application

    ```jsx
        import React, { useState } from 'react';
        import Home from './Home';
        export default function App(props) {
          const [name, updateName] = useState('Arthur');
          return (
            <div className="Page-wrapper">
              <h2>Ruth App</h2>
              <button onClick={e => updateName(e.target.value)} value={name + 's'}>
                Change
              </button>
              <h2>{name}</h2>
              <Home />
            </div>
          );
        }    
     ```      
1. When we click on this button that we created we update our state.
When the button is clicked, we call updateName with the value of e.target.value `e` standing for event
So that function has one purpose which is to update Name. Name updates and which also will update the value because value is 
always equal to `value={name + 's'}`. This causes each time we click the button for an S to get added onto the end of our name.

<img width="842" alt="Screen Shot 2020-08-21 at 3 32 57 PM" src="https://media.git.generalassemb.ly/user/15881/files/26158700-e3cc-11ea-903d-a263f5c5dae3">


### Lets use that understanding to add a new Functional Component for a Form.
```jsx
import React, { useState } from 'react';

export default function NameForm(props) {
	const [name, setName] = useState('');

	const handleSubmit = evt => {
		evt.preventDefault();
		alert(`Submitting Name ${name}`);
		setName('');
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					Frirst Name:
					<input
						type="text"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
			<h1>{name}</h1>
		</>
	);
}
```
1. In this component we have a form that has one field called name.
1. Whenever a user inputs a value name is dynamically changed and then finally submitted when the submit button
is clicked.
1. The submit button also causes the form to clear itself when its done by setting name back to an empty string.

## Why React Hooks
The ability to have reusable logic shared across components, without having to introduce extra components into our hierarchy.

1. So lets say we want to build multiple forms
1. Were going to need some way to handle multiple different Input Fields
1. For this we will have to create our own React Hook
1. Lets call this hook useInput
1. inside the `src/components` directory lets make a hooks folder
1. inside that folder make a `useInput.js` file.

```jsx
import { useState } from "react";

export default const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};

```

1. Lets Refactor NameForm to use this custom hook

```jsx
import React from 'react';
import useInput from './hooks/useInput';

export default function NameForm(props) {
	const { value, bind, reset } = useInput('');

	const handleSubmit = evt => {
		evt.preventDefault();
		alert(`Submitting Name ${value}`);
		reset();
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input type="text" {...bind} />
				</label>
				<input type="submit" value="Submit" />
			</form>
			<h1>{value}</h1>
		</>
	);
}

```

1. Now lets think about a form with more than 1 Input...


```jsx
import React from 'react';
import useInput from './hooks/useInput';

export default function NameForm(props) {
	const {
		value: firstName,
		bind: bindFirstName,
		reset: resetFirstName
	} = useInput('');
	const {
		value: lastName,
		bind: bindLastName,
		reset: resetLastName
	} = useInput('');

	const handleSubmit = e => {
		e.preventDefault();
		alert(`Submitting Name ${firstName} ${lastName}`);
		resetFirstName();
		resetLastName();
	};
	return (
		<>
                    <form onSubmit={handleSubmit}>
                        <label>
                            First Name:
                            <input type="text" {...bindFirstName} />
                        </label>
                        <label>
                            Last Name:
                            <input type="text" {...bindLastName} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <h1>
                        <span>First Name is: {firstName} </span>
                        <span>Last Name is: {lastName} </span>
                    </h1>
                </>
	);
}
```
<img width="842" alt="Screen Shot 2020-08-21 at 4 21 57 PM" src="https://media.git.generalassemb.ly/user/15881/files/26158700-e3cc-11ea-8220-0351178f28f8">

## Now lets refactor Our Lists To Use Our hooks

```jsx
import React, { useState } from 'react';
import useInput from './hooks/useInput';

export default function Home(props) {
	const [cardText, updateCardText] = useState('');
	const {
		value: germanNewCard,
		bind: bindGermanNewCard,
		reset: resetGermanNewCard
	} = useInput('');
	const {
		value: kellieNewCard,
		bind: bindKellieNewCard,
		reset: resetKellieNewCard
	} = useInput('');
	const {
		value: allegraNewCard,
		bind: bindAllegraNewCard,
		reset: resetAllegraNewCard
	} = useInput('');
	const {
		value: nicoleNewCard,
		bind: bindNicoleNewCard,
		reset: resetNicoleNewCard
	} = useInput('');
	const [germanList, updateGermanList] = useState([]);
	const [kellieList, updateKellieList] = useState([]);
	const [allegraList, updateAllegraList] = useState([]);
	const [nicoleList, updateNicoleList] = useState([]);

const addGerman = event => {
  event.preventDefault();
  updateGermanList([...germanList, germanNewCard]);
  resetGermanNewCard();
};
const addKellie = event => {
  event.preventDefault();
  updateKellieList([...kellieList, kellieNewCard]);
  resetKellieNewCard();
};
const addAllegra = event => {
  event.preventDefault();
  updateAllegraList([...allegraList, allegraNewCard]);
  resetAllegraNewCard();
};
const addNicole = event => {
  event.preventDefault();
  updateNicoleList([...nicoleList, nicoleNewCard]);
  resetNicoleNewCard();
};
	return (
  <div className="Page">
    {/* German Column  Start*/}
    <div className="column germanColumn">
      <h2 className="heading german">German</h2>
      <ul id="german-list">
        {germanList?.length
          ? germanList.map((listItem, i) => {
              return (
                <li key={listItem + '_' + i}>{`${i + 1}. ${listItem}`}</li>
              );
            })
          : ''}
      </ul>
      <form className="task-form" onSubmit={addGerman}>
        <label htmlFor="germanNewCard">
          <span>New Task For German:</span>
          <input type="text" id="germanNewCard" {...bindGermanNewCard} />
        </label>
        <button type="submit">Add A Task</button>
      </form>
    </div>
    {/*German Column End */}
    {/* Kellie Column Start */}
    <div className="column kellieColumn">
      <h2 className="heading kellie">Kellie</h2>
      <ul id="kellie-list">
        {kellieList?.length
          ? kellieList.map((listItem, i) => {
              return (
                <li key={listItem + '_' + i}>{`${i + 1}. ${listItem}`}</li>
              );
            })
          : ''}
      </ul>
      <form className="task-form" onSubmit={addKellie}>
        <label htmlFor="kellieNewCard">
          <span>New Task For Kellie:</span>
          <input type="text" id="kellieNewCard" {...bindKellieNewCard} />
        </label>
        <button type="submit">Add A Task</button>
      </form>
    </div>
    {/* Kellie Column End */}
    {/* Allegra Column Start */}
    <div className="column allegraColumn">
      <h2 className="heading allegra">Allegra</h2>
      <ul id="allegra-list">
        {allegraList?.length
          ? allegraList.map((listItem, i) => {
              return (
                <li key={listItem + '_' + i}>{`${i + 1}. ${listItem}`}</li>
              );
            })
          : ''}
      </ul>
      <form className="task-form" onSubmit={addAllegra}>
        <label htmlFor="AllegraNewCard">
          <span>New Task For Allegra:</span>
          <input type="text" id="AllegraNewCard" {...bindAllegraNewCard} />
        </label>
        <button type="submit">Add A Task</button>
      </form>
    </div>
    {/* Allegra Column End */}
    {/* Nicole Column Start */}
    <div className="column nicoleColumn">
      <h2 className="heading nicole">Nicole</h2>
      <ul id="nicole-list">
        {nicoleList?.length
          ? nicoleList.map((listItem, i) => {
              return (
                <li key={listItem + '_' + i}>{`${i + 1}. ${listItem}`}</li>
              );
            })
          : ''}
      </ul>
      <form className="task-form" onSubmit={addNicole}>
        <label htmlFor="nicoleNewCard">
          <span>New Task For Nicole:</span>
          <input type="text" id="nicoleNewCard" {...bindNicoleNewCard} />
        </label>
        <button type="submit">Add A Task</button>
      </form>
    </div>
    {/* Nicole Column End */}
    {/* Hmmmm could these be built out in another component */}
  </div>
);
}


```

## Lets code this out and talk about what changed.
1. We used Our Custom Hook to handle the Inputs for German, Kellie, Allegra, and Nicole.
1. We also used state to create updatable arrays with Use State Hook
1. We Rendered 4 Lists That are bound to each of our `list` state variables
1. We made a Function that handles adding a task to each users list.

## Lab Activity
1. How Can We Add A Button That Will Delete An Item From The List
1. Remember to use the spread operator to copy the list
1. `const newList = [...oldList]`
1. Remember the [__splice__](https://www.w3schools.com/jsref/jsref_splice.asp) method.
1. [__Filter__](https://www.w3schools.com/jsref/jsref_filter.asp) is also a valid way to solve that.

