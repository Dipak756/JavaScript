const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const user = {
    name: 'Dipak Ojha',
    ID: '07',
    isPresent: true
}

console.log(Object.getOwnPropertyDescriptor(user,"name"))

// Object.defineProperty(user,'name', {
//     writable : false,
//     enumerable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(user, "name"));
