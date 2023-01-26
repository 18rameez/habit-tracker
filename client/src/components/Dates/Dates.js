
import { useState, useRef, useEffect } from 'react';
import './styles.css'
import DateComponent from '../Date/Date'





const Dates = () => {

    const [last30Dates, setLast30Days] =  useState([])
    let ele ;
    let firstClick, draggedLength;
   
    useEffect(() => {
       ele = document.getElementsByClassName('dates-conatainer')[0]
       ele.scrollLeft = ele.scrollWidth;
       setLast30Days(getLast30Dates())
       ele.addEventListener('wheel', wheelScroll, { passive: false });

      
    },[])

    function wheelScroll (evt){
        let  ele = document.getElementsByClassName('dates-conatainer')[0]
        evt.preventDefault();
        ele.scrollLeft += evt.deltaY;     
    }

  

    return (

        <div>
        <div  className='dates-conatainer'>
            {
                last30Dates.map((date, pos) => {
                return   <DateComponent key={pos} dateObj={date} />
                })
            }
        </div>


        </div>
    
    )
}

function getLast30Dates(){

    const last30Days = [];

    for (let i = 31; i >= 0; i--) {

        const day = new Date();
        day.setDate(day.getDate() - i);

        let dateObject = {}
        let parts = day.toString().split(" ");

        
        dateObject.date =  parts[0]
        dateObject.month = parts[1]
        dateObject.dayOfMonth = parts[2];
        dateObject.year = parts[3];
        last30Days.push(dateObject);
    }

    return last30Days

}

export default Dates;