import React from "react";
import DashboardHeader from "./DashboardHeader";
import Tasks from "./Tasks";
import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import { Navigate } from "react-router-dom";

export default function Dashboard(props) {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks= async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  },[])
  
  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/tasks?userId=${props.userId}`);
    const data = await res.json();
    return data;
  }
  

  // Deleting the task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE',
    })

    // console.log("Delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Adding task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks',{
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(task),
    });
    
    const data = await res.json();
    setTasks([...tasks,data]);

    // const id = Math.floor(Math.random() * 100000) + 1;
    // console.log(task);
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  return (
    <>
    {props.loggedIn ? 
      (<div className="container my-3">

        <DashboardHeader
          title="Tasks list"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask add={addTask} userId={props.userId} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} delete={deleteTask} />
        ) : (
          "No tasks to show"
        )}
      </div>)
      :
      <Navigate to="/Login" />
}
    </>
  );
}
