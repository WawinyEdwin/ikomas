import Image from "next/image";
import React from "react";

export default function Cart() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Image
            src={"/cart.svg"}
            height={400}
            alt="something"
            width={400}
            className="d-none d-lg-flex"
          />
        </div>
        <div className="col">
          <div className="text-center pt-5 pb-4">
            <h1>Your Cart is Empty</h1>
            <p>
              <Link href="/">Shop Today's Deals.</Link>
            </p>
            <div className="text-center">
              <Link href="/signup" className="btn auth_button">
                Sign In to Your Account
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h1>Shopping Cart</h1>
        <hr />
        <div className="col-lg-2">
          <Image
            src={"/cart.svg"}
            height={400}
            width={400}
            alt="something"
            className="d-none d-lg-flex"
          />
        </div>
        <div className="col-lg-8">
          <div className="">
            <h5>
              Beats Studio Buds - True Wireless Noise Cancelling Earbuds -
              Compatible with Apple & Android, Built-in Microphone, IPX4 Rating,
              Sweat Resistant Earphones, Class 1 Bluetoo…
            </h5>
            <small>In Stock</small>
            <p>
              <select className="">
                <option>Qty-1</option>
              </select>{" "}
              | <Link href="/">Delete</Link> |{" "}
              <Link href="/">Save for Later</Link> |{" "}
              <Link href="/">Compare with similar Items</Link>
            </p>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <h5>SubTotal(1 item): 2334</h5>
                <Link href="/checkout" className="btn btn-warning">
                  <small>Proceed To CheckOut</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <small>
        **The price and availability of items at Amazon.com are subject to
        change. The Cart is a temporary place to store a list of your items and
        reflects each item's most recent price. Shopping CartLearn more Do you
        have a gift card or promotional code? We'll ask you to enter your claim
        code when it's time to pay.
      </small>
      <hr />
      <h1>Customers Who Bought This Item also bought..</h1>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card">
            <Image
              src="/3.jpg"
              class="card-img-top"
              alt="..."
              height={400}
              width={400}
            />
            <div class="card-body">
              <Link href="/product">
                <p class="card-text pt-5">
                  10.36 inch Android Tablet, TCL TABMAX 10.4, 6GB + 256GB (up to
                  512GB), 8000mAh, FHD+ Display, WiFi Android 11 Tablet, Space
                  Gray
                </p>
              </Link>
              <span>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </span>
              <br />
              <h5>$ 1888 </h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <Image
              src="/3.jpg"
              class="card-img-top"
              alt="..."
              height={400}
              width={400}
            />
            <div class="card-body">
              <p class="card-text pt-5">
                10.36 inch Android Tablet, TCL TABMAX 10.4, 6GB + 256GB (up to
                512GB), 8000mAh, FHD+ Display, WiFi Android 11 Tablet, Space
                Gray
              </p>
              <span>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </span>
              <br />
              <h5>$ 1888 </h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <Image
              src="/3.jpg"
              class="card-img-top"
              alt="..."
              height={400}
              width={400}
            />
            <div class="card-body">
              <p class="card-text pt-5">
                10.36 inch Android Tablet, TCL TABMAX 10.4, 6GB + 256GB (up to
                512GB), 8000mAh, FHD+ Display, WiFi Android 11 Tablet, Space
                Gray
              </p>
              <span>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </span>
              <br />
              <h5>$ 1888 </h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <Image
              src="/3.jpg"
              class="card-img-top"
              alt="..."
              height={400}
              width={400}
            />
            <div class="card-body">
              <p class="card-text pt-5">
                10.36 inch Android Tablet, TCL TABMAX 10.4, 6GB + 256GB (up to
                512GB), 8000mAh, FHD+ Display, WiFi Android 11 Tablet, Space
                Gray
              </p>
              <span>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </span>
              <br />
              <h5>$ 1888 </h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card">
            <Image
              src="/3.jpg"
              class="card-img-top"
              alt="..."
              height={400}
              width={400}
            />
            <div class="card-body">
              <p class="card-text pt-5">
                10.36 inch Android Tablet, TCL TABMAX 10.4, 6GB + 256GB (up to
                512GB), 8000mAh, FHD+ Display, WiFi Android 11 Tablet, Space
                Gray
              </p>
              <span>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </span>
              <br />
              <h5>$ 1888 </h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <Image
              src="/3.jpg"
              class="card-img-top"
              alt="..."
              height={400}
              width={400}
            />
            <div class="card-body">
              <p class="card-text pt-5">
                10.36 inch Android Tablet, TCL TABMAX 10.4, 6GB + 256GB (up to
                512GB), 8000mAh, FHD+ Display, WiFi Android 11 Tablet, Space
                Gray
              </p>
              <span>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </span>
              <br />
              <h5>$ 1888 </h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <Image
              src="/3.jpg"
              class="card-img-top"
              alt="..."
              height={400}
              width={400}
            />
            <div class="card-body">
              <p class="card-text pt-5">
                10.36 inch Android Tablet, TCL TABMAX 10.4, 6GB + 256GB (up to
                512GB), 8000mAh, FHD+ Display, WiFi Android 11 Tablet, Space
                Gray
              </p>
              <span>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </span>
              <br />
              <h5>$ 1888 </h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <Image
              src="/3.jpg"
              class="card-img-top"
              alt="..."
              height={400}
              width={400}
            />
            <div class="card-body">
              <p class="card-text pt-5">
                10.36 inch Android Tablet, TCL TABMAX 10.4, 6GB + 256GB (up to
                512GB), 8000mAh, FHD+ Display, WiFi Android 11 Tablet, Space
                Gray
              </p>
              <span>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </span>
              <br />
              <h5>$ 1888 </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
