import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cards() {
  return (
    <>
      <div className="container pt-3 pb-5">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Gaming Accessories</h5>
                <Image
                  src="/3.jpg"
                  class="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p class="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Shop By Category</h5>
                <Image
                  src="/2.jpg"
                  class="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p class="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Dresses</h5>
                <img src="/dress.jpg" class="card-img-top" alt="..." />
                <p class="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">
                  <b>Sign In for the best experience</b>
                </h5>
                <p class="card-text pt-5 text-center">
                  <button className="auth_button">Sign In</button>
                </p>
              </div>
              <Image
                src="/dress.jpg"
                class="card_img"
                alt="..."
                height={200}
                width={400}
              />
            </div>
          </div>
        </div>
        <br />
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Back To School</h5>
                <Image
                  src="/3.jpg"
                  alt="..."
                  className="card-img-top"
                  height={200}
                  width={400}
                />
                <p class="card-text pt-5">
                  <Link href="">Shop Now.</Link>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Electronics</h5>
                <Image
                  src="/electronic.jpg"
                  className="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p class="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Deal of the Day</h5>
                <Image
                  src="/dress.jpg"
                  class="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p class="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">
                  Health &amp; Personal Care.
                </h5>
                <Image
                  src="/health.jpg"
                  class="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p class="card-text pt-5">
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
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <Image
                src="/4.jpg"
                class="d-block w-100"
                alt="..."
                height={200}
                width={400}
              />
            </div>
            <div class="carousel-item ">
              <Image
                src="/1.jpg"
                class="d-block w-100"
                alt="..."
                height={200}
                width={400}
              />
            </div>
            <div class="carousel-item">
              <Image
                src="/2.jpg"
                class="d-block w-100"
                alt="..."
                height={200}
                width={400}
              />
            </div>
            <div class="carousel-item">
              <Image
                src="/3.jpg"
                class="d-block w-100"
                alt="..."
                height={200}
                width={400}
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br />
      <div
        id="carouselExampleControls"
        class="carousel "
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Image
              src="/4.jpg"
              class="d-block w-100"
              alt="..."
              height={400}
              width={400}
            />
          </div>
          <div class="carousel-item ">
            <Image
              src="/1.jpg"
              class="d-block w-100"
              alt="..."
              height={400}
              width={400}
            />
          </div>
          <div class="carousel-item">
            <Image
              src="/2.jpg"
              class="d-block w-100"
              alt="..."
              height={400}
              width={400}
            />
          </div>
          <div class="carousel-item">
            <Image
              src="/3.jpg"
              class="d-block w-100"
              alt="..."
              height={400}
              width={400}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <div className="container">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Gaming Accessories</h5>
                <Image
                  src="/dress.jpg"
                  class="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p class="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Shop By Category</h5>
                <Image
                  src="/dress.jpg"
                  class="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p class="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Dresses</h5>
                <Image
                  src="/dress.jpg"
                  class="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p class="card-text pt-5">
                  <Link href="">See More.</Link>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Dresses</h5>
                <Image
                  src="/dress.jpg"
                  class="card-img-top"
                  alt="..."
                  height={200}
                  width={400}
                />
                <p class="card-text pt-5">
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
