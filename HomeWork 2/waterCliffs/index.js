let findWaterVolume = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let volume = 0;

  while(left < right) {
    if(arr[left] > leftMax) {
      leftMax = arr[left];
    }
    if(arr[right] > rightMax) {
      rightMax = arr[right];
    }
    if(leftMax >= rightMax) {
      volume += rightMax - arr[right];
      right--;
    } else if(leftMax < rightMax) {
      volume += leftMax - arr[left];
      left++;
    }
  }

  return volume;
};

console.log('findWaterVolume() - to find water volume between all cliffs');
console.log(`[2, 5, 1, 3, 1, 2, 1, 7, 7, 6] = ${findWaterVolume([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])}`);
console.log(`[2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] = ${findWaterVolume([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])}`);
console.log(`[7, 0, 1, 3, 4, 1, 2, 1] = ${findWaterVolume([7, 0, 1, 3, 4, 1, 2, 1])}`);
console.log(`[2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] = ${findWaterVolume([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])}`);
console.log(`[2, 2, 1, 2, 2, 3, 0, 1, 2] = ${findWaterVolume([2, 2, 1, 2, 2, 3, 0, 1, 2])}`);
console.log(`[2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] = ${findWaterVolume([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8])}`);
console.log(`[2, 2, 2, 2, 2] = ${findWaterVolume([2, 2, 2, 2, 2])}`);