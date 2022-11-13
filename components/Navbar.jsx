import Link from "next/link";
import React from "react";

export default function Navbar() {
  const categories = [
    {
      id: 1,
      name: "Arts",
    },
    {
      id: 2,
      name: "Automotives",
    },
    {
      id: 3,
      name: "Baby",
    },
    {
      id: 4,
      name: "Beauty & Personal Care",
    },
  ];
  const featured = [
    "Today's Deals",
    "Customer Service",
    "Registry",
    "Gift Cards",
    "Sell",
  ];

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backround: "#252b3f" }}
      >
        <div className="container">
          <a className="navbar-brand text-white" href="/">
            <small>ikomas</small>
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                <i class="bi bi-geo-alt lg"></i>{" "}
                <small style={{ fontSize: "10px" }}>
                  Deliver <br />
                </small>{" "}
                to Kenya.
              </a>
            </li>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="input-group">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All
              </button>
              <ul class="dropdown-menu">
                {categories.map((cat) => {
                  <li key={cat.id} id={cat.id}>
                    <a class="dropdown-item" href="#">
                      {cat.name}
                    </a>
                  </li>;
                })}
              </ul>
              <input
                type="text"
                class="form-control"
                aria-label="Text input with dropdown button"
              />
              <button className="btn btn-warning">
                <i class="bi bi-search-heart"></i>
              </button>
            </div>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="flag flag-india"></i> <small>EN</small>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      FR
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      SW
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <small style={{ fontSize: "10px" }}>Accounts</small>
                  <br /> &amp; Lists
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-item">
                    <a
                      className=" btn dropdown-item auth_button"
                      href="/signup"
                    >
                      SignIn
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Account.
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Orders.
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Browsing History.
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Subscribe & Save Items.
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <small style={{ fontSize: "10px" }}>Returns</small>
                  <br />
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/cart">
                  <i class="bi bi-cart2 xl"></i>
                  <small>Cart</small>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="div_nav_ul">
        <ul className="nav_ul">
          <li>
            <i class="bi bi-list"></i> All
          </li>
          {featured.map((ft, index) => {
            <li key={index}>
              <a href="/category/Today Deals">{ft}</a>
            </li>;
          })}
        </ul>
      </div>
    </>
  );
}
