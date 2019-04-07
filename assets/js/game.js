$(document).ready(() => {

    $(document).on("click", ".crystal", runGame);

    var maxLimit = Math.floor(Math.random() * 100);
    var totalScore = 0;
    var losses = 0;
    var win = 0;
    $(".limit").text(maxLimit);

    function runGame() {

        //

        totalScore += parseInt($(this).attr("value"));
        $(".score").text(totalScore);

        if (totalScore > maxLimit) {
            losses++;
            $(".losses").text(losses);
            alert("you lost");
            reset();

        }
        if (totalScore === maxLimit) {
            win++;
            $(".wins").text(win);
            alert("you win!");
            reset();
        }
    }



    function reset() {
        totalScore = 0;
        maxLimit = Math.floor(Math.random() * 100);

        $(".limit").text(maxLimit);
        $(".score").text(totalScore);


    }


})