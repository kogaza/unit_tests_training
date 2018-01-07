var Rectangle = require('./../app/Rectangle.js');

describe('Rectangle', function() {
  var rectangle = new Rectangle(4, 5);

  describe('when set 0 for a', function() {
    it('should return false', function() {
      var result = rectangle.setA(0);

      expect(result).toBeFalsy();
    })

    it('set null for prop a', function() {
      expect(rectangle.a).toBeNull();
    })

  })

  describe('when set 0 for b', function() {
    it('should return false', function() {
      result = rectangle.setB(0);

      expect(result).toBeFalsy();
    })

    it('set null for prop b', function() {
      expect(rectangle.b).toBeNull();
    })
  })

  xit('should return 18 when we calculated perimeter', function() {
    expect(rectangle.getPerimeter()).toBe(18);
  })
})