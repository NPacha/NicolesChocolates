const arrWithUpdater = arr => {
	return [
		arr,
		newValue => {
			arr.push(newValue);
		}
	];
};
//const [myArr, updateMyArr] = arrWithUpdater([1, 2, 3]);
const items = arrWithUpdater([1, 2, 3]);
console.log(items);
const myArr = items[0];
const updateMyArr = items[1];
updateMyArr(8);
updateMyArr(8);
updateMyArr('so lit');
console.log(myArr);
