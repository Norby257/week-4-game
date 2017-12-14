console.log("we are linked");
    //making sure DOM is ready before we start manipulating it

$(document).ready(function() {
        
        //global variables, things I want to update on page refresh or when page resets 
    
        var wins;
        var losses; 
        var counter = 0;
        var computerNumber = Math.floor( Math.random() * (120-19)); 
        var crystalOne;
        var crystalTwo;
        var cystalThree;
        var crystalFour;
        
        //display computerNumber on the screen
        $("#random-number").text(computerNumber);
        //console.log for testing purposes 
        console.log(computerNumber);
        
        //choices for random numbers for crystals --but this has to be for each one 

        var crystalOne = Math.floor(Math.random() * (12-1));   

        var crystalTwo = Math.floor(Math.random() * (12-1));   

        var crystalThree = Math.floor(Math.random() * (12-1));   

        var crystalFour = Math.floor(Math.random() * (12-1));   

        var crystalValue = Math.floor(Math.random() * (12-1));   


        
        // $("#total-score").append(crystalValue);

        crystalNumberOptions = [0,1,2,3];

        crystalNumbers = [(Math.floor(Math.random() * (12-1)), $("<img>"))];
        // dynamically update the DOM using a for loop 
        //this was also working on saturday but now today only one crystal is showing 
        for (var i = 0; i < crystalNumberOptions.length; i++ ) {
                        //make an image 

            var crystalImage = $("<img>");
            //add a class to it 
         crystalImage.addClass = $("crystal-image");

            //give each one attr src 

            crystalImage.attr("src", "http://www.crystalclearintentions.co.nz/wp-content/uploads/crystals.jpg");

            // give each one a dta attribute 

            crystalImage.attr("data-crystalvalue",crystalNumbers[i]);


            //add it to the page, to the crystals div
            $("#crystals").append(crystalImage);
        }

        //click event 

        //had this functioning on saturday; then for sure broke it on tuesday but not sure how 



        $("#crystalOne").on("click", function() {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            console.log(crystalValue);
            $("#total-score").attr(crystalValue);

            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
        })

        $("#crystalTwo").on("click", function() {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            console.log(crystalValue);
            $("#total-score").attr(crystalValue);

            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
        })

        $("#crystalThree").on("click", function() {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            console.log(crystalValue);
            $("#total-score").attr(crystalValue);

            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
        })

        $("#crystalFour").on("click", function() {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            console.log(crystalValue);
            $("#total-score").attr(crystalValue);

            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
        })
        
        

        //if else game logic 

        if (computerNumber === counter ) {
            wins++; 
            $("#wins").text(wins);
            $("<p>").text("Yay, you won")
    
        }

        else if (counter >= computerNumber) {
            losses++;
            $("#losses".text(losses));
            $("<p>").text("Oh no, you lost! Try again!")
        
        }
        
});