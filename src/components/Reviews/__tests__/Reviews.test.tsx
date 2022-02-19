import React from "react";
import Reviews from "../index";

describe("<Reviews />", () => {
    test("should display the Reviews", () => {
        const component = <Reviews />
        expect(component).toMatchSnapshot()
    });
});