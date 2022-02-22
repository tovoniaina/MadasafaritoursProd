import React, { Fragment } from "react";

import blue from "../images/img/blue.png";
import black from "../images/img/black.png";
import green from "../images/img/green.png";
import red from "../images/img/red.png";
import orange from "../images/img/orange.png";


const ProductImages = () => {
  return (
    <Fragment>
      <img src={blue} alt="blue shoe" className="shoe show" color="blue" />
      <img src={red} alt="red shoe" className="shoe" color="red" />
      <img src={green} alt="green shoe" className="shoe" color="green" />
      <img src={orange} alt="orange shoe" className="shoe" color="orange" />
      <img src={black} alt="black shoe" className="shoe " color="black" />
    </Fragment>
  );
};

export default ProductImages;
