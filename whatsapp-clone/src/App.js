import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId" component={Chat}></Route>
            <Route path="/" component={Chat}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
