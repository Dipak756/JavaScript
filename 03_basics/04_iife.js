// immediatly invoke function expression(IIFE)

(function one(){
    console.log(`DB.CONNECTED`)
})();

// to avoid global scope popolution problem 

( (name) =>{
    console.log(`DB.CONNECT2, ${name}`)
}

)("Dipak")