import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BasketProducts from "../components/BasketProducts";
import "../assets/css/Basket/basket.css";

function Basket() {
  return (
    <div>
      <Navbar />
      <section
        id="header-area"
        style={{ backgroundImage: 'url("/images/heart-image.webp")' }}
      >
        <div className="container">
          <div className="row">
            <div className="head">
              <h1>Products</h1>
            </div>
          </div>
        </div>
      </section>
      <BasketProducts />
      <Footer />
    </div>
  );
}

export default Basket;
