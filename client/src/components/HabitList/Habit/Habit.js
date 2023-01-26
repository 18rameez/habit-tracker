import React from 'react';
import './style.css'


const Habit = ({data}) => {

    return (

        <div className='habit-container'>
          <i class="fa-solid fa-folder fa-xl"  style={{color: 'gray'}}></i>
          <div >
             <p className='mb-0'>{data.habit_name}</p>
            <p>Target: {data.habit_target + data.habit_unit}</p>
          </div>
            <input type="checkbox" />
        </div>
    )
}

export default Habit