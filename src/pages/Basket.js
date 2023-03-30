import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BasketProducts from "../components/BasketProducts";
import "../assets/css/Basket/basket.css";

function Basket() {

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
  
      <Navbar basketcount={basketcount}/>
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
      <BasketProducts setbasketcount={setbasketcount} />
      <Footer />    
     
    </div>
  );
}

export default Basket;
