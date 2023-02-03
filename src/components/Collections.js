import React from "react";
import "../assets/css/Collections/collections.css";

function Collections() {
  return (
    <div>
      <section id="collection-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="collection">
                <img src="/images/banner-02.jpg.webp" alt="" />
                <div className="collection-detail">
                  <h3>
                    <b>Men</b>
                  </h3>
                  <p>Spring 2018</p>
                </div>
                <a href="shop.html">
                  <button className="line-btn">SHOP NOW</button>
                </a>
                <div className="opacity"></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="collection">
                <img src="/images/banner-01.jpg.webp" alt="" />
                <div className="collection-detail">
                  <h3>
                    <b>Women</b>
                  </h3>
                  <p>Spring 2018</p>
                </div>
                <a href="shop.html">
                  <button className="line-btn">SHOP NOW</button>
                </a>
                <div className="opacity"></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="collection">
                <img src="/images/banner-03.jpg.webp" alt="" />
                <div className="collection-detail">
                  <h3>
                    <b>Accessories</b>
                  </h3>
                  <p>New Trend</p>
                </div>
                <a href="shop.html">
                  <button className="line-btn">SHOP NOW</button>
                </a>
                <div className="opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Collections;
