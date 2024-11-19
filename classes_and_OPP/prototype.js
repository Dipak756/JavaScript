//let firstName = "Dipak"
//let lastName = "Ojha"

//console.log(firstName.trueLength);


let myHeros = ["Thor", "Spiderman"]

let heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",

    getSpiderPower: function(){
//        console.log(`spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.dipak = function(){
//    console.log(`Dipak is present in all object`);
}

heroPower.dipak()
 


// Inheritence

const User = {
    name: "dipak",
    email: "dipak@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,

    __proto__:TeachingSupport
};

Teacher.__proto__ = User;

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUserName = "Dipak        "
String.prototype.trueLength = function(){
    console.log(`${this}`);
//    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()

"ojha".trueLength()
"Coffee".trueLength()