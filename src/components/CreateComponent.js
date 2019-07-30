import React, { Component } from "react";
import "./CreateComponent.css";
import { createPost, createdPost } from "../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Field, Form, actions } from "react-redux-form";

class CreateComponent extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   title: "",
    //   description: "",
    //   tags: [],
    //   author: "",
    //   image: "",
    //   published: true
    // };
  }
  // onChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };
  handleSubmit(user) {
    // let { dispatch } = this.props;
    
    let obj = {...user,tags:[user.tags], published:true};

    console.log("handleSubmit method is called", obj);
    //  call action
    this.props.createPost(obj);
     // clear the form after creating  the form
    // this.props.createdPost();
    // Redirect the page to home page
    this.props.history.push("/");
}
  render() {
    let { user } = this.props;

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
                  className="form-control rounded border border-secondary"
                  placeholder="Title"
                  value={this.props.user.title}
                />
              </Field>
            </div>
            <div className="form-group row">
            <Field model="user.description" className="col-sm-10">
                <textarea
                  className="form-control rounded border border-secondary"
                  rows="3"
                  name="description"
                  placeholder="Description"
                  value={this.props.user.description}
                />
            </Field>
            </div>
            <div className="form-group row">
            <Field model="user.tags" className="col-sm-10">
                <input
                  type="text"
                  className="form-control rounded border border-secondary"
                  name="tags"
                  placeholder="Category/Tags"
                  value={this.props.user.tags}
                />
             </Field>
            </div>
            <div className="form-group row">
            <Field model="user.author" className="col-sm-10">
                <input
                  type="text"
                  className="form-control rounded border border-secondary"
                  name="author"
                  placeholder="Author"
                  value={this.props.user.author}
                />
              </Field>
            </div>
            <div className="form-group row">
            <Field model="user.image" className="col-sm-10">
                <input
                  type="text"
                  className="form-control rounded border border-secondary"
                  name="image"
                  placeholder="Image URL Only"
                  value={this.props.user.image}
                />
            </Field>
            </div>
            <button
              type="submit"
              className="btn btn-info col-sm-10 text-center"
            >SUBMIT
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
