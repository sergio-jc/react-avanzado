const DEFAULT_IMAGE = "https://imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => {
    return (
        <a href={path} className="flex flex-col w-20 text-center no-underline">
            <img
                src={cover}
                className="border border-[#ddd] rounded-full  overflow-hidden object-cover w-16 h-16 shadow"
            />
            {emoji}
        </a>
    );
};
