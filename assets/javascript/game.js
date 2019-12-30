
    var wins = 0;
    var loss = 0;
    var currentScore = 0;
    var crystalNum = "";
    var targetScore = Math.floor(Math.random() * 120) + 19;
    var inProgress = false;
    
    var crystalArray = [];
    
    // function genArray() {
    //     crystalArray.push = Math.floor(Math.random() * 12) + 1; 
    //     console.log(crystalArray);
    // };
    
    $(document).ready(function () {
    
        $(".crystal-image").each(function() {
        crystalArray = Math.floor(Math.random() * 12) + 1;
        $(this).attr("data-value", crystalArray);
        console.log(crystalArray);
    }
    );
        $(".crystal-image").on("click", function() {
    
            var crystalVal = ($(this).attr("data-value"));
            crystalVal = parseInt(crystalVal);
            console.log(crystalVal);

            currentScore += crystalVal;
            $("#current-score").text(currentScore);

            if (currentScore === targetScore) {
                wins++;
                
            }
        });

    // $("#purple-crystal").on("click", function () {
    //     var crystalRandom = Math.floor(Math.random() * 12) + 1;
    //     crystalRandom = genArray();
    //     console.log(crystalRandom);
    // });
    
    // $("#blue-crystal").on("click", function () {
    //     var crystalRandom = Math.floor(Math.random() * 12) + 1;
    //     crystalRandom = genArray();
    //     console.log(crystalRandom);
    // });
    
    // $("#white-crystal").on("click", function () {
    //     var crystalRandom = Math.floor(Math.random() * 12) + 1;
    //     crystalRandom = genArray();
    //     console.log(crystalRandom);
    // });
    
    // $("#emerald").on("click", function () {
    //     var crystalRandom = Math.floor(Math.random() * 12) + 1;
    //     crystalRandom = genArray();
    //     console.log(crystalRandom);
    // });
    
//     if (inProgress) {
//         var targetScore = Math.floor(Math.random() * 120) + 19;
//         $("#target-score").text(targetScore);
        
//         for (i=0; i<genArray.length; i++) {
//             var crystalVal = $("crystal-image");

//             crystalVal.attr("data-crystalval", genArray[i]);

//             $("#crystal-image").text(crystalVal);
//         }

//     }
//     else if (inProgress === false) {
//         if ($("#purple-crystal").on("click", function() {
//             $("#current-score").text(targetScore)
//             }));
//     }
// });


// if  (inProgress) {
//     $("#target-score").text(targetScore);

    });