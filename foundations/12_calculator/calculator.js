const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, item) => acc + item, 0);
};

const multiply = function(arr) {
	return arr.reduce((acc, item) => acc * item, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {

		if (a <= 1){
			return 1
		}

		let fact = 1
		let i = 1;
		while(i <= a){
			fact *= i
			i++;
		}
		return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
