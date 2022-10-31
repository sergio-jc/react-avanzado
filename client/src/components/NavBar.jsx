import React from "react";
import { NavLink } from "react-router-dom";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";

const SIZE = '32px'

export const NavBar = () => {
    return (
        <nav className="bg-slate-50 flex items-center border-t-[1px] border-black bottom-0 h-12 justify-center left-0 my-0 mx-auto max-w-[500px] fixed right-0 w-full z-50">
            <NavLink
            end
            className={({isActive})=>`items-center inline-flex h-full justify-center no-underline w-full ${!isActive?"text-gray-500":"text-black after:content-['·'] after:absolute after:bottom-0  after:text-5xl after:leading-5"}` }
                
                to={"/"}
            >
                {" "}
                <MdHome size={SIZE}/>{" "}
            </NavLink>
            <NavLink
            end
            className={({isActive})=>`items-center inline-flex h-full justify-center no-underline w-full ${!isActive?"text-gray-500":"text-black after:content-['·'] after:absolute after:bottom-0  after:text-5xl after:leading-5"}` }
                to={"/favorites"}
            >
                {" "}
                <MdFavoriteBorder size={SIZE}/>{" "}
            </NavLink>
            <NavLink
            end
            exact
            className={({isActive})=>`items-center inline-flex h-full justify-center no-underline w-full ${!isActive?"text-gray-500":"text-black after:content-['·'] after:absolute after:bottom-0  after:text-5xl after:leading-5"}` }
                to={"/user"}
            >
                {" "}
                <MdPersonOutline size={SIZE}/>{" "}
            </NavLink>

        </nav>
    );
};
