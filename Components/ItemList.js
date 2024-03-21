import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/mockData"
import { addItem } from "../utils/cartSlice";
const ItemList=({items})=>{
    // console.log("This is from itemsList",items)'
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
      //dispatch the action
      dispatch(addItem(item))
    // console.log("Add button clicked")
    }
    return <div>
        <div>
            {
                items.map((item)=>{
                    return <div key={item.card.info.id} className="itemList-parent">
                        <div className="itemList-first">
                          <span>{item.card.info.name}</span>
                          <span> -₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100 }</span>
                        </div>
                        <div className="itemList-second">
                        <button className="ListItem-button" onClick={()=>handleAddItem(item)}>Add+</button>
                         <img src={CDN_URL+item.card.info.imageId}
                         />
                        </div>
                    </div>
                
                })
            }
        </div>
    </div>

}
export default ItemList;