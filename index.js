var prompt = require('prompt');
var board = [[['_'],['_'],['_']],[['_'],['_'],['_']],[['_'],['_'],['_']]];
let rowIdx = null;
let colIdx = null;
let player1Turn = true;
let gameOver = false;
let playerChoice = null;
console.log("Welcome to tic-tac-toe!")
console.log("Player 1 is O and Player 2 is X")
console.log(board[0][0] + '|' + board[0][1] + '|' + board[0][2]);
console.log(board[1][0] + '|' + board[1][1] + '|' + board[1][2]);
console.log(board[2][0] + '|' + board[2][1] + '|' + board[2][2]);


 var playTurn = function(){
 	if(player1Turn){
	  prompt.start();
	  	console.log('Player 1 enter input in the form of row, column')
	    prompt.get(['move'], function (err, result) {
	    console.log('You choose block ' + result.move);
	    playerChoice = result.move;
	  });
	}

 }

var placeChar = function(rowIndex,colIndex){
	    /*let moveChoiceToArray = playerChoice.split(",");
	    rowIdx = moveChoiceToArray[0].parseInt();
	    colIdx = moveChoiceToArray[1].parseInt();
	    board[rowIdx][colIdx] = "O"
	    player1Turn = false;*/
	    console.log('Not infinite loop')
	    player1Turn= false;
	    checkForGameOver();

}

var checkForGameOver = function(){
	if(board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O'){
		gameOver = true;
	}
}
 while(!gameOver){
 	playTurn();
 }

 console.log('GAME OVER');