import React from "react";
import TodaysDate from "./TodaysDate";
import Button from "react-bootstrap/Button";
import '../App.css';

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
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col align-self-center">
                    <h1>When Did Ein Pee Last?</h1>
                    <TodaysDate/>
                    <Button onClick={this.handleClick}>Log</Button>
                    </div>
                </div>
            </div>
        );
    }

}

export default DisplayBox;