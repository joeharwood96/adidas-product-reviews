import React from "react";
import Header from "../index";

describe("<Header />", () => {
    test("should display the header", () => {
        const component = <Header />
        expect(component).toMatchSnapshot()
    });
});