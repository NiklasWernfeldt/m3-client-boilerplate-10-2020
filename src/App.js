import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Start from "./pages/Start/Start";
import Dashboard from "./pages/Dashboard/Dashboad";
import Profile from "./pages/Profile/Profile";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/start" component={Start} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;
