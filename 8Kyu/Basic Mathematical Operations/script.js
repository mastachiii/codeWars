function basicOp(operation, value1, value2) {
  if (operation === "+") {
    sum = value1 + value2;
    return sum;
  } else if (operation === "-") {
    difference = value1 - value2;
    return difference;
  } else if (operation === "*") {
    product = value1 * value2;
    return product;
  } else {
    quotient = value1 / value2;
    return quotient;
  }
}

console.log(basicOp("/", 1, 2));
