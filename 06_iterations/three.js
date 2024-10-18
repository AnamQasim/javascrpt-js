// for of
//array inside object and string
//["", "", ""]
//[{}, {}, {}]

//const arr = [1, 2, 3, 4, 5]

//for (const num of arr) {
//    console.log(num);    
//}

//const greetings = "Hello world!"

//for (const greet of greetings) {
    //console.log(`each char is ${greet}`);
    
//}

//MAPS

const map = new Map()
map.set['IN, "India']
map.set['USA, "United States of America']
map.set['Fr, "France']
map.set['IN, "India']

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);         
}


const myobj = {
    'Game1': 'NFS',
    'Game2': 'Spiderman'
}

//object not happens in forloop
//for (const [key, value] of myobj) {
//    console.log(key, ':-', value);    
//}