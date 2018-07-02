    $(document).ready(function() {
    // generates random number to guess
    var Random = Math.floor(Math.random() * 102+19)

    // player will be shown a random number on the page
    $('#scoreToMatch').text(Random);


    // generate random number for each crazy bone
    var cBone1 = Math.floor(Math.random() * 12 + 1)
    var cBone2 = Math.floor(Math.random() * 12 + 1)
    var cBone3 = Math.floor(Math.random() * 12 + 1)
    var cBone4 = Math.floor(Math.random() * 12 + 1)


    // set stats
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;
    

$('#wins').text(wins);
$('#losses').text(losses);


// reset game
function resetGame(){

    Random = Math.floor(Math.random() * 102+19);
    $("#scoreToMatch").text(Random);
    cBone1 = Math.floor(Math.random() * 12 + 1);
    cBone2 = Math.floor(Math.random() * 12 + 1);
    cBone3 = Math.floor(Math.random() * 12 + 1);
    cBone4 = Math.floor(Math.random() * 12 + 1);
    playerTotal = 0;
    $("#totalScore").text(playerTotal);
}


// display wins
function winner() {
alert("I can't believe it");
    wins++;
    $("#wins").text(wins);
    resetGame();
}


// display losses
function loser() {
alert("Nah");
    losses++;
    $("#losses").text(losses);
    resetGame()
}

// clicking crazy bones
    $(".boo").on("click", function(){
        playerTotal = playerTotal + cBone1;
        $("#totalScore").text(playerTotal);
            // win & loose condition
            if (playerTotal === Random) {
                winner();
            }
            else if (playerTotal > Random) {
                loser();
            }
    })

    $(".brainy").on("click", function(){
        playerTotal = playerTotal + cBone2;
        $("#totalScore").text(playerTotal);
         // win & loose condition
         if (playerTotal == Random) {
            winner();
        }
        else if (playerTotal > Random) {
            loser();
        }
    })

    $(".eggy").on("click", function(){
        playerTotal = playerTotal + cBone3;
        $("#totalScore").text(playerTotal);
         // win & loose condition
         if (playerTotal == Random) {
            winner();
        }
        else if (playerTotal > Random) {
            loser();
        }
    })

    $(".topHat").on("click", function(){
        playerTotal = playerTotal + cBone4;
        $("#totalScore").text(playerTotal);
         // win & loose condition
         if (playerTotal == Random) {
            winner();
        }
        else if (playerTotal > Random) {
            loser();
        }
    });  
});



