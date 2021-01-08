//1. IsPrime Function

let isPrime = (num) => {
  let booleanVariable;

  if(num > 1) {
    booleanVariable = true;
  } else {
    return false;
  }

  for(let i = num; i > 1; i--) {
    if(num % i === 0 && (i !== 1 && i !== num)) {
      booleanVariable = false;
    }
  }

  return booleanVariable;
};

//2. Factorial Function
let factorial = (num) => {
  let newNum = 1;

  for(let i = 1; i <= num; i++) {
    newNum *= i;
  }

  return newNum;
};

//3 Fibonacci number
let fib = (num) => {
  if(num <= 1) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
};

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

//7. isPalindrome function
let isPalindrome = (myString) => {
  let newString = '';
  let booleanVariable;

  for(let i = 0; i < myString.length; i++) {
    if(myString[i] !== ' ') {
      newString += (myString[i].toLowerCase());
    }
  }

  for(let i = 0; i < newString.length; i++) {
    if(newString[i] !== newString[newString.length - (i + 1)]) {
      return false
    } else {
      booleanVariable = true;
    }
  }

  return booleanVariable;
};

//8. missing item
let missingItems = (arr) => {
  let arrOfItems = [];
  let maxNum = arr[0];
  let found = false;

  for(let i = 0; i < arr.length; i++) {
    if(maxNum <= arr[i]) {
      maxNum = arr[i];
    }
  }

  for(let i = maxNum; i > 0; i--) {
    found = false;
    for(let j = 0; j < arr.length; j++) {
      if(maxNum === arr[j]) {
        found = true;
        break;
      } else {
        found = false;
      }
    }
    if(!found) {
      arrOfItems.push(maxNum);
    }
    maxNum--;
  }

  if(arrOfItems.length === 0) {
    return undefined;
  } else if(arrOfItems.length === 1) {
    return `Missing item is ${arrOfItems[0]}`;
  } else {
    return `Missing items are ${arrOfItems}`;
  }
};