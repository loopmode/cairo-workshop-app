import React from "react";
import css from "./App.module.scss";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { ListPage } from "./pages/ListPage";
import { BoardPage } from "./pages/BoardPage";
import { LoginPage } from "./pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";

import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { useAuthenticated } from "./hooks/useAuthenticated";
import { logout } from "./model/api/auth";
import { useDispatch } from "react-redux";

const PleaseLogIn = () => (
  <div>
    <h3>You need to be logged in!</h3>
  </div>
);

function App() {
  const isAuthenticated = useAuthenticated();
  const dispatch = useDispatch()
  return (
    <Router>
      <div className={css.App}>
        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/list">List</NavLink>
          <NavLink to="/board">Board</NavLink>
          <NavLink to="/users">Users</NavLink>
          <span className="flex-1" />
          {!isAuthenticated && <LoginForm />}
          {isAuthenticated && <button onClick={() => dispatch(logout())}>Log out</button>}
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component={LoginPage} />
            <ProtectedRoute
              path="/list"
              component={ListPage}
              fallback={<PleaseLogIn />}
            />
            <ProtectedRoute path="/board" component={BoardPage} />
            <Route path="/users" component={UsersPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
