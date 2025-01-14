import React, { useState, useEffect } from "react";
import HabitForm from "../components/HabitForm";
import HabitList from "../components/HabitList";
import HabitProgress from "../components/HabitProgress";
import AnimatedHeader from "../components/AnimatedHeader";
import AnimatedCard from "../components/AnimatedCard";
import ScrollSection from "../components/ScrollSection";
import HoverEffect from "../components/HoverEffect";

import "./HomePage.css"; // Import custom CSS for animations

function HomePage() {
  const [habits, setHabits] = useState([]);
  const [motivationalMessage, setMotivationalMessage] = useState("");

  // Sample motivational messages
  const motivationalQuotes = [
    "Keep pushing, you're doing great!",
    "Believe in yourself and all that you are.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going!"
  ];

  // Fetch a random motivational quote
  const getRandomMessage = () => {
    const randomMessage =
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setMotivationalMessage(randomMessage);
  };

  const addHabit = (name) => {
    setHabits([...habits, { name, completed: false, progress: 0 }]);
  };

  const toggleHabit = (index) => {
    const updatedHabits = habits.map((habit, i) =>
      i === index ? { ...habit, completed: !habit.completed } : habit
    );
    setHabits(updatedHabits);

    // Show a motivational message when a task is completed
    if (updatedHabits[index].completed) {
      getRandomMessage();
    }
  };

  const deleteHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
  };

  const updateHabit = (index, newName) => {
    const updatedHabits = habits.map((habit, i) =>
      i === index ? { ...habit, name: newName } : habit
    );
    setHabits(updatedHabits);
  };

  const updateProgress = (index, newProgress) => {
    const updatedHabits = habits.map((habit, i) =>
      i === index ? { ...habit, progress: newProgress } : habit
    );
    setHabits(updatedHabits);
  };

  return (
    <div className="home-page">
      {/* Habit Form */}
      <HabitForm addHabit={addHabit} />

      {/* Motivational message */}
      {motivationalMessage && (
        <div className="motivational-message fade-in">
          <h2>{motivationalMessage}</h2>
        </div>
      )}

      {/* Habit List */}
      <HabitList
        habits={habits}
        toggleHabit={toggleHabit}
        deleteHabit={deleteHabit}
        updateHabit={updateHabit}
        updateProgress={updateProgress}
      />

      {/* Habit Progress Tracker */}
      <HabitProgress habits={habits} />
    </div>
  );
}

export default HomePage;