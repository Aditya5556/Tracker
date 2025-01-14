import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";

function HabitProgress({ habits }) {
  const data = habits.map((habit) => ({
    name: habit.name,
    progress: habit.progress,
  }));

  const chartVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={chartVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="progress" fill="#82ca9d" />
      </BarChart>
    </motion.div>
  );
}

export default HabitProgress;
