var helloWorld = require('./../app/helloWorld.js');

describe('helloWorld', function() {
  it('should return Hello World when was invoke', function() {
    expect(helloWorld()).toBe('Hello World');
  })
})