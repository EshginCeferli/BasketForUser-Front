import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../assets/css/ProductDetail/productDetail.css";

function ProductDetailComp(props) {
  const id = props.id;

  const url = "https://localhost:7110";

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

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

  //Add products to basket method
  async function AddBasket(id) {
    await axios
      .post(`${url}/api/Basket/AddBasket?id=${id}`, null, config)
      .then((res) => {
        if (res.data.status === "success" || res.status === 200) {
          sessionStorage.setItem(
            "sweetAlertMessage",
            "Added product to basket succesfully"
          );
          window.location.reload();
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

  //Get Sweet Alert from session storage after refresh
  if (sessionStorage.getItem("sweetAlertMessage")) {
    Success.fire({
      text: sessionStorage.getItem("sweetAlertMessage"),
      icon: "success",
      timer: 2000,
    });
    sessionStorage.removeItem("sweetAlertMessage");
  }

  return (
    <div>
      <section id="product-detail">
        <div className="container">
          <div className="row">
            <div className="card-wrapper">
              <div className="card">
                <div className="img-showcase">
                  <img
                    src={`data:image/jpeg;base64,${props.product.image}`}
                    alt="shoe image"
                  />
                </div>

                <div className="product-content">
                  <h2 className="product-title">{props?.product.name}</h2>
                  <div className="product-price">
                    <p className="last-price">
                      Price: <span>${props?.product.price}</span>
                    </p>
                  </div>
                  <div className="about-product">
                    <h3>About this product:</h3>
                    <p>{props?.product.description}</p>
                    <ul>
                      <li>
                        Available : <span>in stock</span>
                      </li>
                    </ul>
                  </div>
                  <div className="purchase-info">
                    <button
                      type="button"
                      className="my-btn"
                      onClick={() => AddBasket(id)}
                    >
                      Add to Cart <i className="fas fa-shopping-cart" />
                    </button>
                  </div>
                  <div className="social-links">
                    <p>Share At:</p>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest" />
                    </a>
                  </div>
                  <div className="comment-area">
                    <h6>LEAVE A COMMENT</h6>
                    <form action="">
                      <div className="text">
                        <textarea
                          name=""
                          id=""
                          cols={30}
                          placeholder="Comment..."
                          className="text-area"
                          defaultValue={""}
                        />
                      </div>
                      <div className="input-area">
                        <div className="input">
                          <input type="text" placeholder="Name *" />
                        </div>
                        <div className="input">
                          <input type="text" placeholder="Email *" />
                        </div>
                      </div>
                      <button type="submit" className="my-btn">
                        Post Comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetailComp;
