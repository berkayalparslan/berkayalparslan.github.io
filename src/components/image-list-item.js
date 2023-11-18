import * as React from "react";
import {Image} from "react-bootstrap";
import {imageListItem} from "./layout.module.css";

const ImageListItem = ({ imgSource, altText }) => {
  return (
    <div className={`${imageListItem}`}>
      <Image className={`img-fluid`} src={imgSource} alt={altText}/>
    </div>
  );
};

export default ImageListItem;
