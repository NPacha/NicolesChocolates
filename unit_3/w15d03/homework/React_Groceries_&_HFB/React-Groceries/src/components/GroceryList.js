import React from 'react';

export default function GroceryItem(props) {
	return (
		<div>
			Item Name: {props.product.item}
			Brand: {props.product.brand}
			Units: {props.product.units}
			Quantity: {props.product.quantity}
		</div>
	);
}
