import React, { useContext } from "react";
import LatestBlogs from "../miniComponents/LatestBlogs";
import { Context } from "../../main";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { mode, blogs } = useContext(Context);

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <LatestBlogs blogs={blogs} title={"Blogs"} />
      {blogs && blogs.length > 0 && (
        blogs.map((element) => (
          <Link to={`/blog/${element._id}`} className="card" key={element._id}>
            <div className="blog-info-card">
              <img src={element.mainImage.url} alt="blog" className="blog-square-img" />
              <div className="blog-info">
                <h2>{element.title}</h2>
                <p>{element.description}</p>
                <div className="additional-info">
                  <p>Published on: {new Date(element.publishedDate).toLocaleDateString()}</p>
                  <p>Category: {element.category}</p>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </article>
  );
};

export default Blogs;
