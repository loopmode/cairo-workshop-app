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
import { CountersPage } from "./pages/CountersPage";

import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { HeaderLogin } from "./components/HeaderLogin/HeaderLogin";

function App() {
  return (
    <Router>
      <div className={css.App}>
        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/counters">Counters</NavLink>
          <NavLink to="/list">List</NavLink>
          <NavLink to="/board">Board</NavLink>
          <NavLink to="/users">Users</NavLink>
          <span className="flex-1" />
          <HeaderLogin />
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component={LoginPage} />
            <Route path="/counters" component={CountersPage} />
            <ProtectedRoute path="/list" component={ListPage} />
            <ProtectedRoute path="/board" component={BoardPage} />
            <Route path="/users" component={UsersPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
