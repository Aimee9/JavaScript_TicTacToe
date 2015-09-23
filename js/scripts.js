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


//
// $(document).ready(function() {
//   $("form#factorial").submit(function(event) {
//     var number= parseInt($("input#number").val());
//     var result = factorial(number);
//
//       $(".number").text(number)
//       $(".final").text(result)
//        $("#result").show()
//
//
//     event.preventDefault();
//   });
// });
