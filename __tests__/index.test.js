const { component, helloWorld } = require('../src/index');

describe('Index.js', () => {
  describe('component', () => {
    it('should create div', () => {
      const element = component();
      expect(element.innerHTML).toEqual(helloWorld());
    });
  });

  describe('helloWorld', () => {
    it('should output "Hello World!"', () => {
      expect(helloWorld()).toEqual('Hello World!');
    });
  });
});
