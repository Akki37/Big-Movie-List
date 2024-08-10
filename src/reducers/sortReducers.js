const sortOption = "DEFAULT";

const sortReducers = (state = sortOption, action) => {
  switch (action.type) {
    case "SORT_BY": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
export default sortReducers;
