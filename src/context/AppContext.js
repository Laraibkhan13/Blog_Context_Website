import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext=createContext();



export function AppContextProvider({children})
{
    const[loading,setloading]=useState(false);
    const[pages,setpages]=useState(1);
    const[post,setpost]=useState([])
    const[totalpages,settotalpages]=useState(null);
    const[theme,settheme]=useState("light")

async function FetchBlog(page=1)
{
    // setloading=true;
    let url=`${baseUrl}?page=${page}`
    try{
        const result=await fetch(url);
        const data=await result.json();
        console.log(data);
        setpages(data.page);
        setpost(data.posts);
        settotalpages(data.totalPages);
    }
    catch(error){
        console.log("error in api call");
        setpages(1);
        setpost([]);
        settotalpages(null)
    }
    setloading(false);
}


function handlepage(page)
{
    setpages(page);
    FetchBlog(page)
}

const handleTheme=()=>{
    settheme(theme==="dark" ? "light": "dark")
}

const value={
    post,
    setpost,
    pages,
    setpages,
    loading,
    setloading,
    totalpages,
    settotalpages,
    FetchBlog,
    handlepage,
    theme,
    settheme,
    handleTheme

};


return <AppContext.Provider value={value}>
    {children}
</AppContext.Provider>;
}