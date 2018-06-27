console.log('Ready to go');

var myFname = 'Bill'; // string
var toes = 10; // number
var codes = true; // boolean
var interests = ['food', 10, false]; // array
var moreInfo = {
    color: 'red',
    cars: 1,
    interest: ['cheese', 'ham']
};

// function that return something to do with later on
function topSpeed(){
    return 75;
}
console.log(topSpeed() * 2);

// functions can accept arguments that are then used as variables inside the function
function addTen(numberOne){
    return numberOne +10;
};

// invoking addTen, with a value for the numberOne argument
console.log(addTen(100)); // the result in the console is 110

// function that does something immediately
function updateHeading(randomString){
    document.getElementById('head').innerHTML = randomString;
}
updateHeading('cheese');

function fullName(fName, spacer, lName){
    document.getElementById('full-name').innerText = fName + spacer + lName
}
fullName('Bill', ' ','Keller');

// or it could be:
// function fullName(fName, lName){
    //document.getElementById('full-name').innerText = fName + ' ' + lName}
//fullName('Bill', Keller');

// Anon function stored in a variable
var myGreatFunction = function(){
    return 'Steve';
};
document.getElementById('friends-name').innerText = myGreatFunction();

//my own functions
var fName = 'Thais';
var lName = 'Lima';

function myTest(fName, lName){
    document.getElementById('my-name').innerText = fName + ' ' + lName
}
myTest(fName, lName)

if (5 > 2) {
    // we will end up here if test is true
    console.log('we end up here, because 5 > 2')
}

if (topSpeed() > 100) {
    console.log('We will not end up here, because topSpeed returns num 75');
} else {
    //we will end up here
    console.log('if statement returned false, so we ended up here, in the else')
}

// write JS that checks is a variable is less than 10
// if it is, alert('your var is less than 10')
// if it is not, alert() what the variable was, and that it was greater than 10

var number = 800;

if (number < 10) {
    console.log('your var is less than 10');
} else {
    //es6 introduces 'templates'
    console.log(`you entered ${number} and it is greater than 10`);
}


//do the same thing, but with strings

var string = 'Thais';

if (string === 'Thais') {
    console.log('your var is equal');
} else {
    console.log('your var is different');
}

var cheese = 'swiss';
if (cheese === 'cheddar') {
    // you won't end up here
} else if (cheese === 'swiss') {
    // you will end up here
} else {
    // you will  not end up here either.
}

//acessing itens in and array, using their index number #
var cartoons = ['snoopy', 'garfield', 'popeye'];

console.log(cartoons[1]); // logs 'garfield' to the console

if (cartoons[1] === 'garfield') {

}

console.log(cartoons.indexOf('popeye')); // logs number 2

if (cartoons.indexOf('popeye') === 2) {
    //you will end up here
}