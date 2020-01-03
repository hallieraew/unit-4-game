
var wins = "";
var loss = "";
var currentScore = 0;
var crystalNum = "";
var targetScore = Math.floor(Math.random() * 120) + 19;
var inProgress = false;
var crystalArray = [];


$(document).ready(function () {

    $(".crystal-image").each(function setCrystal() {
        crystalArray = Math.floor(Math.random() * 12) + 1;
        $(this).attr("data-value", crystalArray);
        console.log(crystalArray);

        $("#target-score").text(targetScore);

    }
    );
    function reset() {
        currentScore = 0;
        crystalNum = "";
        targetScore = Math.floor(Math.random() * 120) + 19;
        $("#target-score").text(targetScore);
    }
    $(".crystal-image").on("click", function () {

        var crystalVal = ($(this).attr("data-value"));
        crystalVal = parseInt(crystalVal);
        console.log(crystalVal);

        console.log(targetScore);

        currentScore += crystalVal;
        $("#current-score").text(currentScore);
        $("#win-text").text("Wins: " + wins);
        $("#loss-text").text("Losses: " + loss);


        if (currentScore === targetScore) {
            wins++;
            $("#current-score").text("You Win!");
            reset();
        }

        else if (currentScore > targetScore) {
            loss++;
            $("#current-score").text("You Lose!");
            reset();
        }

        else {
            console.log("keep er rollin");
        }
    });


});