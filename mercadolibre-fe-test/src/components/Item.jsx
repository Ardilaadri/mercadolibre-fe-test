import React from "react";
import "../assets/styles/components/Item.scss";
import PropTypes from "prop-types";

const Item = ({
  id,
  title,
  price,
  picture,
  city_name,
  condition,
  free_shipping,
}) => {
  return (
    <section className="products" key={title}>
      <div className="products-container">
        <div className="item">
          <div className="images">
            <img src={picture} alt={title} />
          </div>
          <div className="info">
            <div className="price">
              <h2>$ {price}</h2>
            </div>
            <div className="description">
              <p>{title}</p>
              <h3>{city_name}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  picture: PropTypes.string,
};

Item.defaultProps = {
  title: "",
  price: 0,
  picture: "",
};

export default Item;
