console.log("we are linked");

//what i need to do 
//declare variables that i need 



// global variables 
var wins;
var losses; 
var totalScore;
var computerNumber;

//arrays for randomly generating the numbers

var crystalNumber = Math.floor(Math.random() * (12-1)) + 1;
var computerNumber = Math.floor( Math.random() * (120-19)) +1; 


//click event generate a random number when gem is clicked (should this be a function-the rando number part)
$("#second-gem").on("click", function() {
    var crystalNumber = Math.floor(Math.random() * (12-1)) + 1;
    console.log(crystalNumber);
    
    
});

