import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Products() {
  const url = "https://localhost:7110";

  // let basketCount = localStorage.getItem('basketCount');

  // if (!basketCount) {
  //   basketCount = 0;
  // } else {
  //   basketCount = parseInt(basketCount, 10);
  // }

  //Get token of current user send backend by request header
  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

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

  //sweet alert
  const Success = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2400,
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
    timer: 2400,
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
    });
  }

  useEffect(() => {
    GetProducts();
  }, []);

  //Add products to basket method
  async function AddBasket(id) {
    await axios
      .post(`${url}/api/Basket/AddBasket?id=${id}`, null, config)
      .then((res) => {
        if (res.data.status === "success" || res.status === 200) {
          // basketCount++;
          // localStorage.setItem('basketCount', basketCount);
          //  console.log(basketCount);
          Success.fire({
            icon: "success",
            title: "Product successfully added to basket",
          });
        }
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.data.status === 401) {
          Reject.fire({
            icon: "error",
            title: "You need to login first to add products to basket",
          });
        } else {
          Reject.fire({
            icon: "error",
            title: "Something went wrong!",
          });
        }
      });
  }

  return (
    <div>
      <Swiper style={{backgroundColor : "green" , width : "100%"}}
       loop={true}
       spaceBetween={10}
       effect={"coverflow"}
       grabCursor={true}
       slidesPerView={"4"}>
        <SwiperSlide>
          asdasdasasdasdas
        </SwiperSlide>
        <SwiperSlide>
          asdasdasasdasd
        </SwiperSlide>
        <SwiperSlide>
          asdasd1121
        </SwiperSlide>
        <SwiperSlide>
          asdasdas
        </SwiperSlide>
      </Swiper>
      <div className="row">
        <div className="col-lg-12 col-sm-12">
          <div className="category" style={{ marginBottom: "20px" }}>
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
                  <a
                    href="#"
                    className="buy"
                    onClick={() => AddBasket(product.id)}
                  >
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
