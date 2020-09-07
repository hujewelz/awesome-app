import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Post from "./screen/Post";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Post />
    </div>
  );
}

export default App;
