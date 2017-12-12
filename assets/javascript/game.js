console.log("we are linked");

$(document).ready(function() {
    
        //vars global to runtime 
    
        var wins;
        var losses; 
        var totalScore;
        var computerNumber;
        
      
    //write a for loop that assgins a random number to the crystals when the page is loaded ? how to do this?

        for (var i = 0; i <crystalOptions.length; i++) {
            var crystalNumberOptions = Math.floor(Math.random() * (12-1)) + 1;            
            var crystalValue = ($(this).attr("data-crystalValue"));
            

        }
        var computerNumber = Math.floor( Math.random() * (120-19)) +1; 
        crystalOptions = [1,2,3,4]; //consider changing this to a method 
    
        $("#random-number").text(computerNumber);
        console.log(computerNumber);
    
        var counter = 0;
    
        for (var i = 0; i < crystalOptions.length; i++) {
            //assign image 
            var crystalPic = $("<img>");
            //add a class using jQuery 
            crystalPic.addClass("crystal-Pic");

            //add an attribute for img src
            crystalPic.attr("src", "http://www.crystalclearintentions.co.nz/wp-content/uploads/crystals.jpg");
            //add a data attribute called crystal value

            crystalPic.attr("data-crystalValue", crystalNumberOptions[i]);
            $("#crystals").append(crystalPic);
            console.log(crystalNumberOptions);
        }
    
    //click event 
    $(".crystal-pic").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalValue"));
    
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        console.log(crystalValue);
        alert("Points" + crystalValue);
        // $("#total-score").text(counter);
    })
    
    // when I try to display total score it over rides the computer one. not sure why 
    // also only one crystal has a num but it;s not working as expected 
    //maybe make it an object that has a method where a random number is generated 
    
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

