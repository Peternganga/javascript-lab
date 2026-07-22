//renaming variables
const user ={id:99,name:'Alex'};

//rename 'name' to 'username' while destructuring

const{ id, name:username } = user;

console.log(username);//'Alex'
console.log(name);//referrenceError:name is not defined
