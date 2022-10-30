import { useEffect, useRef, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
    "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const element = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        //!
        Promise.resolve(
            typeof window.IntersectionObserver !== "undefined"
                ? window.IntersectionObserver
                : import("intersection-observer")
        ).then(() => {
            const observer = new window.IntersectionObserver((entries) => {
                const { isIntersecting } = entries[0];
                if (isIntersecting) {
                    setShow(true);
                    observer.disconnect();
                }
            });

            observer.observe(element.current);
        });
        //!
    }, [element]);

    return (
        <article ref={element} className="min-h-[200px]">
            {show && (
                <>
                    <a href={`/detail/${id}`}>
                        <div className="relative block w-full h-0 overflow-hidden rounded-xl pt-[56.25%]">
                            <img
                                src={src}
                                className="absolute top-0 object-cover w-full h-full shadow-md"
                            />
                        </div>
                    </a>
                    <button className="flex items-center pt-2">
                        <MdFavoriteBorder size={"32px"} className="mr-1" />{" "}
                        {likes} likes
                    </button>
                </>
            )}
        </article>
    );
};
