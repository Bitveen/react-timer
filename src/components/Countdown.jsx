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
        this.handleStatusChange = this.handleStatusChange.bind(this);
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

            if (newSeconds === 0) {
                this.setState({ countdownStatus: "stopped" });
            }

        }, 1000);



    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case "started":
                    this.startTimer();
                    break;
                case "stopped":
                    this.setState({totalSeconds: 0});
                case "paused":
                    clearInterval(this.timerID);
                    this.timerID = undefined;
                    break;
            }
        }
    }

    handleStatusChange(newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        this.timerID = undefined;
    }


    render() {
        let {totalSeconds, countdownStatus} = this.state;


        let renderControlArea = () => {
            if (countdownStatus !== "stopped") {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
            } else {
                return <CountdownForm onSetSeconds={this.setSeconds} />;
            }
        };


        return (
            <div>
                <Clock totalSeconds={totalSeconds}/>
                {renderControlArea()}
            </div>

        );
    }
}
