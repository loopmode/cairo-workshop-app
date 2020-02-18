export function filterUsers(users, filter) {
  if (filter) {
    return users.filter(user => user.username.toLowerCase().match(filter.toLowerCase()));
  } else {
    return users;
  }
}
