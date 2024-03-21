import { useState } from "react";
const User=({name,loc})=>{
    const [count]=useState(0);
    return <div className="user">
        <h2>Count:{count}</h2>
        <h2>{"Name"}-{name}</h2>
        <h3>{"Location"}-{loc}</h3>
    </div>
}
export default User;