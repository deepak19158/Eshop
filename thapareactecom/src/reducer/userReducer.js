const reducer = (state, action) => {
  switch (action.type) {
    case "ON_CHANGE_LOGIN":
      return {
        ...state,
        login: {
          ...state.login,
          [action.payload.name]: action.payload.value,
        },
      };

    case "ON_CHANGE_SIGNUP":
      return {
        ...state,
        signup: {
          ...state.signup,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
