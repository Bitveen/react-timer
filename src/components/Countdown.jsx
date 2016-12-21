import React from "react";
import Clock from "Clock";
import CountdownForm from "CountdownForm";


export default class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalSeconds: 0
        };

        this.setSeconds = this.setSeconds.bind(this);
    }

    setSeconds(seconds) {
        this.setState({
            totalSeconds: seconds
        });
    }


    render() {
        return (
            <div>
                <Clock totalSeconds={this.state.totalSeconds}/>
                <CountdownForm onSetSeconds={this.setSeconds}/>
            </div>

        );
    }
}
