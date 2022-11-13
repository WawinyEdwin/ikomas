import React from "react";

export default function Footer() {
  return (
    <footer
      style={{ background: "#252b3f", color: "#ffffff", minHeight: "50vh" }}
    >
      <div className="container pt-5 pb-4">
        <div className="row">
          <div className="col">
            <ul>
              <h5>
                <b>Get to Know Us</b>
              </h5>
              <li>
                <a href="/" className="text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  About Amakon
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <h5>
                <b>Make Money With Us</b>
              </h5>
              <li>
                <a href="/" className="text-white">
                  Sell products on Amakon
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="text-white">
                  Sell on Amazon Business
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className="text-white">
                  Become an Affiliate
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Advertise Your Products
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <h5>
                <b>Amakon Payment Products</b>
              </h5>
              <li>
                <a href="/" className="text-white">
                  ikomas Business Card{" "}
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Shop With Points
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Reload your Balance
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  ikomas currency convertor
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <h5>
                <b>Let us help you.</b>
              </h5>
              <li>
                <a href="/" className="text-white">
                  Your Account
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Your Orders
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Shipping Rates and Policies.
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Returns &amp; Policies
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="text-center d-flex justify-content-center text-white">
          <a className="btn btn-link text-white ml-2" href="/">
            Amakon
          </a>
          <a className="btn btn-link text-white" href="/">
            <select name="" id="" className="form-select">
              <option value="EN">EN</option>
              <option value="EN">EN</option>
              <option value="EN">EN</option>
            </select>
          </a>
          <a href="/" className="btn btn-link text-white">
            USD - US Dollar
          </a>
          <a href="/" className="btn btn-link  text-white">
            Kenya
          </a>
        </div>
      </div>
    </footer>
  );
}
