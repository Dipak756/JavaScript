// Array
const myArr = [0, 1 ,2, 3, 4, 5]
const myHeros = ["Ironman", "Thor"]

console.log(myArr[1])

myArr.push(6)
myArr.push(7)
myArr.pop()

//myArr.unshift(9) ---- 9 will be inserted in start of the array 
//myArr.shift()  ------this method is use to deleted the first index of the array
//console.log(myArr.includes(9)) //it is  used for asking questions
//console.log(myArr.indexOf(3)) //this method will tell you the index of the array if it is not present then this will return you -1
//const newArr =myArr.join()
//console.log(myArr)
//console.log(newArr)  // this will chnage the type of the array to string

// Slice & Splice

console.log("A ", myArr)
const myNewArr = myArr.slice(1, 3)
console.log(myNewArr)
console.log("B", myArr)

const myNewArr2 =myArr.splice(1,3) // this method remove the arrays
console.log(myNewArr2)
console.log("C ", myArr) 
