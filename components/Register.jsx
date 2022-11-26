import React from "react";

export default function Register() {
  return (
    <div className="container">
      <div>
        <div className="row pt-5">
          <div className="col-md-4 offset-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Create Account</h5>
                <form action="" method="post">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="first and last name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Mobile number or email
                    </label>
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="name"
                      id=""
                      placeholder="At least 6 characters"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Re-enter password
                    </label>
                    <input
                      type="password"
                      name="name"
                      id=""
                      className="form-control"
                    />
                  </div>

                  <div className="w-100">
                    <button type="submit" className="btn auth_button w-100">
                      Continue
                    </button>
                  </div>
                </form>
                <div className="">
                  <small>
                    By creating an account, you agree to ikomas's{" "}
                    <Link href="">Conditions of use</Link> and{" "}
                    <Link href="">smallrivacy Notice</Link>
                  </small>
                </div>
                <hr />
                <p>
                  Already have an account? <Link href="/login">Signin</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
