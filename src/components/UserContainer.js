import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../Redux';
function UserContainer({ fetchUsers, userData, error }) {
  console.log('props From state 05', userData);
  useEffect(() => {
    fetchUsers();
    //eslint-disable-next-line
  }, []);
  return userData.loading ? (
    <h3>loading....</h3>
  ) : error ? (
    <h4>{error}</h4>
  ) : (
    <div>
      <h1>User list</h1>
      {userData &&
        userData.map((users) => <p key={users.id}>{users.first_name}</p>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('State From user container 04');
  return {
    userData: state.users,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log('State From dispatch container 04');
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
