import React from "react";
import AuthLayout from "./AuthLayout";

export default function Login() {
  return (
    <AuthLayout>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-4 offset-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Sign In</h3>
                <form action="" method="post">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Email or Phone Number
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
                      Password{" "}
                    </label>
                    <input
                      type="password"
                      name="name"
                      id=""
                      className="form-control"
                    />
                    <Link href="/forgot">
                      <small className="text-right">Forgot Password?</small>
                    </Link>
                  </div>
                  <div className="">
                    <button type="submit" className="btn auth_button w-100">
                      Continue
                    </button>
                  </div>
                </form>
                <div className="">
                  <small>
                    By signing in, you agree to ikomas's{" "}
                    <Link href="">Conditions of use</Link> and{" "}
                    <Link href="">smallrivacy Notice</Link>
                  </small>
                </div>
                <hr />
                <p className="text-center">New User?</p>
                <hr />
                <div className="w-100">
                  <button type="submit" className="btn btn-info w-100">
                    Create Account.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
