import {useState} from 'react';

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    return `${month}/${date}/${year} at ${hours}:${minutes}`
  }


function TodaysDate(){
    const [currentDate, setCurrentDate] = useState(getDate());

    return(
        <div>
            <h2>{currentDate}</h2>
        </div>
    );
}

export default TodaysDate;