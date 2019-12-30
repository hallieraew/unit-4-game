$(document).ready(function () {

    var wins = 0;
    var loss = 0;
    var currentScore = 0;
    var inProgress = false;

    var crystalArray = [];

    function genArray() {
        crystalArray.push = Math.floor(Math.random() * 12) + 1; 
        console.log(crystalArray);
    };
    
    $("#purple-crystal").on("click", function () {
        crystalRandom = genArray();
        // var crystalRandom = Math.floor(Math.random() * 12) + 1;
        console.log(crystalRandom);
    });
    
    $("#blue-crystal").on("click", function () {
        var crystalRandom = Math.floor(Math.random() * 12) + 1;
        console.log(crystalRandom);
    });
    
    $("#white-crystal").on("click", function () {
        var crystalRandom = Math.floor(Math.random() * 12) + 1;
        console.log(crystalRandom);
    });
    
    $("#emerald").on("click", function () {
        var crystalRandom = Math.floor(Math.random() * 12) + 1;
        console.log(crystalRandom);
    });
    
    if (inProgress) {
        var targetScore = Math.floor(Math.random() * 120) + 19;
        $("#target-score").text(targetScore);
    }
    else if (inProgress === false) {
        if ($("#purple-crystal").on("click", function() {
            $("#current-score").text()
            }));
    }
});


//  $("#purple-crystal").text("<br><p>" + crystalRandom);
// if  (inProgress) {
//     $("#target-score").text(targetScore);

//     var crystalRandom = "";
// win count
// loss count
// computer number
// user score
// random number for crystals
// random score generator
// click event for crystal select
// updates to html display id.text(var to pass in)
//true false if game is in progress
// crystals reset their value and the computer number reset at beginning of game
//