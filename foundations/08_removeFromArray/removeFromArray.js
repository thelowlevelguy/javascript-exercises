const removeFromArray = function(arr, ...values) {
	return arr.filter((a) => !values.includes(a))
};

// Do not edit below this line
module.exports = removeFromArray;
