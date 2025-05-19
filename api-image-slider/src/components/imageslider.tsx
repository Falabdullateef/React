import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../App.css";
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

  function handleNext() {
    setCurrentSlide(currentslide === 0 ? images.length - 1 : currentslide - 1);
  }

  function handlePrevious() {
    setCurrentSlide(currentslide === 0 ? images.length - 1 : currentslide + 1);
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentslide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            ></img>
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      ></BsArrowRightCircleFill>
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentslide === index
                    ? "current-indictor"
                    : "current-indictor inactive-indictor"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default imageslider;
