import React from "react";
import {fireEvent, render} from '@testing-library/react';  
import Search from "../index";

describe("<Search />", () => {
    it("should display the search", () => {
        const component = <Search />
        expect(component).toMatchSnapshot()
    })

    it("updates on change", () => {
        const { queryByPlaceholderText } = render(<Search />)
        const searchInput = queryByPlaceholderText("Search")
        
        fireEvent.change(searchInput as HTMLInputElement, {target: { value: "test"}})
        expect((searchInput as HTMLInputElement).value).toEqual("test")
    })
});