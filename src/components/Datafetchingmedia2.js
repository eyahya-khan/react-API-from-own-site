import React, { useState, useEffect } from "react";
import "./Img.css";

function Datafetchingmedia() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=8")
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
            url={image.download_url}
            author={image.author}
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
