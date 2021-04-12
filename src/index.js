import "./style";

import { useEffect, useState } from "preact/hooks";

const Spinner = () => (
  <div class="lds-spinner">
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/images")
      .then((response) => response.json())
      .then((data) => {
        setImages(data.photos);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mainContainer">
      <h1>How are you feeling today?</h1>
	  <h2>By <a href="https://github.com/danielhochman">@danielhochman</a>. Powered by Flickr.</h2>
      {loading ? (
        <Spinner />
      ) : (
        <div className="itemContainer">
          {images.slice(0, 9).map((item, idx) => (
            <div className="item" key={item}>
              <img src={item} style={{ width: "100%" }} />
			  <div className="itemNumber">{idx + 1}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
