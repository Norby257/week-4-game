console.log("we are linked");
    //making sure DOM is ready before we start manipulating it

$(document).ready(function() {
        
        //global variables, things I want to update on page refresh or when page resets 
    
        var wins;
        var losses; 
        var counter = 0;
        var computerNumber = Math.floor( Math.random() * (120-19)); 
        
        //display computerNumber on the screen
        $("#random-number").text(computerNumber);
        //console.log for testing purposes 
        console.log(computerNumber);
        
        //choices for random numbers for crystals --but this has to be for each one 
        var crystalValue = Math.floor(Math.random() * (12-1));            
        
      

//for each crystal, assign an attribute //

$("#crystal-1").attr("data-crystalValue");

// this attribute will contain the value of the random number 

//each time I click a crystal, add crystal value to counter

        
    
        $("#random-number").text(computerNumber);
        console.log(computerNumber);
    
        
    //click event 
    $("#crystal-1").on("click", function() {
        console.log(crystalValue);
        crystalValue++;
        $("#total-score").html(crystalValue);

    
        // crystalValue = parseInt(crystalValue);
        // counter += crystalValue;
        // console.log(crystalValue);
        // alert("Points" + crystalValue);
        // 
    })
    
  
  //game logic 
  //if the player score equals computer score, then yay, you win. #nailed it
  
    //else if total score is greater than computer score, then a lose. but try again!
    // if (totalScore === computerNumber) {
    //     //console log and alert just for testing purposes 
    //     console.log("Yay, you win! Rock on. Click the refresh button to play again!");
    //     alert("Yay, you win! Rock on. Click the refresh button to play again!");
    //     wins++;
    // } else if 
    //     (totalScore > computerNumber) {
    //         console.log("Oh you, you lost. Click the refresh button to try again");
    //         alert("Oh you, you lost. Click the refresh button to try again");
    //         losses++;
            
    //     }
    
    
    
    
     });

