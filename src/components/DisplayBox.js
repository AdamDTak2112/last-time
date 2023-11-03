import { useState, useEffect } from "react";
import TodaysDate from "./TodaysDate";
import Button from "react-bootstrap/Button";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get} from "firebase/database";
import { firebaseConfig } from "../services/firebase.config";

import '../App.css';

export default function DisplayBox () {
    const [lastTime, setLastTime] = useState(null);

    //useEffect: loads the data on page load
    
    useEffect(() => {
        console.log("useEffect called");
        console.log("getting last time");
        setLastTime("loading...");
        const dbRef = getDbRef();
        get(dbRef, `lastTime/`).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                setLastTime(snapshot.val());
            } else {
                console.log("No data available");
            }
        });
    }, []);

    function handleClick() {
        const today = concatDate(new Date());
        console.log(today);
        setNewLastTime(today);
        setLastTime(today);
    }

    /* function getLastTime() {
        console.log("getting last time");
        const dbRef = getDbRef();
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            setLastTime(data); // TODO this is not working
        });
    } */

    function getDbRef() {
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);
        const dbRef = ref(db, 'lastTime/');
        return dbRef;
    }


    function setNewLastTime(newLastTime) {
        const dbRef= getDbRef();
        set(dbRef, newLastTime);
        console.log("sending new lastTime to server...");
    }

    function concatDate(date) {
        const hours = date.getHours() % 12 || 12;
        const minutes = date.getMinutes() < 10 ? '0' : '' + date.getMinutes();
        return (date.getMonth() + 1) 
            + "/" 
            + date.getDate() 
            + "/" + date.getFullYear() 
            + " " 
            + hours 
            + ":" 
            + minutes;
    }

    return (
        <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col align-self-center">
                    <h1 className="heading">When Did Ein Pee Last?</h1>
                    <TodaysDate date={lastTime}/>
                    <Button onClick={handleClick}>Log</Button>
                    </div>
                </div>
            </div>
    );
}