
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Blogs from "./components/Blogs";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"

export default function App() {
  const{FetchBlog,theme}=useContext(AppContext);

  useEffect(()=>{
    FetchBlog();
  },[])

  useEffect(()=>{
    if(theme==="dark")
    {
        document.documentElement.classList.add("dark"); 
    }
    else{
        document.documentElement.classList.remove("dark");
    }

},[theme])

  return(
    <div className=" w-full h-full flex flex-col justify-center items-center gap-y-1 dark:bg-black">
      <Header/>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}
