# React and Native devstack

## Idea

- Sharing common logic, work with API, Redux, epics, themes, configs and translations between mobile and web apps
- Separate components, screens and own configs

## Installation and run

Prerequisites:

- NodeJS: https://nodejs.org
- Expo: https://docs.expo.io/versions/v30.0.0/introduction/installation
- Yarn: https://yarnpkg.com/lang/en/docs/install/#mac-stable
- Device: Expo client app / own mobile device / simulator

Clone repository and install deps:

```
git clone https://github.com/jvaclavik/react-and-native
cd react-and-native
yarn
```

## Run

### Web app

Start web server:

```
yarn web
```

Open in browser: http://localhost:3000/

### Mobile app

Start expo server:

```
expo start
```

Scan QR code or click on `Run on iOS simulator`

## Technologies

- React
- Expo
- React Native
- Redux
- Redux Observables
- Flow
- React router for React, React navigation for React Native
- Axios

## TODO

- [x] Create basic devstack and code structure
- [x] Add support for web
- [x] Add configs for Eslint, Prettier, etc.
- [x] Add yarn scripts for web and mobile apps
- [x] Share Redux between the apps
- [x] Add epic and logger middleware for Redux
- [x] Choose navigation routers
- [x] ~~Unify routers with react navigation~~
- [x] Demonstrative use of redux, epic and API call
- [x] Create basic tests
- [ ] Unify web & mobile translations (https://github.com/i18next/react-i18next/tree/master/example/reactnative-expo)
- [ ] Create general styles for `a, body`, etc.
- [ ] Unify basic screens and components
- [ ] Add Redux-persists
