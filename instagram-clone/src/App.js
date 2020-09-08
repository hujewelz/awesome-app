import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./screen/Post";
import Signup from "./screen/Signup";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/signup">
            <Signup />
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
    <>
      <NavigationBar />
      <Post />
    </>
  );
};
export default App;
