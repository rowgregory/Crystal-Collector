$(document).ready(function () {

    var random_result;
    var playerTotal = 0;
    var lost = 0;
    var win = 0;

    $('.dinoC').on('click', function () {
        $('#_words').toggle();
    })





    // function to create game
    var resetAndStart = function () {

        
        
        

        // empying crystal
        $(".crystals").empty();

        // generating new number
        random_result = Math.floor(Math.random() * 69) + 30;

        // adding to DOM
        $("#result").html("Number to Match: " + random_result);

        // looping 4 times
        for (var i = 0; i < 5; i++) {

            // creating a random number each time
            var random = Math.floor(Math.random() * 11) + 1;

            // creating div for random number
            var crystal = $("<button>");

            // giving div attributes
            crystal.attr({
                "class": "crystal",
                "data-random": random,
                "data-index": i, 'id': 'animate' + i
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
    $(document).on("click", ".crystal", function () {

        var num = parseInt($(this).attr("data-random"));

        playerTotal += num;

        $("#totalScore").html("Total score: " + playerTotal);
        document.getElementById("footStep").play();

        console.log(playerTotal);
        

        if (playerTotal > random_result) {

            lost++;

            $("#lost").html("Losses: " + lost);

            playerTotal = 0;

            document.getElementById("scream").play();

            resetAndStart();

            if(lost === 2) {
             
                $('#myModal').modal({backdrop: 'static', keyboard: false})  
            }

            if (lost === 3) {

                document.getElementById('eatenAlive').innerHTML = "You're getting eaten alive!!";
                $('#eatenAlive').show();
            }

            setTimeout(function() {
                $('#eatenAlive').hide();
                
            }, 4000);

            if (lost === 4) {

                document.getElementById('turnBackNow').innerHTML = "TURN BACK NOW!!";
                $('#turnBackNow').show();
            }

            setTimeout(function() {
                $('#turnBackNow').hide();
                
            }, 4000);
        }
        else if (playerTotal === random_result) {

            document.getElementById('niceOne').innerHTML = "Impressive!";
            $('#niceOne').show();
            win++;

            $("#win").html("Wins: " + win);

            playerTotal = 0;

            document.getElementById("growl").play();

            
            
            setTimeout(function() {
                $('#niceOne').hide();
                
            }, 4000);

            resetAndStart();

            
        } 
        

        
    })

    
        
    

    
})



        // previous animated direction screen before bootstrap was added
        // reference code for future projects

        // var switchOp = 0;

        // $("#_button1").on("click", function () {

        //     if(switchOp === 0) {
        //         $("#_directions").toggle(1000);
        //         $("#_sign").animate({ height: "80vw" });
        //         switchOp = 1; 
        //         $("#_words").slideToggle(); 
        //     }
        //     else {
        //         $("#_words").toggle(1000);
        //         $("#_sign").animate({ height: "60vw" });
        //         $("#_directions").slideToggle();
        //         switchOp = 0;
        //     }
        // });



