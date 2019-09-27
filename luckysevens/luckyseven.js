/*
Name: Steven Vadala
Date Created: 9/27/2019
Most recent revision: 9/27/2019
*/

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function startGame(){

	var startingbet= document.getElementById("startBet").value;
	if(isNaN(startingbet)) {
		var prompt1=prompt("A number is required.");
		document.getElementById("startBet").value= prompt1;
    }
    else if (startingbet<=0) {
         var prompt2 = prompt("Please enter a number greater than 0.");
         document.getElementById("startBet").value= prompt2;
    }
    else{
    start= true;
		maxDollars=startingbet;
		document.getElementById("startBet").disabled =true;
		document.getElementById("playbtn").style.display="none";
    }
}
rollCount=0;
highestRoll=0;
maxDollars=0;
function playGame(){
  var diceTotal = 0;

    startGame();
	var dollars=document.getElementById("startBet").value;
  maxDollars=dollars;
	while(dollars>0)
	{
		var dice1= rollDice();
		var dice2= rollDice();
    diceTotal = dice1 + dice2;
		rollCount++;
		if((diceTotal).valueOf()==7)
		{
			dollars= Number(dollars) + 4;
		}
		else{
		  dollars = Number(dollars) - 1;
		}
		if (maxDollars < Number(dollars)){
			maxDollars=dollars;
			highestRoll=rollCount;
		}
	}
	gameResult();
}
function gameResult(){
	document.getElementById("results").style.display="block";
	document.getElementById("start-bet").innerHTML=document.getElementById("startBet").value;
	document.getElementById("total-rolls").innerHTML=rollCount;
	document.getElementById("highest-amount").innerHTML=maxDollars;
	document.getElementById("roll-count-highest").innerHTML=highestRoll;
}
function resetGame(){
	document.getElementById("startBet").value=0;
	document.getElementById("results").style.display="none";
	document.getElementById("startBet").disabled =false;
	document.getElementById("playbtn").style.display="block";
	rollCount=0;
	highestRoll=0;
	maxDollars=0;

}
