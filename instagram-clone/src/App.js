import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./screen/Post";
import Signup from "./screen/Signup";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Post />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
