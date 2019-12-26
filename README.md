# NPM Project Template

Basic NPM project template

## Pre-setup

- Install NVM - `https://github.com/nvm-sh/nvm#installation-and-update`
  - Or with Homebrew: `https://formulae.brew.sh/formula/nvm`
- Install Node via NVM - `nvm install node`

## Configuration Steps

- `npm init`
- `npm install webpack webpack-cli --save-dev`
- Create html page to serve - `touch index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>NPM Template</title>
  </head>
  <body>
    <h1>NPM Project Template</h1>
    <script src="./src/index.js"></script>
  </body>
</html>
```

- Create `index.js` file: `touch ./src/index.js`

```js
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
```

- Create Webpack configuration - `touch webpack.config.js`

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve('./', 'dist')
  }
};
```

- Install test framework - `npm install jest --save-dev`

  - Create Jest configuration file: `jest --init`, may require: `npm install jest -g`
    - Select `jsdom` for test environment
    - Select `none` for frontend framework
  - See [Jest](https://jestjs.io/docs/en/getting-started.html) for additional options
  - Create test directory and test file - `mkdir ./__tests__ && touch ./__tests__/index.test.js`

    - Populate test file:

    ```js
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
    ```

- Install Linter - `npm install eslint --save-dev`

  - Create Configuration file: `touch .eslintrc.json`
  - See [ESlint](https://eslint.org/docs/user-guide/configuring) for additional options

  ```js
  {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
    }
  }
  ```

  - Create ignore file - `touch .eslintignore`

    - Add dependencies and build output

    ```text
    dist
    node_modules
    ```

- Install Prettier - `npm install prettier --save-dev`

  - Create Prettier configuration file - `touch .prettierrc.json`
  - See [Prettier](https://prettier.io/docs/en/options.html) for additional options

  ```js
  {
    "singleQuote": true
  }
  ```

  - Create Prettier ignore file - `touch .prettierignore`

  ```text
  dist
  ```

- Install Pretty-Quick - `npm install pretty-quick --save-dev`
- Add scripts to `package.json`

```js
{
...
  "scripts": {
    "build": "webpack --mode development",
    "eslint": "npx eslint \"./**/*.js\"",
    "prettier": "npx prettier --write \"./**/*.js\"",
    "start": "webpack-dev-server",
    "test": "jest --passWithNoTests"
  }
...
}
```

- Install Husky - `npm install husky --save-dev`

  - Configure husky hooks in `package.json`

  ```js
  ...
  "husky": {
    "hooks": {
      "pre-commit": "npm run test && npm run eslint && pretty-quick --staged"
    }
  },
  ...
  ```

## Running

- Build Code - `npm run build`
- Run Development Server - `npm run start`
- Lint Project - `npm run lint`
- Prettify Code - `npm run prettier`

## Resources

- [ESlint](https://eslint.org)
- [Husky](https://github.com/typicode/husky)
- [Jest](https://jestjs.io)
- [NPM](https://www.npmjs.com)
- [Prettier](https://prettier.io)
- [Pretty-Quick](https://github.com/azz/pretty-quick)
- [Webpack](https://webpack.js.org)
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server#readme)
