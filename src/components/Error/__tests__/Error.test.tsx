import React from "react";
import Error from "../index";

describe("<Error />", () => {
    test("should display the Error", () => {
        const component = <Error />
        expect(component).toMatchSnapshot()
    });
});