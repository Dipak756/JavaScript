const score = 400

const balance = new Number(100)
console.log(balance)
console.log(balance.toString())
console.log(balance.toFixed(2))

const otherNum = 223.8965
console.log(otherNum.toPrecision(3)) 

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN')) // it is defined as us standard but here I have converted this into indian stardard

//***************************************Maths************************************************* //

console.log(Math.random())
console.log((Math.random()*10) +1)

const min = 10;
const max= 20;

console.log(Math.floor(Math.random()* (max - min +1)) +min)