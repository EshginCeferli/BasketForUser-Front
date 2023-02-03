import React from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Products from "../components/Products";
import "../assets/css/Product/product.css"
import BannerSlider from "../components/BannerSlider";
import Collections from "../components/Collections";
import Services from "../components/Services";
import Brands from "../components/Brands";

function Product() {
  return (
    <div>
      <Navbar />
      <BannerSlider/>
      {/* <section
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
       */}
       <Collections/>
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
      <Services/>
      <Brands/>
      <Footer/>
    </div>
  );
}

export default Product;
