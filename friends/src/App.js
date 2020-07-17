import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute.js";
import Friends from "./components/Friends";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends</h1>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/friends">Friends</Link>
        </nav>
        <PrivateRoute exact path="/friends" component={Friends} />
        <Route path="/login" comonent={Login} />
        <Route component={Login} />
      </div>
    </Router>
  );
}

export default App;
