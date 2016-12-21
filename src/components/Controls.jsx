import React from "react";



export default class Controls extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { countdownStatus } = this.props;

        let renderStartStopButton = () => {
            if (countdownStatus === "started") {
                return <button className="button secondary pause">Pause</button>
            } else if (countdownStatus === "paused") {
                return <button className="button primary start">Start</button>
            }
        };


        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow clear">Clear</button>
            </div>
        );
    }
}



Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired
};
