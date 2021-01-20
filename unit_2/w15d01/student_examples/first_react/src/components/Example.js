import React, { useState } from 'react';

export default function Example(props) {
	const [name, updateName] = useState('');
	// the useState Hook accepts an argument that becomes the default
	// value of the stateVariable
	// <<<name>>> in this instance is the state variable in question
	// useState also returns back a function that updates the state variable
	// But also it triggers react to check and see if it needs re-render
	// any part of the web page
	const [counter, updateCounter] = useState(0);

	return (
		<>
			<button onClick={event => updateCounter(counter + 1)}>
				{' '}
				Click Me to Update the Counter
			</button>

			<h1>{counter}</h1>
		</>
	);
}
