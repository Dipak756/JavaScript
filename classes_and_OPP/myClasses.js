//ES6

class user{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abcd`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new user("Dipak", "dipak@example.com", "1234")

console.log(user1.encryptPassword());
console.log(user1.changeUsername())

