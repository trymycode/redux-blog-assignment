import React, { Component } from "react";
import BlogComponent from "./BlogComponent";
import "./HomeComponent.css";
import PageLoader from "./PageLoader";
class HomeComponent extends Component {
  constructor(props) {
    super(props);
}
sortByDate=()=> {
    return  [...this.props.blogs].sort((a, b) => {
    const genreA = new Date(a.created_at).getTime();
    const genreB = new Date(b.created_at).getTime();
    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison * -1;
  });
}
  render() {
    return (
      <div className="main-page">
        <div className="position">
          <h4>Home</h4>
        </div>
        <div className="container">
          <div className="blogs">
            {this.props.blogs.length !== 0 ? (
              <div className="row">
                {this.sortByDate().map(blog => (
                  <BlogComponent
                    data={{
                      key: blog.id,
                      id: blog.id,
                      author: blog.author,
                      date: blog.created_at,
                      image: blog.image,
                      title: blog.title,
                      likes: blog.likes,
                      description: blog.description,
                      tags: blog.tags
                    }}
                    key={blog.id}
                  />
                ))}
              </div>
            ) : (
              <div>
                <PageLoader />
              </div>
            )}
          </div>
        </div>
        {/* <FooterComponent /> */}
      </div>
    );
  }
}
export default HomeComponent;
