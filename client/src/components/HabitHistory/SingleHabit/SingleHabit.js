
import React from "react";
import './style.css'

const SingleHabit = () => {

    return (
        <div className="single-habit-container">
            
            <div className="habit-history-details">
            <p className='mb-0'>Book Reading</p>
            <p className='mb-0'>Every Day</p>
            </div>
           
            <div className="habit-history-dates">
                <div>
                    <div>Tue</div>
                    <div>17</div>
                </div>

                <div>
                    <p className="mb-0">Tue</p>
                    <p className="mb-0">17</p>
                </div>

                <div>
                   <p className="mb-0">Tue</p>
                    <p className="mb-0">17</p>
                </div>

                <div>
                     <p className="mb-0">Tue</p>
                    <p className="mb-0">17</p>
                </div>

                <div>
                <p className="mb-0">Tue</p>
                    <p className="mb-0">17</p>
                </div>


                <div>
                <p className="mb-0">Tue</p>
                    <p className="mb-0">17</p>
                </div>

                <div>
                <p className="mb-0">Tue</p>
                    <p className="mb-0">17</p>
                </div>

            </div>  
            
            <div className="habit-history-options">
            <i class="fa-duotone fa-calendar"></i>
            <i class="fa-solid fa-chart-simple"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>

        </div>
    )
}

export default SingleHabit