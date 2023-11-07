import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import {getDatabase, ref, get} from 'firebase/database';
import { firebaseConfig } from '../services/firebase.config';

const Log = () => {
    const [logs, setLogs] = useState([]);
    

    useEffect(() => {
        const db = firebase.database();
        db.ref('logs').on('value', (snapshot) => {
            const data = snapshot.val();
            setLogs(data);
        });
    }, []);

    return (
        <div>
            {Object.keys(logs).map((key) => (
                <div key={key}>
                    <h2>{logs[key].title}</h2>
                    <p>{logs[key].content}</p>
                </div>
            ))}
        </div>
    );
};

export default Log;
