import React from "react";
import Navigation from "./Navigation";

export default class main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navigation />
                {this.props.children}
            </div>
        );
    }
}
