import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./components/Header";
import Body from "./components/Body";
import Home from "./components/Home";
import Offers from "./components/offers";
import Help from "./components/Help";
import Signin from "./components/signin";
import Card from "./components/card";
import UserContext from "./utils/useContext";


import "../index.css";
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom";
import ResturantCard from "./components/Resturant";
import Resturantmenu from "./components/Resturantmenu";

const service=lazy(()=>import("./components/Home"));

const App = () => {
  const [userInfo,setUserInfo]=useState()
  useEffect(()=>{
const data={name:"welcome Anuhya"}
setUserInfo(data.name)},[])
  
  return (<UserContext.Provider value={{loggedInUser:"hello"}}>
    <div className="App">
    
      <UserContext.Provider value={{loggedInUser:"Welcone to Anuhya"}}>
      <Header/>
      
   </UserContext.Provider>
      <Outlet/>
    </div>
    </UserContext.Provider>
  )}



const appRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,

children:[
  {
    path:"/",
    element:<Body/>
  },
{
  path:"/Home",
  element:<Suspense fallback={<h1>flight services are loading</h1>}><Home/></Suspense>
},
{
path:"/offers",
element:<Offers/>
},
{
  path:"/help",
  element:<Help/>
},
{
  path:"/signin",
  element:<Signin/>
},
{
path:"/card",
element:<Card/>
},
{
  path:"/resturant/:id",
  element:<Resturantmenu/>
}]

}])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
