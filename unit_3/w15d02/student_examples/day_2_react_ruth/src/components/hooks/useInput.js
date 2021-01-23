import { useState } from 'react';

const useInput = initialValue => {
	const [value, setValue] = useState(initialValue);
	//setValue will always update whatever value was
	//value will be set to the initial value
	//useState returns an array
	//UseInput will return an object
	return {
		value, //value: value,
		setValue, //setValue: setValue,
		reset: () => setValue(''), //reset function will run setValue and set the value back to empty string
		bind: {
			value,
			onChange: evt => {
				setValue(evt.target.value); //anytime there is a change change the value to the value of the event.target
			} //we can add these keys to the html element, because html elements are objects
			//We called it bind because it will bind the value to the form, but you can name it whatever you want (dropThisStuffInMyInput)
		}
	};
};

export default useInput;
