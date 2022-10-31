import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNearScreen } from "../hooks/useNearScreen";
import { useToggleLikeMutatiton } from "../hooks/useToggleLikeMutation";
import { FavButton } from "./FavButton";

const DEFAULT_IMAGE =
    "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const key = `like-${id}`;
    const [liked, setLiked] = useLocalStorage(key, false);
    const [show, element] = useNearScreen()
    const { mutation, mutationLoading, mutationError } = useToggleLikeMutatiton()

    const handleFavClick = () => {
        !liked && mutation({
          variables: {
            input: { id }
          }
        })
        setLiked(!liked)
      }

    return (
        <article ref={element} className="min-h-[200px]">
            {show && (
                <>
                    <Link to={`/detail/${id}`}>
                        <div className="relative block w-full h-0 overflow-hidden rounded-xl pt-[56.25%]">
                            <img
                                src={src}
                                className="absolute top-0 object-cover w-full h-full shadow-md"
                            />
                        </div>
                    </Link>
                    <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
                </>
            )}
        </article>
    );
};
