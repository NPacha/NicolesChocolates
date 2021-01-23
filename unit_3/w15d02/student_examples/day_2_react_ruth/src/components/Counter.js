import React, { useState } from 'react';

export default function Counter(props) {
	const [count, setCount] = useState(0);
	//setCount lets us update the count variable
	//count = 0
	//setCount will be a function that can update count
	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);

	return (
		<div>
			<span>Current Count: {count} </span>
			<button onClick={increment}> + </button>
			<button onClick={decrement}> - </button>
		</div>
	);
}
