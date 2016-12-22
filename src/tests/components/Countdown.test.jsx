import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import TestUtils from "react-addons-test-utils";

import Countdown from "Countdown";



describe("Countdown", () => {
    it("should exist", () => {
        expect(Countdown).toExist();
    });

    describe("setSeconds", () => {
        it("should set state to started and countdown", (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.setSeconds(3);


            // expect(countdown.state.totalSeconds).toBe(10);
            // expect(countdown.state.countdownStatus).toBe("started");

            setTimeout(() => {
                expect(countdown.state.totalSeconds).toBe(0);
                done();
            }, 3003);
        });

        it("should pause countdown on paused state", (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.setSeconds(3);
            countdown.handleStatusChange("paused");
            setTimeout(() => {
                expect(countdown.state.totalSeconds).toBe(3);
                expect(countdown.state.countdownStatus).toBe("paused");
                done();
            }, 1001);

        });


    });

});
