import React, { Component } from "react";
import "./CreateComponent.css";
import { createPost, createdPost } from "../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Field, Form } from "react-redux-form";

class CreateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touched: {
        title: false,
        description: false,
        author: false,
        tags: false,
        image: false
      }
    };
  }

  handleSubmit(user) {
    let obj = { ...user, tags: [user.tags], published: true };
    // console.log("handleSubmit method is called", obj);

    //  call action
    this.props.createPost(obj);
    alert("created post");
    // Redirect the page to home page
    this.props.history.push("/");
  }

  handleBlur = field => evt => {
    this.setState({ touched: { ...this.state.touched, [field]: true } });
  };

  render() {
    function validate(title, description, author, tags, image) {
      // true means invalid, so our conditions got reversed
      return {
        title: title.length === 0,
        description: description.length === 0,
        author: author.length === 0,
        tags: tags.length === 0,
        image: image.length === 0
      };
    }
    const { title, description, author, tags, image } = this.props.user;
    const errors = validate(title, description, author, tags, image);
    const isEnabled = !Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    };

    // let { user } = this.props;
    // console.log(this.props.user);
    return (
      <div>
        <div className="position">Create</div>
        <div className="container">
          <Form
            model="user"
            onSubmit={user => this.handleSubmit(user)}
            className="text-center"
          >
            <div className="form-group row">
              <Field model="user.title" className="col-sm-10">
                <input
                  type="text"
                  value={this.props.user.title}
                  placeholder="Title"
                  alt="Title"
                  className={
                    shouldMarkError("title")
                      ? "form-control rounded error"
                      : "form-control rounded border border-secondary"
                  }
                  onBlur={this.handleBlur("title")}
                  maxLength="40"
                  title="Must be within 40 characters"
                  required
                />
                {shouldMarkError("title") ? (
                  <div className="alert alert-danger mt-1" role="alert">
                    Please provide a title
                  </div>
                ) : null}
              </Field>
            </div>
            <div className="form-group row">
              <Field model="user.description" className="col-sm-10">
                <textarea
                  rows="3"
                  className={
                    shouldMarkError("description")
                      ? "form-control rounded error"
                      : "form-control rounded border border-secondary"
                  }
                  onBlur={this.handleBlur("description")}
                  name="description"
                  placeholder="Description"
                  value={this.props.user.description}
                  required
                  maxLength="500"
                  title="Must be within 500 characters"
                />
                {shouldMarkError("description") ? (
                  <div className="alert alert-danger mt-1" role="alert">
                    Please provide a description
                  </div>
                ) : null}
              </Field>
            </div>
            <div className="form-group row">
              <Field model="user.tags" className="col-sm-10">
                <input
                  type="text"
                  className={
                    shouldMarkError("tags")
                      ? "form-control rounded error"
                      : "form-control rounded border border-secondary"
                  }
                  onBlur={this.handleBlur("tags")}
                  name="tags"
                  placeholder="Category/Tags"
                  value={this.props.user.tags}
                  required
                  maxLength="40"
                  title="Must be within 40 characters"
                />
                {shouldMarkError("tags") ? (
                  <div className="alert alert-danger mt-1" role="alert">
                    Please provide tag/tags
                  </div>
                ) : null}
              </Field>
            </div>
            <div className="form-group row">
              <Field model="user.author" className="col-sm-10">
                <input
                  type="text"
                  className={
                    shouldMarkError("author")
                      ? "form-control rounded error"
                      : "form-control rounded border border-secondary"
                  }
                  onBlur={this.handleBlur("author")}
                  name="author"
                  placeholder="Author"
                  value={this.props.user.author}
                  required
                  maxLength="30"
                  title="Must be within 30 characters"
                />
                {shouldMarkError("author") ? (
                  <div className="alert alert-danger mt-1" role="alert">
                    Please provide author name
                  </div>
                ) : null}
              </Field>
            </div>
            <div className="form-group row">
              <Field model="user.image" className="col-sm-10">
                <input
                  className={
                    shouldMarkError("image")
                      ? "form-control rounded error"
                      : "form-control rounded border border-secondary"
                  }
                  onBlur={this.handleBlur("image")}
                  name="image"
                  placeholder="Image URL Only"
                  value={this.props.user.image}
                  required
                />
                {shouldMarkError("image") ? (
                  <div className="alert alert-danger mt-1" role="alert">
                    Please provide a image Url
                  </div>
                ) : null}
              </Field>
            </div>
            <button
              type="submit"
              className="btn btn-info col-sm-10 text-center"
              disabled={!isEnabled}
              title={
                isEnabled
                  ? "Ready to submit"
                  : "Please fill up the form fields to enable this button"
              }
            >
              SUBMIT
            </button>
          </Form>
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
function mapStateToProps(state) {
  return { user: state.user };
}
export default connect(
  mapStateToProps,
  { createPost, createdPost }
)(CreateComponent);
