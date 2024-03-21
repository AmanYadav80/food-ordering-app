import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import userContext from "../utils/userContext";
class About extends React.Component{
    constructor(props){
        super(props)
        // console.log("Parent Constructor")
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Haryana",
            }
        }
    }
    async componentDidMount(){
       const data=await fetch("https://api.github.com/users/AmanYadav80")
       const json=await data.json()
       console.log("This is the github api's data")
       this.setState({
        userInfo:json,
       })
    }
    render(){
        // console.log("Parent Render")
        const { login , avatar_url,name}=this.state.userInfo;
        return <div className="user">
             <img src={avatar_url} className="github-img"/>
             <h1 className="text-blue-500">{"Name"}-{name}</h1>
             <h2>{"Github Username"}-{login}</h2>
             <div>
                LoggedInUser:
                <userContext.Consumer>
                    {
                        ({loggedInUser})=><h1>{loggedInUser}</h1>
                    }
                </userContext.Consumer>
             </div>
        </div>
    }
}
export default About;