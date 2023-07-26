import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import style from "./homepage.module.css";

const UpdateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");

//   let {id}=useParams()
//   console.log(index);

//   let Navigator=useNavigate();

let handleSubmit=(e)=>{
  e.preventDefault()
  let payload={id,name,email,phone,password}
  axios.put(`http://localhost:8080/users`,payload)
  .then(()=>{
    console.log("DATA HAS BEEN SUCCESSFULLY UPDATED");
  })
  .catch(()=>{
    console.log("something is fishy");
})
//   Navigator("/findall")
//   window.location.assign("/findall")
}
  return (
    <div id={style.myform}>
    <form action="">
      <tr>
        <th colSpan="3">
          <h4>Update User Details</h4>
        </th>
      </tr>
      <tr>
          <td>
            <label>Id:</label>
          </td>

          <td>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </td>
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
  )
}

export default UpdateUser