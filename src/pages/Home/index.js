import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css'

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          language: "pt-BR",
          api_key: "d2781c36534e85516b4f4f7ce9d04fdc",
          page: 1,
          size: 10
        }
      })
      // console.log(response.data.results.slice(0,10));
      setFilmes(response.data.results.slice(0,10));
    }
    loadFilmes();
  }, []);

    return (
      <div className="container">
        <div className="lista-filmes">
          {filmes.map((filme) => {
            return (
              <article key={filme.id}>
                <strong>{filme.title}</strong>
                <img
                  src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}
                  alt={filme.title}/>
                  <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            );
          })}
        </div>
      </div>
    );
}
export default Home;