import React from "react";
import { User } from "./types";

interface UserListViewProps {
  users: User[];
}

export function UserListView({ users = [] }: UserListViewProps) {
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

interface UserListFilterViewProps {
  value: string;
  onChange: (value: string) => void;
}

export function UserListFilterView({ value, onChange }: UserListFilterViewProps) {
  return (
    <form>
      <input value={value} onChange={event => onChange(event.target.value)} />
    </form>
  );
}
