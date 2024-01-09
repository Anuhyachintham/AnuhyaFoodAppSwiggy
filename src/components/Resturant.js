import { useContext } from "react";
import body from "./Body"
import Abc from "../utils/Abc";

const ResturantCard=(props)=>{
    const {loggedInUser} = useContext(Abc)
const {res} = props;
    console.log(props.res.info);

   let image= "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"

    const {name,cloudinaryImageId,cuisines,costForTwo,deliveryTime,avgRating}=props.res.info
    

    

    return(
    <div className="m-4 p-4 w-[250px] rounded-xl bg-gray-100 hover:bg-slate-400">
        <img className="rounded-xl" src={image+cloudinaryImageId}/>
        
        <h1 className="font-bold">{props.res.info.name}</h1>
        <h2>{cuisines[0]}</h2>
        <h3>{avgRating}</h3>
        <h4>{deliveryTime}</h4>
        <h5>{costForTwo}</h5>
        <h6>{loggedInUser}</h6>
    </div>)
}
export const withVegLabel= (ResturantCard)=>{
    return (props)=>{
        return(<div>
            <label className="absolute bg-green-400 text-black m-2 p-2 rounded-lg">Veg</label>
            <ResturantCard {...props}/>
        </div>)

    }
} 

export default ResturantCard;