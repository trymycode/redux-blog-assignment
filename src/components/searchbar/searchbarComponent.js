import React, { Component } from "react";

class SearchbarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBlogs: [],
      display: false,
      filtered: [],
      searchText: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    this.setState({
      currentBlogs: this.props.blogs
    });
  }

  handleClick(e) {
    let filteredNewArray = this.state.currentBlogs.filter(
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
    this.props.updateBlogsOnSearch(filteredNewArray);
  }

  handleChange = e => {
    console.log("e -", e.target.value);
    let filteredNewArray = this.props.blogs;
    if (e.target.value.length > 0) {
     filteredNewArray = this.state.currentBlogs.filter(
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
        filtered: this.state.currentBlogs,
        display: false
      });
    }
    this.props.updateBlogsOnSearch(filteredNewArray);
  };
  render() {
    return (
      <div>
        <input
          className="form-control mr-sm-2"
          placeholder="Search by title or author name"
          style={{ width: "300px", textAlign: "center" }}
          onChange={this.handleChange}
          value={this.state.searchText}
        />

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
              {this.state.filtered.map(blog => (
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
      </div>
    );
  }
}
export default SearchbarComponent;
