var Rectangle = function(a,b) {
  this.a = a;
  this.b = b;
}

Rectangle.prototype.getPerimeter = function() {
  return 2 * (this.a + this.b);
}

module.exports = Rectangle;