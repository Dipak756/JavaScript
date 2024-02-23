// There are two type of data  type primitive and non-primitive(reference)

// Primitive are divided into 7 parts, "string", Number, Boolean, Undefined, Null, Symbol, and BigInt
 // typeof String is string
 // typeof Number is number
 // typeof Boolean is Boolean
 // typeof Undefined id undefined
//  typeof Null is object
// typeof Symbol is symbol
// typeof BigInt is Boolean


//Reference or non-prmitive are Arrays, Objects and Functions

//typeof Array and Objects are function
// typeof Functions are function objects

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myName = "Dipak"
myAnotherName = myName
myAnotherName = "Dip"

console.log(myName)
console.log(myAnotherName)

let userOne = {
    email : "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email =  "Dipak@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
