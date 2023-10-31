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
            lastTime: null,
        };

        this.handleClick = this.handleClick.bind(this);
        this.getLastTime = this.getLastTime.bind(this);
        this.setNewLastTime = this.setNewLastTime.bind(this);
        this.concatDate = this.concatDate.bind(this);
        this.getDbRef = this.getDbRef.bind(this);
    }

    //TODO fix this so it doesn't run twice
    componentDidMount() {
        this.setState({
            lastTime: this.getLastTime()
        })
    }

    handleClick() {
        const today = new Date();
        //console.log(this.concatDate(today));
        this.setState({
            lastTime: this.concatDate(today)
        });
        this.setNewLastTime();
    }

    getLastTime() {
        const dbRef = this.getDbRef();
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            this.setState({
                lastTime: data
            });
        });
    }

    getDbRef() {
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);
        const dbRef = ref(db, 'lastTime/');
        return dbRef;
    }

    
    setNewLastTime() {
        const dbRef = this.getDbRef();
        set(dbRef, this.state.lastTime);
    }

    concatDate(date) {
        return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
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