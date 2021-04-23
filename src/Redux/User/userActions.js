import { FETCH_USER, FETCH_SUCCESS, FETCH_FAIL } from './userTypes';
import axios from 'axios';

export const featchUser = () => {
  return {
    type: FETCH_USER,
  };
};

export const featchUserSuccess = (users) => {
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

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(featchUser);
    axios
      .get('https://reqres.in/api/users?page=1')
      .then((res) => {
        debugger;
        const users = res.data.data;
        dispatch(featchUserSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(featchUserFail(errorMsg));
      });
  };
};
