// const months = ["jan", "feb", "mar", "apr", "may"];
// const spliced = months.toSpliced(4)
// console.log(spliced);

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newArr = (myArr.flatMap(x => [x *10]));
// console.log(newArr);

// const months = ["jan", "feb", "mar", "apr", "may"];
// let position = months.includes('mar');
// console.log(position);

// const numbers = [9, 16, 25, 18];
// function myFunction(value, index, array){
//   return value >15;
// }
// const number = numbers.find(myFunction);
// console.log(number);

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.sort();
// let position2 = fruits.reverse();
// console.log(position, position2);

// const fruits = [3, 5, 1, 6, 2, 4,];
// const sorted = fruits.toSorted();
// console.log(sorted);

// const number = [3, 5, 1, 6, 2, 4,];
// const reversed = number.toReversed();
// console.log(reversed);

// const points = [40, 100, 1, 5, 25, 10];
// let point = points.sort(function (a, b){return a - b});
// console.log(point);

// const points = [40, 100, 1, 5, 25, 10];
// let point = points.sort(function (a, b){return b - a});
// console.log(point);

// function myArrayMin(arr){
//   return Math.min.apply(null, arr);
// }
// const points = [40, 100, 1, 5, 25, 10];
// console.log(myArrayMin(points));

// const points = [40, 100, 1, 5, 25, 10];
// let point = points.sort(function(){return 0.5 - Math.random()});
// console.log(point);

const points = [40, 100, 1, 5, 25, 10];

for( let i = points.length -1; i >0; i--){
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

