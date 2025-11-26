import React from "react";
import CountUp from "./CountUp";
import {
  FaCheckCircle,
  FaGraduationCap,
  FaSmile,
  FaClock,
} from "react-icons/fa";
import "./Statistics.css";

const statsData = [
  { id: 1, icon: <FaCheckCircle />, value: 10, label: "Completed Projects" },
  {
    id: 2,
    icon: <FaGraduationCap />,
    value: 3,
    label: "Years Learning Experience",
  },
  {
    id: 3,
    icon: <FaSmile />,
    value: 5,
    label: "Happy Clients",
  },
  { id: 4, icon: <FaClock />, value: 600, label: "Code Hours" },
];

export default function StatisticsSection() {
  return (
    <section className="statistics-section">
      <h2 className="section-title">My Statistics</h2>

      <div className="stats-grid">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">
              <CountUp
                from={0}
                to={stat.value}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
