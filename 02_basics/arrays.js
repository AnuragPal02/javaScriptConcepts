
// const arr = [3,4,5,6,7];

// arr.push(7);
// arr.push(8);
// arr.pop();
// console.log(arr);

// // slice and splice 
// console.log("A ",arr);

const marvel_heroes = ["thor","Ironman","spiderman"];
const dc = ["superman","flash",'batman'];

// marvel_heroes.push(dc);
// console.log( marvel_heroes[3][2]);

const all_heros = marvel_heroes.concat(dc);
// console.log(all_heros);

const heros = [...marvel_heroes,...dc]; // spread operators are better than concat because you can give more 
// than one values or concat more than one values 

console.log(heros);


// const newArray = [1,2,3,[1,2],[1,[1,2,3]]];
// console.log(newArray);

// const new_array = newArray.flat(Infinity);
// console.log(new_array);

//? is array 
console.log(Array.isArray("hey how are you.."));
console.log(Array.from("anurag"));
console.log(typeof Array.from({name: "anurag"}));