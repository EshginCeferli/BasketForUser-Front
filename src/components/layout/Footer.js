import React from "react";
import "../../assets/css/Footer/footer.css"

function Footer() {
  return (
    <>
      <footer>
        <section id="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="info">
                  <h6>
                    <b>CATEGORIES</b>
                  </h6>
                  <ul>
                    <li>
                      <a href="">Men :</a>
                    </li>
                    <li>
                      <a href="">Women :</a>
                    </li>
                    <li>
                      <a href="">Accessories :</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="info">
                  <h6>
                    <b>HELP</b>
                  </h6>
                  <ul>
                    <li>
                      <a href="">Returns :</a>
                    </li>
                    <li>
                      <a href="">Shipping :</a>
                    </li>
                    <li>
                      <a href="">FAQs :</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="info">
                  <h6>
                    <b>GET IN TOUCH</b>
                  </h6>
                  <span>
                    Any questions? Let us know in store at 8th floor, 379 Hudson
                    St, New York, NY 10018 or call us on (+994) 50 500 02 56
                  </span>
                  <div className="social-area">
                    <div className="social">
                      <a href="https://www.facebook.com/">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </div>
                    <div className="social">
                      <a href="https://www.instagram.com/">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                    <div className="social">
                      <a href="https://www.pinterest.com/">
                        <i className="fa-brands fa-pinterest" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="info">
                  <h6>
                    <b>COZASTORE</b>
                  </h6>
                  <img src="/images/Online-shop-01.png" alt="" />
                  <div className="contact">
                    <a href="https://www.coza.com.br6">Contact Us :</a>
                  </div>
                </div>
              </div>
              <div className="line" />
              <div className="copyright">
                <span>
                  Copyright ©2022 All rights reserved | This site is made with
                  by
                </span>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
