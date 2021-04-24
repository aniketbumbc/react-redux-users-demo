import {
  FETCH_USER,
  FETCH_SUCCESS,
  FETCH_FAIL,
  DISPLAY_NAME,
} from './userTypes';
import axios from 'axios';

export const featchUser = () => {
  return {
    type: FETCH_USER,
  };
};

export const featchUserSuccess = (users) => {
  console.log('Fetch Success Action Creator : 02');

  return {
    type: FETCH_SUCCESS,
    payload: users,
  };
};

export const featchUserFail = (error) => {
  return {
    type: FETCH_FAIL,
    payload: error,
  };
};

export const displayName = () => {
  return {
    type: DISPLAY_NAME,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(featchUser);
    axios
      .get('https://reqres.in/api/users?page=1')
      .then((res) => {
        console.log('Fetch Users API : 01');
        const users = res.data.data;
        dispatch(featchUserSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(featchUserFail(errorMsg));
      });
  };
};
