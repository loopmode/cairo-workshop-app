import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuthenticated } from "../../hooks/useAuthenticated";
import { logout } from "../../model/api/auth";

function LogoutButton({ redirect = "" }) {
  const isAuthenticated = useAuthenticated();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    if (redirect) {
      history.push(redirect);
    }
  };
  if (!isAuthenticated) {
    return null;
  }
  return <button onClick={handleLogout}>Log out</button>;
}

export default LogoutButton;
