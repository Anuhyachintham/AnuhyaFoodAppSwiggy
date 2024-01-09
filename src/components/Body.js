import { useState,useEffect } from "react";
import ResturantCard from "./Resturant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { withVegLabel } from "./Resturant";



const Body=()=>{

    const [restList,setRestlist]=useState([]);
     const [search,setSearch]=useState("");
     const [dummyData,setdummyData] = useState("");

     const ResturantCardVeg=withVegLabel(ResturantCard);
     useEffect(()=>{
        const fetchData = async()=>{
            //doubt
            const response= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const res_data = await response.json();
            console.log(res_data);
            setRestlist(res_data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
            setdummyData(res_data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
        }
        fetchData()

     },[])

   const filteredData=()=>{
    const filData = setdummyData.filter(each=>each.info.avgRating>4.3);
    setRestlist(filData);

   }
     



    return restList.length===0?(<Shimmer/>): (<div className="">

        <div>
        <button className="px-4 m-4 rounded-xl bg-green-100" onClick={filteredData}>Top rated Resturant</button>
        <input className="border border-solid border-black" type="text" value={search} onChange={(e)=>{setSearch(e.target.value)
        console.log(e.target.value)}}/>
        <button className="px-4 m-4 rounded-xl bg-green-100" onClick={()=>
        {let searchData=restList.filter((each)=>each.info.name.toUpperCase().includes(search.toUpperCase()))
            setdummyData(searchData);
            console.log(searchData)
        }}>search</button>

        </div>
        

        <div className="flex flex-wrap">{
        dummyData.map((each)=>(<Link key={each.info.id} to={"./Resturant/"+each.info.id}>
            {each.info.veg?(<ResturantCardVeg key={each.info.id} res={each}/>):(<ResturantCard res={each}/>)}
            
            </Link>) )}


        </div>
        
        
    
        
    </div>
    );
}

export default Body;