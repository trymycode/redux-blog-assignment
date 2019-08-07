import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editPost } from "../actions/postActions";
import { withRouter } from "react-router-dom";
import axios from "axios";
import NotFoundComponent from "./NotFoundComponent";
class EditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NotFound: false,
      title: null,
      author: null,
      description: null,
      tags: null,
      image: null,
      published: true
    };
  }
  componentDidMount() {
    const id = Number(this.props.match.params.id);
    console.log("id", id);
    let filteredBlog = null;
    if (!id) {
     this.setState({
       NotFound: true
     })
  }else{
    this.props.blogs.forEach(function(blog) {
      if (blog.id === id) {
        filteredBlog = blog;
      } else {

      }
    });
  
  if (filteredBlog != null) {
    this.setState({
      NotFound: false,
      title: filteredBlog.title,
      author: filteredBlog.author,
      description: filteredBlog.description,
      tags: filteredBlog.tags,
      image: filteredBlog.image
    });
  }
  }
  }
  onSubmit = e => {
    e.preventDefault();
    console.log("onsubmit is called");
    console.log("changed values are", this.state);
    console.log("this.state.tags", this.state.tags);
    let tags = null;
    if (Array.isArray(this.state.tags)) {
      tags = this.state.tags;
    } else {
      tags = this.state.tags.split(",");
    }
    this.editBlog(
      this.state.title,
      this.state.author,
      this.state.description,
      tags,
      this.state.image,
      this.state.published
    );
  };
  editBlog = (title, author, description, tags, image) => {
    const editBlog = {
      title,
      author,
      description,
      tags,
      id: Number(this.props.match.params.id),
      image,
      published: true
    };
    this.props.editPost(editBlog);
    console.log("edit component");
    axios
      .get("http://test.peppersquare.com/api/v1/article")
      .then(
        this.props.history.push(
          `/details/${Number(this.props.match.params.id)}`
        )
      );
  };
  onFieldChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    console.log(this.state.title);
    console.log("this.state.notfound",this.state.NotFound )
    if (!this.state.NotFound) {
      return (
        <div>
          <div className="position">Edit</div>
          <div className="container">
            <form onSubmit={this.onSubmit} className="text-center">
              <div className="form-group row">
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control rounded border border-secondary"
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.onFieldChange}
                    maxLength="40"
                    title="Must be within 40 characters"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <textarea
                    className="form-control rounded border border-secondary"
                    rows="3"
                    name="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.onFieldChange}
                    maxLength="500"
                    title="Must be within 500 characters"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control rounded border border-secondary"
                    name="tags"
                    placeholder="Category/Tags"
                    value={this.state.tags}
                    onChange={this.onFieldChange}
                    maxLength="30"
                    title="Must be within 40 characters"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control rounded border border-secondary"
                    name="author"
                    placeholder="Author"
                    value={this.state.author}
                    onChange={this.onFieldChange}
                    maxLength="30"
                    title="Must be within 30 characters"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control rounded border border-secondary"
                    name="image"
                    placeholder="Image URL Only"
                    value={this.state.image}
                    onChange={this.onFieldChange}
                    title="Must be an Image URL"
                    required
                  />
                </div>
              </div>
              <input
                type="submit"
                value="CHANGE"
                className="btn btn-info col-sm-10 text-center"
              />
            </form>
          </div>
        </div>
      );
     
    } else {
      return (
        <div>
          <NotFoundComponent />
        </div>
      );
    }
  }
}
EditComponent.propTypes = {
  editPost: PropTypes.func.isRequired
};
export default withRouter(
  connect(
    null,
    { editPost }
  )(EditComponent)
);
