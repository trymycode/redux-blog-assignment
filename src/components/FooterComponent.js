import React, { Component } from "react";
import "./FooterComponent.css";
import { Link } from "react-router-dom";
class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeHome: true,
      activeCreate: false,
      activePopular: false
    };
  }
  handleClick = e => {
    if(e.target.getAttribute('value') == 'activeHome'){
      this.setState({
        activeHome: ! this.state.activeHome,
        activeCreate: false,
        activePopular: false
      })
    } else if(e.target.getAttribute('value') == 'activeCreate'){
      this.setState({
        activeHome: false,
        activeCreate: ! this.state.activeCreate,
        activePopular: false
      })
    }
    else {
      this.setState({
        activeHome: false,
        activePopular: ! this.state.activePopular,
        activeCreate: false
        
      })
    }
  };
  render() {
    return (
      <div className="footer d-flex justify-content-around pt-2">
        <Link to="/">
          <label
            className="center ml-1"
            title="Home Page"
            onClick={this.handleClick}
          >
            <i
              className={
                this.state.activeHome
                  ? "fa fa-2x fa-home text-info"
                  : "fa fa-2x fa-home text-secondary"
              }
              value="activeHome"
            />
          </label>
        </Link>
        <Link to="/popular">
          <label className="center ml-1 popular" title="Popular Blogs Page">
            <i
              className={
                this.state.activePopular
                  ? "fa fa-2x fa-heart text-info"
                  : "fa fa-2x fa-heart text-secondary"
              }
              value="activePopular"
              onClick={this.handleClick}
            />
          </label>
        </Link>
        <Link to="/create">
          <label className="center ml-1" title="Create Blog Page">
            <i
              className={
                this.state.activeCreate
                  ? "fa fa-2x fa-plus text-info"
                  : "fa fa-2x fa-plus text-secondary"
              }
              value="activeCreate"
              onClick={this.handleClick}
            />
          </label>
        </Link>
      </div>
    );
  }
}
export default FooterComponent;
