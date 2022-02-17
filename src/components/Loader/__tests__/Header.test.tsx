import React from "react";
import Loader from "../index";

describe("<Loader />", () => {
    test("should display the loader", () => {
        const component = <Loader />
        expect(component).toMatchSnapshot()
    });
});