import React from "react";
import TodaysDate from "./TodaysDate";
import Button from "react-bootstrap/Button";
import '../App.css';

class DisplayBox extends React.Component{
    constructor(){
        super();
        this.state={
            lastTime: '',
        };

        this.handleClick = this.handleClick.bind(this);
        this.getLastTime = this.getLastTime.bind(this);
    }

    getLastTime(){
        return this.state.lastTime;
    }

    handleClick() {
        //TODO pass timestamp to date component
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();
        const date = today.getDay();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        this.setState({
            lastTime: `${month}/${date}/${year} at ${hours}:${minutes}`
        });
    }

    render(){
        return (
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col align-self-center">
                    <h1>When Did Ein Pee Last?</h1>
                    <TodaysDate date={this.getLastTime}/>
                    <Button onClick={this.handleClick}>Log</Button>
                    </div>
                </div>
            </div>
        );
    }

}

export default DisplayBox;