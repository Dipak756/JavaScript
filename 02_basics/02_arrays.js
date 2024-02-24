const marvel_heroes = ["Ironman", "Thor", "Spiderman"]
const dc_heroes = ["Superman", "Batman", "Flash"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes)
//console.log(marvel_heroes[3][1]) //whole dc become one element 

//const all_heroes = marvel_heroes.concat(dc_heroes) 
//console.log(all_heroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log (all_new_heroes)

const array1 = [1, 2, 3,[4, 5, 6], 7, [6 ,7 , [8, 9]]]
const useable_array = array1.flat(Infinity) //we can also gives a depth of 1, 2 or 3
console.log(useable_array)

console.log(Array.isArray('Dipak'))
console.log(Array.from('Dipak'))
console.log(Array.from({name: 'Dipak'}))  // ineteresting

let score = 100;
let score1 = 200;
let score2 = 300;
console.log(Array.of(100,200,300))