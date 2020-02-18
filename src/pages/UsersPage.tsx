import React from "react";
import { UserList as FunctionalUserList } from "../components/UserList/UserList.func";
import { UserList as ClassBasedUserList } from "../components/UserList/UserList.class";

export class UsersPage extends React.Component {
  render() {
    return (
      <div className="flex">
        <div className="flex-1">
          <FunctionalUserList />
        </div>
        <div className="flex-1">
          <ClassBasedUserList />
        </div>
      </div>
    );
  }
}
