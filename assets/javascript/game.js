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
        
        //temp choices for random numbers

        crystalNumbers = [5,2,11,9];
        
        // dynamically update the DOM using a four loop 
        for (var i = 0; i < crystalNumbers.length; i++ ) {
                        //make an image 

            var crystalImage = $("<img>");
            //add a clas to it 
         crystalImage.addClass = $("crystal-image");

            //give each one attr src 

            crystalImage.attr("src", "http://www.crystalclearintentions.co.nz/wp-content/uploads/crystals.jpg");

            // give each one a dta attribute 

            crystalImage.attr("data-crystalvalue",crystalNumbers[i]);

            //add it to the page, to the crystals div
            $("#crystals").append(crystalImage);
        }

        //click event 

        $(".crystal-image").on("click", function() {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            console.log(crystalValue);
            $("#total-score").text(crystalValue);
            
            // crystalValue = parseInt(crystalValue);
            // counter += crystalValue;


        
        })
        
});