//singleton
//Object.create

const mySym = Symbol("Key1")

const jsuser = {
    name: "Dipak",
    "full name": "Dipak Ojha",
    age: "25",
    [mySym] : "myKey1",
    location: "Kolkata",
    Email: "dipak@gmail.com",
    isLoggedIn: false,
    lastLogInDay: ['Monday', 'Friday']
}

//console.log(jsuser.Email)
//console.log(jsuser["full name"])
//console.log(jsuser[mySym])

jsuser.Email = "dipak@chatGPT.com" //change the value

//Object.freeze(jsuser)
//jsuser.Email = "dipak@microsoft.com" //this will freeze the value value can not be changed after using this
//console.log(jsuser)

jsuser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsuser.greeting());