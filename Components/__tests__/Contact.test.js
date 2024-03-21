import Contact from "../Contact"
import "@testing-library/jest-dom"
import {render,screen} from "@testing-library/react"
import { hasUncaughtExceptionCaptureCallback } from "process";
test("Should load the Contact Us component",()=>{
    render(<Contact/>);
    // const heading=screen.getByRole("heading");
    // expect(heading).toBeInTheDocument()
    // const button=screen.getByRole("button");
    // expect(button).toBeInTheDocument();
    const inputBoxes=screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
})