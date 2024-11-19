function multipilyBy5(num){
    return num*5;
}
 multipilyBy5.power = 2

 console.log(multipilyBy5(5));
 console.log(multipilyBy5.power);
 console.log(multipilyBy5.prototype);

 function createUser(username,score){
    this.username = username
    this.score = score
 } 

 createUser.prototype.increment = function (){
    console.log(`score is ${this.score}`);
 }

 createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
 }

 const dipak = new createUser("dipak", 90) 
 const ojha = createUser("ojha", 60)

 dipak.printMe()