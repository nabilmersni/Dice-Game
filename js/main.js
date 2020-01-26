var whoTheWinner = document.querySelector(".who-win");
var player1Dice = document.querySelector(".player-1-dice");
var player2Dice = document.querySelector(".player-2-dice");
var rollButton = document.querySelector(".roll-btn");
var newButton = document.querySelector(".new-btn");
player1Dice.src = "./img/dice-" + 1 + ".png";
player2Dice.src = "./img/dice-" + 1 + ".png";

var gameplay = true;


rollButton.addEventListener("click", function(){
    if(gameplay){
        var x = Math.floor((Math.random() * 6) + 1);
        var y = Math.floor((Math.random() * 6) + 1);
        console.log(x);
        player1Dice.src = "./img/dice-" + x + ".png";
        player2Dice.src = "./img/dice-" + y + ".png";

        if(x > y){
            whoTheWinner.classList.toggle("player-1-win");
            gameplay = false;
        }else if(x < y){
            whoTheWinner.classList.toggle("player-1-lose");
            gameplay = false;
        }else{
            gameplay = true;
        }
    }
})

newButton.addEventListener("click", init);



function init(){
    var whoTheWinner = document.querySelector(".who-win");
    var player1Dice = document.querySelector(".player-1-dice");
    var player2Dice = document.querySelector(".player-2-dice");
    var rollButton = document.querySelector(".roll-btn");
    var newButton = document.querySelector(".new-btn");
    player1Dice.src = "./img/dice-" + 1 + ".png";
    player2Dice.src = "./img/dice-" + 1 + ".png";
    whoTheWinner.classList.remove("player-1-win");
    whoTheWinner.classList.remove("player-1-lose");

    gameplay = true;
}