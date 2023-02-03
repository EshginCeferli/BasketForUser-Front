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

  //product for id
  async function Getproduct() {
    await axios.get(`${url}/api/Product/Get?id=${id}`).then((res) => {
      setproduct(res.data);
    });
  }

  useEffect(() => {
    Getproduct();
  }, []);

  return (
    <div>
      <Navbar />
      <ProductDetailComp product={product} id={id}/>
      <Footer />
    </div>
  );
}

export default ProductDetail;
