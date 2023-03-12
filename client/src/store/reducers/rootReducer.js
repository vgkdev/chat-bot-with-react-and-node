const initState = {
  user: false,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
