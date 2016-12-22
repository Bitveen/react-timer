import React from "react";



export default class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.onStatusChange = this.onStatusChange.bind(this);
    }

    onStatusChange(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    }


    render() {
        let { countdownStatus } = this.props;

        let renderStartStopButton = () => {
            if (countdownStatus === "started") {
                return <button className="button secondary pause" onClick={this.onStatusChange('paused')}>Pause</button>
            } else {
                return <button className="button primary start" onClick={this.onStatusChange('started')}>Start</button>
            }
        };


        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow clear" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
}



Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
};
