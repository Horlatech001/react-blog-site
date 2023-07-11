import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Blogs = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container blogs mt-5">
      <div className="row">
        <div className="col-lg-8 col-sm-12">
          <div className="blog-title">
            <h5>All Stories</h5>
            <hr />
          </div>
          {posts.map((post, index) => {
            return (
              <div className="stories" key={index}>
                <div className="story-content">
                  <h4 className="story-title fw-bold">
                    {post.title.stringValue}
                  </h4>
                  <p className="story-desc mt-3">
                    {post.description.stringValue.substring(0, 300)}...
                  </p>
                  <div className="read-more">
                    <button>
                      <Link
                        to={`/blog/${post.title.stringValue.replaceAll(
                          " ",
                          "-"
                        )}/`}
                        id="read_more"
                      >
                        Read More
                      </Link>
                    </button>
                  </div>
                  <span className="story-date">{post.date.stringValue}</span>
                </div>
                <div className="story-img">
                  <img
                    src={post.pic.mapValue.fields.src.stringValue}
                    alt="story-image"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="blog-title">
            <h5>Popular</h5>
            <hr />
          </div>
          {posts.map((post, index) => {
            return (
              <div className="popular-stories">
                <h4>
                  <Link
                    to={`/blog/${post.title.stringValue.replaceAll(" ", "-")}/`}
                    className="popular-story-title fw-bold"
                  >
                    {post.title.stringValue}
                  </Link>
                </h4>
                <span className="story-date">{post.date.stringValue}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
