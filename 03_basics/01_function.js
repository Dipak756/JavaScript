function sayMyName(){
    console.log('D')
    console.log('i')
    console.log('p')
    console.log('a')
    console.log('k')
}

//sayMyName()

//function addTwoNumber(num1, num2){
//    console.log(num1+num2);
//}
//addTwoNumber(6 , 10)

//___________________________________________________________________

/*function addTwoNumber(num1, num2){
    let result = num1 + num2 ;
    return result
}

const result = addTwoNumber(5, 8)

console.log("Result: ", result); */

//___________________________________________________________________

/*function logginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter user name")
        return
    }
    return `${username} just logged in`

}

console.log(logginUserMessage()) // if he value not defined then result will be undefined*/

//_______________________________________________________________________________________

/*function calculateCartPrice(...num1){  //by using val1, val2 200 and 400 become val1, val2 respectivly rest become array
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))  */

//____________________________________Object___________________________________________________

const user = {
    username: "Dipak",
    price: 199
}

function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}

 handleObject({
    username: "Dip",
    price: 199
})

const myNewArr = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArr))
