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
      <nav className="navbar navbar-expand-lg" style={{ backround: "#252b3f" }}>
        <div className="container">
          <Link href="/">
            <small className="navbar-brand text-white">ikomas</small>
          </Link>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <small
                  style={{ fontSize: "10px" }}
                  className="nav-link"
                  aria-current="page"
                  href="/"
                >
                  <i className="bi bi-geo-alt lg"></i> Deliver <br />
                  to Kenya.
                </small>
              </Link>
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
            <div className="input-group">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All
              </button>
              <ul className="dropdown-menu">
                {categories.map((cat) => {
                  <Link href={""}>
                    <li key={cat.id} id={cat.id} className="dropdown-item">
                      {cat.name}
                    </li>
                  </Link>;
                })}
              </ul>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
              />
              <button className="btn btn-warning">
                <i className="bi bi-search-heart"></i>
              </button>
            </div>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <small
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="flag flag-india"></i> <small>EN</small>
                </small>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link href="/">
                      <small className="dropdown-item">FR</small>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <small className="dropdown-item">SW</small>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <small
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <small style={{ fontSize: "10px" }}>Accounts</small>
                  <br /> &amp; Lists
                </small>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link href="/signup">
                    <li className="dropdown-item auth_button btn ">SignIn</li>
                  </Link>
                  <Link href={"/account"}>
                    <li className="dropdown-item">Account.</li>
                  </Link>

                  <Link href={"/orders"}>
                    <li className="dropdown-item">Orders.</li>
                  </Link>

                  <Link href={"/browse"}>
                    <li className="dropdown-item">Browsing History.</li>
                  </Link>

                  <Link href={"/subscribe"}>
                    <li className="dropdown-item">Subscribe & Save Items.</li>
                  </Link>
                </ul>
              </li>

              <li className="nav-item">
                <Link href={"/returns-orders"}>
                  <small className="nav-link" aria-current="page" >
                    Returns
                    <br />
                    Orders
                  </small>
                </Link>
              </li>

              <li className="nav-item">
                <Link href={"/cart"}>
                  <small className="nav-link" aria-current="page" >
                    <i className="bi bi-cart2 xl"></i>
                    Cart
                  </small>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="div_nav_ul">
        <ul className="nav_ul">
          <li>
            <i className="bi bi-list"></i> All
          </li>
          {featured.map((ft, index) => {
            <Link href={"/category/Today-Deals"}>
              <li key={index}>{ft}</li>
            </Link>;
          })}
        </ul>
      </div>
    </>
  );
}
