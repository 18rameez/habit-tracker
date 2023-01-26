
import React from "react";
import Habit from "../HabitList/Habit/Habit";
import SingleHabit from "./SingleHabit/SingleHabit";
import './styles.css'

const HabitHistory = () => {

    return (
        <div>
           <div className="habit-history-container card">
           <SingleHabit   />
           <SingleHabit   />
           <SingleHabit   />
           <SingleHabit   />
        </div>
        </div>
    )
}

export default HabitHistory