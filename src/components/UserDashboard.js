import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Dashboard = ({ user }) => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [motivationMessage, setMotivationMessage] = useState("");

  // Random motivational quotes
  const motivationalQuotes = [
    "Great job! You're making progress!",
    "Keep it up, you're doing amazing!",
    "You're unstoppable! Keep going!",
    "You’re closer than you think!",
    "Every step counts. You're doing great!"
  ];

  const addTask = () => {
    if (taskInput) {
      const newTask = {
        id: uuidv4(),
        text: taskInput,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput("");
    }
  };

  const toggleCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    );
    setTasks(updatedTasks);

    // Display random motivation when task is completed
    const task = updatedTasks.find((task) => task.id === taskId);
    if (task.completed) {
      const randomQuote =
        motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
      setMotivationMessage(randomQuote);
    } else {
      setMotivationMessage("");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f7f7f7",
        borderRadius: "10px",
        width: "80%",
        margin: "0 auto",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>Welcome, {user.displayName || "User"}!</h2>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter a new task"
        style={{
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          width: "100%",
          marginBottom: "15px",
        }}
      />
      <button
        onClick={addTask}
        style={{
          padding: "10px 15px",
          backgroundColor: "#4caf50",
          color: "white",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>

      <div style={{ marginTop: "30px" }}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              key={task.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "gray" : "black",
                }}
              >
                {task.text}
              </span>
              <button
                onClick={() => toggleCompletion(task.id)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: task.completed ? "#f44336" : "#4caf50",
                  color: "white",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
            </div>
          ))
        ) : (
          <p>No tasks yet. Add some tasks to get started!</p>
        )}
      </div>

      {motivationMessage && (
        <div
          style={{
            marginTop: "30px",
            padding: "15px",
            backgroundColor: "#f4f7fb",
            borderRadius: "8px",
            textAlign: "center",
            fontStyle: "italic",
            color: "#4caf50",
          }}
        >
          {motivationMessage}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
