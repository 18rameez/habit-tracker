import { useEffect } from 'react';
import './style.css'


const DateComponent = ({dateObj}) => {

    const date = new Date()
    let parts = date.toString().split(" ");
    const curentMonth = parts[1]
    const currentDate = parts[2]



     if(dateObj.month == curentMonth && dateObj.dayOfMonth == currentDate){
            console.log(curentMonth , currentDate);
            
     }

    

    return( 
        <div className='single-date-conatiner'>
           <p className='unselectable mb-0 text-center'>{dateObj.month}</p>
           <p className='unselectable mb-0 text-center'>{dateObj.dayOfMonth}</p> 
        </div>
    )
}

export default DateComponent;