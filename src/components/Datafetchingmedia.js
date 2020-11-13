import React, { useState, useEffect } from "react";
import "./Img.css";

function Datafetchingmedia() {
  const [images, setImages] = useState([]);

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Basic Y2tfNjA4YTNjNjY5OTJjYzhlYjI4ZGZlMDcyOTgwYWE2OTQ3YzZhMDBlMDpjc19kNDVhOWQ4Mjc5OGFiMGY0YzUzYjBhZTNjMDM3N2Y5MjhjMTg2MzVj"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      "https://shop24seven.eyahyakhan.se/wp-json/wp/v2/media",
      requestOptions
    )
      .then((data) => data.json())
      .then((data) => setImages(data));
  });

  return (
    <div className="app">
      <header>
        <h1>Image Library</h1>
      </header>
      <div className="library">
        {images.map((image) => (
          <Image
            key={image.id}
            url={image.guid.rendered}
            author={image.title.rendered}
          />
        ))}
      </div>
    </div>
  );
}
function Image({ url, author }) {
  return (
    <a href={url}>
      <figure>
        <img src={url} alt={author} />
        <figcaption>{author}</figcaption>
      </figure>
    </a>
  );
}

export default Datafetchingmedia;
