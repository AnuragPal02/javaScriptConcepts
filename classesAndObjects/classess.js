

// // const user = {
// //     username : "anurag",
// //     age : 22,

// //     myFunction : function(){
// //         console.log(this);
// //     }
// // }

// // console.log(user.__proto__);

// function User(username,age,loggedIn){
//     this.username = username;
//     this.age = age;
//     this.loggedIn = loggedIn;

//      return this;
// }
// const user1 = User("anurag",22,'true');
// console.log(user1)
// // console.log(User.this);


const user = {
    name : 'anurag'
}

Object.prototype.Anurag = function(){
    console.log(this);
    console.log('Its me Anurag');
}

user.Anurag();