import { query } from 'express';
import React from 'react';
import groceries from '../data';

export default function Form(props) {
	const handleSubmit = event => {
		event.preventDefault();
		setGroceries({ ...groceries, ...{} });
	};

	const handleChange = event => {
		setGroceries({
			...groceries,
			...{}
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			Name of Item:{' '}
			<input type="text" name="item" id="item" onChange={handleChange} /> <br />
			Brand:{' '}
			<input type="text" name="brand" id="brand" onChange={handleChange} />{' '}
			<br />
			Units:{' '}
			<input type="text" name="units" id="units" onChange={handleChange} />
			<br />
			Quantity:{' '}
			<input
				type="text"
				name="quantity"
				id="quantity"
				onChange={handleChange}
			/>{' '}
			<br />
			<input type="submit" />
		</form>
	);
}
