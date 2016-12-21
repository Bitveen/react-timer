import React from "react";
import Clock from "Clock";
import CountdownForm from "CountdownForm";
import Controls from "Controls";

export default class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalSeconds: 0,
            countdownStatus: "stopped"
        };

        this.setSeconds = this.setSeconds.bind(this);
    }

    setSeconds(seconds) {
        this.setState({
            totalSeconds: seconds,
            countdownStatus: "started"
        });
    }
    startTimer() {
        this.timerID = setInterval(() => {
            let newSeconds = this.state.totalSeconds - 1;
            this.setState({
                totalSeconds: newSeconds >= 0 ? newSeconds : 0
            });
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case "started":
                    this.startTimer();
                    break;
            }
        }
    }

    render() {
        let {totalSeconds, countdownStatus} = this.state;
        return (
            <div>
                <Clock totalSeconds={totalSeconds}/>
                <CountdownForm onSetSeconds={this.setSeconds}/>
                <Controls countdownStatus={countdownStatus} />
            </div>

        );
    }
}
