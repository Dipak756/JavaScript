//var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    console.log("Inner:", a)
}
console.log(a)

function one(){
    const username = "Dipak"

    function two(){
        const website = "Dipak.com"
        console.log(username)
    }
    //console.log(website) this can not be access
    two()
}
//one()

if(true){
    const username = "Dipak"
    if(username === "Dipak"){
        const website = "Dipak.com"
        console.log(username, ""+ website)
    }
    //console.log(website) // this is outside of the scope this can not be accessed
}
//console.log(username) // this is also outside of scope