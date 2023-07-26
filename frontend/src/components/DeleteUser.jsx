import axios from 'axios';
import React, { useState } from 'react'
import style from "./homepage.module.css"

const DeleteUser = () => {
  const [id, setId] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8080/users/${id}`)
      .then(() => {
        console.log("DATA HAS BEEN SUCCESSFULLY Deleted");
      })
      .catch(() => {
        console.log("something is fishy");
      });
  };

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
    </div>
  )
}

export default DeleteUser