import React from "react";
import axios from "axios";

import { UserListView, UserListFilterView } from "./views";
import { filterUsers } from "./utils";

export function UserList({ url = process.env.REACT_APP_USERS_API }) {
  const [state, setState] = React.useState({
    allUsers: [],
    visibleUsers: [],
    filter: ""
  });

  const loadUsers = React.useCallback(async () => {
    const { data } = await axios.get(url);
    setState(prevState => ({
      ...prevState,
      allUsers: data,
      visibleUsers: data
    }));
  }, [url]);

  const applyFilter = React.useCallback(filter => {
    setState(prevState => ({
      // note how in javascript we could easily forget prevState
      ...prevState,
      filter,
      visibleUsers: filterUsers(prevState.allUsers, filter)
    }));
  }, []);

  React.useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <div>
      <UserListFilterView value={state.filter} onChange={applyFilter} />
      <UserListView users={state.visibleUsers} />
    </div>
  );
}
