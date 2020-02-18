import React from "react";

import { UserListFilterView, UserListView } from "./views";
import { useFilteredUsers } from "./UserList.hooks.useFilteredUsers";

export function UserList({ url = process.env.REACT_APP_USERS_API }) {
  const { filter, visibleUsers, applyFilter } = useFilteredUsers(url);
  return (
    <div>
      <UserListFilterView value={filter} onChange={applyFilter} />
      <UserListView users={visibleUsers} />
    </div>
  );
}
 