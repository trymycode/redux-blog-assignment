import React, { Component } from "react";
import BlogComponent from "./BlogComponent";
import "./PopularComponent.css";

class PopularComponent extends Component {
  compare = (a, b) => {
    const genreA = a.likes;
    const genreB = b.likes;

    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison * -1;
  };

  constructor(props) {
    super(props);
    this.state = {
      descendingBlogs: this.props.blogs.sort(this.compare)
    };
  }

  render() {
    return (
      <div className="main-page">
        <div className="position">Most Popular</div>

        <div className="container">
          <div className="blogs">
            {this.state.descendingBlogs.map(blog => (
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
      </div>
    );
  }
}
export default PopularComponent;
