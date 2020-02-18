import React from "react";
import axios from "axios";
import { filterUsers } from "./utils";
import { User } from "./types";
import { UserListFilterView, UserListView } from "./views";

type State = {
  allUsers: User[];
  visibleUsers: User[];
  filter: string;
};

// for duplicate type annotation of state see https://stackoverflow.com/questions/51201315/why-does-null-react-component-state-initialization-get-never-type

export class UserList extends React.Component<{}, State> {
  state: State = {
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
    // note how typescript helps avoid mistakes like:
    // - "const data =" forgotten destructuring brackets
    // - "const { data } = axios.get" forgotten await keyword
    const { data } = await axios.get(process.env.REACT_APP_USERS_API);
    this.setState({ allUsers: data, visibleUsers: data });
  }

  applyFilter = (filter: string) => {
    const visibleUsers = filterUsers(this.state.allUsers, filter);
    this.setState({ filter, visibleUsers });
  };
}
