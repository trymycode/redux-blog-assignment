import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PageLoader from './PageLoader';
class DetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      blogDetails: [
        {
          author: "",
          tags: [""],
          likes: 0,
          published: false,
          description: "",
          image: "",
          date: "",
          id: 0
        }
      ]
    };
  }
  componentDidMount() {
    axios.get(`http://test.peppersquare.com/api/v1/article`).then(res => {
      this.setState({
        blogDetails: res.data.filter(
          // console.log(this.props.match.params.id),
          blog => blog.id === Number(this.props.match.params.id)
        )
      });
      // console.log(this.state.blogDetails[0]);
    });
  }

  render() {
    console.log(this.state.blogDetails[0])
    return (
      <div>
         {this.state.blogDetails[0].image != ""?<div className="container mb-4 row">
      <div className="mr-2">
        {" "}
        <img
          src={this.state.blogDetails[0].image}
          className="card-img-top"
          alt={this.state.blogDetails[0].title}
          style={{
            margin: "1rem",
            width: "75vw",
            height: "30vh"
          }}
        />
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.state.blogDetails[0].title}</h5>
            {this.state.blogDetails[0].tags.map((tag, index) => (
              <span className="badge badge-warning ml-2" key={index}>
                {tag}
              </span>
            ))}
            <h6 className="text-muted">
              {this.state.blogDetails[0].author} |{" "}
              <small>
                {new Date(
                  this.state.blogDetails[0].created_at
                ).toLocaleString()}
              </small>
            </h6>
            <p className="card-text">
              {this.state.blogDetails[0].description}
            </p>
            <div className="row">
              {/* /details/:id/edit */}
              <button className="btn btn-primary mr-2">Like</button>
              <Link to={`/details/${this.state.blogDetails[0].id}/edit`}>
                <button className="btn btn-primary">Edit</button>
              </Link>
            </div>
            <div className="float-right text-muted">
              <span className="heart">&#10084;</span>{" "}
              {this.state.blogDetails[0].likes} likes
            </div>
          </div>
        </div>
      </div>
    </div>:
    <div style={{backgroundColor: '#333', margin: 'auto 50%'}}><PageLoader/></div> }
      
      </div>
     
    );
  }
}
export default DetailsComponent;
