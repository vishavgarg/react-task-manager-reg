import React, { useState } from "react";

const Account = (props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const database = async () => {
    const res = await fetch(`http://localhost:5000/users/${props.userId}`);
    const data = await res.json();
    return data;
  };
  const fetchData=async ()=>{
    const userUpdate=await database();
      console.log(userUpdate.password)
  }
  fetchData();
  

  
  const updateDetails = (e) => {
    e.preventDefault();
    if(userName===""||email===""){

    }
    else{

    const updateAccount= async (id)=>{
      const userUpdate=await database(id);
      const updatedInfo={...userUpdate,username:userName,email:email}

      const res=await fetch(`http://localhost:5000/users/${props.userId}`,{
        method:'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(updatedInfo)
      })

      const data= await res.json()
    }

    updateAccount();
    document.forms[0].reset();
  }
  };
  return (
    <>
      <div className="">
        <div className="container mt-2">
          <h2 className="my-3">Update Account details</h2>

          <form className="row g-3" onSubmit={updateDetails}>
            <div className="col-12">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="uname"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label htmlFor="username" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                name="uname"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
        <div className="container mt-2">
          <h2 className="my-3">Update Password</h2>
          <div className="col-md-12">
            <label htmlFor="password" className="form-label">
              Old Password
            </label>
            <input type="password" className="form-control" name="pass" />
          </div>
          <div className="col-md-12">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input type="password" className="form-control" name="pass" />
          </div>
          <div className="col-md-12">
            <label htmlFor="password" className="form-label">
              Confirm Password
            </label>
            <input type="password" className="form-control" name="pass" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
