import React from "react";
import Habit from "./Habit/Habit";
import './styles.css'
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const HabitList = () => {

    const [habits, setHabits] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch('http://localhost:5001/habit')
          .then(response => {
            console.log(response)
            if(!response.ok){
                throw Error("Something went wrong, try again later")
            }
            return response.json()
          })
          .then(data => {
            console.log(data)
            setHabits(data)
          }).catch(error =>{
            setError(error) 
            console.log(error)
          });

      }, []);

     

    return (

        <div className="habitlist-container card">
          {
             habits.map(item => (
              <Habit key={item.habit_id}  data={item} />
             ))
          }

            <div>
            <button type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Create a new Habit</button>
            </div>

            <Modal />
        </div>

    )
}

export default HabitList;