
import React,{useContext} from "react";
import { CDN_URL } from "../utils/constants";
import Abc from "../utils/Abc";
const ItemList = ({ items,dummy }) => {
  const {loggedInUser}=useContext(Abc)
  
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
        <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <p>{loggedInUser}</p>
              <span>
                💵
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p>{loggedInUser}</p>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div  className="w-3/12">
          <div > <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg absolute ">Add+</button></div>
         {
             item.card.info.imageId ? <img src={CDN_URL + item.card.info.imageId} className="rounded-2xl" />: <p></p>
         }
          
          
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default ItemList;