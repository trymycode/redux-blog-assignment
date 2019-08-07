import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PageLoader from "./PageLoader";
import "./DetailsComponent.css";
import  NotFoundComponent  from './NotFoundComponent';
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
          published: true,
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
    console.log(this.state.blogDetails );
    if(this.state.blogDetails.length > 0){
      return (
      <div className='text-center, m-auto'>
        <div className="position">Details</div>
          {this.state.blogDetails[0].image !== "" || this.state.blogDetails[0].title !== ""? (
            <div className="container row" style={{marginBottom:'10%'}}>
           
              <img
              src={this.state.blogDetails[0].image}
              className="card-img-top"
              alt={this.state.blogDetails[0].title}
              style={{
                width: '50vw',
                height: '50vh',
                marginLeft: '30%',
                marginBottom: '1rem'
              }}
              />
                <div className="card" style={{marginLeft: '15%', width: '100%', marginBottom:'10%'}}>
                  <div className="card-body">
                    <h5 className="card-title">
                      {this.state.blogDetails[0].title}
                    </h5>
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
          ) : (
            <div style={{ backgroundColor: "#333", margin: "auto 50%" }}>
              <PageLoader />
            </div>
          )}
        </div>
      )}
    else{
      return (
        <div><NotFoundComponent /></div>
      )
    }
  }
}
export default DetailsComponent;
