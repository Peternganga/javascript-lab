//rest in functions
function logAll(first, ...others) {
    console.log('First',first)
    console.log('Others:',others)
}
logAll('apple', 'mango', 'banana', 'orange')