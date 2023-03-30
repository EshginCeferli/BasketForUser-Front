import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Products from "../components/Products";
import "../assets/css/Product/product.css";
import BannerSlider from "../components/BannerSlider";
import Collections from "../components/Collections";
import Services from "../components/Services";
import Brands from "../components/Brands";

function Product() {
  const url = "https://localhost:7110";

  const [basketcount, setbasketcount] = useState(0);

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  async function getbasketcount() {
    await axios.get(`${url}/api/Basket/Getbasketcount`, config).then((res) => {
      setbasketcount(res.data);
    });
  }

  useEffect(() => {
    getbasketcount();
  }, []);

  return (
    <div>
      <Navbar basketcount={basketcount} />
      <BannerSlider />

      <Collections />
      <section id="product-area">
        <div className="container">
          <div className="row">
            <div className="header">
              <h3>All PRODUCTS :</h3>
            </div>

            <Products setbasketcount={setbasketcount} />
          </div>
        </div>
      </section>
      <Services />
      <Brands />
      <Footer />
    </div>
  );
}

export default Product;
