//basic object destructuring 
const employee = {name:'Peter', role:'IT', hospital:'Kanngema'}
const{name,role} = employee
console.log(navigation,employee,role)

//rename while destructuring 
const{name:fullName, hospital:facility} = employee
console.log(fullName,facility)

//Default values
const{department ='General' } = employee
console.log(department)//'General' -not in object so falls back

//array destructuring
const [first,second, ...rest]=[10,20,30,40,50]
console.log(first,second,rest)

//Spread-merge two objects
const contanct = {phone:'0700000000',email:'peter@example.com'}
const fullPofile = {...employee, ...contanct }
console.log(fullPofile)

//rest in functions
function logAll(first, ...others) {
    console.log('First',first)
    console.log('Others:',others)
}
logAll('apple', 'mango', 'banana', 'orange')