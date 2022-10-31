import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { useContext, useState } from "react";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { AppContext } from "../Context";

export default function App() {
    const {isAuth} = useContext(AppContext)

    return (
        <BrowserRouter>
            <Logo />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pet/:id" element={<Home />} />
                <Route path="/detail/:detailId" element={<Detail />} />
                <Route
                    path="/favorites"
                    element={isAuth ? <Favs /> : <NotRegisteredUser />}
                />
                <Route
                    path="/user"
                    element={isAuth ? <User /> : <NotRegisteredUser />}
                />
            </Routes>
            <NavBar />
        </BrowserRouter>
    );
}
