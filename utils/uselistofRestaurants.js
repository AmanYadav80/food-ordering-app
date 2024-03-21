import { useEffect, useState } from "react";

const uselistofRestaurants=()=>{
    const [listOfRestaurants,setlistOfRestaurants]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9451403&lng=76.8173138&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const Json=await data.json();
        setlistOfRestaurants(Json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return listOfRestaurants;
}
export default uselistofRestaurants;