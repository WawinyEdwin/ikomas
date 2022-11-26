import Image from "next/image";
import React from "react";

export default function Carousel() {
  return (
    <div>
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
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
