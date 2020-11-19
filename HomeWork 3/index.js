// TASK 2: SUM
const sum = (a) => {
  let sumNumber = a;

  const curry = (b) => {
    sumNumber += b;
    return curry;
  };

  curry.toString = () => sumNumber;
  return curry;
};