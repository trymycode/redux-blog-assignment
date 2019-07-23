import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { fetchPosts, createPost } from "../src/actions/postActions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateComponent from "./components/CreateComponent";
import HomeComponent from "./components/HomeComponent";
import DetailsComponent from "./components/DetailsComponent";
import PopularComponent from "./components/PopularComponent";

import FooterComponent from "./components/FooterComponent";
import PropTypes from "prop-types";
class App extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  //  createBlog = (title, author, description, tags, image, published) => {
  //   const newBlog = {
  //     title: title,
  //     author: author,
  //     description: description,
  //     tags: [tags],
  //     image: image,
  //     published: published
  //   };

  //   // call action
  //   this.props.createPost(newBlog);
  // };
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          component={() => <HomeComponent blogs={this.props.blogs} />}
        />
        <Route
          exact
          path="/create"
          component={CreateComponent}
        />
        <Route exact path="/details/:id" component={DetailsComponent} />
        <Route
          exact
          path="/popular"
          component={() => <PopularComponent blogs={this.props.blogs} />}
        />
        <FooterComponent />
      </Router>
    );
  }
}

App.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  blogs: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  blogs: state.postReducer.blogs
});
export default connect(
  mapStateToProps,
  { fetchPosts, createPost }
)(App);
