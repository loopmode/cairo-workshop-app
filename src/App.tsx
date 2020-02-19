import React from "react";
import css from "./App.module.scss";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { TodoListPage } from "./pages/TodoListPage";
import { BoardPage } from "./pages/BoardPage";
import { LoginPage } from "./pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { CountersPage } from "./pages/CountersPage";

import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { HeaderLogin } from "./components/HeaderLogin/HeaderLogin";
import SwapiPage from "./pages/swapi/SwapiPage";

function App() {
  return (
    <Router>
      <div className={css.App}>
        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/counters">Counters</NavLink>
          <NavLink to="/list">Todo list</NavLink>
          <NavLink to="/board">Board</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/swapi">Start Wars API</NavLink>
          <span className="flex-1" />
          <HeaderLogin />
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component={LoginPage} />
            <Route path="/counters" component={CountersPage} />
            <ProtectedRoute path="/list" component={TodoListPage} />
            <ProtectedRoute path="/board" component={BoardPage} />
            <Route path="/users" component={UsersPage} />
            <Route path="/swapi" component={SwapiPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
