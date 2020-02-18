import React from "react";

import { UserListView, UserListFilterView } from "./views";
import { useFilteredUsers } from "./UserList.hooks.useFilteredUsers";

export function UserList() {
  const { filter, visibleUsers, applyFilter } = useFilteredUsers(process.env.REACT_APP_USERS_API);
  return (
    <div>
      <UserListFilterView value={filter} onChange={applyFilter} />
      <UserListView users={visibleUsers} />
    </div>
  );
}
