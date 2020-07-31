function reverseString(str) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

  let arrayString = str.split('');
  console.log('arrayString', arrayString);
  let reversedArray = arrayString.reverse();
  console.log('reversedArray', reversedArray);

  return reversedArray.join('');
}

reverseString("hello");
