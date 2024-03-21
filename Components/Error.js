import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError()
    console.log("From the error.js")
    console.log(err)
    return(
        <div>
           
        </div>
    )
}
export default Error;