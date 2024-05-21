import { Link } from "react-router-dom";

function Contato() {
    return (
        <div>
            <h1>Contato</h1>
            <p>Entre em contato conosco (dd) xxxxx-xxxx</p>
            <br/><br/>
            <Link to={'/'}>Voltar a HOME</Link>
            <br/>
            <Link to={'/sobre'}>SOBRE</Link>
        </div>
    );
}
export default Contato;