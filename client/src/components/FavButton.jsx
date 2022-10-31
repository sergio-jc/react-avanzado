
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export const FavButton = ({liked , likes , onClick}) => {
    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    return (
        <button
            className="flex items-center pt-2"
            onClick={onClick}
        >
            <Icon size={"32px"} className="mr-1" /> {likes} likes
        </button>
    );
};
