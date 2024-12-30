import React from "react";
import { ProductsList } from "../helpers/ProductsList";
import Item from "../components/Item";
import "../styles/Products.css";

function Products() {
  return (
    <div className="products">
      <h1 className="Title">Our Products</h1>
      <div className="ProductsList">
        {ProductsList.map((menuItem, key) => {
          return (
            <Item
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
