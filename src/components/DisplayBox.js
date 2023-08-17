import React from "react";
import TodaysDate from "./TodaysDate";
import Button from "react-bootstrap/Button";

class DisplayBox extends React.Component{
    constructor(){
        super();
        this.state={
            
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("clicked");
    }

    render(){
        return (
            <div className="container">
                <h1>When Did Ein Pee Last?</h1>
                <TodaysDate/>
                <Button onClick={this.handleClick}/>
            </div>
        );
    }

}

export default DisplayBox;