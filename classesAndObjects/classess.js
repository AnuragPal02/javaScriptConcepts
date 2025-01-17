

// const user = {
//     username : "anurag",
//     age : 22,

//     myFunction : function(){
//         console.log(this);
//     }
// }

// console.log(user.__proto__);

function User(username,age,loggedIn){
    this.username = username;
    this.age = age;
    this.loggedIn = loggedIn;

     return this;
}

const firstUser = new User("anurag",22,'true');
// console.log(firstUser);

const secondUser = new User("ankit",25,'false');
console.log(firstUser);

console.log(firstUser.constructor);
// constructor function gives us new instance 

