
console.log("Anurag"+"Pal"); // don't use this 


let name = "Anurag Pal"
let count = 457;
console.log(`Hello my name is ${name} and my repo count is ${count}`);


// one more way to decalre the string 
const giveName = new String('Anurag Pal')
console.log(giveName.toUpperCase());
console.log(giveName.charAt(3));
console.log(giveName.indexOf('n'));

const newString = giveName.substring(0,4);
console.log();

const url = "https//localhost/book%38library";

console.log(url.replace('%38','-'));

console.log(url.includes('book'));
  