import React, { useEffect } from "react";
import Header from "../component/Header";
import Blogs from "../pages/Blogs";

const Home = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Header />
      <Blogs posts={posts} getPosts={getPosts} />
    </>
  );
};

export default Home;
