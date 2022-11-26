import React from "react";

export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-5"
      style={{ width: "280px" }}
    >
      <div className="">
        <small>Featured Brand</small>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Brand X
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Brand Y
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Brand X
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Brand Y
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Brand X
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Brand Y
          </label>
        </div>
      </div>
      <br />
      <div>
        <small>Price Ranges.</small>
        <ul>
          <li>Under 25k</li>
          <li>25k to 50k</li>
          <li>Under 25k</li>
          <li>25k to 50k</li>
          <li>Under 25k</li>
          <li>25k to 50k</li>
          <li>Under 25k</li>
          <li>25k to 50k</li>
        </ul>
      </div>
    </div>
  );
}
