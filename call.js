function myUser(username){

    this.username = username
    console.log("Called")
}

function newUser(username, email, password){
    myUser.call(this, username)
    this.email = email
    this.password = password
}

const mynm = new newUser("hary", "hary@gmail.com", "3544")
console.log(mynm)