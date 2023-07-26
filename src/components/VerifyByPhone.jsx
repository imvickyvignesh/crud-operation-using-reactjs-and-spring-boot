import axios from "axios";
import React, { useState } from "react";
import style from "./homepage.module.css";

const VerifyByPhone = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8080/users/verify-phone?phone=${phone}&password=${password}`
      )
      .then((response) => {
        // const { status } = response.data;
        setVerificationStatus("User Verified");
        console.log("Verification Status:User Verified");
      })
      .catch((error) => {
        console.log("User Not Registered");
        setVerificationStatus("");
      });
  };

  return (
    <div id={style.myform4}>
      <form action="">
        <div>
          <tr>
            <th>
              <h4>Verify User</h4>
            </th>
          </tr>

          <tr>
            <td>
              <label>Phone:</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <th>
            <button onClick={handleSubmit}>Submit</button>
            </th>
          </tr>
        </div>
      </form>

      {verificationStatus ? (
        <p>Verification Status: User Verified</p>
      ) : (
        <p>Verification Status:User Not Registered</p>
      )}
    </div>
  );
};

export default VerifyByPhone;
