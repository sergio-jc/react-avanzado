import { Category } from "./Category";
import { useState, useEffect } from "react";

export const ListOfCategories = () => {
    const [categories, setCategories] = useState([]);
    const [showFixed, setShowFixed] = useState(false)

    useEffect(() => {
        fetch(
            "https://react-avanzado-zqyw-popm4udlb-sergio-jc.vercel.app/categories"
        )
            .then((res) => res.json())
            .then((json) => setCategories(json));
    }, []);

    useEffect(()=>{
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200 
        showFixed !== newShowFixed && setShowFixed (!showFixed)
      }
      
      document.addEventListener("scroll",onScroll)
    },[])
    
    const renderList = (fixed) => (
        <ul className={`flex w-full overflow-scroll ${fixed ? "bg-white rounded-full shadow-lg left-0 my-0 mx-auto max-w-[400px] p-2 fixed right-0 -top-[20px]  z-10 scale-50" : ""}`}>
            {categories.map((category) => (
                <li key={category.id} className="px-2">
                    <Category {...category} />
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
