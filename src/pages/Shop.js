import React, { useState, useEffect } from "react";
import axios from "axios";
import FilteredProducts from "../components/FilteredProducts";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../assets/css/Category/category.css";

function Shop() {
  //All Product Url
  const baseUrlProduct = "https://localhost:7110/api/Product/GetAll";

  //All Category Url
  const baseUrlCategory = "https://localhost:7110/api/Category/GetAll";

  //Filter items
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [categorys, setCategorys] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  let result = [];

  //get Products from db
  async function getAllProducts() {
    await axios.get(baseUrlProduct).then((response) => {
      setItems(response.data);
      setFilteredProducts(response.data);
    });
  }

  //Get categories from db
  async function getAllCategories() {
    await axios.get(baseUrlCategory).then((response) => {
      setCategorys(response.data);
    });
  }
  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);

  //Filter for category method
  function getFilteredList(category) {
    if (category === "All") {
       setFilteredProducts(items);
    } else {
      var filteredProducts = items?.filter(
        (item) => item.category.name.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filteredProducts);
    }
  }

  const [activeCategory, setActiveCategory] = useState("All");

  const handleClick = (category) => {
    setActiveCategory(category);
    getFilteredList(category);
  };

  //Search from filtered items method
  result = filteredProducts.filter((i) =>
    i.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <section id="product-area">
        <div className="container">
          <div className="row">
            <div className="header">
              <h3>All PRODUCTS :</h3>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="brand">
                    <div className="header">
                      <h1>Filter</h1>
                    </div>
                    <div className="content">
                      <input
                        placeholder="search Product"
                        type="text"
                        id="message"
                        name="message"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        className="search-Product"
                      />
                      <ul className="filter-container">
                        <li
                          className={`filter-button ${
                            activeCategory === "All" ? "active" : ""
                          }`}
                        >
                          <a
                            onClick={() => handleClick("All")}
                            style={{ color: "white" }}
                          >
                            All
                          </a>
                        </li>
                        {categorys?.map((category, index) => {
                          return (
                            <li
                              key={index}
                              className={`filter-button ${
                                activeCategory === category.name ? "active" : ""
                              }`}
                            >
                              <a
                                style={{ color: "white" }}
                                onClick={() => handleClick(category.name)}
                              >
                                {category.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">
              {result.length == 0 ? (
                <h1>"There is no product for your search"</h1>
              ) : (
                <FilteredProducts filteredProducts={result} />
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Shop;
