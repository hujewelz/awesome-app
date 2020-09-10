import React from "react";
import "./Suggestion.css";
import { Avatar } from "@material-ui/core";

function Suggestion() {
  return (
    <div className="suggestion">
      <h2>Suggestions For You</h2>
      <div className="sug-users">
        <SuggestionUser />
        <SuggestionUser />
      </div>
      {/*<div className="footer">
        <p>About Help Press API Jobs Privacy Terms</p>
  </div>*/}
    </div>
  );
}

const SuggestionUser = () => {
  return (
    <div className="suggestion-user">
      <Avatar />
      <div className="sug-username">
        <h3>FullName</h3>
        <p>Polular</p>
      </div>
      <button className="link-button">Follow</button>
    </div>
  );
};

export default Suggestion;
