import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Contato from "./Contato";
import Header from "../Components/Header";

function RoutesApp() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
                <Route path='/contato' element={<Contato/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;