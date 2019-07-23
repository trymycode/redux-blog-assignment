import React from "react";
import "./BlogComponent.css";
import { Link } from "react-router-dom";
export default class BlogComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: this.props.data.id,
      likes: this.props.data.likes
    };
  }

  cardStyle = { width: "18rem" };
  displayDetails = () => {
    console.log("displayDetails is called", this.state.selectedId);
  };

  addLike = () => {
    console.log("props", this.props.data.likes);
    let givenlikes = this.props.data.likes;
    let newLikes = givenlikes + 1;
    this.setState({ likes: newLikes });
  };

  render() {
    console.log("Blog id", this.props.data.id);
    let { title, description, author, image, date, tags } = this.props.data;
    let shortDescription = description.toString().substring(0, 50);
    return (
      <div className="card" style={this.cardStyle}>
        <Link to={"/details/" + this.props.data.id}>
          <img
            src={image}
            className="card-img-top"
            alt={title}
            onClick={this.displayDetails}
          />
        </Link>
        <div className="card-body">
          <Link to={"/details/" + this.props.data.id}>
            <h5 className="card-title">{title}</h5>
          </Link>
          {tags.map((tag, index) => (
            <span className="badge badge-warning" key={index}>
              {tag}
            </span>
          ))}
          <h6 className="text-muted">
            {author} | <small>{new Date(date).toLocaleString()}</small>
          </h6>
          <p className="card-text">{shortDescription}...</p>
          <button className="btn btn-primary" onClick={() => this.addLike()}>
            Like
          </button>
          <div className="float-right text-muted">
            <span className="heart">&#10084;</span> {this.state.likes} likes
          </div>
        </div>
      </div>
    );
  }
}
