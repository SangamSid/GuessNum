// generating random number
let myGuessArray=[];
let computerGuess=Math.floor(Math.random()*(99)+1);

document.getElementById("newgame").style.display="none"
document.getElementById("gamearea").style.display="none"
// enter the value in input box and add to array
function compareGuess(){
    let enterValue=document.getElementById("inputbox").value
     myGuessArray=[...myGuessArray,enterValue]
     console.log("array length "+ myGuessArray.length)
    document.getElementById("guessValue").innerHTML=myGuessArray
    document.getElementById("attempts").innerHTML=myGuessArray.length
    document.getElementById("inputbox").value=null

if (myGuessArray.length<maxGuess){

    if (enterValue<computerGuess){
        document.getElementById("yourguess").innerHTML="Your guess is Low "
    }
    else if (enterValue>computerGuess){
        document.getElementById("yourguess").innerHTML="Your guess is High"
    }
    else{
        document.getElementById("yourguess").innerHTML="Your guess is Correct"
        document.getElementById("inputbox").style.display="none"
        document.getElementById("newgame").style.display="block"
    }
}
else{
    
    if (enterValue<computerGuess){
        document.getElementById("yourguess").innerHTML="Your Loose!! correct no. was "+computerGuess;
    }
    else if (enterValue>computerGuess){
        document.getElementById("yourguess").innerHTML="Your Loose!! correct no. was "+computerGuess;
    }
    else{
        document.getElementById("yourguess").innerHTML="Your guess is Correct"
    document.getElementById("inputbox").style.display="none"
    document.getElementById("newgame").style.display="block"

}
document.getElementById("inputbox").style.display="none"
document.getElementById("newgame").style.display="block"

}

}

function startGame(){
    document.getElementById("gamearea").style.display="block";
    document.getElementById("centercontainer").style.display="none";
}
function easyMode(){
    startGame();
maxGuess=10;
}
function hardMode(){
    startGame();
    maxGuess=5;
}
function newgame(){
    document.getElementById("centercontainer").style.display="block";
    document.getElementById("gamearea").style.display="none";
}