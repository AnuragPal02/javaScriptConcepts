


async function getAllUsers(){
   try {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const users = await data.json();
    console.log(users);
   } catch (e) {
      console.log('there is something wrong');
   }
}
getAllUsers();

fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
     return response.json();
}).then((response)=>{
    console.log('data is fetched it is:');
    console.log(response);
}).catch(()=>{
    console.log('there is something wrong..');
})