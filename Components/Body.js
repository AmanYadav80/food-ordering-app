import { RestaurantCard ,promotedRestaurant} from "./RestuarantCard";
import { useState, useEffect ,useContext } from "react";
import Shimmer from "./Shimmer"
import { Link, json } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
const Body=()=>{
   const [listOfRestaurants,setlistOfRestaurants]=useState([])
   const [searchText,setSearchText]=useState("")
   const [filteredList,setFilteredList]=useState([])
   const onlineStatus=useOnlineStatus();
   useEffect(()=>{
     fetchData();
   },[])
   const fetchData=async()=>{
     const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING')
     const Json=await data.json();
     setlistOfRestaurants(Json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setFilteredList(Json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }
  //  console.log("this res list",listOfRestaurants)
   const RestaurantCardPromoted=promotedRestaurant(RestaurantCard)
   const {loggedInUser,setUserName}=useContext(userContext);
   if(onlineStatus==false)
    return <>
      <h1>OOPS! Something Went Wrong!</h1>
      <h1>You are Offline!!</h1>
    </>
   if (listOfRestaurants.length==0) {
      return <Shimmer/>;
    }
    return(
       <div className="body">
          <div className="hero">
           <div className="search">
              <input type="text" value={searchText} onChange={(e)=>{
                 setSearchText(e.target.value)
              }}/>
              <button onClick={()=>{
                //  console.log("Inside the button onclick")
                 const filteredlist=listOfRestaurants.filter((res)=>{
                   return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                 })
                 setFilteredList(filteredlist)
              }}>search</button>
           </div>
           <button className="filter" onClick={()=>{
             const filteredList=listOfRestaurants.filter(
                res=>res?.info?.avgRating>4
             )
            setFilteredList(filteredList)
           }}>
             Top Rated Restaurants
           </button>
           {/* <div>
             <label className="username-label">Usernname:</label>
             <input
              className="username-input"
              type="text"
              value={loggedInUser}
              onChange={(e)=>setUserName(e.target.value)}
               >
              </input>
           </div> */}
          </div>
          <div className="res-container">
           {
             filteredList.map((restaurant) =>
              <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
              {
                restaurant.info.avgRating>4.2?<RestaurantCardPromoted resObj={restaurant}/> : <RestaurantCard  resObj={restaurant}/>
              }
              </Link>
             )
           }
          </div>
       </div>
    )
 }
export default Body;