import React, { Component } from "react";
import BlogComponent from "./BlogComponent";
import "./PopularComponent.css";
import PageLoader from './PageLoader';

function PopularComponent(props) {
  const compare = (a, b) => {
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
      let descendingBlogs  = null;
     descendingBlogs = props.blogs.sort(compare);
     
  return (
      <div>
         <div className="main-page">
         <nav className="navbar navbar-dark bg-dark text-light topNav">
            
            <a class="navbar-brand title">Popular Blogs</a>
            <form class="form-inline title">
              <input 
              class="form-control mr-sm-2" 
              type="search" 
              placeholder="Search by title or author name"
              aria-label="Search"
              // onChange={this.handleChange}
              style={{width:"300px", textAlign:"center"}}/>
            </form>
        
        </nav>
          <div className="container">
          { descendingBlogs!= null?  <div className="blogs">
              {descendingBlogs.map(blog => (
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
            </div>: <PageLoader/>}
           
          </div>
  
        </div>
      </div>
      
  )
}
export default PopularComponent;