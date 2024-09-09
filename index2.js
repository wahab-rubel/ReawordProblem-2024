// problems 5

function monthlySavings(arr, livingCost){
  if(!Array.isArray(arr) || typeof livingCost !== 'number'){
      return "Invalid Input"
  }



// calculate total income
let totalIncome = 0 
for (let payment of arr){
  if(payment>=3000){
    // deduct tex amount
    let tex = payment * 0.2
    totalIncome += payment - tex
  }
  else{
    totalIncome += payment
  }
}
let savings = totalIncome - livingCost
// if (savings >= 0){
// return savings
// }else{
//   return 'earn more'
// }

return savings >= 0 ? savings : 'earn more'
}

console.log(monthlySavings([1000, 2000, 3000], 5400));

console.log(monthlySavings([1000, 2000, 2500], 5000));

console.log(monthlySavings([1000, 2700, 3400], 10000));

console.log(monthlySavings(100, [900, 2700, 3400]));



// monthlySavings([34, 5000, 2000, 4500], 1000)