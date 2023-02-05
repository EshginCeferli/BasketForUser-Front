import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import ReactPaginate from "react-paginate";

function FilteredProducts(props) {
  let products = props.filteredProducts;
    console.log(props);
  const ref = useRef(null);

  //Pagineate items
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  //Paginate function
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products?.length;

    setItemOffset(newOffset);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="col-lg-9 col-md-9 col-sm-12">
      <div className="row" ref={ref}>
        <div className="col-lg-12 col-sm-12">
          <div className="category">
            <button className="my-btn tab-active">Products</button>
          </div>
        </div>
        {currentItems?.map((product, i) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
              <div className="card">
                <div className="imgBox">
                  <a href="product-detail.html">
                    <img src="assets/images/Product/p-1.jpg" alt="" />
                  </a>
                  <i className="fa-solid fa-heart my-heart" />
                  <div className="sale">Sale</div>
                </div>
                <div className="contentBox">
                  <p className="brend">Mango</p>
                  <p className="name">{product.name}</p>
                  <h5 className="price">{product.price} $</h5>
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
        previousLabel="<previous>"
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

export default FilteredProducts;
