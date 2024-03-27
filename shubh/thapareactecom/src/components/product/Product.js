import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../utils/FormatPrice";
import "../../styles/Product.css";

const Product = (curElem) => {
  const { _id, name, image, price, category } = curElem;
  return (
    <div className="productCard">
      <div className="productCardImg">
        <img src={image[0].url} alt={name} />
      </div>
      <div className="productCardBody">
        <h5>{category}</h5>
        <h3>{name}</h3>
        <p className="card-data--price">
          <FormatPrice price={price} />
        </p>
        <NavLink to={`/singleproduct/${_id}`}>
          <button className="productCardBtn">Select Options</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Product;
