// problems 1

// function calculateMoney(ticketSale){
//   if( ticketSale < 0 || typeof ticketSale !== 'number' ){
//     return 'invalid';
//   }
  
//   return ticketSale * 120 - (500 + 8 * 50);
// }

// test problems 1
// console.log(calculateMoney(10));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(93));
// console.log(calculateMoney(-130));
// console.log(calculateMoney('awr'));


// problem 2

// function checkName(name){
//   if(typeof name !== 'string'){
//     return 'Invalid'
//   }
//   let lastLetter = name.slice(-1).toLowerCase();
//   let checkArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w']
  // let result = false;
  // for (let char of checkName) {
  //   if(char === lastLetter){
  //     result = true;
  //   }
  // }
//   let result = checkArray.includes(lastLetter);
//   return result? 'Good name' : 'Bad name';
// }
// console.log(checkName('Salman'));
// console.log(checkName('RAFEE'));
// console.log(checkName('jhanker'));
// console.log(checkName(-199));



// problem 3


function deleteInvalids(array){
  if(!Array.isArray(array)){
    return 'Invalid array'
  }
  let numberArray = []
  for (let element of array){
    if(typeof element === 'number' && isNaN (element) === false){
      numberArray.push(element);
    }
  }
  return numberArray;
}

console.log(deleteInvalids([1, null, 
  undefined, 
  18, -19, 
  NaN, 
  '12',
   [1, 2],
  {bo: 'lala'}
]));

console.log(deleteInvalids(['1', {num: 2}, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({num: [1, 2, 3]}));

// console.log(typeof NaN);
// console.log(isNaN (45));

// console.log(Array.isArray ([1, 2, -3]));
// console.log(Array.isArray ({ num: [1, 2, -3]}));