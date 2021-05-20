import { createStore , combineReducers } from "redux";
import moviesReducers from "../reducers/movieReducers";
import searchReducers from "../reducers/searchReducers"
import sortReducers from "../reducers/sortReducers"

function configStore() {
  const store = createStore(combineReducers({
      movies:moviesReducers,
      search:searchReducers,
      sorting:sortReducers
  }))
  return store
}

export default configStore
