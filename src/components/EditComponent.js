import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";
import { withRouter } from "react-router-dom";
class EditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogDetails: null
    };
  }

  componentDidMount() {
    const blogDetails = this.props.blogs.filter(
      blog => blog.id === Number(this.props.match.params.id)
    );
    this.setState({
      blogDetails: blogDetails[0]
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log("onsubmit is called");
    console.log("changed values are", this.state);
    this.editBlog(
      this.state.title,
      this.state.author,
      this.state.description,
      this.state.tags,
      this.state.image,
      this.state.published
    );
  };
  editBlog = (title, author, description, tags, image, published) => {
    const newBlog = {
      title: title,
      author: author,
      description: description,
      tags: [tags],
      id: Number(this.props.match.params.id),
      image: image,
      published: published
    };
    this.props.createPost(newBlog);
  };
  render() {
    console.log(this.state.blogDetails);
    if (this.state.blogDetails != null) {
      return (
        <div>
          {/* {this.state.blogDetails[0].author!==""?<div>{this.state.blogDetails[0].author}</div>:<div>""</div>} */}
          <div className="position">Edit</div>
          <div className="container">
            <form onSubmit={this.onSubmit} className="text-center">
              <div className="form-group row">
                <div className="col-sm-10">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control rounded border border-secondary"
                    name="title"
                    placeholder="Title"
                    // value={this.state.blogDetails.title}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <label>Description</label>
                  <textarea
                    className="form-control rounded border border-secondary"
                    rows="3"
                    name="description"
                    placeholder="Description"
                    // value={this.state.blogDetails.description}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <label>Category/Tags</label>
                  <input
                    type="text"
                    className="form-control rounded border border-secondary"
                    name="tags"
                    placeholder="Category/Tags"
                    // value={this.state.blogDetails.tags}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <label>Author</label>
                  <input
                    type="text"
                    className="form-control rounded border border-secondary"
                    name="author"
                    placeholder="Author"
                    // value={this.state.blogDetails.author}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <label>Image Url</label>
                  <input
                    type="text"
                    className="form-control rounded border border-secondary"
                    name="image"
                    placeholder="Image URL Only"
                    // value={this.state.blogDetails.image}
                    onChange={this.onChange}
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
      return <div>Loading...</div>;
    }
    // console.log("Recent state in edit component", this.state.blogDetails.author);
  }
}
EditComponent.propTypes = {
  createPost: PropTypes.func.isRequired
};
export default withRouter(
  connect(
    null,
    { createPost }
  )(EditComponent)
);
