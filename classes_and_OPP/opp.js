const user ={
    username: "Dipak",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database")
        //console.log(`Username: ${this.username}`);
        console.log(this)
    }
}

//console.log(user.username);
//console.log(user.getUserDetails())
//console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    //return this
}

const userOne = new User("Dipak", 12, true) // whenever we use new keyword first thing that keyword does is create empty object that is called instance
const userTwo = new User("ojha", 11, false) //new keyword have inbuilt constructor function, 
//_____________________________________________3rd is whatever the argument written in this keyword it will inject in new, 4th step we get in function

console.log(userOne)
//console.log(userTwo)
console.log(userOne.constructor)