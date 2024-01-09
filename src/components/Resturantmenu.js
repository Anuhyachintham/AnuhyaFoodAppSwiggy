import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseResturantMenu from "../utils/UseResturantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory"
const Resturantmenu = () => {
  const data ="prop drilling";
  //const[resInfo,setResInfo]=useState(null);
  //const MENU_URL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=";
  const { id } = useParams();
  const [showIndex,setShowIndex]=useState(null)
  const resInfo = UseResturantMenu(id);
  //const menu_api=MENU_URL+id;
  //console.log(menu_api);

  //console.log("resId",id);
  /*useEffect(()=>{
fetchMenu()
},[])
const fetchMenu=async()=>{
    const data = await fetch(menu_api);
    const response = await data.json();
    setResInfo(response);
    console.log(response);
}*/
  if (resInfo === null) return <Shimmer />;
  //doubt

  const { name, cuisines, costForTwoMessage } = resInfo?.data.cards[0]?.card?.card?.info;

  const  itemCards  = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((each)=>each.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  console.log(itemCards);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <h3>{costForTwoMessage}</h3>
          {itemCards.map((each,index) => <RestaurantCategory key={each.card.card.title} data={each.card.card}
          //showItem={index==2?true:false}
          showItem={index==showIndex?true:false}
          setShowIndex={()=>setShowIndex(index)}
          dummy={data}
          />)}
          </div>
      
          
  );
};
export default Resturantmenu;
