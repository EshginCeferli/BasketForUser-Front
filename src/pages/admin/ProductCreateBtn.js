import React, { useState, useEffect } from "react";

import { TextField } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";

function ProductCreateBtn(props) {
  const url = "https://localhost:7110";

  const [nameInput, setNameInput] = useState();
  const [priceInput, setPriceInput] = useState();
  const [countInput, setcountInput] = useState();
  const [imageInput, setImageInput] = useState();

  //sweet alert
  const Success = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
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
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  //Create Product
  async function CreateProduct() {
    await axios
      .post(`${url}/api/Product/Create`, {
        name: nameInput,
        price: priceInput,
        count: countInput,
        image: imageInput,
      })
      .then((res) => {
        if (res.data.status === "success" || res.status === 200) {
          Success.fire({
            icon: "success",
            title: "Product successfully created",
          });
        }
      })
      .catch((err) => {
        if (err.response.status === 400 || err.response.data.status === 400) {
          Reject.fire({
            icon: "error",
            title: "Please fill the blank",
          });
        } else {
          Reject.fire({
            icon: "error",
            title: "Something went wrong!",
          });
        }
      });
    props.GetProducts();
  }

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
    <div className="create-btn-area">
      <div className="my-3 me-3">
        <button
          type="button"
          className="btn btn-outline-success create-btn"
          data-bs-toggle="modal"
          data-bs-target="#create-Product"
        >
          +Add
        </button>
      </div>

      <div
        className="modal fade"
        id="create-Product"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close Product-button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body container addition">
              <h4 className="addition-title">Please fill the blank</h4>
              <div className="row">
                <TextField
                  onChange={(e) => setNameInput(e.target.value)}
                  value={nameInput}
                  className="student-input"
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </div>
              <div className="row mt-2">
                <TextField
                  onChange={(e) => setPriceInput(e.target.value)}
                  value={priceInput}
                  className="student-input"
                  id="outlined-basic"
                  type="number"
                  label="Price"
                  variant="outlined"
                  step="0.1"
                  min="0"
                 
                />
              </div>

              <div className="row mt-2">
                <TextField
                  onChange={(e) => setcountInput(e.target.value)}
                  value={countInput}
                  className="student-input"
                  type="number"
                  id="outlined-basic"
                  label="Count"
                  variant="outlined"
                />
              </div>
              <div className="row mt-2">
                <img
                  style={{
                    width: "150px",
                    height: "75px",
                    borderRadius: "unset",
                  }}
                  src={`data:image/jpeg;base64,${imageInput}`}
                  alt="Product image"
                />
                <input
                  type="file"
                  onChange={(e) => base64Img(e.target.files[0])}
                ></input>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={() => CreateProduct()}
                data-bs-dismiss="modal"
                className="btn btn-outline-primary student-button"
              >
                Save
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-outline-warning student-button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCreateBtn;
