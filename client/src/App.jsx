import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./components/PhotoCardWithQuery";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { useState } from "react";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";

export default function App() {
    const [isLogged, setIsLogged] = useState(true);
    return (
        <BrowserRouter>
            <Logo />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pet/:id" element={<Home />} />
                <Route path="/detail/:detailId" element={<Detail />} />
                <Route
                    path="/favorites"
                    element={isLogged ? <Favs /> : <NotRegisteredUser />}
                />
                <Route
                    path="/user"
                    element={isLogged ? <User /> : <NotRegisteredUser />}
                />
            </Routes>
            <NavBar />
        </BrowserRouter>
    );
}
