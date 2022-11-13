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
                <img
                  src="/3.jpg"
                  class="card-img-top"
                  alt="..."
                  style={{ height: "200px", width: "100%" }}
                />
                <p class="card-text pt-5">
                  <a href="">See More.</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Shop By Category</h5>
                <img
                  src="/2.jpg"
                  class="card-img-top"
                  alt="..."
                  style={{ height: "200px", width: "100%" }}
                />
                <p class="card-text pt-5">
                  <a href="">See More.</a>
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
                  <a href="">See More.</a>
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
              <img
                src="/dress.jpg"
                class="card_img"
                alt="..."
                style={{ height: "200px", width: "100%" }}
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
                <img
                  src="/3.jpg"
                  alt="..."
                  className="card-img-top"
                  style={{ height: "200px", width: "100%" }}
                />
                <p class="card-text pt-5">
                  <a href="">Shop Now.</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Electronics</h5>
                <img src="/electronic.jpg" className="card-img-top" alt="..." />
                <p class="card-text pt-5">
                  <a href="">See More.</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Deal of the Day</h5>
                <img src="/dress.jpg" class="card-img-top" alt="..." />
                <p class="card-text pt-5">
                  <a href="">See More.</a>
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
                <img src="/health.jpg" class="card-img-top" alt="..." />
                <p class="card-text pt-5">
                  <a href="">See More.</a>
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
              <img src="/4.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item ">
              <img src="/1.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/2.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/3.jpg" class="d-block w-100" alt="..." />
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
            <img src="/4.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item ">
            <img src="/1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/3.jpg" class="d-block w-100" alt="..." />
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
                <img src="/dress.jpg" class="card-img-top" alt="..." />
                <p class="card-text pt-5">
                  <a href="">See More.</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Shop By Category</h5>
                <img src="/dress.jpg" class="card-img-top" alt="..." />
                <p class="card-text pt-5">
                  <a href="">See More.</a>
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
                  <a href="">See More.</a>
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
                  <a href="">See More.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
