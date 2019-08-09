import React, { Component } from "react";
import BlogComponent from "../blogs/BlogComponent";
import "./PopularComponent.css";
import PageLoader from "../pageLoader/PageLoader";
import SearchbarComponent from "../searchbar/SearchbarComponent";

class PopularComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descendingBlogs: []
    };
  }

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

  componentWillMount() {
    this.setState({
      descendingBlogs: this.props.blogs.sort(this.compare)
    });
  }
  // getting searched blog details from searchbar component
  updateBlogsOnSearch=(searchedBlogs)=>{
      console.log("searchedBlogs", searchedBlogs);
      this.setState({
        descendingBlogs: searchedBlogs
      })
  }
  render() {
    return (
      <div>
        <div className="main-page">
          <nav className="navbar navbar-dark bg-dark text-light topNav">
            <a className="navbar-brand title">Popular Blogs</a>
            <SearchbarComponent blogs={this.state.descendingBlogs} updateBlogsOnSearch={this.updateBlogsOnSearch}/>
          </nav>
          <div className="container">
            {this.state.descendingBlogs != null ? (
              <div className="blogs">
                {this.state.descendingBlogs.map(blog => (
                  <BlogComponent
                    data={{
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
              <PageLoader />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PopularComponent;
