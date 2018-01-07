var Rectangle = require('./../app/Rectangle.js');

describe('Rectangle with sides 4 and 5', function() {
  var rectangle = new Rectangle(4, 5);

  it('should return 18 when we calculated perimeter', function() {
    expect(rectangle.getPerimeter()).toBe(18);
  })
})