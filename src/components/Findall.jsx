import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./homepage.module.css"

const Findall = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/users")
      .then((res) => {
        console.log(res.data);
        setContent(res.data.body);
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
  }, []);

  return (
    <div id={style.userpage}>
      {content.map((x) => (
        <div id={style.card} key={x.id}>
          <table>
            <tbody>
              <tr>
                <td><h4>Name:</h4></td>
                <td><h4>{x.name}</h4></td>
              </tr>
              <tr>
                <td><h4>Phone:</h4></td>
                <td><h4>{x.phone}</h4></td>
              </tr>
              <tr>
                <td><h4>Email:</h4></td>
                <td><h4>{x.email}</h4></td>
              </tr>
              <tr>
                <td><h4>Password:</h4></td>
                <td><h4>{x.password}</h4></td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Findall;
