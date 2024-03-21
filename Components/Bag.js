import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";
const Bag=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearItem=()=>{
        dispatch(clearCart())
    }
    const handleRemoveItem=()=>{
        dispatch(removeItem())
    }
    return (
        <div>
          <div className="bag-first">
            <h2 className="bag-heading">Cart</h2>
            <div>
             <button className="bag-button" onClick={handleClearItem}>Clear Cart</button>
             <button className="bag-button" onClick={handleRemoveItem}>Remove Last Item</button>
            </div>
          </div>
          <div className="bag-second">
            <ItemList items={cartItems}/>
          </div>
        </div>
    )
}
export default Bag;