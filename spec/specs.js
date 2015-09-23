describe('player', function() {
  it('will create a player for the game', function() {
    var newPlayer = new Player("bob", "x", 3);
    expect(newPlayer.pname).to.equal("bob");
    expect(newPlayer.symbol).to.equal("x");
    expect(newPlayer.score).to.equal(3);
  });
});

describe('space', function() {
  it('will create a coordinate for the board', function() {
    var newSpace = new Space("1", "3");
    expect(newSpace.coorX).to.equal("1");
    expect(newSpace.coorY).to.equal("3");
  });
});

describe('board', function() {
  it('will create a tic tac toe board', function() {
    var newBoard = new Board();
    expect(newBoard.bottomleft.coorX).to.eql("1");
  });
});
