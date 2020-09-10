import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./screen/Post";
import Signup from "./screen/Signup";
import Login from "./screen/Login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => {
  return (
    <div className="app">
      <NavigationBar />
      <Post />
    </div>
  );
};
export default App;
