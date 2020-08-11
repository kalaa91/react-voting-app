This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project goal

Is to practice reactjs, through building a voiting app that uses [pollsapi voting api](http://docs.pollsapi.apiary.io/)

### Todo:

- [x] List of questions page.
- [x] Question detail page.
- [x] Create a new question page.
- [x] Add support for Service worker.
- [x] To use Redux as a state management.
- [x] Use React Hooks, lazy and Suspense APIs.
- [x] Explore [styled components](https://styled-components.com/) as a CSS-in-js library.
- [ ] Configure unit, Integration and E2E tests.

## Run the app 
1. to install project dependencies
 ```sh
npm install
 ```

2. to build the project
 ```sh
 npm run build
 ```

3. to start the server, then navigate to `localhost:3000`
```sh
npm run start
```

## Run Through Docker

1. to build the image 
```sh
docker build . -t react-docker
```

2. to run, then navigate to `localhost:8000`
```sh
docker run -p 8000:80 react-docker
```

# Project structure

```
build/                      web app build
src/                        project source code
|  components/              styled components that can be reused
|  app/                     App bootstrap for redux and other core services
|  features/                Main components and pages that represent app features
|  hooks/                   Reusable hooks used within the app
|  api/                     Contains reusable services and models used to handle http requests
|  state/                   State folder containing boilerplate code for redux, thunks, initial state and selectors
|  app.js                   Main Component for the web app
|  index.css                web app addition css styles
|  index.html               html entry point
|  index.js                 app Entry point
+- ...                      app configuration files
```

# Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Task            | Description                            |
| --------------- | -------------------------------------- |
| `npm run build` | build app and export to `build` folder |
| `npm run start` | Run server on `http://localhost:3000/` |
| `npm run test`  | run tests                              |

# Secondary tasks

Husky is used as a pre-commit hook to lint changes according to prettier rules after every commit.
