# JavaScript / ECMAScript Universal Development Workflow

Babel Webpack Starter KIT

[![Dependency Status](https://david-dm.org/bogwro/workflow-babel-webpack.svg)](https://david-dm.org/bogwro/workflow-babel-webpack)
[![devDependency Status](https://david-dm.org/bogwro/workflow-babel-webpack/dev-status.svg)](https://david-dm.org/bogwro/workflow-babel-webpack#info=devDependencies)

Overwhelmed by how much time you need to set-up new project before you focus on the _real_ implementation?

This project is to help you with that.

You can start with any type of project.

This project is framework agnostic.

Add any framework you like (if you need one).

ECMAScript 2015 / ES6 + ES7 Ready!


List of included components:

1. Set-Up
  * webpack + babel
  * editorconfig
  * ESLint
2. Gulp tasks
  * `webpack-dev-server`
  * `release`
3. Quality Assurance
  * Unit Tests
    * karma
    * mocha
    * chai
    * sinon
  * GIT Hooks
    * `pre-commit`


# Getting Started

## Dependencies

What you need to run this app:
* nvm (optional)
* `node`

## How to use it

### Method #1 - Clone it

> Use this method when you would like to only use this project to start your own one

Steps:
```
git clone --depth 1 --origin workflow https://github.com/bogwro/workflow-babel-webpack.git NAME_OF_YOUR_PROJECT
cd NAME_OF_YOUR_PROJECT
rm -rf ./.git
git init
git add .
git commit -m 'initial commit'
git remote add origin ssh://USER@HOST:YOUR_GIT_REPOSITORY
git fetch origin
git push -u origin master
```

### Method #2 - Fork it

> Use this method when you would like to build your own workflow based on this one.

> Use this method when you would like to contribute to this project.

Steps:

1. `fork` this repo
2. `clone` your fork


### Method #3 - Download it

> Use this method when you cannot use `git`

Download it from [GitHub](https://github.com/bogwro/workflow-babel-webpack/releases)

### Once you have it locally:

* `nvm install` (optional)
* `nvm use` (optional)
* `npm install` to install all dependencies
* `npm start` to start the dev server
* extend with your own logic
* enjoy!


## License

MIT
