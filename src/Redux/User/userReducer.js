const { FETCH_USER, FETCH_SUCCESS, FETCH_FAIL } = require('./userTypes');

const initialstate = {
  loading: false,
  users: [],
  error: '',
};

const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
    case FETCH_FAIL:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
