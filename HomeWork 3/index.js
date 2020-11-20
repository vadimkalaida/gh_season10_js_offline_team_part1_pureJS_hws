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

console.log('TASK 3: sum(num1)(num2)...)');
console.log(`TASK 3: sum(2)(4)(6) = ${sum(2)(4)(6)}`);
console.log(`TASK 3: sum(23)(4) = ${sum(23)(4)}`);

// TASK 4: Calculator

let calculate = (firstNum) => {
  let resNum = firstNum;
  function resFunc() {
    return resNum;
  }

  let calcObj = {
    add: function (num) {
      resNum += num;
      return {
        add: calcObj.add,
        minus: calcObj.minus,
        multiply: calcObj.multiply,
        divide: calcObj.divide,
        result: resFunc
      }
    },
    minus: function (num) {
      resNum -= num;
      return {
        add: calcObj.add,
        minus: calcObj.minus,
        multiply: calcObj.multiply,
        divide: calcObj.divide,
        result: resFunc
      }
    },
    multiply: function (num) {
      resNum *= num;
      return {
        add: calcObj.add,
        minus: calcObj.minus,
        multiply: calcObj.multiply,
        divide: calcObj.divide,
        result: resFunc
      }
    },
    divide: function (num) {
      resNum /= num;
      return {
        add: calcObj.add,
        minus: calcObj.minus,
        multiply: calcObj.multiply,
        divide: calcObj.divide,
        result: resFunc
      }
    }
  };

  return calcObj;

};

console.log("TASK 4: calculate(num).add(num).minus(num).divide(num).multiply(num).result()");
console.log("TASK 4: ex: calculate(2).add(2).add(2).minus(3).minus(3).divide(1).multiply(100).result()");
console.log(calculate(2).add(2).add(2).minus(3).minus(3).divide(1).multiply(100).result());

// TASK 5 : Array methods

Array.prototype.myForEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.myMap = function(callback) {
  let newArr = [];

  for(let i = 0; i < this.length; i++) {
    // let mappedItem = callback(this[i], i, this);
    newArr[i] = callback(this[i], i, this);
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

Array.prototype.mySort = function() {

  for(let i = 0; i < this.length; i++) {

    for(let j = i + 1; j < this.length; j++) {
      if(this[i] > this[j]) {
        let swap = this[i];
        this[i] = this[j];
        this[j] = swap;
      }
    }

  }

  return this;

};


console.log('TASK 5: array.myForEach(callback)');
console.log('TASK 5: array.myMap(callback)');
console.log('TASK 5: array.myFind(callback)');
console.log('TASK 5: array.myFilter(callback)');
console.log('TASK 5: array.mySort()');
console.log('TASK 5: EXAMPLES:');

["Bilbo", "Gandalf", "Nazgul"].myForEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

console.log(["Bilbo", "Gandalf", "Nazgul"].map(item => item.length));

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

console.log(users.myFind(item => item.id == 1));
console.log(users.myFilter(item => item.id < 3));
console.log([7, 2, 9, 4, 1, 5, 3].mySort());




