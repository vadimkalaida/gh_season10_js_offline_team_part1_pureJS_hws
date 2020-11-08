Object.prototype.findMax = function () {

};

Object.prototype.findMin = function () {

};

Object.prototype.findSum = function () {
  let mySum = 0;

  for(let i = 0; i < this.length; i++) {
    mySum += this[i];
  }

  return mySum;
};