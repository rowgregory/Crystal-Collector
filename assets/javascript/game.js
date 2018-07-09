
var random_result;
var playerTotal = 0;
var lost = 0;
var win = 0;



// function to create game
var resetAndStart = function () {

    // empying crystal
    $(".crystals").empty();

    // generating new number
    random_result = Math.floor(Math.random() * 69 ) + 30;

    // adding to DOM
    $("#result").html("Number to Match: " + random_result);

    // looping 4 times
    for(var i = 0; i < 4; i++) {

        // creating a random number each time
        var random = Math.floor(Math.random() * 11) + 1;
        
        // creating div for random number
        var crystal = $("<div>");

            // giving div attributes
            crystal.attr({
                "class": "crystal",
                "data-random": random
            });

            // adding to DOM
            //crystal.html(random);

        // crystal where we are sending everything back
        $(".crystals").append(crystal);
    }

    $("#totalScore").html("Total score: " + playerTotal);
    

}

resetAndStart();


// event delegation: 
// when page loads it replaces div with new elements and starts listening to the DOM and not the old div
$(document).on("click", ".crystal", function() {

    var num  = parseInt($(this).attr("data-random"));

    playerTotal += num;

    $("#totalScore").html("Total score: " + playerTotal);
    document.getElementById("footStep").play();

    console.log(playerTotal);
    
    
    if(playerTotal > random_result) {
        
        lost++;

        $("#lost").html("Losses: " + lost);

        playerTotal = 0;

        document.getElementById("scream").play();

        resetAndStart();
    }
    else if(playerTotal === random_result){
        
        win++;

        $("#win").html("Wins: " + win);

        playerTotal = 0;

        document.getElementById("growl").play();

        resetAndStart();
    }

});

$(document).ready(function(){

    var _graphicSign = $("#_sign");

    $("#_button1").on("click",function(){
        $("#_directions").toggle(1000);
        
        
    });
    $("#_button1").on("click", function() {
        $("#_sign").animate({ height: "600px" });

      
    });
    $("#_button1").on("click",function(){
        $("#_words").toggle(1000);   

        resetBox();
    });
       
});

var resetBox = function() {
    $("#_button1").on("click", function() {
        $("#_sign").animate({ height: "450px" });
});
}



