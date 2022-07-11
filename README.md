## React Testing Demo App

This repo is developed for showing how to setup all necessary modern tooling and good practices for development and bootstrap tests with React (both Jest and Cypress)

## Available Scripts

In the project directory, you can run:

- `yarn install`: run this after cloning project to install all necessary dependencies

- `yarn postinstall`: run this to setup pre-commit

- `yarn start`: run this to start an app

- `yarn test`: run this to run all tests

- `yarn start:msw`: run this to start app in mocking mode

- `yarn cy:open`: run this to open Cypress in UI mode

- `yarn cy:run`: run this to open Cypress in headless mode

- `npm run build`:

## Extra steps

Need to setup relative path resolving using `tspath` as tsconfig baseUrl is only helpful on compile time, in order to resolve after it is transpiled into JS it cannot resolve TS configs. So please install `tspath`

- https://www.npmjs.com/package/tspath

### Issues encountered while developing:

- regarding adding custom commands into cypress
  - https://stackoverflow.com/questions/69927966/argument-type-string-is-not-assignable-to-parameter-type-keyof-chainable-in-c
  - https://github.com/cypress-io/cypress/pull/17496
  - https://typescript-eslint.io/rules/no-namespace
- [React re-render issue with StrictMode](https://github.com/reduxjs/react-redux/issues/1634)

### Useful resources:

- [How to write component tests with Cypress](https://www.youtube.com/watch?v=vJ0rDP4CG-w)
- [Opening Keynote: Applitools 🤝 Cypress: State of the Union](https://www.youtube.com/watch?v=9IoTirME09E)
- [companion testing library that simulates user interactions](https://testing-library.com/docs/user-event/intro)
- [avoid nesting when you are testing](https://kentcdodds.com/blog/avoid-nesting-when-youre-testing)
- [how-to-setup-redux-with-redux-toolkit](https://www.softkraft.co/how-to-setup-redux-with-redux-toolkit)
