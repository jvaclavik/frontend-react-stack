// @flow
import "rxjs"
import React from "react"
import { Provider } from "react-redux"
import "./styles.css"
// initialization
// import configureLocalization from "../../shared/services/configureLocalization"
import initStore from "../../shared/services/configureRedux"

import RootContainer from "./RootContainer"

// configureLocalization()

const store = initStore()

export default class App extends React.PureComponent<null> {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}
