var player = [];
var space = [];
var board = [];
// var player1 ="";
// var player2 = "";

function Player( pname, symbol, score) {
    this.pname = pname;
    this.symbol = symbol;
    this.score = score;
    player.push(this);
}

function move(player) {
  
}

function Space( coorx, coory ) { //Make prototype constructors capital S
    this.coorX = coorx;
    this.coorY = coory;
    space.push(this);
    //space.markby(player);
}

function Board( ){
  this.bottomleft = new Space("1", "1");
  this.bottomcenter = new Space("1", "2");
  this.bottomright = new Space("1", "3");
  this.middleleft = new Space("2", "1");
  this.middlecenter = new Space("2", "2");
  this.middleright = new Space("2", "3");
  this.topleft = new Space("3", "1");
  this.topcenter = new Space("3", "2");
  this.topright = new Space("3", "3");
}

function PlayerTurn() {
  if (turn % 2 === 0) {
    Player2.move();
  } else {
    Player1.move();
  }
}

// function Game( player, board) {
//
// }




$(document).ready(function() {
  $("form#players").submit(function(event) {
    var player1Name = $("input#player1Name").val();
    var symbol1 = $("select#symbol").val();
    var Player1 = new Player(player1Name, symbol1, 0);

    var player2Name = $("input#player2Name").val();
    var symbol2 = $("select#symbol").val();
    var Player2 = new Player(player2Name, symbol2, 0);


    event.preventDefault();
  });
});
