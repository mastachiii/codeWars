/* 

START;

1. Create a function
2. Fill in the parameter with an array
3. Convert the array into a string
4. Replace the comma with an empty string / space
5. Return the value

;END */

function smash(array) {
  a = array.toString();
  a = a.replaceAll(",", " ");
  return a;
}

a = smash(["hello", "world", "this", "is", "amazing"]);

console.log(a);
