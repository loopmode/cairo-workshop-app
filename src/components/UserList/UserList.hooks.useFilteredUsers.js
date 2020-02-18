import React from "react";
import axios from "axios";
import { filterUsers } from "./utils";

export function useFilteredUsers(url) {
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
    setState(prevState => ({ ...prevState, filter, visibleUsers: filterUsers(prevState.allUsers, filter) }));
  }, []);

  React.useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return { ...state, applyFilter };
}
