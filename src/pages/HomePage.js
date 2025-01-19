import React, { useState } from "react";
import { Card, Input, Button, List, Typography, Progress } from "antd";
import { PlusOutlined, CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import "./HomePage.css";

// Register chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const { Title, Text } = Typography;

const HomePage = () => {
  const [newHabit, setNewHabit] = useState("");
  const [habits, setHabits] = useState([]);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  const addHabit = () => {
    if (newHabit) {
      const updatedHabits = [
        ...habits,
        { name: newHabit, completed: false, progress: 0 },
      ];
      setHabits(updatedHabits);
      setNewHabit("");
      updateChartData(updatedHabits);
    }
  };

  const toggleHabit = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].completed = !updatedHabits[index].completed;
    setHabits(updatedHabits);
  };

  const updateProgress = (index, progress) => {
    const updatedHabits = [...habits];
    updatedHabits[index].progress = progress;
    setHabits(updatedHabits);
    updateChartData(updatedHabits);
  };

  const deleteHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
    updateChartData(updatedHabits);
  };

  const updateChartData = (updatedHabits) => {
    const labels = updatedHabits.map((habit) => habit.name);
    const progressData = updatedHabits.map((habit) => habit.progress);
    setChartData({
      labels,
      datasets: updatedHabits.map((habit, index) => ({
        label: `${habit.name} Progress (%)`,
        data: progressData,
        borderColor: `rgba(${index * 60 + 100}, ${index * 60 + 50}, ${index * 60 + 30}, 1)`, // Dark color for the lines
        backgroundColor: `rgba(${index * 60 + 100}, ${index * 60 + 50}, ${index * 60 + 30}, 0.2)`, // Lighter background for each line
        borderWidth: 2,
        fill: true,
        lineTension: 0, // Makes the lines straight
        pointRadius: 5, // Points on the line for interactivity
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "rgba(255, 255, 255, 1)",
        pointBackgroundColor: `rgba(${index * 60 + 100}, ${index * 60 + 50}, ${index * 60 + 30}, 1)`,
      })),
    });
  };

  return (
    <div className="home-page">
      <Title level={2} className="title">
        Habit Tracker
      </Title>

      {/* Habit Input and Add Button */}
      <Card className="add-habit-card">
        <Input
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Add a new habit"
          className="habit-input"
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={addHabit}
          className="add-button"
        >
          Add Habit
        </Button>
      </Card>

      {/* Habit List */}
      <List
        className="habit-list"
        dataSource={habits}
        renderItem={(habit, index) => (
          <List.Item
            actions={[
              <Button
                type="text"
                icon={<CheckOutlined />}
                onClick={() => toggleHabit(index)}
                style={{ color: habit.completed ? "green" : "gray" }}
              />,
              <Button
                type="text"
                icon={<DeleteOutlined />}
                onClick={() => deleteHabit(index)}
                danger
              />,
            ]}
            className={`habit-item ${habit.completed ? "completed" : ""}`}
          >
            <div>
              <span
                className={habit.completed ? "habit-name completed-text" : "habit-name"}
              >
                {habit.name}
              </span>
              <Progress
                percent={habit.progress}
                size="small"
                onClick={() =>
                  updateProgress(index, Math.min(habit.progress + 10, 100))
                }
              />
            </div>
          </List.Item>
        )}
        bordered
      />

      {/* Progress Chart */}
      <Card className="chart-card">
        <Title level={4} className="chart-title">
          Progress Chart
        </Title>
        <Line data={chartData} options={{ responsive: true }} />
      </Card>
    </div>
  );
};

export default HomePage;
