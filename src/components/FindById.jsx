import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./homepage.module.css";

const FindById = () => {
  const [id, setId] = useState("");
  const [userData, setUserData] = useState(null);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8080/users/${id}`)
      .then((resp) => {
        console.log("DATA HAS BEEN SUCCESSFULLY Fetched");
        setUserData(resp.data); // Store the fetched user data in state
      })
      .catch(() => {
        console.log("something is fishy");
        setUserData(null); // Clear the user data in case of an error
      });
  };

  useEffect(() => {
    if (userData !== null) {
      console.log(userData);
    }
  }, [userData]);

  return (
    <div id={style.myform4}>
      <form action="">
        <tr>
          <th colSpan="3">
            <h4>Fetch User Details By Id</h4>
          </th>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <th colSpan="2">
            <button onClick={handleSubmit}>Submit</button>
          </th>
        </tr>
      </form>
      {userData ? ( // Conditional rendering using the ternary operator
        <div id={style.myform}>
          <form action="">
            <tr>
              <th>
                <h2>User Details:</h2>
              </th>
            </tr>
            <tr>
              <td>
                {" "}
                <p>Name: {userData.body.name}</p>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <p>Email: {userData.body.email}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Phone: {userData.body.phone}</p>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <p>Password: {userData.body.password}</p>
              </td>
            </tr>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default FindById;
