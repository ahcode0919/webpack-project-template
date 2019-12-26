document.body.appendChild(component());

function component() {
  const element = document.createElement('div');

  element.innerHTML = helloWorld();
  return element;
}

function helloWorld() {
  return 'Hello World!';
}

module.exports = {
  component,
  helloWorld
};
