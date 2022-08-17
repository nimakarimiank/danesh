import "../../Css/bootstrap.min.css";
import "../../App.css";
import profileimage from "../../logo192.png";
import React, { useState } from "react";
function Profile() {
  const initialValues = [
    {
      id: 1,
      invalidMessage: "نام وارد شده صحیح نیست",
      placeholderValues: "نیما",
      elementId: "fname",
      labelName: "نام:",
      inputType: "text",
      inputName: "FirstName",
      pattern: "^[a-zA-Zs]{3,20}$",
    },
    {
      id: 2,
      invalidMessage: "نام خانوادگی وارد شده صحیح نیست",
      placeholderValues: "کریمیان",
      elementId: "fname",
      labelName: "نام خانوادگی:",
      inputType: "text",
      inputName: "LastName",
      pattern: "^[a-zA-Zs]{3,20}$",
    },

    {
      id: 3,
      invalidMessage: "سن وارد شده باید بالا 18 سال و زیر 120 سال باشد",
      placeholderValues: "24",
      elementId: "Age",
      labelName: "سن:",
      inputType: "number",
      inputName: "Age",
      pattern: "^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$",
    },

    {
      id: 5,
      invalidMessage: "شماره همراه وارد شده صحیح نیست",
      placeholderValues: "09223731236",
      elementId: "phone",
      labelName: "تلفن همراه:",
      inputType: "tel",
      inputName: "phoneNumber",
      pattern: "09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}",
    },
  ];
  const [edit, setEdit] = useState(false);
  const handleChange=()=>{
    setEdit(!edit);
  }
  return (
    <div className="container-fluid d-flex justify-content-center ">
      <div className="row " style={{ marginTop: "300px" }}>
        <div className="col-sm container-fluid d-flex justify-content-center">
          {" "}
          <div className="card">
            {" "}
            <img src={profileimage} class="card-img-top" alt="..." />{" "}
            <div className="card-body">
              <h5 class="card-title">داشبورد شخصی</h5>
            </div>
          </div>
        </div>
        {/* profile picture */}

        <div className="col-sm container-fluid d-flex justify-content-center">
          <form className="was-validated">
            {initialValues.map((value, index) => {
              return (
                <div className="mb-3 mt-3 input-group">
                  <label
                    for={value.elementId}
                    style={{ marginLeft: "10px" }}
                    className="form-label mt-1"
                  >
                    {value.labelName}
                  </label>
                  <input
                    readOnly={edit}
                    type={value.inputType}
                    className="form-control"
                    id={value.elementId}
                    pattern={value.pattern}
                    placeholder={value.placeholderValues}
                    name={value.inputName}
                    required
                    disabled={edit}
                  />
                  <div className="input-group-text btn btn-info" onClick={handleChange}>ویرایش</div>
                  <div className="invalid-feedback">{value.invalidMessage}</div>
                </div>
              );
            })}
            <div className="mb-3 mt-3 input-group">
              <label
                for="sex"
                style={{ marginLeft: "10px" }}
                className="form-label mt-1"
              >
                جنسیت:{" "}
              </label>
              <select class="form-select form-select-sm" disabled={edit}>
                <option value="1" selected={false}>
                  زن
                </option>
                <option value="2" selected={true}>
                  مرد
                </option>
              </select>
              <div className="input-group-text btn btn-info" onClick={handleChange}>ویرایش</div>
            </div>{" "}
            {/* sex */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
