import React, { useEffect, useState } from "react";
import { BsArrowUpCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

interface Props {
  url: string;
  limit: string;
}

const imageslider = ({ url, limit }: Props) => {
  const [images, setImages] = useState<any[]>([]);
  const [currentslide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(geturl: string) {
    try {
      const response = await fetch(`${geturl}?page=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e: unknown) {
      setLoading(false);
      if (e instanceof Error) {
        setErrorMessage(e.message);
      } else {
        setErrorMessage("an unknown error occurred");
      }
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]); // Add dependency array
  console.log(images);

  if (loading) {
    return <div>Loading Data, Please Wait</div>;
  }
  if (errorMessage !== null) {
    return <div>Ran into an error. Error message: {errorMessage}</div>;
  }

  return (
    <div className="container">
      <BsArrowRightCircleFill className="arrow arrow-left" />
      {images && images.length
        ? images.map((imageItem) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className="current-image"
            ></img>
          ))
        : null}
      <BsArrowRightCircleFill className="arrow arrow-right"></BsArrowRightCircleFill>
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button key={index} className="current-indicator"></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default imageslider;
