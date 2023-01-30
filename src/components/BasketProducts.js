import React from "react";
import { Link } from "react-router-dom";

function BasketProducts() {
  return (
    <div>
      <section id="table-area">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12 d-flex align-items-center h-100">
              <div className="card border-0 w-100">
                <div className="card-header d-flex justify-content-between align-items-center bg-light pt-4">
                  <h5 className="card-title h4 mb-0 py-2">Product List</h5>
                  <Link to="/">
                    <button type="button" className="btn btn-secondary my-btn">
                      Add New Product
                    </button>
                  </Link>
                </div>
                <div className="card-body">
                  <table
                    id="productTable"
                    className="table table-bordered align-middle table-hover"
                  >
                    <thead className="table-color">
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>                        
                        <th>Setting</th>
                      </tr>
                    </thead>
                    <tbody className="table-body"></tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="total-price">
              <h4>Payment :</h4>
              <p>Total-Price :</p>
              <span>767 €</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BasketProducts;
