import React from "react";
import TodaysDate from "./TodaysDate";
import Button from "react-bootstrap/Button";
import '../App.css';

class DisplayBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lastTime: 'first time',
        };

        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick() {
        //TODO pass timestamp to date component
        const today = new Date();
        this.setState({
            lastTime: today.toString()
        })
        //console.log(this.state.lastTime); 
    }

    render(){
        return (
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col align-self-center">
                    <h1 className="heading">When Did Ein Pee Last?</h1>
                    <TodaysDate date={this.state.lastTime}/>
                    <Button onClick={this.handleClick}>Log</Button>
                    </div>
                </div>
            </div>
        );
    }

}

export default DisplayBox;