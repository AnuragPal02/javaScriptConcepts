
// filter, map, reduce 

const coding = ["js",'c++','python','java','c'];

// const codingValues = coding.forEach((item,index,arr)=>{ // foreach doesn't return value 
//    return item;
// })

// console.log(codingValues)

const myNums = [1,2,3,4,5,6,7,8];
// filter is the most used for iterating in react backend 

// const newNums = myNums.filter((item,index,arr)=>(item>5));
// console.log(newNums)
// const result = myNums.map((item)=>(item+10)).map()

const result = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(result)