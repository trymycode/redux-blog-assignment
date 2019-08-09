import React, { Component } from "react";

class SearchbarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      filtered: [],
      display: false
    };
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
  handleChange(e) {
    console.log("e -", e.target.value);
    if (e.target.value.length > 0) {
      console.log(this.props.blogs);
      let filteredNewArray = this.props.blogs.filter(
        blog =>
          blog.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
            -1 ||
          blog.author.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
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

  render() {
    console.log(this.props.blogs);
    if (this.props.blogs.length !== 0) {
      return (
        <div>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search by title or author name"
            aria-label="Search"
            style={{ width: "300px", textAlign: "center" }}
            onChange={this.handleChange}
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
    } else {
      return <p>loading</p>;
    }
  }
}
export default SearchbarComponent;
