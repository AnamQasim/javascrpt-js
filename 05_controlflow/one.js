// if
//const isUserLoggedIn = true
//const temperature = 41

//if (temperature === 40){
    //console.log("less than 50");
//} else {
    //console.log("temperature is greater than 50")
//}
//console.log("excecute")
// <, >, <=, >=, ==, !=, ===. !== => for minus value

//const score = 200

//if (score > 100) {
//    let power = "fly"
//    //console.log(`User power: ${power}`) ;

//}
//console.log(`User power: ${power}`);


//const balance = 1000

//if(balance > 500) console.log("test");

//if(balance > 500) {
//    console.log("less than 500");
//} else if (balance < 750) {
//    console.log("less than 750");
//}


const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}