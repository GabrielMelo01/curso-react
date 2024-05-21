import { Link } from "react-router-dom";


function Sobre() {

    return (
      <div >
        <h1>Pagina sobre a empresa</h1>
        <br/><br/>
        <Link to={'/'}>Voltar a HOME</Link>
        <br/>
        <Link to={'/contato'}>CONTATO</Link>
      </div>
    );
}

export default Sobre;
