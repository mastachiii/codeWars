/* 

START;

1. Create a function that returns the square of a number
2. Create a separate function that stores an array and adds everything within the array.
3. Return the array into a new array

;DONE */

function squareSum(numbers) {
  function Square(number) {
    return number ** 2;
  }
  squaredNumbers = numbers.map(Square);
  sum = squaredNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return sum;
}


