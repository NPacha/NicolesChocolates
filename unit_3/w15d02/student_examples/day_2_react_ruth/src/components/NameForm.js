import React from 'react';
import useInput from './hooks/useInput';

export default function NameForm(props) {
	const {
		value: firstName,
		bind: bindFirstName,
		reset: resetFirstName
	} = useInput('');
	//useState will return an array, we are passing in the inital value or the inital state
	//name will be empty string
	//setName will be equal to a function that will update name (in the DOM?)
	const {
		value: lastName,
		bind: bindLastName,
		reset: resetLastName
	} = useInput('');

	const handleSubmit = evt => {
		evt.preventDefault(); //stops page from reloading/stops form from reloading
		alert(`Submitting Name ${firstName} ${lastName}`);
		resetFirstName(); //updater function just changes the value of name //Never reassign the variable with an equals
		resetLastName();
	};

	const handleChange = evt => {
		setName(evt.target.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					First Name:
					<input
						type="text"
						{...bindFirstName} //spread operator to spread the values in bind into the input field, copies all of the keys from the original obj. **We are putting the keys that are on bind onto this html tag*** And we are doing this because html tags
					/>
				</label>
				<label>
					Last Name:
					<input type="text" {...bindLastName} />
				</label>
				<input type="submit" value="Submit Name" />
			</form>
			<h1>{`The name is ${lastName} ... ${firstName} ${lastName}`}</h1>
		</>
	);
}
