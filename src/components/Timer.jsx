import React from "react";
import Clock from "./Clock";

export default class Timer extends React.Component {
    render() {
        return (
            <div>
                <h3>Timer.jsx</h3>
                <Clock totalSeconds={62}/>
            </div>
        );
    }
}
