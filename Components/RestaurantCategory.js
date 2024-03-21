import ItemList from "./ItemList";
import { useState } from "react"

const RestaurantCategory=({data,showItems,setShowIndex,index})=>{
    // console.log("This is the data",data)
    const handleClick=()=>{
        setShowIndex(prevIndex => prevIndex === index ? -1 : index);
    }
    return <div className="resCat">
        {/*Accordion header */}
        <div>
            <div className="resCat-header">
             <div className="resCat-header-1" onClick={handleClick}>
               <span className="resCat-title">{data.title}({data.itemCards.length})</span>
               <span>⬇️</span>
             </div>
             {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    </div>
}
export default RestaurantCategory;