const user = {
    username : "Bikash",
    logincount : 3,
    signin : true ,

    getUserInfo : function() {
        console.log('GOT USERS INFO');
        console.log(`Username: ${this.username}`);
    }
}

console.log(user.username);
console.log(user.getUserInfo());

function User(username, logincount, signin){
    this.username = username;
    this.logincount = logincount;
    this.signin = signin;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}
const userOne = new User("ritesh", 12,true)
const userTwo = new User("radhesyam", 2, false)
console.log(userOne);
// console.log(userTwo);