describe('player', function() {
  it('will create a player for the game', function() {
    var newPlayer = new Player("bob", "x", 3);
    expect(newPlayer.pname).to.equal("bob");
    expect(newPlayer.symbol).to.equal("x");
    expect(newPlayer.score).to.equal(3);
  });
});

describe('space', function() {
  var newPlayer = new Player("bob", "x", 3);

  it('will create a coordinate for the board', function() {
    var newSpace = new Space("1", "3");
    expect(newSpace.coorX).to.equal("1");
    expect(newSpace.coorY).to.equal("3");
  });
  it('will mark a space on the board with a players symbol', function() {
    var newSpace = new Space("1", "3");
    expect( newSpace.mark(newPlayer) ).to.equal("x");
  });
  // it('check if space is marked before marking', function() {
  //   var newSpace = new Space("1", "3");
  //   newSpace.mark(newPlayer);
  //   expect($('div#alert')).to.have.prop('display', true);
  // });

});

describe('board', function() {

  it('will create a tic tac toe board', function() {
    var newBoard = new Board();
    expect(newBoard.one.coorX).to.eql("1");
  });

  it('will make groups for the board', function() {
    var newBoard = new Board();
    var newPlayer = new Player("bonnie", "x", 3);
    var groups = [
      [newBoard.one.markedby, newBoard.two.markedby, newBoard.three.markedby],
      [newBoard.four.markedby, newBoard.five.markedby, newBoard.six.markedby],
      [newBoard.seven.markedby, newBoard.eight.markedby, newBoard.nine.markedby],

      [newBoard.one.markedby, newBoard.four.markedby, newBoard.seven.markedby],
      [newBoard.two.markedby, newBoard.five.markedby, newBoard.eight.markedby],
      [newBoard.three.markedby, newBoard.six.markedby, newBoard.nine.markedby],

      [newBoard.nine.markedby, newBoard.five.markedby, newBoard.one.markedby],
      [newBoard.seven.markedby, newBoard.five.markedby, newBoard.three.markedby]
    ];
    expect(newBoard.groups()).to.eql(groups);
  });

  it('will check to see if there is a winner', function() {
    var newBoard = new Board();
    var newPlayer = new Player("bonnie", "x", 3);
    newBoard.one.mark(newPlayer);
    newBoard.two.mark(newPlayer);
    newBoard.three.mark(newPlayer);
    var groups = [
      [newBoard.one.markedby, newBoard.two.markedby, newBoard.three.markedby],
      [newBoard.four.markedby, newBoard.five.markedby, newBoard.six.markedby],
      [newBoard.seven.markedby, newBoard.eight.markedby, newBoard.nine.markedby],

      [newBoard.one.markedby, newBoard.four.markedby, newBoard.seven.markedby],
      [newBoard.two.markedby, newBoard.five.markedby, newBoard.eight.markedby],
      [newBoard.three.markedby, newBoard.six.markedby, newBoard.nine.markedby],

      [newBoard.nine.markedby, newBoard.five.markedby, newBoard.one.markedby],
      [newBoard.seven.markedby, newBoard.five.markedby, newBoard.three.markedby]
    ];
    expect(newBoard.isWinner()).to.equal(true);
  });

  it('will check to see if all spaces are filled', function() {
    var newBoard = new Board();
    var newPlayer = new Player("bonnie", "x", 3);
    newBoard.one.mark(newPlayer);
    newBoard.two.mark(newPlayer);
    newBoard.three.mark(newPlayer);
    newBoard.four.mark(newPlayer);
    newBoard.five.mark(newPlayer);
    newBoard.six.mark(newPlayer);
    newBoard.seven.mark(newPlayer);
    newBoard.eight.mark(newPlayer);
    newBoard.nine.mark(newPlayer);

    var groups = [
      [newBoard.one.markedby, newBoard.two.markedby, newBoard.three.markedby],
      [newBoard.four.markedby, newBoard.five.markedby, newBoard.six.markedby],
      [newBoard.seven.markedby, newBoard.eight.markedby, newBoard.nine.markedby],

      [newBoard.one.markedby, newBoard.four.markedby, newBoard.seven.markedby],
      [newBoard.two.markedby, newBoard.five.markedby, newBoard.eight.markedby],
      [newBoard.three.markedby, newBoard.six.markedby, newBoard.nine.markedby],

      [newBoard.nine.markedby, newBoard.five.markedby, newBoard.one.markedby],
      [newBoard.seven.markedby, newBoard.five.markedby, newBoard.three.markedby]
    ];
    expect(newBoard.allSpacesFilled()).to.equal(true);
  });

});



// describe('play', function() {
//   it('will start a new play in the game', function() {
//     var newPlay = new Play(Player1, Player2);
//     expect(play.currentPlayer).to.equal(Player1);
//   })
// })
