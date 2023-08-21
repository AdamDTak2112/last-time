import React from "react";
import TodaysDate from "./TodaysDate";
import Button from "react-bootstrap/Button";
import '../App.css';

class DisplayBox extends React.Component{
    constructor(props){
        super(props);
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
        console.log(today.toString());
        const month = today.getMonth();
        console.log("month: " + month);
        const year = today.getFullYear();
        console.log("year: " + year);
        const date = today.getDate();
        console.log("date: " + date);
        const hours = today.getHours();
        console.log("month: " + month);
        const minutes = today.getMinutes();
        console.log("minutes: " + minutes);
        //console.log(`${month}/${date}/${year} at ${hours}:${minutes}`)
        this.setState(() => {
            return {
            lastTime: `${month}/${date}/${year} at ${hours}:${minutes}`
        }});
        console.log(this.state.lastTime);
    }

    render(){
        return (
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col align-self-center">
                    <h1>When Did Ein Pee Last?</h1>
                    <TodaysDate date={this.state.lastTime}/>
                    <Button onClick={this.handleClick}>Log</Button>
                    </div>
                </div>
            </div>
        );
    }

}

export default DisplayBox;