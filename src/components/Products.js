import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

function Products() {
  const url = "https://localhost:7110";

  const [products, setProducts] = useState([]);

  //paginate items start
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };
  //paginate items end

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
    });
  }

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-lg-12 col-sm-12">
          <div className="category" style={{  marginBottom:"20px"}}>
            <button className="my-btn tab-active">All</button>
          </div>
        </div>

        {currentItems?.map((product, i) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
              <div className="card">
                <div className="imgBox">
                  <a href="product-detail.html">
                    <img
                      src={`data:image/jpeg;base64,${product.image}`}
                      alt=""
                    />
                  </a>
                  <i className="fa-solid fa-heart my-heart" />
                  <div className="sale">Sale</div>
                </div>
                <div className="contentBox">
                  <p className="name">{product.name}</p>
                  <h5 className="price">{product.price} €</h5>
                  <a href="#" className="buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
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
  );
}

export default Products;
