import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Post from "./screen/Post";
import Signup from "./screen/Signup";
import Login from "./screen/Login";
// import { useSateValue } from "./StateProvider";
// import Loading from "./screen/Loading";
import { useUserStatus } from "./hook";
import { auth } from "./firebase";
import Profile from "./screen/Profile";

function App() {
  const user = useUserStatus();
  const history = useHistory();

  const signOut = () => {
    auth
      .signOut()
      .then(() => history.replace("/login"))
      .catch((error) => prompt(error));
  };

  return (
    <div className="app">
      {!user ? (
        <Router>
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      ) : (
        <Router>
          <NavigationBar user={user} signOut={signOut} />
          <div className="main">
            <Switch>
              <Route path="/profile">
                <Profile user={user} />
              </Route>
              <Route path="/">
                <Post user={user} />
              </Route>
            </Switch>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
