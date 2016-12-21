import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import TestUtils from "react-addons-test-utils";

import Controls from "Controls";


describe("Controls", () => {
    it("should exist", () => {
        expect(Controls).toExist();
    });

    describe("render", () => {
        it("should render pause when started", () => {
            let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
            let elemRoot = ReactDOM.findDOMNode(controls);
            let pauseButton = elemRoot.querySelector("button.pause");

            expect(pauseButton).toExist();

        });

        it("should render start when paused", () => {
            let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
            let elemRoot = ReactDOM.findDOMNode(controls);
            let startButton = elemRoot.querySelector("button.start");

            expect(startButton).toExist();

        });



    });



});
