import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { fetchPosts } from "../src/actions/postActions";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CreateComponent from "./components/create/CreateComponent";
import HomeComponent from "./components/home/HomeComponent";
import DetailsComponent from "./components/blogDetails/DetailsComponent";
import PopularComponent from "./components/popularBlogs/PopularComponent";
import EditComponent from "./components/editBlog/EditComponent";
import NotFoundComponent from "./components/404page/NotFoundComponent";

import FooterComponent from "./components/footer/FooterComponent";
import PropTypes from "prop-types";

class App extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <Router>
        <Switch>
        <Route
          exact
          path="/"
          component={() => <HomeComponent blogs={this.props.blogs} />}
        />
        
        <Route exact path="/create" component={CreateComponent} />
        <Route
          exact
          path="/popular"
          component={() => <PopularComponent blogs={this.props.blogs} />}
        />
        <Route exact path="/details/:id" component={DetailsComponent} />
        <Route exact path="/details/:id/edit" component={()=><EditComponent blogs={this.props.blogs}/>} />
        <Route path='*' exact={true} component={NotFoundComponent} />
        </Switch>
       
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
  { fetchPosts }
)(App);
