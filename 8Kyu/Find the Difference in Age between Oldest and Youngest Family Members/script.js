/*

START;

1. Create a function
2. Sort out the given array and put the youngest age & the oldest age in a new array.
3. Add a new string in the array containing the difference in age between the youngest and oldest.
4. Return the result.

;END */


function ageDiff(arr) {
  a = Math.min(...arr);
  b = Math.max(...arr);
  c= [a, b, Math.abs(a - b)];
  return c;
}

test = ageDiff([12,34,56,20])

console.log(test);
