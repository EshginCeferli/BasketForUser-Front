import React from 'react'
import "../assets/css/Services/services.css"

function Services() {
  return (
    <div><section id="service">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="product-header">
            <h3>OUR SERVICES :</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
          <div className="service-block-one">
            <div className="inner-box">
              <div className="icon-box">
                <img src="/images/service-1.svg" alt="" />
              </div>
              <h3>
                <a href="#">Free Shipping</a>
              </h3>
              <p>
                “We promote the fact that we offer free shipping for all orders on
                a site-wide banner. This encourages shoppers to add to their cart
                and get to the checkout process in the first place.”
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
          <div className="service-block-one">
            <div className="inner-box">
              <div className="icon-box">
                <img src="/images/service-2.svg" alt="" />
              </div>
              <h3>
                <a href="#">24/7 Quality Service</a>
              </h3>
              <p>
                “24×7 customer support means when businesses are able to engage
                their customers whenever they need by deploying digital channels
                like live chat and chatbot.”
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
          <div className="service-block-one">
            <div className="inner-box">
              <div className="icon-box">
                <img src="/images/service-3.svg" alt="" />
              </div>
              <h3>
                <a href="#">Easy Fast Service</a>
              </h3>
              <p>
                “Fast customer service is often the difference between maintaining
                loyal customers and losing shoppers to competing brands.”
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 service-block">
          <div className="service-block-one">
            <div className="inner-box">
              <div className="icon-box">
                <img src="/images/service-4.webp" alt="" />
              </div>
              <h3>
                <a href="#">Quality Cost Service</a>
              </h3>
              <p>
                “Service costing is the process of identifying all costs
                associated with building, supporting, and delivering ourservice.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Services