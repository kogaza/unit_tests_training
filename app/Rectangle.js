var Rectangle = function(a,b) {
  this.setA(a);
  this.setB(b);
}

Rectangle.prototype.getPerimeter = function() {
  return 2 * (this.a + this.b);
}

Rectangle.prototype.setA = function(value) {
  var a = parseFloat(value);

  if(a > 0) {
    this.a = a;
    return true;
  }

  this.a = null;
  return false;

}

Rectangle.prototype.setB = function(value) {
  var b = parseFloat(value);

  if(b > 0){
    this.b = b;
    return true;
  }

  this.b = null;
  return false;
}

module.exports = Rectangle;