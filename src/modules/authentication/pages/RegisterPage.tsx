import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center auth-card h-100">
        <div className="col-5 my-auto">
          <div className="card p-3">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <p className="auth-title mb-0 text-center">Register</p>
              </div>
              <hr />
              <form>
                <div className="row gy-3">
                  <div className="col-xl-12">
                    <label htmlFor="register-username" className="form-label text-default">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control form-control"
                      id="register-username"
                      placeholder="Enter Username"
                    ></input>
                  </div>
                  <div className="col-xl-12">
                    <label htmlFor="register-password" className="form-label text-default">
                      Password
                    </label>
                    <div className="position-relative">
                      <input
                        type="password"
                        className="form-control form-control"
                        id="register-password"
                        placeholder="Enter Password"
                      ></input>
                      <a className="show-password-button">
                        <FaEye />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <label htmlFor="register-cpassword" className="form-label text-default">
                      Confirm Password
                    </label>
                    <div className="position-relative">
                      <input
                        type="password"
                        className="form-control form-control"
                        id="register-cpassword"
                        placeholder="Enter Confirm Password"
                      ></input>
                      <a className="show-password-button">
                        <FaEye />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-primary">
                    Create Account
                  </button>
                </div>
              </form>
              <div className="text-center mb-0">
                <p className="text-muted mt-3  mb-0">
                  Already have an account?
                  <Link to="/login" className="text-primary">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
