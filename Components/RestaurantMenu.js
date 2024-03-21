import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu=()=>{
  const {resId}=useParams();
  const resInfo=useRestaurantMenu(resId);
  const [showIndex,setShowIndex]=useState(-1)
  // console.log("This si from the resinfo",resInfo)
  if(resInfo==null)
   return <Shimmer/>
   const {
    name,
    cuisines,
    costForTwoMessage,
    costForTwo
  } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards }=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // console.log("This is the categories sectino from res Menu",categories)
  const filteredCategories=categories.filter((c)=>{
    return c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })
  // console.log("This is the filtered list",filteredCategories)
  return(
    <div className="resMenu">
      <div className="resMenu-header">
        <h1>{name}</h1>
        <p>{cuisines.join(',')}-{"Rs"+costForTwo/100}</p>
      </div>
      {
        filteredCategories.map((c,index)=>{
          return <RestaurantCategory key={c?.card?.card?.title} data={c?.card?.card} index={index} showItems={ index==showIndex && true} setShowIndex={setShowIndex}/>
        })
      }
    </div>
  )
}
export default RestaurantMenu;