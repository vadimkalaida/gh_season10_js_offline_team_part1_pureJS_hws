Object.prototype.filterArrayNumber = function() {
  let filteredArray = [];

  for(let i = 0; i < this.length; i++) {
    if(!isNaN(this[i] * 1)) {
      
      filteredArray.push(this[i] * 1);
    }
    // else {
    //   // console.log(`${this[i]} - is not a number`);
    // }
  }

  return filteredArray;
};

Object.prototype.findMax = function () {
  let myArray = this.filterArrayNumber();
  let myMax = myArray[0];

  for(let i = 0; i < myArray.length; i++) {
    if(myArray[i] > myMax) {
      myMax = myArray[i];
    }
    // else {
    //   // console.log(`${myArray[i]} is not more than ${myMax}`);
    // }
  }

  return myMax;

};

Object.prototype.findMin = function () {
  let myMin = 0;
  let myArray = this.filterArrayNumber();

  for(let i = 0; i < myArray.length; i++) {
    if(myArray[i] < myMin) {
      myMin = myArray[i];
    }
    // else {
    //   // console.log(`${myArray[i]} is not more than ${myMin}`);
    // }
  }

  return myMin;

};

Object.prototype.findSum = function () {
  let mySum = 0;
  let myArray = this.filterArrayNumber();

  for(let i = 0; i < myArray.length; i++) {
    mySum += myArray[i];
  }

  return mySum;
};

console.log('1)Use method filterArrayNumber() to make new array with only numbers.');
console.log(`Example: [false, true, null, undefined, NaN, 16, 481, 82, 11, 95, "GFD", "gfdvc"] => [${[false, true, null, undefined, NaN, 16, 481, 82, 11, 95, "GFD", "gfdvc"].filterArrayNumber()}]`);
console.log('2)Use method findMax() to find maximum number');
console.log(`Example: [false, true, "fsdf", 416, -4555, 0.5, "fsd12fsdhvx"] => Max = ${[false, true, "fsdf", 416, -4555, 0.5, "fsd12fsdhvx"].findMax()}`);
console.log('3)Use method findMin() to find minimum number');
console.log(`Example: [false, true, "fsdf", 416, -4555, 0.5, "fsd12fsdhvx"] => Min = ${[false, true, "fsdf", 416, -4555, 0.5, "fsd12fsdhvx"].findMin()}`);
console.log('4)Use method findSum() to find sum of numbers');
console.log(`Example: [431, 5333, 1, 416, -4555, 0.251, "fsd12fsdhvx"] => Sum = ${[431, 5333, 1, 416, -4555, 0.251, "fsd12fsdhvx"].findSum()}`);