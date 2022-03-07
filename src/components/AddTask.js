import React, { useState } from "react";

const AddTask = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submitFunc=(e)=>{
    e.preventDefault();
    if(!title){
        alert("Please add a task");
    }else{
    const d=new Date();
    const date=[d.getMonth()+1,
        d.getDate(),
        d.getFullYear()].join('/')+' '+
       [d.getHours(),
        d.getMinutes(),
        d.getSeconds()].join(':');
        const userId=props.userId;
    props.add({title,desc,date,userId});
    setTitle("");
    setDesc("");
       }
  }

  return (
    <div>
      <form className="add-form" onSubmit={submitFunc}>
        <div className="form-control1">
          <label htmlFor="title">Task Title</label>
          <input
            type="text"
            name=""
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add Task"
          />
        </div>
        <div className="form-control1">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            name=""
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Add Description"
          />
        </div>
        <button type="submit" className="btn btn-block">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
