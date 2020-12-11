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