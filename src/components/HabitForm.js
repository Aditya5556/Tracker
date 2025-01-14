import React, { useState } from "react";

function HabitForm({ addHabit }) {
  const [habit, setHabit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit.trim()) {
      addHabit(habit);
      setHabit("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Enter a habit"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default HabitForm;
