import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import TestUtils from "react-addons-test-utils";

import Clock from "Clock";


describe("Clock", () => {
    it("should exists", () => {
        expect(Clock).toExist();
    });


    describe("render", () => {
        it("should render clock to output", () => {
            let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            let clockText = ReactDOM.findDOMNode(clock).querySelector(".clock-text").innerHTML;
            let expectedText = "01:02";
            expect(clockText).toBe(expectedText);
        });
    });


    describe("formatSeconds", () => {
        it("should format seconds", () => {
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            let seconds = 615;
            let expected = "10:15";
            let actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
        });
        it("should format seconds when sec/min are less than 10", () => {
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            let seconds = 61;
            let expected = "01:01";
            let actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
        });
    });


});
