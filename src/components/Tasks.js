import React from "react";
import Task from "./Task";

const Tasks = (props) => {
  return (
    <div>
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          desc={task.desc}
          date={task.date}
          delete={props.delete}
        />
      ))}
    </div>
  );
};

export default Tasks;
