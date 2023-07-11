import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PP from "../images/avatar2.jpg";
import BlogPic from "../images/intro.jpg";

const Blog = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  const path = useParams();

  const [postName, setPostName] = useState("");
  const [matchedPost, setMatchedPost] = useState({});

  useEffect(() => {
    setPostName(path.postName.replaceAll("-", " "));

    let responsePost = {};

    posts.find((element) => {
      if (
        element.title.stringValue.trim().toLowerCase() ===
        postName.trim().toLowerCase()
      ) {
        responsePost = element;
        console.log(responsePost);
      }
    });
    setMatchedPost(responsePost);
  }, [path, postName, posts]);

  return (
    <div className="container single-blog">
      <div className="row">
        <div className="col-lg-6 blog-left">
          <h4>STORIES</h4>
          <div className="title mt-3">
            <h2>
              {postName}
            </h2>
          </div>
          <div className="author-detail mt-5">
            <img src={PP} alt="profile-pic" className="profile-pic" />
            <div>
              <h4>John Doe</h4>
              <span>{matchedPost.date?.stringValue}</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 blog-right">
          <img src={matchedPost.pic?.mapValue?.fields?.src?.stringValue} alt="blog-pic" className="blog-pic" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-9 mt-5 full-content">
            <p className="line-break">
              {matchedPost.description?.stringValue}
            </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
