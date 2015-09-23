var player = [];
var space = [];
var board = [];


function Player( pname, symbol, score) {
    this.pname = pname;
    this.symbol = symbol;
    this.score = score;
    player.push(this);
}


function Space( coorx, coory ) { //Make prototype constructors capital S
    this.coorX = coorx;
    this.coorY = coory;
    this.markedby = "";
    space.push(this);
    //space.markby(player);
}

Space.prototype.mark = function(player) {
  this.markedby = player.symbol;
  return player.symbol;
}

function Board( ){
  this.one = new Space("1", "1");
  this.two = new Space("1", "2");
  this.three = new Space("1", "3");
  this.four = new Space("2", "1");
  this.five = new Space("2", "2");
  this.six = new Space("2", "3");
  this.seven = new Space("3", "1");
  this.eight = new Space("3", "2");
  this.nine = new Space("3", "3");
}

function Play(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.currentPlayer = playerOne;
  this.board = new Board();
}

Play.prototype.endTurn = function() {
  if (this.currentPlayer === playerOne) {
    this.currentPlayer = playerTwo;
  } else {
    this.currentPLayer = playerOne;
  }
}

// Board.prototype.checkWinner = function() {
//   if (1===2===3 || ){
//   return true;
//   }else {
//   return false;
//   }
// }
//
// function ResetBoard() {
//   $("div#1").val("");
// }

$(document).ready(function() {
  $("form#players").submit(function(event) {
    var player1Name = $("input#player1Name").val();
    var symbol1 = $("select#symbol").val();
    var Player1 = new Player(player1Name, symbol1, 0);

    var player2Name = $("input#player2Name").val();
    var symbol2 = $("select#symbol").val();
    var Player2 = new Player(player2Name, symbol2, 0);

    var play = new Play(player1, player2);
    var board = play.board

    $("#1").click(function(){
      var space = board.topLeft;
      var currentPlayer = play.currentPlayer;
      var symbol = space.mark(currentPlayer);
      play.endTurn();
    });

    $("#2").click(function(){
      var space = board.topCenter;
      var currentPlayer = play.currentPlayer;
      var symbol = space.mark(currentPlayer);
      play.endTurn();
    });

    $("#3").click(function(){
      var space = board.topRight;
      var currentPlayer = play.currentPlayer;
      var symbol = space.mark(currentPlayer);
      play.endTurn();
    });

    $("#4").click(function(){
      var space = board.middleLeft;
      var currentPlayer = play.currentPlayer;
      var symbol = space.mark(currentPlayer);
      play.endTurn();
    });

    $("#5").click(function(){
      var space = board.middleCenter;
      var currentPlayer = play.currentPlayer;
      var symbol = space.mark(currentPlayer);
      play.endTurn();
    });

    $("#6").click(function(){
      var space = board.middleRight;
      var currentPlayer = play.currentPlayer;
      var symbol = space.mark(currentPlayer);
      play.endTurn();
    });

    $("#7").click(function(){
      var space = board.bottomLeft;
      var currentPlayer = play.currentPlayer;
      var symbol = space.mark(currentPlayer);
      play.endTurn();
    });

    $("#8").click(function(){
      var space = board.bottomCenter;
      var currentPlayer = play.currentPlayer;
      var symbol = space.mark(currentPlayer);
      play.endTurn();
    });

    $("#9").click(function(){
      var space = board.bottomRight;
      var currentPlayer = play.currentPlayer;
      var symbol = space.mark(currentPlayer);
      play.endTurn();
    });


    event.preventDefault();
  });
});
