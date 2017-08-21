/*rock paper scissors game
*make a game counter + a win/loss counter--done
*limit the number of games to play--done
*best of system
*output if player worn or lost at the end--done
*change the look to add images that show onclick--done

*/
var player = document.getElementById('player');
var comp = document.getElementById('comp');
var winn = document.getElementById('winn');
var pChoice = "";//holds the players choice starts as blank

var wins = document.getElementById('winC');
var losses = document.getElementById('loseC');
var games = document.getElementById('game');
var gCount = 0;
var wCount = 0;
var lCount = 0;

function rock(){
  
  pChoice = "rock";
  player.innerHTML = "you chose rock"
  startRPS();
  showI("pRock");//shows rock
}//changes the choice to rock

function paper(){
  pChoice = "paper";
  player.innerHTML = "you chose paper"
  startRPS();
  showI("pPaper");
}//changes the choice to paper

function scissor(){
  pChoice = "scissor";
  player.innerHTML = "you chose scissor"
  startRPS();
  showI("pScissor");
}//changes the choice to scissor

function compC(){//finds computers choice
  //gets the computers choice
  var y = comp;//id to output computers choice
  var x = Math.floor(Math.random() * 10);
  //c holds the value of the function so that it can be used correctly
  if (x <= 3){
    y.innerHTML = ('computer chose rock');
    c = "rock";
    showI("cRock");
  } else if(x >= 4 && x <= 7) {
    y.innerHTML = ('computer chose paper');
    c = "paper";
	showI("cPaper");	
  } else{
    y.innerHTML = ('computer chose scissor');
    c = "scissor";
	showI("cScissor");
  } return c;  
}

function findW(){  //finds the winner
  var out;  // var to hold the output for the winner/loser
  var player = pChoice;// holds players choice
  var comp = compC(); // holds computers choice
  var w ="you won";
  var l = "you lost";
//will check if var value and type are equal
if (player === "rock" && comp === "paper"){
  out = l; lCount++;
} else if (player === "rock" && comp === "scissor"){
  out = w; wCount++;
} else if (player === "paper" && comp === "rock"){
  out = w; wCount++;
}  else if (player === "paper" && comp === "scissor"){
  out = l; lCount++;
} else if (player === "scissor" && comp === "paper"){
  out = w; wCount++;
} else if (player === "scissor" && comp === "rock"){
  out = l; lCount++;
} else {out = "tie"; gCount--;} 
    gCount++;
  games.innerHTML = gCount;
  winn.innerHTML = out;//sends w/l status to the winn id to output
  losses.innerHTML = lCount;
  wins.innerHTML = wCount;

}

function startRPS(){//counter to limit number of games played
  if (gCount < 5){//if interested make this a var to change the number of best ofs
    findW();} else {alert('oop only 5 games');
      wl();}
}

function wl(){//output for the end of the game
if (wCount > lCount){
  alert('you won ' + wCount + ' of the games! restart to play again');}
  else {alert("...you lost " + lCount + " of the games!...restart to play again");
}
}

function showI(id) {//shows images and changes when needed
	document.getElementById("pQuestion").classList.add("hide");
 	document.getElementById("cQuestion").classList.add("hide");
document.getElementById(id).classList.remove("hide");

  var hide = function() {
  document.getElementById(id).classList.add("hide");
  }
  
  var shoQ = function() {
	  document.getElementById("pQuestion").classList.remove("hide");
	  document.getElementById("cQuestion").classList.remove("hide");
  }

  setTimeout(hide, 1000);
  setTimeout(shoQ, 1000);

}

function res(){//resets the game
  gCount = 0;
  wCount = 0;
  lCount = 0;
  wins.innerHTML = 0;
  games.innerHTML = 0;
  losses.innerHTML = 0; 
  player.innerHTML = "";
  winn.innerHTML = "";
  comp.innerHTML = "";
}