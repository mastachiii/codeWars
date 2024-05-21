function arrayPlus(arr1, arr2) {
  a = arr1.reduce((accumulator, currentValue) => accumulator + currentValue);
  b = arr2.reduce((accumulator, currentValue) => accumulator + currentValue);
  c = a + b;
  return c;
}

console.log(arrayPlus([1, 2, 3], [1,2,3]));
