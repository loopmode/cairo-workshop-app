import React from 'react'
import css from "./App.module.scss";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { ListPage } from "./pages/ListPage";
import { BoardPage } from "./pages/BoardPage";
import { LoginPage } from "./pages/LoginPage";

import { AuthProvider, authService } from "./model/context"; 

function App() {
  return (
    <Router>
      <AuthProvider value={authService}>
        <div className={css.App}>
          <nav>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/list">List</NavLink>
            <NavLink to="/board">Board</NavLink>
          </nav>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={LoginPage} />
          <Route path="/list" component={ListPage} />
          <Route path="/board" component={BoardPage} />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
