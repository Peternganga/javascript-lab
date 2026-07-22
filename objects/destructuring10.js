const currentTrip = { destination: 'Tokyo'};

//'hotel doesn't exist in the object, so it falls back to 'TBD'
const{ destination, hotel='TBD'}=currentTrip;

console.log(destination);//'Tokyo'
console.log(hotel); //'TBD'

//if the property exists in the object, the default value is ignored.