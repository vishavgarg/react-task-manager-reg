import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { Route, Routes, Navigate, Link, Outlet } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

export default function Login(props) {
  const [errorMessages, setErrorMessages] = useState({});
  // const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState();
 

  //User Login Info
  // let database = [
  //   { username: "ram", email: "ram@mail.in", password: "123" },
  //   { username: "raju", email: "raju@mail.in", password: "123" },
  //   { username: "varun", email: "varun@mail.in", password: "123" },
  //   { username: "mukesh", email: "mukesh@mail.in", password: "123" },
  // ];

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var { uname, pass } = document.forms[0];

    // let localUserName = localStorage.getItem("username");
    // let localEmail = localStorage.getItem("email");
    // let localPassword = localStorage.getItem("password");

  
  
    const database = async () => {
      const res = await fetch('http://localhost:5000/users');
      const data = await res.json();

      //Find user login info
      const userData = data.find(
        (user) => user.username === uname.value || user.email === uname.value
      );
  
      //Comparing user info
      // if(localUserName===uname.value || localEmail===uname.value){
      if (userData) {
        // if(localPassword!==pass.value){
        if (userData.password !== pass.value) {
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          // setLoggedIn(true);
          props.loggedInFunc(true,userData.id);
          setUserName(userData.username);
          // setUserName(localUserName);
        }
      } else {
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
    database();
    }

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="container mt-2">
      <h2 className="my-3">Login here</h2>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="username" className="form-label">
            Username/Email
          </label>
          <input type="text" className="form-control" name="uname" />
          {renderErrorMessage("uname")}
        </div>
        <div className="col-md-12">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" name="pass" />
          {renderErrorMessage("pass")}
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );

  // const checkUsers=()=>{
  //     let userName=document.getElementById("username");
  //     let password=document.getElementById("password");
  //     for(const i in users){
  //     if(userName.value===users[i].username || userName.value===users[i].email){
  //         console.log("Value matched");
  //     }
  // }
  // }

  return (
    <>
      {/* {loggedIn ? <div>User is successfully logged in</div> : renderForm} */}
      {/* {loggedIn ? <Dashboard username={userName} /> : renderForm} */}
      
      {/* {loggedIn ? <ProtectedRoutes loggedIn={loggedIn} /> : renderForm} */}

      {props.loggedIn ? <Navigate to="/Dashboard" /> : renderForm}
      

    </>
  );
}
