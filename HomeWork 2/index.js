Object.prototype.filterArrayNumber = function() {
  let filteredArray = [];

  for(let i = 0; i < this.length; i++) {
    if(!isNaN(this[i] * 1)) {
      
      filteredArray.push(this[i] * 1);
    } else {
      console.log(`${this[i]} - is not a number`);
    }
  }

  return filteredArray;
};

Object.prototype.findMax = function () {
  let myArray = this.filterArrayNumber();
  let myMax = myArray[0];

  for(let i = 0; i < myArray.length; i++) {
    if(myArray[i] > myMax) {
      myMax = myArray[i];
    } else {
      console.log(`${myArray[i]} is not more than ${myMax}`);
    }
  }

  return myMax;

};

Object.prototype.findMin = function () {
  let myMin = 0;
  let myArray = this.filterArrayNumber();

  for(let i = 0; i < myArray.length; i++) {
    if(myArray[i] < myMin) {
      myMin = myArray[i];
    } else {
      console.log(`${myArray[i]} is not more than ${myMin}`);
    }
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