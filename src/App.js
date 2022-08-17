import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhoneLogin from "./Pages/AccountLogin/PhoneLogin";
import Response from "./Pages/AccountLogin/Response/Response";
import Profile from "./Pages/Profile/Profile";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {" "}
            <Route path="/" element={<PhoneLogin />}></Route>

            <Route path="/Response" element={<Response />} />
            <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
