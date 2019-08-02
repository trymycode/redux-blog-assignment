import React, { Component } from "react";
import BlogComponent from "./BlogComponent";
import "./HomeComponent.css";
import PageLoader from "./PageLoader";
class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: this.props.blogs
    };
    this.handleChange = this.handleChange.bind(this);
  }

  sortByDate = () => {
    return [...this.state.filtered].sort((a, b) => {
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
  };
  // search bar method
  handleChange(e) {
    if (e.target.value != "") {
      let filteredNewArray = this.state.filtered.filter(
        blog =>
          blog.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1 ||
          blog.author.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1 
      );
      this.setState({
        filtered: filteredNewArray
      });
    } else {
      this.setState({
        filtered: [...this.props.blogs]
      });
    }
  }
  render() {
    return (
      <div className="main-page">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand title">Home</a>
          <form className="form-inline title">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search by title or author name"
              aria-label="Search"
              onChange={this.handleChange}
              style={{width:"300px", textAlign:"center"}}
            />
          </form>
        </nav>
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
