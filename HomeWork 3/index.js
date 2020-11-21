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

// TASK 2: Tamagotchi

class Tamagotchi {
  constructor(name, health, happiness, hungry, thirsty) {
    this.name = String(name);
    if(health > 200) {
      this.health = 200;
      console.log(this.health);
    } else if(health < 0 || isNaN(health * 1)) {
      alert("Health has to be number(from 0 to 200)");
      location.reload();
    } else {
      this.health = parseInt(health);
    }
    if(happiness > 200) {
      this.happiness = 200;
      console.log(this.happiness);
    } else if(happiness < 0 || isNaN(happiness * 1)) {
      alert("Happiness has to be number(from 0 to 200)");
      location.reload();
    } else {
      this.happiness = parseInt(hungry);
    }
    if(hungry > 200) {
      this.hungry = 200;
      console.log(this.hungry);
    } else if(hungry < -100 || isNaN(hungry * 1)) {
      alert("Hungry has to be number(from -100 to 200)");
      location.reload();
    } else {
      this.hungry = parseInt(hungry);
    }
    if(thirsty > 200) {
      this.thirsty = 200;
      console.log(this.thirsty);
    } else if(thirsty < -50 || isNaN(thirsty * 1)) {
      alert("Thirsty has to be number(from -50 to 200)");
      location.reload();
    } else {
      this.thirsty = parseInt(thirsty);
    }
  }
  walk() {
    if(this.hungry > -50) {
      if(this.happiness >= 200) {
        console.log(`${this.name} is walking(happiness is max, hungry - 10, thirsty - 5)`);
        this.hungry -= 10;
        this.thirsty -= 5;
      } else {
        console.log(`${this.name} is walking(happiness + 20, hungry - 10, thirsty - 5)`);
        this.happiness += 20;
        this.hungry -= 10;
        this.thirsty -= 5;
      }
    } else {
      if(this.happiness >= 200) {
        console.log(`${this.name} is walking(happiness is max, hungry - 10, thirsty - 5, health - 10)`);
        this.hungry -= 10;
        this.health -= 10;
        this.thirsty -= 5;
      } else {
        console.log(`${this.name} is walking(happiness + 20, hungry - 10, thirsty - 5, health - 10)`);
        this.happiness += 20;
        this.hungry -= 10;
        this.health -= 10;
        this.thirsty -= 5;
      }
    }
    console.log(myTamagotchi);
  }

  eat() {
    if(this.hungry < 100) {
      if(this.happiness >= 200) {
        if(this.health >= 200) {
          console.log(`${this.name} is eating(happiness is max, hungry + 20, thirsty - 5, health is max)`);
          this.hungry += 20;
          this.thirsty -= 5;
        } else {
          console.log(`${this.name} is eating(happiness is max, hungry + 20, thirsty - 5, health + 5)`);
          this.hungry += 20;
          this.thirsty -= 5;
          this.health += 5;
        }
      } else {
        if(this.health >= 200) {
          console.log(`${this.name} is eating(happiness + 10, hungry + 20, thirsty - 5, health is max)`);
          this.happiness += 10;
          this.hungry += 20;
          this.thirsty -= 5;
        } else {
          console.log(`${this.name} is eating(happiness + 10, hungry + 20, thirsty - 5, health + 5)`);
          this.happiness += 10;
          this.hungry += 20;
          this.thirsty -= 5;
          this.health += 5;
        }
      }
    } else {
      console.log(`${this.name} is eating(happiness - 15, hungry + 20, thirsty - 10, health - 10)`);
      this.happiness -= 15;
      this.hungry += 20;
      this.thirsty -= 10;
      this.health -= 10;
    }
    console.log(myTamagotchi);
  }

  drink() {
    if(this.thirsty < 100) {
      if(this.happiness >= 200) {
        if(this.health >= 200) {
          console.log(`${this.name} is drinking(happiness is max, hungry - 5, thirsty + 10, health is max)`);
          this.hungry -= 5;
          this.thirsty += 10;
        } else {
          console.log(`${this.name} is drinking(happiness is max, hungry - 5, thirsty + 10, health + 5)`);
          this.hungry -= 5;
          this.thirsty += 10;
          this.health += 5;
        }
      } else {
        if(this.health >= 200) {
          console.log(`${this.name} is drinking(happiness + 10, hungry - 5, thirsty + 10, health is max)`);
          this.happiness += 10;
          this.hungry -= 5;
          this.thirsty += 10;
        } else {
          console.log(`${this.name} is drinking(happiness + 10, hungry - 5, thirsty + 10, health + 5)`);
          this.happiness += 10;
          this.hungry -= 5;
          this.thirsty += 10;
          this.health += 5;
        }
      }
    } else {
      console.log(`${this.name} is drinking(happiness - 10, hungry - 5, thirsty + 10, health - 5)`);
      this.happiness -= 10;
      this.hungry -= 5;
      this.thirsty += 10;
      this.health -= 5;
    }
    console.log(myTamagotchi);
  }

  play() {
    if(this.happiness >= 200) {
      console.log(`${this.name} is playing(happiness is max, hungry - 10, thirsty - 10)`);
      this.hungry -= 10;
      this.thirsty -= 10;
    } else {
      console.log(`${this.name} is playing(happiness + 20, hungry - 10, thirsty - 10)`);
      this.happiness += 20;
      this.hungry -= 10;
      this.thirsty -= 10;
    }
    console.log(myTamagotchi);
  }

  sleep() {
    if(this.happiness >= 200) {
      if(this.health >= 200) {
        console.log(`${this.name} is sleeping(happiness is max, hungry -50, thirsty - 50, health is max)`);
        this.hungry -= 50;
        this.thirsty -= 50;
      } else {
        console.log(`${this.name} is sleeping(happiness is max, hungry -50, thirsty - 50, health + 50)`);
        this.hungry -= 50;
        this.thirsty -= 50;
        this.health += 50;
      }
    } else {
      if(this.health >= 200) {
        console.log(`${this.name} is sleeping(happiness + 50, hungry -50, thirsty - 50, health is max)`);
        this.happiness += 50;
        this.hungry -= 50;
        this.thirsty -= 50;
      } else {
        console.log(`${this.name} is sleeping(happiness + 50, hungry -50, thirsty - 50, health + 50)`);
        this.happiness += 50;
        this.hungry -= 50;
        this.thirsty -= 50;
        this.health += 50;
      }
    }
    console.log(myTamagotchi);
  }

}

let tamagotchiName = prompt('What is name of your Tamagotchi?(1-14 letters)');

if(tamagotchiName.length < 1 || tamagotchiName.length > 14) {
  alert('Your tamagotchi\'s name is incorrect!');
  location.reload();
} else {
  console.log('Your tamagotchi\s name is correct!');
}

alert('If Tamagotchi\'s happiness is lower than -100, he will run away. \n' +
  'If Tamagotchi\'s hungry is more than 200 or lower than -200, he will die. \n' +
  'If Tamagotchi\'s thirsty is more than 200 or lower than -150, he will die. \n' +
  'If Tamagotchi\'s health lower than -100, he will die.');

let myTamagotchi = new Tamagotchi(tamagotchiName, 50, 50, 50, 100);
document.querySelector('#tamagotchiName').innerHTML = tamagotchiName;

let checkFunction = () => {
  if(myTamagotchi.hungry < -200 || myTamagotchi.hungry > 200 || myTamagotchi.health < -100 || myTamagotchi.thirsty < -150 || myTamagotchi.thirsty > 200) {
    alert(`Oh no! ${tamagotchiName} died! Page will be reloaded!`);
    location.reload();
  } else if(myTamagotchi.happiness < -100) {
    alert(`Oh no! ${tamagotchiName} ran away! Page will be reloaded!`);
    location.reload();
  }
};

let returnInitialTamagotchiImage = () => {
  document.querySelector('#tamagotchiImage').setAttribute('src', 'images/initial.gif');
};

setInterval(() => {
  if(myTamagotchi.health > 200) {
    myTamagotchi.health = 200;
  }
  if(myTamagotchi.happiness > 200) {
    myTamagotchi.happiness = 200;
  }
  document.querySelector('#healthBar').innerHTML = `Health = ${myTamagotchi.health}`;
  document.querySelector('#happinessBar').innerHTML = `Happiness = ${myTamagotchi.happiness}`;
  document.querySelector('#hungryBar').innerHTML = `Hungry = ${myTamagotchi.hungry}`;
  document.querySelector('#thirstyBar').innerHTML = `Thirsty = ${myTamagotchi.thirsty}`;
}, 100);

document.querySelector('#walk').addEventListener('click', () => {
  myTamagotchi.walk();
  checkFunction();

  document.querySelector('#tamagotchiImage').setAttribute('src', 'images/walking.gif');
  setTimeout(() => {
    if(document.querySelector('#tamagotchiImage').getAttribute('src') === 'images/walking.gif') {
      returnInitialTamagotchiImage();
    }
  }, 1500);
});

document.querySelector('#play').addEventListener('click', () => {
  myTamagotchi.play();
  checkFunction();

  document.querySelector('#tamagotchiImage').setAttribute('src', 'images/playing.gif');
  setTimeout(() => {
    if(document.querySelector('#tamagotchiImage').getAttribute('src') === 'images/playing.gif') {
      returnInitialTamagotchiImage();
    }
  }, 1500);
});

document.querySelector('#sleep').addEventListener('click', () => {
  myTamagotchi.sleep();
  checkFunction();

  document.querySelector('#tamagotchiImage').setAttribute('src', 'images/sleeping.gif');
  setTimeout(() => {
    if(document.querySelector('#tamagotchiImage').getAttribute('src') === 'images/sleeping.gif') {
      returnInitialTamagotchiImage();
    }
  }, 1500);
});

document.querySelector('#eat').addEventListener('click', () => {
  myTamagotchi.eat();
  checkFunction();

  document.querySelector('#tamagotchiImage').setAttribute('src', 'images/eating.gif');
  setTimeout(() => {
    if(document.querySelector('#tamagotchiImage').getAttribute('src') === 'images/eating.gif') {
      returnInitialTamagotchiImage();
    }
  }, 1500);
});

document.querySelector('#drink').addEventListener('click', () => {
  myTamagotchi.drink();
  checkFunction();

  document.querySelector('#tamagotchiImage').setAttribute('src', 'images/drinking.gif');
  setTimeout(() => {
    if(document.querySelector('#tamagotchiImage').getAttribute('src') === 'images/drinking.gif') {
      returnInitialTamagotchiImage();
    }
  }, 1500);
});

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




