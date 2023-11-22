import * as React from "react";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { imageListItem } from "./layout.module.css";

const imageSize = "48vh";

const ImageListItem = ({ imgSource, altText }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseIn = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div
      className={`${imageListItem}`}
      onMouseOver={handleMouseIn}
      onMouseOut={handleMouseOut}
    >
      <Image
        width={imageSize}
        height={imageSize}
        src={imgSource}
        alt={altText}
      />
      <p
        className={`text-nowrap text-decoration-underline ${
          !isHovering ? "invisible " : ""
        }`}
      >
        {altText}
      </p>
    </div>
  );
};

export default ImageListItem;
