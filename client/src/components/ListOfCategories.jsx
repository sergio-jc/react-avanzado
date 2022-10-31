import { Category } from "./Category";
import { useState, useEffect } from "react";
import { UseCategoriesData } from "../hooks/useCategoriesData";

export const ListOfCategories = () => {
    const { categories , loading } = UseCategoriesData()
    const [showFixed, setShowFixed] = useState(false)

    useEffect(()=>{
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200 
        showFixed !== newShowFixed && setShowFixed (!showFixed)
      }
      
      document.addEventListener("scroll",onScroll)

      return () => document.removeEventListener("scroll",onScroll)
    },[showFixed])
    
    const renderList = (fixed) => (
        <ul className={`flex w-full overflow-scroll ${fixed ? "bg-white rounded-full shadow-lg left-0 my-0 mx-auto max-w-[400px] p-2 fixed right-0 -top-[20px]  z-10 scale-50" : ""}`}>
          
            {
            loading ?
            <li className="px-2"> <Category/></li>
            :   categories.map((category) => (
                <li key={category.id} className="px-2">
                    <Category {...category} path={`/pet/${category.id}`}/>
                </li>
            ))}
        </ul>
    );

    return (
        <>
            {renderList()}
            {showFixed && renderList(true)}
        </>
    );
};
