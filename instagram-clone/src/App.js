import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./screen/Post";
import Signup from "./screen/Signup";
import Login from "./screen/Login";
import { useUserStatus } from "./hook";
import Loading from "./screen/Loading";

function App() {
  const user = useUserStatus();

  return (
    <div className="app">
      {!user ? (
        <Router>
          <Loading isLoading>
            <Login />
          </Loading>
        </Router>
      ) : (
        <Router>
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
        </Router>
      )}
    </div>
  );
}
const Home = () => {
  return (
    <div className="home">
      <NavigationBar />
      <Post />
    </div>
  );
};
export default App;
