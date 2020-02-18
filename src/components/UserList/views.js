import React from "react";
import PropTypes from "prop-types";

UserListView.propTypes = {
  users: PropTypes.array
};
export function UserListView({ users = [] }) {
  return (
    <table>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

UserListFilterView.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};
export function UserListFilterView({ value, onChange }) {
  return (
    <form>
      <input value={value} onChange={event => onChange(event.target.value)} />
    </form>
  );
}
