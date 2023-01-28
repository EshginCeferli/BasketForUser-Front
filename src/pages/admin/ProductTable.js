import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import ProductCreateBtn from "./ProductCreateBtn";
import FormControl from "@mui/material/FormControl";
function ProductTable() {
  let count = 0;

  const url = "https://localhost:7110";

  const [products, setProducts] = useState([]);

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

  //Get Products from Api
  async function GetProducts() {
    await axios.get(`${url}/api/Product/GetAll`).then((res) => {
      setProducts(res.data);
      // if(res.data.status === "success" || res.status === 200){
      //   Success.fire({
      //     icon: "success",
      //     title: "Welcome, you can manage products here!",
      //   });          
      // }   
      console.log(res);
    });
  }

  useEffect(() => {
    GetProducts();
    
  }, []);

  //Delete Movie
  const DeleteProduct = async (id) => {
    await axios
      .delete(`${url}/api/Product/Delete?id=${id}`)
      .then(function (response) {
        Swal.fire("", "Deleted", "success");
        console.log(response);
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        console.log(error);
      });
    GetProducts();
  };

  return (
    <div>
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title d-flex justify-content-between">
              Products
             <ProductCreateBtn/>
            
           
            </h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>

                  <th> Subscription type </th>
                  <th> Price </th>
                  <th> Quality </th>
                  <th> Resolution </th>
                  <th> Screen count </th>
                  <th> Create date</th>

                  <th> Settings </th>
                </tr>
              </thead>
              <tbody>
                {products.map((Product, i) => (
                  <tr key={i}>
                    <td>{++count}</td>

                    <td className="py-1">{Product.name}</td>
                    <td className="py-1">{Product.price} $</td>
                    <td className="py-1">{Product.quality} </td>
                    <td className="py-1">{Product.resolution}</td>
                    <td className="py-1">{Product.screen}</td>
                    <td className="py-1">{Product.createDate}</td>

                    <td>
                      <Link to={`/ProductUpdate/${Product.id}`}>
                        <button className="btn btn-primary">Update</button>
                      </Link>
                      <button
                        onClick={() => DeleteProduct(Product.id)}
                        type="button"
                        className="btn btn-warning"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
