import React, { Component } from "react";
import BlogComponent from "../blogs/BlogComponent";
import "./HomeComponent.css";
import PageLoader from "../pageLoader/PageLoader";
import PaginationComponent from "../pagination/PaginationComponent";
class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      filtered: this.props.blogs,
      display: false,
      inputValue: "",
      BlogPerPage: 8,
      setCurrentPage: 1
    
    };
    this.handleChange = this.handleChange.bind(this);
  }

  sortByDate = currentBlogs => {
    return [...currentBlogs].sort((a, b) => {
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
    console.log("e -", e.target.value);
    if (e.target.value.length > 0) {
      let filteredNewArray = this.state.filtered.filter(
        blog =>
          blog.title
            .toLowerCase()
            .indexOf(this.state.searchText.toLowerCase()) !== -1 ||
          blog.author
            .toLowerCase()
            .indexOf(this.state.searchText.toLowerCase()) !== -1
      );
      this.setState({
        searchText: e.target.value,
        filtered: filteredNewArray,
        display: true
      });
    } else {
      this.setState({
        searchText: "",
        filtered: this.props.blogs,
        display: false
      });
    }
  }

  handleClick = e => {
    let filteredNewArray = this.state.filtered.filter(
      blog =>
        blog.title.toLowerCase().indexOf(e.target.innerText.toLowerCase()) !==
          -1 ||
        blog.author.toLowerCase().indexOf(e.target.innerText.toLowerCase()) !==
          -1
    );
    this.setState({
      searchText: e.target.innerText,
      filtered: filteredNewArray,
      display: false
    });
  };
  // search bar method finished

  // pagination method
  paginate = number => {
    this.setState({
      setCurrentPage: number,
    });
  };
  // finished pagination 
  
  render() {
    // get current post according to the pagination
    const indexOfLastBlog = this.state.setCurrentPage * this.state.BlogPerPage;
    const indexOfFirstBlog = indexOfLastBlog - this.state.BlogPerPage;

    const currentBlogs = this.state.filtered.slice(
      indexOfFirstBlog,
      indexOfLastBlog
    );
    console.log(
      "indexOfFirstBlog",
      indexOfFirstBlog,
      "indexOfLastBlog",
      indexOfLastBlog,
      "currentBlogs",
      currentBlogs
    );
    return (
      <div className="main-page">
        <nav className="navbar navbar-dark bg-dark text-light topNav">
          <a className="navbar-brand title">Home</a>
          {/* search bar */}
          <input
            className="form-control mr-sm-2"
            placeholder="Search by title or author name"
            value={this.state.searchText}
            onChange={this.handleChange}
            style={{ width: "300px" }}
          />
        </nav>
        {this.state.display ? (
          <div>
            <ul
              className="list-group"
              style={{
                position: "fixed",
                top: "10%",
                left: "75%",
                zIndex: "1000",
                maxHeight: "300px",
                overflow: "auto"
              }}
            >
              {currentBlogs.map(blog => (
                <li
                  className="list-group-item list-group-item-light list-group-item-action"
                  onClick={this.handleClick}
                  key={blog.id}
                  value={blog.title}
                  type="button"
                >
                  {blog.title}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="container z-1">
          <div className="blogs">
            {currentBlogs.length !== 0 ? (
              <div>
                <div className="row">
                  {this.sortByDate(currentBlogs).map(blog => (
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
               <div className="">
               <PaginationComponent
                  blogsPerPage={this.state.BlogPerPage}
                  totalBlogs={this.state.filtered.length}
                  paginate={this.paginate}
                />
               </div>
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
