import { useEffect, useState } from "react";

export const UseCategoriesData = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(
            "https://react-avanzado-zqyw-popm4udlb-sergio-jc.vercel.app/categories"
        )
            .then((res) => res.json())
            .then((json) => {
                setLoading(false);
                setCategories(json);
            });
    }, []);
    return { categories , loading };
};
