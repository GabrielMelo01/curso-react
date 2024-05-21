import { Link } from "react-router-dom";


function Home() {

  return (
    <div >
      <h1>Bem vindo a pagina HOME</h1>
      <h3>Testando navegação entre paginas</h3>
      <br/><br/>
      <Link to={'/sobre'}>SOBRE</Link>
      <br/>
      <Link to={'/contato'}>CONTATO</Link>
    </div>
  );
}

export default Home;
