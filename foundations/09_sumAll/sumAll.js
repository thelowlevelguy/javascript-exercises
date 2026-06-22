const sumAll = function(x, y) {
	
	if (!Number.isInteger(x) || !Number.isInteger(y)){
		return "ERROR"
	}

	if (x < 0 || y < 0 ){
		return "ERROR"
	}

	const min = Math.min(x, y)
	const max = Math.max(x, y)
	
	//Gauss theoreme : n(x+y) / 2 , where n is the numbers of element(n = x - y + 1 when x and y are inclusive and - 1 otherwise)
	return ((max-min+1) * (max+min)) / 2
};

// Do not edit below this line
module.exports = sumAll;
