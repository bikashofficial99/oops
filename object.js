function multipleby5(num){
    return num*5
}
multipleby5.power = 2;

console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);

function createUser(username, score){
    this.username =username ;
    this.score = score ;
}

createUser.prototype.increment = function(){
    score++
}
const hari = createUser("hari",25)
const syam = createUser("syam",250)