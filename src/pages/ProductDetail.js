import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import ProductDetailComp from "../components/ProductDetailComp";

function ProductDetail() {
  const { id } = useParams();

  const url = "https://localhost:7110";

  const [product, setproduct] = useState([]);

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

  //product for id
  async function Getproduct() {
    await axios.get(`${url}/api/Product/Get?id=${id}`).then((res) => {
      setproduct(res.data);
    });
  }

  useEffect(() => {
    Getproduct();
    getbasketcount();
  }, []);

  return (
    <div>
      <Navbar basketcount={basketcount}/>
      <ProductDetailComp product={product} id={id}/>
      <Footer />
    </div>
  );
}

export default ProductDetail;
