import React from "react";
import TodaysDate from "./TodaysDate";
import Button from "react-bootstrap/Button";

class DisplayBox extends React.Component{
    constructor(){
        super();
        

    }

    handleClick(){

    }

    render(){
        return (
            <div>
                <h1>When Did Ein Pee Last?</h1>
                <TodaysDate/>
                <Button onClick={handleClick()}/>
            </div>
        );
    }

}

export default DisplayBox;