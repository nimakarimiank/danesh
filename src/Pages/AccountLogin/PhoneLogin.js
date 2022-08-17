import React, { useState } from "react";
import "../../Css/bootstrap.min.css";
import "../../App.css";

import { Link } from "react-router-dom";
function PhoneLogin() {
  const [validated, setValidated] = useState(true);
  const changeValidation = () => {
    setValidated(true);
  };

  return (
    <div className="container-fluid d-flex justify-content-center ">
      {" "}
      <div className="row " style={{ marginTop: "400px" }}>
        <div className="container-fluid d-flex justify-content-center">
          <form className="was-validated">
            <div className="mb-3 mt-3">
              <label for="Phone" className="form-label">
                شماره تماس:
              </label>
              <input
                type="tel"
                className="form-control"
                id="Phone"
                pattern="09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}"
                placeholder="شماره تماس خود را وارد کنید"
                name="phoneNumber"
                required
                onInvalid={() => {
                  setValidated(false);
                }}
              />
              <div className="invalid-feedback">
                لطفا شماره تلفن خود را با فرمت صحیح وارد کنید
              </div>
              <div className="valid-feedback"></div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onSubmit={() => {
                changeValidation();
              }}
            >
              {validated ? (
                <Link
                  to="/Response"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  ثبت
                </Link>
              ) : (
                "ثبت"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PhoneLogin;
