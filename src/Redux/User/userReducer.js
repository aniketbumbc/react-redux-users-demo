const {
  FETCH_USER,
  FETCH_SUCCESS,
  FETCH_FAIL,
  DISPLAY_NAME,
} = require('./userTypes');

const initialstate = {
  loading: false,
  users: [],
  error: '',
};

const userReducer = (state = initialstate, action) => {
  console.log('Fetch_User Reducer : 03');
  switch (action.type) {
    case FETCH_USER:
      console.log('Fetch_User Reducer : 03');
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
      debugger;
      return {
        loading: true,
        users: [],
        error: action.payload,
      };
    case DISPLAY_NAME:
      debugger;
      return {
        loading: false,
        users: ['Buuny', 'Kapd', 'Gaja', 'Nakali'],
        error: '',
      };
    default:
      return state;
  }
};

export default userReducer;
