import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sobi } from "./Designstyled";

function Datafetchingproducts() {
  const [posts, setPost] = useState([]);

  //   var axios = require(axios);
  var config = {
    method: "get",
    url: "https://shop24seven.eyahyakhan.se/wp-json/wc/v3/products",
    headers: {
      Authorization:
        "Basic Y2tfNjA4YTNjNjY5OTJjYzhlYjI4ZGZlMDcyOTgwYWE2OTQ3YzZhMDBlMDpjc19kNDVhOWQ4Mjc5OGFiMGY0YzUzYjBhZTNjMDM3N2Y5MjhjMTg2MzVj",
    },
  };

  // fetching all data data from API
  useEffect(() => {
    axios(config)
      .then((res) => {
        // console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <>
      <div className="app">
        <header>
          <h1>Products from Shop24Seven</h1>
        </header>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Products Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr>
              {post.images.map((sub) => (
                <td>
                  <Sobi src={sub.src}>{/* <img src={sub.src} /> */}</Sobi>
                </td>
              ))}
              {/* <td>{post.id}</td> */}
              <td>
                <a href="#">{post.name}</a>
              </td>

              {post.categories.map((sub) => (
                <td>
                  <a href="#">{sub.name}</a>
                </td>
              ))}

              <td>{post.price} kr</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Datafetchingproducts;
