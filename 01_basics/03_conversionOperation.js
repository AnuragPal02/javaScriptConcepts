// let score = 990;

// let scoreInString = String(score);
// console.log(scoreInString);
// console.log(typeof scoreInString);

// let scoreInBoolean = Boolean(score);
// console.log(scoreInBoolean);
// console.log(typeof scoreInBoolean);

// let id = Symbol('123');
// let anotherId = Symbol('123');
// console.log(id === anotherId);

// stack and heap memory 


 // stack(primitive) and Heap(non-primitive);
 let myYoutubeName = "Anurag Pal";

 let anotherName = myYoutubeName;
 anotherName = "Anuragpal 2"
 console.log(anotherName);
 console.log(myYoutubeName);

 let user = {
    upi : "abc@ybl"
 }
 let user2 = user;
 console.log(user2)

 user2.upi = "edr@ert"; // here now user2 and user has changed both because the non-premitive values 
 // are stored in the Heap and when you access you get reference to that 
 console.log(user2);
 console.log(user)
 