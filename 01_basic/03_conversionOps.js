let score = "60abc"

console.log (typeof score);
console.log (typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber)

// 60 => 60
// 60abc => NaN
// "Dipak" => NaN
// ture => 1
// false => 0
// undefined => undefined

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => true
// "Dipak" => true