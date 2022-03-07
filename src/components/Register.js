import { React, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

export default function Register(props) {
  const [errorMessages, setErrorMessages] = useState({});
  const [users, setUsers] = useState([]);

  const registerFunc = (e) => {
    e.preventDefault();

    var { uname, em, pass } = document.forms[0];
    if (uname.value === "") {
      setErrorMessages({ name: "uname1", message: "Enter valid username" });
    } else {
      if (em.value === "") {
        setErrorMessages({ name: "email1", message: "Enter valid email" });
      } else {
        if (pass.value === "") {
          setErrorMessages({ name: "pass1", message: "Enter valid password" });
        } else {
          // localStorage.setItem("username", username.value);
          // localStorage.setItem("email", email.value);
          // localStorage.setItem("password", password.value);

          const database = async () => {
            const res = await fetch("http://localhost:5000/users");
            const data = await res.json();

            //Find user login info
            const userData = data.find(
              (user) =>
                user.username === uname.value || user.email === uname.value
            );
            if (userData) {
              setErrorMessages({
                name: "uname1",
                message: "Username exists already",
              });
            } else {
              const username = uname.value;
              const email = em.value;
              const password = pass.value;

              const addUser = async (user) => {
                const res = await fetch("http://localhost:5000/users", {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify(user),
                });
              };
              addUser({ username, email, password });

              setErrorMessages({
                name: "success1",
                message: "You are registered successfully",
              });

              uname.value = "";
              em.value = "";
              pass.value = "";
            }
          };
          database();
        }
      }
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <>
    {!props.loggedIn?
    (
    <div className="container mt-2">
      <h2 className="my-3">Register here</h2>
      <form className="row g-3" onSubmit={registerFunc}>
        <div className="col-12">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input type="text" className="form-control" name="uname" />
          {renderErrorMessage("uname1")}
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" name="em" />
          {renderErrorMessage("email1")}
        </div>
        <div className="col-md-12">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" name="pass" />
          {renderErrorMessage("pass1")}
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-block">
            Register
          </button>
          {renderErrorMessage("success1")}
        </div>
        <p>
          If you have an account,{" "}
          <Link style={{ textDecoration: "none" }} to="/Login">
            Click here
          </Link>
        </p>
      </form>
    </div>
    ):
    <Navigate to="/Dashboard" />
}
    </>
  );
}
