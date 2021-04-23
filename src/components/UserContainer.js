import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../Redux';
function UserContainer({ fetchUsers, userData }) {
  useEffect(() => {
    fetchUsers();
    //eslint-disable-next-line
  }, []);
  return userData.loading ? (
    <h3>loading....</h3>
  ) : userData.error ? (
    <h4>{userData.error}</h4>
  ) : (
    <div>
      <h1>User list</h1>
      {userData &&
        userData.map((users) => <p key={users.id}>{users.first_name}</p>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
