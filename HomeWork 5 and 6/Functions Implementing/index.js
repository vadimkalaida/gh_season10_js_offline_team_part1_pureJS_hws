//4. isSorted Function
let isSorted = (arr) => {

  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        return false;
      }
    }
  }

  return true;
};

//5. Reverse Function
let reverse = (myString) => {
  let newString = '';

  for(let i = myString.length - 1; i >= 0; i--) {
    newString += myString[i];
  }

  return newString;
};

//6. indexOf Function.
let indexOf = (arr, num) => {
  let indexOfNumber = -1;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === num) {
      indexOfNumber = i;
    }
  }

  return indexOfNumber;
};