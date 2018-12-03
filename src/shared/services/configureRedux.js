// @flow
import { createStore, applyMiddleware, combineReducers } from "redux"
import { combineEpics, createEpicMiddleware } from "redux-observable"
import { createLogger } from "redux-logger"

// reducers & epics
import { reducer as moviesReducer, getMoviesEpic } from "../redux/MoviesRedux"

const epics = [getMoviesEpic]

const reducers = {
  movies: moviesReducer,
}

export default () => {
  const logger = createLogger({ collapsed: true })
  const middleware = []

  const epicMiddleware = createEpicMiddleware({
    dependencies: {},
  })
  middleware.push(epicMiddleware)
  middleware.push(logger)

  const store = createStore(
    combineReducers(reducers),
    {},
    applyMiddleware(...middleware),
  )
  epicMiddleware.run(combineEpics(...epics))

  return store
}
