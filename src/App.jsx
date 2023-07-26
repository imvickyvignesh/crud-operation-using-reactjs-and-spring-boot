import React from "react";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterUser from "./components/RegisterUser";
import Findall from "./components/Findall";
import UpdateUser from "./components/UpdateUser";
import FindById from "./components/FindById";
import DeleteUser from "./components/DeleteUser";
import VerifyByEmail from "./components/VerifyByEmail";
import VerifyByPhone from "./components/VerifyByPhone";
import VerifyByName from "./components/SearchByName";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<RegisterUser />} path="/registeruser" />
          <Route element={<UpdateUser/>} path="/edit"/>
          <Route element={<Findall />} path="/findall" />
          <Route element={<FindById />} path="/findbyid" />
          <Route element={<DeleteUser />} path="/deleteuser" />
          <Route element={<VerifyByEmail />} path="/verifybyemail" />
          <Route element={<VerifyByPhone />} path="/verifybyphone" />
          <Route element={<VerifyByName/>} path="/verifybyname" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
