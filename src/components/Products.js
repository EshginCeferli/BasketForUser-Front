import React from "react";

function Products() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12 col-sm-12">
          <div className="category">
            <button className="my-btn tab-active">Products</button>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
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
              <p className="name">Pieces Metallic Printed</p>
              <h5 className="price">18.96 €</h5>
              <a href="#" className="buy">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            <div className="imgBox">
              <a href="product-detail.html">
                <img src="assets/images/Product/p-5.jpg" alt="" />
              </a>
              <i className="fa-solid fa-heart my-heart" />
              <div className="sale">Sale</div>
            </div>
            <div className="contentBox">
              <p className="brend">Tissot</p>
              <p className="name">Vintage Inspired Classic</p>
              <h5 className="price">93.20 €</h5>
              <a href="#" className="buy">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            <div className="imgBox">
              <a href="product-detail.html">
                <img src="assets/images/Product/p-9.jpg" alt="" />
              </a>
              <i className="fa-solid fa-heart my-heart" />
              <div className="sale">Sale</div>
            </div>
            <div className="contentBox">
              <p className="brend">Gucci</p>
              <p className="name">Men's Canvas Slim Fit</p>
              <h5 className="price">36.99 €</h5>
              <a href="#" className="buy">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            <div className="imgBox">
              <a href="product-detail.html">
                <img src="assets/images/Product/p-13.jpg" alt="" />
              </a>
              <i className="fa-solid fa-heart my-heart" />
              <div className="sale">Sale</div>
            </div>
            <div className="contentBox">
              <p className="brend">Swatch</p>
              <p className="name">Aqua Di Polo 1987</p>
              <h5 className="price">139.90 €</h5>
              <a href="#" className="buy">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
