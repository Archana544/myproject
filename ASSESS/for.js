let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(mySumFunction);
function mySumFunction(item) {
  sum += item;
}
console.log(sum)

//FOR-OF

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

const iterable = [10, 20, 30];

for (let value of iterable) {
	value+=1;
  console.log(value);
}