import { from, of } from "rxjs"
import { filter, switchMap, flatMap, catchError } from "rxjs/operators"

// api
import { getMovies } from "../services/api"

export const initialState = {
  loading: false,
  error: null,
  items: [],
}

export const onGetMoviesRequest = () => ({
  type: "ON_GET_MOVIES_REQUEST",
})
export const onGetMoviesSuccess = movies => ({
  type: "ON_GET_MOVIES_SUCCESS",
  movies,
})
export const onGetMoviesFail = error => ({
  type: "ON_GET_MOVIES_FAIL",
  error,
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_GET_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
      }
    case "ON_GET_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.movies.results,
      }
    case "ON_GET_MOVIES_FAIL":
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}

export const getMoviesEpic = action$ =>
  action$.pipe(
    filter(action => action.type === "ON_GET_MOVIES_REQUEST"),
    switchMap(() =>
      from(getMovies()).pipe(
        flatMap(response => from([onGetMoviesSuccess(response.data)])),
        catchError(e => of(onGetMoviesFail(e))),
      ),
    ),
  )
