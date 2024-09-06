import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
// import Darkmode from "./Darkmode";

const Header=()=>{

    const{handleTheme}=useContext(AppContext)
    
    return(
        <div className=" w-full text-center top-0 fixed bg-white dark:bg-black cursor-pointer">
            <header className="dark:text-white font-bold text-3xl shadow-gray py-2  shadow-md flex justify-between dark:shadow-gray-900">
                <h1 className=" uppercase ml-[550px]">Blogs Sample</h1>
                <svg onClick={handleTheme}class="h-8 w-8 text-black dark:text-white mr-5"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="5" />  <line x1="12" y1="1" x2="12" y2="3" />  <line x1="12" y1="21" x2="12" y2="23" />  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />  <line x1="1" y1="12" x2="3" y2="12" />  <line x1="21" y1="12" x2="23" y2="12" />  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
            
            </header>
        </div>
    );
}

export default Header