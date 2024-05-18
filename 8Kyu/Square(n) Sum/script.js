/* 

START;

1. Create a function that returns the square of a number
2. Create a separate function that stores an array and adds everything within the array.
3. Return the array into a new array

;DONE */
function squareSum(numbers) {
  let sum = 0;
  for (let n of numbers){
    sum += n ** 2
  } return sum
}

console.log(squareSum([1, 2, 2]));
