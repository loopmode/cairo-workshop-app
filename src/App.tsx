import React from "react";
import css from "./App.module.scss";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { ListPage } from "./pages/ListPage";
import { BoardPage } from "./pages/BoardPage";
import { LoginPage } from "./pages/LoginPage";

import { AuthProvider, authService, useAuthContext } from "./model/context";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { LoginForm } from "./components/LoginForm/LoginForm";

function App() {
  const { logout } = useAuthContext();
  return (
    <Router>
      <AuthProvider value={authService}>
        <div className={css.App}>
          <nav>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/list">List</NavLink>
            <NavLink to="/board">Board</NavLink>
            <span className="flex-1" />
            <LoginForm />
            <button onClick={() => logout()}>Log out</button>
          </nav>
          <main>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component={LoginPage} />
            <ProtectedRoute path="/list" component={ListPage} />
            <Route path="/board" component={BoardPage} />
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
