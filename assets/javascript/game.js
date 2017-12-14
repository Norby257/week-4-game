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
        console.log(crystalValue);
        // $("#total-score").append(crystalValue);



        crystalNumbers = [(Math.floor(Math.random() * (12-1)), $("<img>"))];
        // dynamically update the DOM using a for loop 
        //this was also working on saturday but now today only one crystal is showing 
        for (var i = 0; i < crystalNumbers.length; i++ ) {
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

        $(".crystal-image").on("click", function() {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            console.log(crystalValue);
            $("#total-score").text(crystalValue);

            crystalValue = parseInt(crystalValue);
            counter += crystalValue;


        
        })
        
});