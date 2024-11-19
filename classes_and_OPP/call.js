function SetUsername(username){
    //complex db calls
    this.username = username
}

function createUsername(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}
 const user = new createUsername("Dipak", "dipak@example.com", "1234")
 console.log(user)