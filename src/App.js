import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Account from "./components/Account";

function App() {
  const [active, setActive] = useState("home");

  const [loggedIn, setLoggedIn] = useState(false);
  const [userId,setUserId]=useState();

  const activeFunc = (e) => {
    setActive(e);
  };

  const loggedInFunc = (e,user) => {
    setLoggedIn(e);
    setUserId(user);
  };

  return (
    <BrowserRouter>
      <>
        <Navbar
          active={active}
          click={activeFunc}
          loggedIn={loggedIn}
          loggedInFunc={loggedInFunc}
        />
        <Routes>
          <Route path="/" element={<Register loggedIn={loggedIn} />} />
          <Route
            path="/Login"
            element={<Login loggedIn={loggedIn} loggedInFunc={loggedInFunc} />}
          />
          {/* <Route path="/Login" element={<Login />} /> */}
          {/* <Route element={<ProtectedRoutes />}> */}
          <Route
            path="/Dashboard"
            element={<Dashboard loggedIn={loggedIn} userId={userId} />}
          />
          <Route path="/Account" element={<Account loggedIn={loggedIn} userId={userId} />} />
          {/* </Route> */}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
