import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function ProductUpdate() {
  const { id } = useParams();

  const url = "https://localhost:7110";

  const [product, setproduct] = useState([]);
  const [nameInput, setNameInput] = useState();
  const [countInput, setcountInput] = useState("");
  const [priceInput, setpriceInput] = useState("");
  const [imageInput, setImageInput] = useState("");

  //product for id
  async function Getproduct() {
    await axios.get(`${url}/api/Product/Get?id=${id}`).then((res) => {
      setproduct(res.data);
      setNameInput(res.data.name);
      setcountInput(res.data.count);
      setImageInput(res.data.image);
      setpriceInput(res.data.price);
      console.log(res);
    });
  }

  useEffect(() => {
    Getproduct();
  }, []);

  //sweet alert
  const Success = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const Reject = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  //product Update
  async function Updateproduct(e) {
    e.preventDefault();
    await axios
      .put(`${url}/api/Product/Update/${id}`, {
        id: id,
        name: nameInput,
        count: countInput,
        price: priceInput,
        image: imageInput,
        releaseYear: priceInput,
      })
      .then((res) => {
        if (res.data.status === "success" || res.status === 200) {
          Success.fire({
            icon: "success",
            title: "Product successfully updated",
          });
        }
      })
      .catch((err) => {
        if (err.response.status === 400 || err.response.data.status === 400) {
          Reject.fire({
            icon: "error",
            title: "Please add valid values",
          });
        } else {
          Reject.fire({
            icon: "error",
            title: "Something went wrong!",
          });
        }
      });
  }

  //Convert img to base
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () =>
        resolve(reader.result.replace("data:", "").replace(/^.+,/, ""));
      reader.onerror = (error) => reject(error);
    });
  }

  function base64Img(file) {
    var base64String = getBase64(file);
    base64String.then(function (result) {
      setImageInput(result);
    });
  }

  return (
    <div className="container">
      <Form onSubmit={(e) => Updateproduct(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Name"
            onChange={(e) => setNameInput(e.target.value)}
            defaultValue={nameInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDatetime">
          <Form.Label>Product count</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter product count"
            onChange={(e) => setcountInput(e.target.value)}
            defaultValue={countInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDatetime">
          <Form.Label>Product price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Product price"
            onChange={(e) => setpriceInput(e.target.value)}
            defaultValue={priceInput}
            step="0.001"
            min="0"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDatetime">
          <Form.Label>Product image</Form.Label>
          <img
            style={{
              width: "200px",
              height: "100px",
              borderRadius: "unset",
              display: "block",
            }}
            src={`data:image/jpeg;base64,${imageInput}`}
            alt=""
          />
          <Form.Control
            type="file"
            onChange={(e) => base64Img(e.target.files[0])}
            defaultValue={imageInput}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ProductUpdate;
