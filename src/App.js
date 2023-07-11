import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./Config";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const docRef = query(collection(db, "posts"));
      const docSnap = await getDocs(docRef);

      if (!docSnap.empty) {
        let d = docSnap.docs.map(
          (dc) => dc._document.data.value.mapValue.fields
        );

        // console.log("Document data:", d);
        setPosts(d);
      } else {
        // doc.data() will be undefined in this case
        // console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home posts={posts} getPosts={getPosts} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/blog/:postName/"
          element={<Blog posts={posts} getPosts={getPosts} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
