import { createContext, useContext, useReducer } from "react";

const userContext=createContext({
    loggedInUser:"Default User"
});
export default userContext;