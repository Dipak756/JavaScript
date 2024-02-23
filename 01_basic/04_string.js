const name = "Dipak"
const repoCount = 15

// console.log(name + repoCount +" value") (try not to use it in mordern time)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //it is modern way to do, it known as string interpolation 

const gameName = new String('Play-ground')  // it is another way to to define a string

console.log(gameName[0])
console.log(gameName. __proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('g'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName .slice(-8, 5) //this same method like substring but here we can also use negative values 
console.log(anotherString)

const newStringOne = "      Dipak      "
console.log(newStringOne)
console.log(newStringOne.trim()) //trim function used to erase white space plus new line 

const url = "https://aniwatchtv.to/watch/solo%30leveling"
console.log(url.replace('%30', '-'))

console.log(url.includes('aniwatch'))
console.log(gameName.concat('d'))
//console.log(gameName.split('-'));