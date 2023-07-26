import { useState } from "react";
import axios from "axios";
import style from "./homepage.module.css";

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    const user = { name, phone, password, email };
    axios.post("http://localhost:8080/users", user).then(() => {
      console.log("data has been added");
    });
    event.preventDefault();
  };

  return (
    <div id={style.myform}>
      <form action="">
        <tr>
          <th colSpan="3">
            <h3>User Registration</h3>
          </th>
        </tr>

        <tr>
          <td>
            <label>Name:</label>
          </td>

          <td>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Phone no:</label>
          </td>
          <td>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </td>
        </tr>

        <tr>
          <td>
            <label>Email:</label>
          </td>
          <td>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Password:</label>
          </td>
          <td>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </td>
        </tr>

        <tr>
        <th colSpan="2">
          <button onClick={handleSubmit}>Submit</button>
          </th>
        </tr>
      </form>
    </div>
  );
};

export default RegisterUser;
