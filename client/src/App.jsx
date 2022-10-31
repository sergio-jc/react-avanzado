import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./components/PhotoCardWithQuery";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar";

export default function App() {
    return (
        <BrowserRouter>
            <Logo />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pet/:id" element={<Home />} />
                <Route path="/detail/:detailId" element={<Detail/>}/>
            </Routes>
            <NavBar/>
        </BrowserRouter>
    );
}
