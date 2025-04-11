import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { instance } from "../../../config,axios";
import { FieldValues, useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    instance
      .post("/login", { ...data })
      .then((response) => {
        // login x- ,success
        console.log(response);
      })
      .catch((error) => {
        // login error
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center auth-card h-100">
        <div className="col-5 my-auto">
          <div className="card p-3">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <p className="auth-title mb-0 text-center">Login</p>
              </div>
              <hr />
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row gy-3">
                  <div className="col-xl-12">
                    <label htmlFor="register-username" className="form-label text-default">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control form-control"
                      id="register-username"
                      {...register("username", { required: true })}
                      placeholder="Enter Username"
                    ></input>
                  </div>
                  <div className="col-xl-12">
                    <label htmlFor="register-password" className="d-block form-label text-default">
                      Password
                      <Link
                        to="/forgot-password"
                        className="forgot-password float-end link-danger op-5 fw-medium fs-12"
                      >
                        Forget password ?
                      </Link>
                    </label>
                    <div className="position-relative">
                      <input
                        type="password"
                        className="form-control form-control"
                        id="register-password"
                        placeholder="Enter Password"
                        {...register("password", { required: true })}
                      ></input>
                      <a className="show-password-button">
                        <FaEye />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-primary">
                    Continue
                  </button>
                </div>
              </form>
              <div className="text-center mb-0">
                <p className="text-muted mt-3  mb-0">
                  Don't have an account?
                  <Link to="/register" className="text-primary">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
