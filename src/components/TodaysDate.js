import { useState } from "react";


function TodaysDate({date}){
    const [todaysDate, setTodaysDate] = useState(date);


    
    return(
        <div>
            <h2>{todaysDate}</h2>
        </div>
    );
}

export default TodaysDate;