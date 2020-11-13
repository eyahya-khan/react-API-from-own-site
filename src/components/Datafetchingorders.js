import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Display, Title } from "./Designstyled";
import "bootstrap/dist/css/bootstrap.css";

function Datafetchingorders() {
  const [posts, setPost] = useState([]);

  //   var axios = require(axios);
  var config = {
    method: "get",
    url: "https://shop24seven.eyahyakhan.se/wp-json/wc/v3/orders",
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
            Orders from Shop24Seven
          </h1>
        </header>
      </div>

      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody className="">
          {posts.map((post) => (
            <tr>
              {/* <div key={post.id}> */}
              <td>{post.id}</td>
              <td>{post.status}</td>
              <td>{post.total} kr</td>
              <td>{post.date_created}</td>
              {/* </div> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Datafetchingorders;
