import React from "react";
import Navbar from "../components/layout/Navbar";
import Products from "../components/Products";

function Product() {
  return (
    <div>
      <Navbar />
      <section id="product-area">
        <div className="container">
          <div className="row">
            <div className="header">
              <h3>All PRODUCTS :</h3>
            </div>

            <Products/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
