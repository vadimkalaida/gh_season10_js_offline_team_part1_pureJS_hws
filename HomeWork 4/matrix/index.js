let matrixFunc = (R, C, r0, c0) => {
  let directionX = 0;
  let directionY = 1;
  let lastDirectionX;
  let n = 0;
  const resultArr = [];

  while(resultArr.length < R * C) {
    for(let i = 0; i < Math.floor(n / 2) + 1; i++) {
      if(r0 >= 0 && c0 >= 0 && R > r0 && C > c0) {
        resultArr.push([r0, c0]);
      }
      r0 += directionX;
      c0 += directionY;
    }
    lastDirectionX = directionX;
    directionX = directionY;
    directionY = -lastDirectionX;
    n++;
  }

  console.log(resultArr);
  return resultArr;
};

matrixFunc(5, 6, 1, 4);