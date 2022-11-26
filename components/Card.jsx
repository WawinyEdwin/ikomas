import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cards() {
  return (
    <>
      <div className="container pt-3 pb-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Gaming Accessories</h5>
                <Image
                  src="/3.jpg"
                  className="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p className="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Shop By Category</h5>
                <Image
                  src="/2.jpg"
                  className="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p className="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Dresses</h5>
                <Image
                  src="/dress.jpg"
                  className="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p className="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">
                  <b>Sign In for the best experience</b>
                </h5>
                <p className="card-text pt-5 text-center">
                  <button className="auth_button">Sign In</button>
                </p>
              </div>
              <Image
                src="/dress.jpg"
                className="card_img"
                alt="..."
                height={200}
                width={400}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Back To School</h5>
                <Image
                  src="/3.jpg"
                  alt="..."
                  className="card-img-top"
                  height={200}
                  width={400}
                />
                <p className="card-text pt-5">
                  <Link href="">Shop Now.</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
                <Image
                  src="/electronic.jpg"
                  className="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p className="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Deal of the Day</h5>
                <Image
                  src="/dress.jpg"
                  className="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p className="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">
                  Health &amp; Personal Care.
                </h5>
                <Image
                  src="/health.jpg"
                  className="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p className="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="card">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                src="/4.jpg"
                className="d-block w-100"
                alt="..."
                height={200}
                width={400}
              />
            </div>
            <div className="carousel-item ">
              <Image
                src="/1.jpg"
                className="d-block w-100"
                alt="..."
                height={200}
                width={400}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/2.jpg"
                className="d-block w-100"
                alt="..."
                height={200}
                width={400}
              />
            </div>
            <div className="carousel-item">
              <Image
                src="/3.jpg"
                className="d-block w-100"
                alt="..."
                height={200}
                width={400}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br />
      <div
        id="carouselExampleControls"
        className="carousel "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/4.jpg"
              className="d-block w-100"
              alt="..."
              height={400}
              width={400}
            />
          </div>
          <div className="carousel-item ">
            <Image
              src="/1.jpg"
              className="d-block w-100"
              alt="..."
              height={400}
              width={400}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/2.jpg"
              className="d-block w-100"
              alt="..."
              height={400}
              width={400}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/3.jpg"
              className="d-block w-100"
              alt="..."
              height={400}
              width={400}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Gaming Accessories</h5>
                <Image
                  src="/dress.jpg"
                  className="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p className="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Shop By Category</h5>
                <Image
                  src="/dress.jpg"
                  className="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p className="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Dresses</h5>
                <Image
                  src="/dress.jpg"
                  className="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p className="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Dresses</h5>
                <Image
                  src="/dress.jpg"
                  className="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p className="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
