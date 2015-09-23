var player = [];
var space = [];
var board = [];

function Player( pname, symbol, score) {
    this.pname = name;
    this.symbol = symbol;
    this.score = score;
    player.push(this);
}

function Space( coor1, coor2 ) { //Make prototype constructors capital S
    this.coor1 = coor1;
    this.coor2 = coor2;
    space.push(this);
    //space.markby(player);
}

var bottomleft = new Space(["1", "1"]);
// var bottomcenter = new Space("1", "2");
// var bottomright = new Space("1", "3");
// var middleleft = new Space("2", "1");
// var middlecenter = new Space("2", "2");
// var middleright = new Space("2", "3");
// var topleft = new Space("3", "1");
// var topcenter = new Space("3", "2");
// var topright = new Space("3", "3");

// var Board ( space[]){
  // for(var i=0; i < space.length; i++) {
  //    board.push(space[i]);
  // } return board [];
// }

// function board( space[bottomleft, bottomcenter, bottomright, middleleft, middlecenter, middleright, topleft, topcenter, topright ] ){
//
// }


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
