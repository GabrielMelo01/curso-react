import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Contato from "./Contato";
import Header from "../Components/Header";
import Erro from "./Erro";
import Produto from "./Produto";

function RoutesApp() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
                <Route path='/contato' element={<Contato/>} />
                <Route path='/produto/:id' element={<Produto/>} />

                <Route path='*' element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;