describe('space', function() {
  it('will create a coordinate for the board', function() {
    var newSpace = new Space("1", "3");
    expect(newSpace.coor1).to.equal("1");
  });
});


// it('will create a coordinate for the board', function() {
//   var testCoordinates = new space("1", "3");
//   expect(space([0])).to.eql(testCoordinates);
// });
