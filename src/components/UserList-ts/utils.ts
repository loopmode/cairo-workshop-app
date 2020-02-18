import { User } from "./types";

export function filterUsers(users: User[], filter: string): User[] {
  if (filter) {
    return users.filter(user => user.username.toLowerCase().match(filter.toLowerCase()));
  } else {
    return users;
  }
}
