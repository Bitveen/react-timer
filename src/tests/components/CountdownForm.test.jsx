import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import TestUtils from "react-addons-test-utils";


import CountdownForm from "CountdownForm";


describe("CountdownForm", () => {
    it("should exist", () => {
        expect(CountdownForm).toExist();
    });

    it("should call onSetSeconds if valid seconds entered", () => {
        let spy = expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetSeconds={spy}/>);
        let rootElem = ReactDOM.findDOMNode(countdownForm);
        countdownForm.refs.seconds.value = "61";

        TestUtils.Simulate.submit(rootElem.querySelector("form"));

        expect(spy).toHaveBeenCalledWith(61);

    });


    it("should not call onSetSeconds if invalid seconds entered", () => {
        let spy = expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetSeconds={spy}/>);
        let rootElem = ReactDOM.findDOMNode(countdownForm);
        countdownForm.refs.seconds.value = "abc";

        TestUtils.Simulate.submit(rootElem.querySelector("form"));

        expect(spy).toNotHaveBeenCalled();

    });





});
