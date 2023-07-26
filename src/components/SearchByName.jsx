import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./homepage.module.css";
import style1 from "./searchbyname.module.css";

const VerifyByName = () => {
  const [name, setName] = useState("");
  const [userData, setUserData] = useState(null);
  const [nameRecommendations, setNameRecommendations] = useState([]);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8080/users/name/${name}`)
      .then((resp) => {
        console.log("DATA HAS BEEN SUCCESSFULLY Fetched");
        setUserData(resp.data.body); // Store the fetched user data in state
        setNameRecommendations(resp.data.body.map((user) => user.name));
      })
      .catch((error) => {
        console.log("Error:", error);
        setUserData(null);
        setNameRecommendations([]);
      });
      
  };

  useEffect(() => {
    setNameRecommendations(userData?.map((user) => user.name) || []);
  }, [userData]);

  return (
    <div id={style1.myform5}>
      <form>
        <div id={style1.searchinput}>
          <tr>
            <th colSpan="3">
              <h4>Fetch User Details By Name</h4>
            </th>
          </tr>
          <br />
          <tr>
            <td>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  handleSubmit(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <th colSpan="2">
              <button onClick={handleSubmit}>Search</button>
            </th>
          </tr>
        </div>
      </form>

      <form>
        <div>
          <h1>
            {nameRecommendations.map((name) => (
              <span key={name}>
                {name}
                <br />{" "}
              </span>
            ))}
          </h1>
        </div>
      </form>
    </div>
  );
};

export default VerifyByName;
