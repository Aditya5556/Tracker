import React, { useState } from "react";
import { motion } from "framer-motion";

function HabitList({ habits, toggleHabit, deleteHabit, updateHabit, updateProgress }) {
  const [isEditing, setIsEditing] = useState(null);
  const [editedName, setEditedName] = useState("");

  const handleEdit = (index, name) => {
    setIsEditing(index);
    setEditedName(name);
  };

  const handleSave = (index) => {
    updateHabit(index, editedName);
    setIsEditing(null);
  };

  const listVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ul>
      {habits.map((habit, index) => (
        <motion.li
          key={index}
          variants={listVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3 }}
        >
          {isEditing === index ? (
            <>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <button onClick={() => handleSave(index)}>Save</button>
              <button onClick={() => setIsEditing(null)}>Cancel</button>
            </>
          ) : (
            <>
              <label>
                <input
                  type="checkbox"
                  checked={habit.completed}
                  onChange={() => toggleHabit(index)}
                />
                {habit.name}
              </label>
              <button onClick={() => handleEdit(index, habit.name)}>Edit</button>
              <button onClick={() => deleteHabit(index)}>Delete</button>
            </>
          )}
          <div>
            <label>Progress:</label>
            <select
              value={habit.progress}
              onChange={(e) => updateProgress(index, parseInt(e.target.value))}
            >
              <option value={0}>0%</option>
              <option value={50}>50%</option>
              <option value={100}>100%</option>
            </select>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}

export default HabitList;
