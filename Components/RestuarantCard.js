import { RES_LIST } from "../utils/mockData"
import { useContext } from "react"
import userContext from "../utils/userContext"
export const RestaurantCard=(props)=>{
    const { resObj }=props
    const { cloudinaryImageId, name, avgRating, cuisines, locality }=resObj.info
   //  const { loggedInUser }=useContext(userContext);
    return (
       <div className="res-card">
          <div className="res-image-div">
           <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+cloudinaryImageId}
           />
          </div>
          <div className="res-info">
           <h2>{name}</h2>
           <h3>⭐{avgRating}</h3>
           <p>{cuisines.join(',')}</p>
           <p>{locality}</p>
           {/* <p>User:{loggedInUser}</p> */}
          </div>
       </div>
    )
 }
 // Higher order component that is used to add some extra information to any component
 //this higher order component is a component returning component
 export const promotedRestaurant=(RestaurantCard)=>{
     return (props)=>{
      return <>
         <div>
            <label className="promoted-label">Promoted</label>
            <RestaurantCard {...props}/>
         </div>
      </>
     }
 }