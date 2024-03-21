import React from "react";
class UserClass extends React.Component{
    constructor(props){
       super(props);
       this.state={
         count:0,
       }
       console.log(this.props.name+"Constructor")
    }
    componentDidMount(){
        console.log(this.props.name+"ComponentDidMount")
    }
    render(){
        console.log(this.props.name+"Render")
        const {name,loc}=this.props;
        return(
            <div className="user">
               <h2>Count1:{this.state.count}</h2>
               <button 
                   onClick={()=>{
                      this.setState({
                        count:this.state.count+1,
                      })
                   }}>
                 Count Increase
               </button>
               <br></br>
               <br></br>
               <button 
                   onClick={()=>{
                     this.setState({
                        count:this.state.count-1,
                     })
                   }}>
                  Count Descrease</button>
               <h2>{"Name"}-{name}</h2>
               <h3>{"Location"}-{loc}</h3>
            </div>
        )
    }
}
export default UserClass;