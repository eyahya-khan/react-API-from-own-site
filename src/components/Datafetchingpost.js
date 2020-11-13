import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Display, Title } from "./Designstyled";
import "bootstrap/dist/css/bootstrap.css";

function Datafetchingpost() {
  const [posts, setPost] = useState([]);

  //   var axios = require(axios);
  var config = {
    method: "get",
    url: "https://shop24seven.eyahyakhan.se/wp-json/wp/v2/posts",
    headers: {
      Authorization:
        "Basic Y2tfNjA4YTNjNjY5OTJjYzhlYjI4ZGZlMDcyOTgwYWE2OTQ3YzZhMDBlMDpjc19kNDVhOWQ4Mjc5OGFiMGY0YzUzYjBhZTNjMDM3N2Y5MjhjMTg2MzVj",
    },
  };

  // fetching all data data from API
  useEffect(() => {
    axios(config)
      //   .get("https://jsonplaceholder.typicode.com/posts")
      // .get("https://shop24seven.eyahyakhan.se/wp-json/wp/v2/posts")
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [config]);

  return (
    <>
      <div className="app">
        <header>
          <h1>
            {/* {userone} {usertwo} */}
            Posts from Shop24Seven
          </h1>
        </header>
      </div>

      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>Blog Title</th>
            <th>Blog Content</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr>
              <td>{post.title.rendered}</td>
              <td>{post.content.rendered}</td>
              <td>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Datafetchingpost;
