import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { Switch, Route } from "react-router-dom";
import index from "./components/pages/Home";
import user from "./components/pages/User";
import admin from "./components/pages/Admin";
import help from "./components/pages/Help";
import adminuserinfo from "./components/pages/AdminUserInfo";
import ErrorPage from "./components/pages/ErrorPage";
import login from "./components/pages/Login";
import Success from "./components/pages/Success";
import ChangeData from "./components/pages/ChangeData";
import Authentification from "./components/pages/Authentification";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={index} />{" "}
          <Route path="/success" component={Success} />
          <Route path="/admin" component={admin} />{" "}
          <Route path="/user" component={user} />{" "}
          <Route path="/login" component={login} />{" "}
          <Route path="/help" component={help} />{" "}
          <Route path="/adminuserinfo" component={adminuserinfo} />
          <Route path="/changedata" component={ChangeData} />
          <Route path="/authentification" component={Authentification} />
          <Route component={ErrorPage} />{" "}
        </Switch>{" "}
        <Footer />
      </div>
    );
  }
}

export default App;
