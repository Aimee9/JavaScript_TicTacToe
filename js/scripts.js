var player = [];
var space = [];



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

  //To determine if a space is already taken, if free, mark by a player
  Space.prototype.markSpaceTaken = function  () {
    if (this.markedby === "") {
      var symbol = space.mark(currentPlayer); }
      else {
        $('div#alert').show();
      }
    }

  function Board(){

    var board = [];
    this.one = new Space("1", "1");
    this.two = new Space("1", "2");
    this.three = new Space("1", "3");
    this.four = new Space("2", "1");
    this.five = new Space("2", "2");
    this.six = new Space("2", "3");
    this.seven = new Space("3", "1");
    this.eight = new Space("3", "2");
    this.nine = new Space("3", "3");
    board.push(this);
  }

  Board.prototype.findSpace = function() {
    return this.Space();
  }


  Board.prototype.groups = function() {
    var groups = [];

    //horizontal rows
    groups.push([this.one.markedby, this.two.markedby, this.three.markedby]); //? this.one or simply one
    groups.push([this.four.markedby, this.five.markedby, this.six.markedby]);
    groups.push([this.seven.markedby, this.eight.markedby, this.nine.markedby]);

    //vertical columns
    groups.push([this.one.markedby, this.four.markedby, this.seven.markedby]);
    groups.push([this.two.markedby, this.five.markedby, this.eight.markedby]);
    groups.push([this.three.markedby, this.six.markedby, this.nine.markedby]);

    //diagonal
    groups.push([this.nine.markedby, this.five.markedby, this.one.markedby]);
    groups.push([this.seven.markedby, this.five.markedby, this.three.markedby]);

    return groups;
  }

   Board.prototype.isWinner = function() {
       var groups = this.groups();
         for(var i = 0; i <= groups.length; i++){
           var group = groups[i];
           if (group[0] === group[1]  && group[1] === group[2]){
            return true;
           }
         }
         return false;
       }

  Board.prototype.allSpacesFilled = function() {
    var groups = this.groups();
    for(var i = 0; i <= groups.length; i++){
      var group = groups[i];
    if ((group[0] === "") || (group[1] === "") || (group[2] === "")) {
      return false;
    }
  } return true;
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
      var board = play.board;


      $(".square").click(function(){
        var space = $(this);   //.data('#id');
        var currentPlayer = play.currentPlayer;
        space.markSpaceTaken(); //To determine if a space is already taken, if free, mark by a player

        play.endTurn();
      });

      event.preventDefault();
    });
  });
