function collinearity(x1, y1, x2, y2) {
  switch (true) {
    case x1 == x2 && y1 == y2:
      return true;
    case x1 + x2 === 0 || (y1 === 0 && y2 === 0):
      return true;
    case x1 + y1 === 0 || x2 + y2 === 0:
      return true;
    case (x1 > 0 && y1 < 0) || (x2 > 0 && y2 < 0):
      return false;
    case (y1 > 0 && x1 < 0) || (y2 > 0 && x2 < 0):
      return false;
    case y1 % x1 === +0 && y2 % x2 === +0:
      return true;
    default:
      return false;
  }
}

console.log(collinearity(-12, 4, 1, 2));

console.log(-12 % 4);
