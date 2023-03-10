import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import ProductCreateBtn from "./ProductCreateBtn";
import ReactPaginate from "react-paginate";

function ProductTable() {
  const url = "https://localhost:7110";

  const [products, setProducts] = useState([]);

  //Paginate items
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  let rowNumber = (currentPage - 1) * itemsPerPage;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected + 1);
  };
  //Paginate ends

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
    
    });
  }

  useEffect(() => {
    GetProducts();
  }, []);

  //Delete Product
  const DeleteProduct = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        GetProducts();
        if (result.isConfirmed) {
           GetProducts();
          axios
            .delete(`${url}/api/Product/Delete?id=${id}`)
            .then(function (response) {
              Swal.fire("", "Deleted", "success");
            });
           GetProducts();
        }
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
  };



  return (
    <div>
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title d-flex justify-content-between">
              Products
              <ProductCreateBtn GetProducts={GetProducts} />
            </h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Product Count</th>
                  <th>Create Date</th>

                  <th> Settings </th>
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((product, i) => (
                  <tr key={i}>
                    <td>{++rowNumber}</td>

                    <td className="py-1">
                     
                      <img
                        style={{
                          width: "100px",
                          height: "70px",
                          borderRadius: "unset",
                        }}
                        src={`data:image/jpeg;base64,${product.image}`}
                        alt=""
                      />
                    </td>
                    <td className="py-1">{product.name}</td>
                    <td className="py-1">{product.price} $</td>
                    <td className="py-1">{product.count} </td>
                    <td className="py-1">{product.createDate}</td>

                    <td>
                      <Link to={`/ProductUpdate/${product.id}`}>
                        <button className="btn btn-primary">Update</button>
                      </Link>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => DeleteProduct(product.id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ReactPaginate
              breakLabel="..."
              nextLabel="next>"
              onPageChange={handlePageClick}
              marginPagesDisplayed={0}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="<previous"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousClassName="page-num"
              nextLinkClassName="page-num"
              activeLinkClassName="active"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
