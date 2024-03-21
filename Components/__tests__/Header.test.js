import { Provider } from "react-redux"
import Header from "../Header"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import {fireEvent, render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
test("Should load header component with a login button",()=>{
    render( <BrowserRouter>
        <Provider store={appStore}>
          render(<Header/>)
        </Provider>
      </BrowserRouter>)
    const loginBtn=screen.getByRole("button",{name:"Login"})
    expect(loginBtn).toBeInTheDocument();
})
it("Should change Login button to Logout on click",()=>{
    render( <BrowserRouter>
        <Provider store={appStore}>
          render(<Header/>)
        </Provider>
      </BrowserRouter>)
    const loginBtn=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginBtn);
    const logoutBtn=screen.getByRole("button",{name:"Logout"});
    expect(logoutBtn).toBeInTheDocument();
})