//6. Reverse Function
let reverse = (myString) => {
  let newString = '';

  for(let i = myString.length - 1; i >= 0; i--) {
    newString += myString[i];
  }

  return newString;
};