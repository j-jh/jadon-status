"use client"
import { useState, useEffect } from "react"
export default function Landing() {
    // current time object
    const [time, setTime] = useState(new Date);
    // boolean to store button toggle state
    const [showCheck, setShowCheck] = useState(false);
    const [daySinceGrad, setDaySinceGrad] = useState(0);

    /*
        on component mount:
        - set interval to call the following function every 1000ms:
            - update time
            - calculate day since grad
            - other stuff
        - return cleanup upon dismount

    */
    useEffect(() => {
        const interval = setInterval(() =>
            setTime(new Date), 1000);
        // calc days since grad
        const calcDiff = (new Date() - new Date("2023-05-30")) / (1000 * 60 * 60 * 24);
        // round 2 to digits
        setDaySinceGrad(Math.round(calcDiff * 100) / 100);
        // cleanup to stop prev intervals
        return () => clearInterval(interval);
    }, [])

    /*
        event handler to allow for rendered components to show for 1500ms
    */
    function handleCheck() {
        setShowCheck(true)
        setTimeout(() => setShowCheck(false), 1500);
    }

    return (
        <div>
            <h2>As of {time.toLocaleString()}</h2>
            <h2>{daySinceGrad} days post graduation</h2>
            <h2>Does Jadon have a fulltime job?</h2>
            <button style={{
                fontSize: '2rem',
                padding: '2rem',
                fontFamily: "Comic Sans MS"
            }} onClick={handleCheck}>Click to Check</button>
            <h1>{showCheck && "no"}</h1>
            {showCheck &&
                <img src="https://i.pinimg.com/736x/6d/3a/83/6d3a8347906bad1f5342d364a7ae26ea.jpg"
                    alt="Damgom crying"
                    width="100%"
                ></img>}
        </div>
    )
}
