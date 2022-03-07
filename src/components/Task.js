import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = (props) => {
  return (
    <div className="task">
      <h3>
        {props.title}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => {
            props.delete(props.id);
          }}
        />
      </h3>
      <p>{props.desc}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default Task;
