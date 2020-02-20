import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { TodoListPage } from "./pages/TodoListPage";
import { BoardPage } from "./pages/BoardPage";
import { LoginPage } from "./pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { CountersPage } from "./pages/CountersPage";

import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { HeaderLogin } from "./components/HeaderLogin/HeaderLogin";
import SwapiPage from "./pages/swapi/SwapiPage";
import * as SC from "./App.styled";

function App() {
  return (
    <Router>
      <SC.StyledApp>
        <header>
          <nav>
            <SC.StyledLink to="/" exact>
              Dashboard
            </SC.StyledLink>
            <SC.StyledLink to="/counters">Counters</SC.StyledLink>
            <SC.StyledLink to="/list">Todo list</SC.StyledLink>
            <SC.StyledLink to="/board">Board</SC.StyledLink>
            <SC.StyledLink to="/users">Users</SC.StyledLink>
            <SC.StyledLink to="/swapi" special>
              Start Wars API
            </SC.StyledLink>
            <span className="flex-1" />
            <HeaderLogin />
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component={LoginPage} />
            <Route path="/counters" component={CountersPage} />
            <ProtectedRoute path="/list" component={TodoListPage} />
            <ProtectedRoute path="/board" component={BoardPage} />
            <ProtectedRoute path="/users" component={UsersPage} />
            <ProtectedRoute path="/swapi" component={SwapiPage} />
          </Switch>
        </main>
      </SC.StyledApp>
    </Router>
  );
}

export default App;
