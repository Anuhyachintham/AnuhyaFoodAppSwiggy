import {useEffect, useState} from 'react';

import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';
import Abc from '../utils/Abc';
import React,{ useContext } from 'react';
import UserContext from '../utils/useContext';
const Header=()=>{
    const[btn,setBtn]=useState("Login")
    const {loggedInUser} = useContext(Abc)
    console.log(loggedInUser);
useEffect(()=>{
       // console.log("inside useEffect");

    },[btn])
    

    
    return(<div className="flex justify-between bg-fuchsia-300 shadow-lg my-2">
        <img className="w-24 h-24 rounded-lg" src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"/>
    <ul className="flex items-center p-4 m-4">
        <li className="px-4"> <Link to="/Search">search</Link></li>
        <li className="px-4"> <Link to="/Offers">Offers</Link></li>
        <li className="px-4"> <Link to="/Help">Help</Link></li>
        <li className="px-4"> <Link to="/Signin"> Sign in </Link></li>
        <li className="px-4"> <Link to="/Card">Card</Link></li>
        <button className="button" onClick={()=>{
    btn==='Login'?setBtn("Logout"):setBtn("Login")
}}>{btn}</button>
<li className='px-4'>{loggedInUser}</li>
    </ul>
    
    </div>)
}

export default Header