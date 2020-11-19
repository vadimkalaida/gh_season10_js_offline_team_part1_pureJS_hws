//TASK 1: FOR

const myFor = (indexNumber, condition, body, isPlusStep) => {
  let i = indexNumber;
  if(eval(condition)) {
    eval(body);
    if(isPlusStep) {
      i++;
      return myFor(indexNumber = i++, condition, body, isPlusStep);
    } else {
      i--;
      return myFor(indexNumber = i--, condition, body, isPlusStep);
    }
  }
};

console.log('TASK 1: myFor(indexNumber, condition, body, isPlusStep)');
console.log('TASK 1: *indexNumber = only numbers(ex: 0)');
console.log('TASK 1: *condition = only strings(ex: "i < 5") and letter "i" - required');
console.log('TASK 1: *body = only strings(ex: "console.log(1)")');
console.log('TASK 1: *isPlusStep = only boolean(true = i++/false = i--');
console.log('TASK 1: example: myFor(0, i < 5, console.log(new Date()), true)');
myFor(0, 'i < 5', 'console.log(new Date())', true);

// TASK 3: SUM
const sum = (a) => {
  let sumNumber = a;

  const curry = (b) => {
    sumNumber += b;
    return curry;
  };

  curry.toString = () => sumNumber;
  return curry;
};

console.log('TASK 3: sum(num1)(num2)...');
console.log(`TASK 3: sum(2)(4)(6) = ${sum(2)(4)(6)}`);
console.log(`TASK 3: sum(23)(4) = ${sum(23)(4)}`);
console.log(`TASK 3: sum(2)(4)(4)(7)(4) = ${sum(2)(4)(4)(7)(4)}`);

// TASK 5 : Array methods

Array.prototype.myForEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.myMap = function(callback) {
  let newArr = [];

  for(let i = 0; i < this.length; i++) {
    let mappedItem = callback(this[i], i, this);
    newArr[i] = mappedItem;
  }

  return newArr;
};

Array.prototype.myFind = function(callback) {
  let foundItem;
  for(let i = 0; i < this.length; i++) {

    if(callback(this[i], i, this)) {
      foundItem = this[i];
      i = this.length;
    }
  }
  return foundItem;
};

Array.prototype.myFilter = function(callback) {
  let foundItemsArray = [];
  for(let i = 0; i < this.length; i++) {

    if(callback(this[i], i, this)) {
      foundItemsArray[i] = this[i];
    }
  }
  return foundItemsArray;
};

// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];

console.log('TASK 5: array.myForEach(callback)');
console.log('TASK 5: array.myMap(callback)');
console.log('TASK 5: array.myFind(callback)');
console.log('TASK 5: array.myFilter(callback)');


