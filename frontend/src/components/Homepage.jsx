import React from "react";
import { Link } from "react-router-dom";
import style from "./homepage.module.css"

const Homepage = () => {
  return (
    <div>
      <section id={style.nav}>
        <Link to="/registeruser">RegisterUser</Link>
        <Link to="/edit">UpdateUser</Link>
        <Link to="/findbyid">FindById</Link>
        <Link to="/findall">FindAll</Link>
        <Link to="/deleteuser">DeleteUser</Link>
        <Link to="/verifybyemail">VerifyByEmail</Link>
        <Link to="/verifybyphone">VerifyByPhone</Link>
        <Link to="/verifybyname">VerifyByName</Link>
      </section>
    </div>
  );
};

export default Homepage;
