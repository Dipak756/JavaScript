//const tinderUser = new Object()

const tinderUser = {}

tinderUser.Id = "123abc"
tinderUser.name = "Dipak"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    mail: "dipak@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Dipak",
            lastName: "Ojha"
        }
    }
}

//console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign ({}, obj1, obj2) //curly brasses act as a target and object act as source

const obj3 = {...obj1, ...obj2}  //here I have used spread method 
console.log(obj3);


const users = [
    {
        id: 1,
        email: "d@gnail.com"
    },
    {
        id: 1,
        email: "d@gnail.com"
    },
    {
        id: 1,
        email: "d@gnail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //mostly used in database

//____________________________________________Destracturing__________________________________________________

const course = {
    courseName: "JavaScript",
    price: 599,
    courseInstructor: "Dipak"
}

//course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor)

//________________________________________________________json____________________________________________

/*{
    "name" : "Dipak",
    "course" : "JavaScript"
    "price" : "Free"
} */

[
    {

    },
    {},
    {}
]