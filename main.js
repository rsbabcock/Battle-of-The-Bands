
// const bandNumber = 1

// const takeNumber = function () {
//     /*
//         Write your awesome code here. See comments
//         below for what should be returned.
//     */
// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console

// A local nightclub is having a Battle of the Bands night in a few months. 
// They expect many bands to sign up because the grand prize is $20,000. 
// To make things easier on the nightclub management, they want each band to be assigned a number 
// Your job is to write a function that accepts any band name as an argument. 
// The function will increment a global variable by one each time it is invoked,

let bandNumber = 0;

const takeNumber = function (bandName) {
    bandNumber =+ 1;
    console.log(`${bandNumber}. ${bandName}`);
}

takeNumber("UglyMugs");
