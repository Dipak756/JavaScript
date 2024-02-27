const user = {
    username: "Dipak",
    price:  199,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
    }
}

user.welcomeMessage()
user.username = "Dip"
user.welcomeMessage()

//const one = function(){
    //username : "Dip"
    //console.log(this.username)
//}
//one()

const one = () =>{
    let username = "Dip"
    console.log(this);
}

one()

//const addTwo = (num1, num2) =>{
    //return num1 + num2
//}

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3, 5))