function multipleby5(num){
    return num*5
}
multipleby5.power = 2;

console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);

function user(username, score){
    this.username =username ;
    this.score = score ;
}

creteUser.prototype.increment = function(){
    score++
}
const hari = creteUser("hari",25)
const syam = creteUser("syam",250)