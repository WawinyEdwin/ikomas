import Link from "next/link";
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
              <Link href="/">
                <li className="text-white">Careers</li>
              </Link>
              <Link href="/">
                <li className="text-white">Blog</li>
              </Link>

              <Link href="/">
                <li className="text-white">About Amakon</li>
              </Link>

              <Link href="/">
                <li className="text-white">Investor Relations</li>
              </Link>
            </ul>
          </div>
          <div className="col">
            <ul>
              <h5>
                <b>Make Money With Us</b>
              </h5>
              <Link href="/">
                <li className="text-white">Sell products on Amakon</li>
              </Link>

              <Link href="/">
                <li className="text-white">Sell on Amazon Business</li>
              </Link>

              <Link href="/">
              
                <li className="text-white">Become an Affiliate</li>
              </Link>

              <Link href="/">
                <li className="text-white">Advertise Your Products</li>
              </Link>
            </ul>
          </div>
          <div className="col">
            <ul>
              <h5>
                <b>Amakon Payment Products</b>
              </h5>
              <Link href="/">
                <li className="text-white">ikomas Business Card</li>
              </Link>
              <Link href="/">
                <li className="text-white">Shop With Points</li>
              </Link>
              <Link href="/">
                <li className="text-white">Reload your Balance</li>
              </Link>
              <Link href="/">
                <li className="text-white">ikomas currency convertor</li>
              </Link>
            </ul>
          </div>
          <div className="col">
            <ul>
              <h5>
                <b>Let us help you.</b>
              </h5>
              <Link href="/">
                <li className="text-white">Your Account</li>
              </Link>
              <Link href="/">
                <li className="text-white">Your Orders</li>
              </Link>
              <Link href="/">
                <li className="text-white">Shipping Rates and Policies.</li>
              </Link>
              <Link href="/">
                <li className="text-white">Returns &amp; Policies</li>
              </Link>
              <Link href="/">
                <li className="text-white">Help</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="text-center d-flex justify-content-center text-white">
          <h5 className="btn btn-link text-white ml-2">Amakon</h5>
          <h5 className="btn btn-link text-white">
            <select name="" id="" className="form-select">
              <option value="EN">EN</option>
              <option value="EN">EN</option>
              <option value="EN">EN</option>
            </select>
          </h5>

          <h5 className="btn btn-link text-white">USD - US Dollar</h5>
          <h5 className="btn btn-link  text-white">Kenya</h5>
        </div>
      </div>
    </footer>
  );
}
