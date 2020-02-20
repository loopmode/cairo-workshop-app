import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { TodoListPage } from "./pages/TodoListPage";
import { BoardPage } from "./pages/BoardPage";
import { LoginPage } from "./pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { CountersPage } from "./pages/CountersPage";

import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { HeaderLogin } from "./components/HeaderLogin/HeaderLogin";
import SwapiPage from "./pages/swapi/SwapiPage";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
`;

const StyledApp = styled.div`
  > header,
  main {
    padding: 1em;
  }
  ${StyledLink}.active {
    background: yellow;
  }
`;

function App() {
  return (
    <Router>
      <StyledApp>
        <header>
          <nav>
            <StyledLink to="/" exact>
              Dashboard
            </StyledLink>
            <StyledLink to="/counters">Counters</StyledLink>
            <StyledLink to="/list">Todo list</StyledLink>
            <StyledLink to="/board">Board</StyledLink>
            <StyledLink to="/users">Users</StyledLink>
            <StyledLink to="/swapi">Start Wars API</StyledLink>
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
      </StyledApp>
    </Router>
  );
}

export default App;
