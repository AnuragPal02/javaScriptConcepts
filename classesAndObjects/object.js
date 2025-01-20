function Users(name) {
   this.name = name;
   return this;
 }
 
 Users.prototype.increment = function(value) {
   console.log("Before adding properties:", this); // Logs `this` before adding properties.
   this.incrementOne = value + 1;
   this.incrementTwo = value + 2;
   console.log("After adding properties:", this); // Logs `this` after adding properties.
   return this;
 };
 
 const user1 =  Users(9); // Use `new` to create an instance.
 console.log("Before increment:", user1); // Logs initial state of `user1`.
 user1.increment(10);
 console.log("After increment:", user1); // Logs updated state of `user1`.
 
//  console.log(this);