import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import DetailScreen from "./DetailScreen"
import MoviesScreen from "./MoviesScreen"

const Navigator = () => (
  <Router>
    <div>
      <Route exact path="/" component={MoviesScreen} />
      <Route exact path="/detail" component={DetailScreen} />
    </div>
  </Router>
)
export default Navigator
