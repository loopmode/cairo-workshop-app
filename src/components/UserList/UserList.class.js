import React from "react";
import axios from "axios";

import { UserListView, UserListFilterView } from "./views";
import { filterUsers } from "./utils";

export class UserList extends React.Component {
  state = {
    allUsers: [],
    visibleUsers: [],
    filter: ""
  };

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    return (
      <div>
        <UserListFilterView value={this.state.filter} onChange={this.applyFilter} />
        <UserListView users={this.state.visibleUsers} />
      </div>
    );
  }

  async loadUsers() {
    // note how in javascript you could easily make mistakes like:
    // - "const data =" forgotten destructuring brackets
    // - "const { data } = axios.get" forgotten await keyword
    const { data } = await axios.get(process.env.REACT_APP_USERS_API);
    this.setState({ allUsers: data, visibleUsers: data });
  }

  applyFilter = filter => {
    const visibleUsers = filterUsers(this.state.allUsers, filter);
    this.setState({ filter, visibleUsers });
  };
}
