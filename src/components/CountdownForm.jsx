import React from "react";


export default class CountdownForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        // submit form
        let strSeconds = this.refs.seconds.value;

        if (strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = "";
            this.props.onSetSeconds(parseInt(strSeconds, 10));
        }

    }



    render() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds" />
                    <button type="submit" className="button expanded">Start</button>
                </form>
            </div>
        );
    }
}
