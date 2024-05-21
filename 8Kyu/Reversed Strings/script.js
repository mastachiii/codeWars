function reverseStrings(string) {
  stringArray = string.split("");
  stringArray.reverse();
  return stringArray.join('');
}

console.log(reverseStrings("hello"));
