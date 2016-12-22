import React from "react";
import Clock from "Clock";
import Controls from "Controls";

export default class Timer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            timerStatus: "stopped"
        };


        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.timerStatus !== this.state.timerStatus) {
            switch (this.state.timerStatus) {
                case "started":
                    this.startTimer();
                    break;
                case "stopped":
                    this.setState({ count: 0 });
                case "paused":
                    clearInterval(this.timerID);
                    this.timerID = undefined;
                    break;
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        this.timerID = undefined;
    }


    handleStatusChange(newStatus) {
        this.setState({ timerStatus: newStatus });
    }


    startTimer() {
        this.timerID = setInterval(() => {
            let newCount = this.state.count;
            this.setState({
                count: ++newCount
            });
        }, 1000);
    }

    render() {
        let {count, timerStatus} = this.state;

        return (
            <div>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
}
