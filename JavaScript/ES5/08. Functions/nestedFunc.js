function myScore(initVal) {
    var score = initVal;
    return function(val) {
        score += val;
        console.log(score);
        return score;
    }
}

var scoreBord = myScore(10);
scoreBord(+5);

scoreBord(-2);
scoreBord(+20);
console.log(scoreBord(0))