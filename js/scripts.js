var player = [];
var space = [];

  function Player( pname, symbol, score) {
    this.pname = pname;
    this.symbol = symbol;
    this.score = score;
    player.push(this);
  }

  function Space( coorx, coory, id ) { //Make prototype constructors capital S
    this.coorX = coorx;
    this.coorY = coory;
    this.markedby = "";
    this.id = id;
    space.push(this);
    //space.markby(player);
  }

  // Space.prototype.mark = function(player) {
  //   this.markedby = player.symbol;
  //
  // }

  //To determine if a space is already taken, if free, mark by a player
  Space.prototype.markSpaceTaken = function(player) {

    if (this.markedby === "") {
    //  var symbol = space.mark(currentPlayer);

      this.markedby = player.symbol;
      return player.symbol;
      }
      else {
        $('div#alert').show();
      }
    }

  function Board(){


    this.one = new Space("1", "1", "1");
    this.two = new Space("1", "2", "2");
    this.three = new Space("1", "3", "3");
    this.four = new Space("2", "1", "4");
    this.five = new Space("2", "2", "5");
    this.six = new Space("2", "3", "6");
    this.seven = new Space("3", "1", "7");
    this.eight = new Space("3", "2", "8");
    this.nine = new Space("3", "3", "9");
    this.board = [this.one, this.two, this.three, this.four, this.five, this.six, this.seven, this.eight, this.nine]
  }

  Board.prototype.findSpace = function(id) {
    var foundSpace;
    this.board.forEach(function(space) {
      if (space.id === id) {
        foundSpace =  space;
      }
    });
    return foundSpace;
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
         for(var i = 0; i <= groups.length - 1; i++){
           var group = groups[i];
           if (group[0] === group[1]  && group[1] === group[2] && group[0] !== ""){
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
        } return true;
      }
    }

    //refractoring
    // Board.prototype.allSpacesFilled = function() {
    //   var groups = this.groups();
    //     if (this.groups.find("")){
    //       return false;
    //     } return true;
    //   }

    function Play(playerOne, playerTwo) {
      this.playerOne = playerOne;
      this.playerTwo = playerTwo;
      this.currentPlayer = playerOne;
      this.board = new Board();
    }


  Play.prototype.endTurn = function() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else {
      this.currentPLayer = this.playerOne;
    }
  }

  Play.prototype.game = function() {
    if (this.board.isWinner(true)) {
      return "You win!";
    } else if (this.board.allSpacesFilled(true)) {
      return "It's a draw!";
    } else {
      this.endTurn();
    }
  }
  //
  // function ResetBoard() {
  //   $("div#1").val("");
  // }

  $(document).ready(function() {
    // $("form#players").submit(function(event) {
    //   var player1Name = $("input#player1Name").val();
    //   var symbol1 = $("select#symbol").val();
    //   var Player1 = new Player(player1Name, symbol1, 0);
    //
    //   var player2Name = $("input#player2Name").val();
    //   var symbol2 = $("select#symbol").val();
    //   var Player2 = new Player(player2Name, symbol2, 0);
    //
    //   var play = new Play(player1, player2);
    // });
      //var board = play.board;
      $("button#player1").click(function() {
        var player1Name;
        var symbol1 = "X";
        var Player1 = new Player(player1Name, symbol1, 0)
      })

      $("button#2").click(function() {
        var player2Name;
        var symbol2 = "O";
        var Player2 = new Player(player2Name, symbol2, 0)
      })


      var player1 = new Player("X", "X", 0)
      var player2 = new Player("O", "O", 0)
      var play = new Play(player1, player2);

      $(".square").click(function(){
        var id = $(this).attr("id");   //.data('#id');
        var space = play.board.findSpace(id);

        var currentPlayer = play.currentPlayer;
        space.markSpaceTaken(currentPlayer); //To determine if a space is already taken, if free, mark by a player
        $(this).text(space.markedby);
        play.game();
        // check for winner/tie
        // change the current player
        //
      });

      event.preventDefault();

  });
