const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(numbers) {
  let result = 0;
  for (num of numbers) {
    result += num;
  }
  return result;
};

const multiply = function(numbers) {
  let result = 1;
  for (num of numbers) {
    result *= num;
  }
  return result;
};

const power = function(x,y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
};

const factorial = function(num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
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
