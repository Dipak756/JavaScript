// Dates 
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())
console.log(myDate.toUTCString())

// let myCreatedDate = new Date( 2023, 0, 7, 5,5)// month starts with 0 or 0 = jan
let myCreatedDate = new Date( '01-01-2023')
//console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()                // 
console.log(myTimeStamp)                    //  it is used for compare the time
console.log(myCreatedDate.getTime())        //          

console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()) //getDay, getYear

newDate.toLocaleString('defult', {
weekday: "long"
})