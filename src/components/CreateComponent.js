import React, { Component } from "react";
import "./CreateComponent.css";
import { createPost, createdPost } from "../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class CreateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      tags: [],
      author: "",
      image: "",
      published: true
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("onsubmit is called");
    this.createBlog(
      this.state.title,
      this.state.author,
      this.state.description,
      this.state.tags,
      this.state.image,
      this.state.published
    );
  };
  createBlog = (title, author, description, tags, image, published) => {
    const newBlog = {
      title: title,
      author: author,
      description: description,
      tags: [tags],
      image: image,
      published: published
    };

    // call action
    this.props.createPost(newBlog);
    // clear the form after creating  the form
    this.props.createdPost();
    // Redirect the page to home page
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="position">Create</div>
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
                  onChange={this.onChange}
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
                  onChange={this.onChange}
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
                  onChange={this.onChange}
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
                  onChange={this.onChange}
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
                  onChange={this.onChange}
                />
              </div>
            </div>
            <input
              type="submit"
              value="PUBLISH"
              className="btn btn-info col-sm-10 text-center"
            />
          </form>
        </div>
        {/* <FooterComponent/>  */}
      </div>
    );
  }
}
CreateComponent.propTypes = {
  createPost: PropTypes.func.isRequired,
  createdPost: PropTypes.func.isRequired
};
export default connect(
  null,
  { createPost, createdPost }
)(CreateComponent);
