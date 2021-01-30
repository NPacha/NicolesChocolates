import React, { useState } from 'react';
import groceryData from '../data';
import GroceryItem from './GroceryList';
import Form from './Form';

export default function App(props) {
	const [groceries, setGroceries] = useState(groceryData);



	return (
		<>
			<div className="Page-wrapper">
				<h1>Grocery List</h1>
				{groceries.map(product => {
					return (
						<GroceryItem
							key={`${product.item}${product.brand}`}
							product={product}
						/>
					);
				})}
			</div>
			<div className="form">
				<Form groceries={groceries} />
			</div>
		</>
	);
}
