import React from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Products from "../components/Products";
import "../assets/css/Product/product.css"

function Product() {
  return (
    <div>
      <Navbar />
      <section
        id="header-area"
        style={{ backgroundImage: 'url("/images/bg-01.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="head">
              <h1>Products</h1>
            </div>
          </div>
        </div>
      </section>
      
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
      <Footer/>
    </div>
  );
}

export default Product;
