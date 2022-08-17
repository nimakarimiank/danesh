import React, { useState } from "react";
import "../../../Css/bootstrap.min.css";
import "../../../App.css";
import { Link } from "react-router-dom";
function Response() {
  const [validated, setValidated] = useState(true);


  return (
    <div className="container-fluid d-flex justify-content-center ">
      {" "}
      <div className="row " style={{ marginTop: "400px" }}>
        <div className="container-fluid d-flex justify-content-center">
          <form className="was-validated">
            <div className="mb-3 mt-3">
              <label for="authenticationNumber" className="form-label">
                کد اعتبارسنجی را وارد کنید:
              </label>
              <input
                min={100000}
                max={999999}
                type="text"
                inputmode="numeric"
                className="form-control"
                id="authenticationNumber"
                pattern="^[0-9]{6}"
                placeholder="کد اعتبارسنجی خود را وارد کنید"
                name="authenticationNumber"
                required
              />
              <div className="invalid-feedback">
                کد اعتبارسنجی وارد شده اشتباه است لطفا دوباره اقدام کنید
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              {validated ? <Link to="/Profile">ثبت</Link> : "ثبت"}
            </button>{" "}
            <div>
              <p className="mt-3">کد اعتبار سنجی را دریافت نکرده اید؟</p>
              <span
                style={{ marginLeft: "20px" }}
                className="btn btn-warning "
                onClick={() => {
                  alert("یک کد که تایمر از اول شمارش را شروع کند");
                }}
              >
                ارسال دوباره
              </span>
              <span className="btn btn-outline-info">
                {" "}
                <Link to="/" style={{ textDecoration: "none" }}>
                  ویرایش تلفن همراه
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Response;
