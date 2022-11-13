import React from "react";

export default function Sidebar() {
  return (
    <div
      class="d-flex flex-column flex-shrink-0 p-5"
      style={{ width: "280px" }}
    >
      <div className="">
        <small>Featured Brand</small>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Brand X
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label" for="flexCheckChecked">
            Brand Y
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Brand X
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label" for="flexCheckChecked">
            Brand Y
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Brand X
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label" for="flexCheckChecked">
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
