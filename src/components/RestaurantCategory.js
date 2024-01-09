import react from "react";
import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({data,showItem,setShowIndex,dummy})=>{
    console.log(dummy);
    //const [showItem,setShowItems]=useState(false)
    const handleItems=()=>{
        setShowIndex()
        //setShowItems(true)
        //setShowItems(!showItem)
    }
    const Button=()=>{console.log("click")}
    return(<div onClick={Button} className="w-6/12 m-auto my-2 shadow-lg flex justify-between p-4 bg-gray-50">
        <div className="flex justify-between cursor-pointer"  onClick={handleItems}>
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        {showItem ? <span>⬇️</span>:<span>⬇️ </span>}
        </div>

{showItem &&<ItemList items={data.itemCards} dummy={dummy}/>}
    </div>)
}

export default RestaurantCategory