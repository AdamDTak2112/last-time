import React from "react";
import TodaysDate from "./TodaysDate";
import Button from "react-bootstrap/Button";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue} from "firebase/database";
import { firebaseConfig } from "../services/firebase.config";

import '../App.css';

class DisplayBox extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            lastTime: 'first time',
            app: null
        };

        this.handleClick = this.handleClick.bind(this);
        this.getLastTime = this.getLastTime.bind(this);
    }

    componentDidMount() {
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);
        const dbRef = ref(db, 'lastTime/');
        this.setState({

            app: app,
            lastTime: this.getLastTime()
        })
    }

    handleClick() {
        const today = new Date();
        this.setState({
            lastTime: today.toString()
        });
    }

    getLastTime() {
        const db = getDatabase();
        const dbRef = ref(db, 'lastTime/');
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            this.setState({
                lastTime: data
            });
        });
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