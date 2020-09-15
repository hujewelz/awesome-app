import React from "react";
import "./Loading.css";

function Loading({ isLoading, children }) {
  return isLoading ? (
    <div className="loading-container">
      <img
        alt=""
        src="https://img.icons8.com/ios/50/000000/instagram-new.png"
      />
    </div>
  ) : (
    <>{children}</>
  );
}

export default Loading;
