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

function App() {
  const user = useUserStatus();

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
          <Switch>
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
  const history = useHistory();
  const signOut = () => {
    auth
      .signOut()
      .then(() => history.replace("/login"))
      .catch((error) => prompt(error));
  };
  return (
    <div className="home">
      <NavigationBar signOut={signOut} />
      <Post />
    </div>
  );
};
export default App;
