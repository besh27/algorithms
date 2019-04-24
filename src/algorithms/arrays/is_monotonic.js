const isMonotonic = (array) => {
	let increment = 1;
	let decrement = 1;
	for (let i = 1; i < array.length; i++) {
		// console.log(`${array[i]} - ${array[i-1]}`)
		increment &= array[i] - array[i - 1] >= 0;
		decrement &= array[i] - array[i - 1] <= 0;
	}
	return (increment || decrement) === 0 ? false : true;
};

export default isMonotonic;
