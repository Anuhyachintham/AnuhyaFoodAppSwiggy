import { useState, useEffect } from "react";

const UseResturantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  const MENU_URL =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=";
  const menu_api = MENU_URL + id;

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(menu_api);
    const response = await data.json();
    setResInfo(response);
  };
  return resInfo;
};
export default UseResturantMenu;
