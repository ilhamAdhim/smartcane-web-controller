import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Profile">
            <Profile />
          </Route>
          {/* <Route path="/Login">
            <Login />
          </Route> */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
