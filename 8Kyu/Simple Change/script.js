function changeMe(moneyIn) {
  var array = [];
  switch (moneyIn) {
    case "£5":
      var multiplier = 5 * 100;
      break;
    case "£2":
      var multiplier = 2 * 100;
      break;
    case "£1":
      var multiplier = 1 * 100;
      break;
    case "50p":
      var multiplier = 50;
      break;
    case "20p":
      return '10p 10p';
    case "Money":
        return "Money";
    default:
        return moneyIn;
  }
  while (multiplier > 0) {
    p = Math.min(multiplier, 20);
    array.push(`${p}p`);
    multiplier = multiplier - 20;
  }
  return array.join(" ");
}

console.log(changeMe('5p'));
