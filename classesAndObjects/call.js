

function setUserName(username){
    this.username = username
    console.log(`this is username ${this.username}`);
}

const createUser = function(username,email,number){
    setUserName.call(this,username);
    this.email = email;
    this.number = number;
}


const newUser = new createUser("JohnDoe","johndoe@gmail.com",1234567890);

console.log(newUser);