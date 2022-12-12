function leftRotate(d, arr) {
  let temp = 0;
  let result = 0;
  while (temp < d) {
    result = arr.shift();
    arr.push(result);
    temp++;
  }
  return arr;
}
console.log(leftRotate(5, [1, 2, 3, 4, 5]));

