const fibonacci = function(number) {
  if (number < 0) {
    return 'OOPS';
  }
  
  let sequence = [0,1];

  for(let i = 0; i <= number; i++) {
    if (i > 1) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }
  return sequence[number];
};

//fibonacci(6);

// Do not edit below this line
module.exports = fibonacci;
