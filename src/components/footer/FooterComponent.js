import React, { Component } from "react";
import "./FooterComponent.css";
import { NavLink } from "react-router-dom";
class FooterComponent extends Component {
  render() {
    return (
      <div className="footer d-flex justify-content-around pt-2">
        <NavLink
          to="/"
          exact
          style={{ color: "#333" }}
          activeStyle={{ color: "#21b8b5" }}
        >
          <label className="center ml-1" title="Home Page">
            <i className="fa fa-2x fa-home" />
          </label>
        </NavLink>

        <NavLink
          to="/popular"
          exact
          style={{ color: "#333" }}
          activeStyle={{ color: "#db7995" }}
        >
          <label className="center ml-1 popular" title="Popular Blogs Page">
            <i className="fa fa-2x fa-heart" />
          </label>
        </NavLink>
        <NavLink
          to="/create"
          exact
          style={{ color: "#333" }}
          activeStyle={{ color: "#21b8b5" }}
        >
          <label className="center ml-1" title="Create Blog Page">
            <i className="fa fa-2x fa-plus" />
          </label>
        </NavLink>
      </div>
    );
  }
}
export default FooterComponent;
