import React from "react";
import HabitList from "../HabitList/HabitList";
import HabitHistory from "../HabitHistory/HabitHistory";
import './styles.css'




const Dashboard = () => {

    return (
      <div className="dashboard-container">
        <HabitList />
        <HabitHistory />
      </div>
    )
}


export default Dashboard;