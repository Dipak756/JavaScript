class User{
    constructor(username){
        this.username = username
    }
    logME(){
        console.log(`USERNAME id : ${this.username}`);
    }
}

class Student extends User{
    constructor (username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    enrollCourse(){
        console.log(` A new course is enrolled by: ${this.username}`);
    }
}

const dipak = new Student("Student", "student@example.com", "1234")
//dipak.enrollCourse()
dipak.logME()

const ojha = new User("ojha")
ojha.logME()

console.log(dipak instanceof User);