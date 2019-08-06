import React, { Component } from "react";

function NotFoundComponent() {
  return (
    <div className="w-100 h-100 text-center text-warning">
      <h1 className="display-4 mt-4">
        <span style={{ fontSize: "4rem"}}>404 ERROR! </span>
        <br />
        PAGE NOT FOUND!
      </h1>
      <img src="https://img.icons8.com/ios/2x/sad.png"/>
    </div>
  );
}
export default NotFoundComponent;
