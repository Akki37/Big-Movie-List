const moviesInitialCount = [];

const moviesReducers = (state = moviesInitialCount, action) => {
  switch (action.type) {
    case 'ADD_MOVIE': {
      return [action.payload, ...state];
    }
    case 'REMOVE_MOVIE': {
      return state.filter((movie) => {
        return movie.imdbID !== action.payload;
      });
    }
    default: {
      return state;
    }
  }
};
export default moviesReducers;
