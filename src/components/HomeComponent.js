import React, { Component } from "react";
import BlogComponent from "./BlogComponent";
import "./HomeComponent.css";

class HomeComponent extends Component {
  render() {
    return (
      <div className="main-page">
        <div className="position">
          <h4>Home</h4>
        </div>

        <div className="container">
          <div className="blogs">
            {this.props.blogs.map(blog => (
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
        </div>
        {/* <FooterComponent /> */}
      </div>
    );
  }
}
export default HomeComponent;
