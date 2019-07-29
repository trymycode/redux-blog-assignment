import React, { Component } from "react";
import "./FooterComponent.css";
import { Link } from "react-router-dom";
class FooterComponent extends Component {
  render() {
    return (
       <div className="footer d-flex justify-content-around pt-2">
        <Link to="/">
          <label className="center ml-1"  title="Home Page">
            <i className="fa fa-2x fa-home text-secondary" />
          </label>
        </Link>
        <Link to="/popular" >
          <label className="center ml-1 popular" title="Popular Blogs Page">
            <i className="fa fa-2x fa-heart text-secondary"/>
          </label>
        </Link>
        <Link to="/create">
          <label className="center ml-1" title="Create Blog Page">
            <i className="fa fa-2x fa-plus text-secondary" />
          </label>
        </Link>
      </div>
     
    );
  }
}
export default FooterComponent;
