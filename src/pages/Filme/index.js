/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { useNavigate, useParams } from "react-router-dom";
import './filme.css';
import api from "../../services/api";
import { useEffect, useState } from "react";

function Filme() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function loadFilme() {
        const response = await api.get(`/movie/${id}`, {
          params: {
            language: "pt-BR",
            api_key: "d2781c36534e85516b4f4f7ce9d04fdc",
            page: 1,
            size: 10
          }
        })
        .then((response) => {
          setFilme(response.data);
          console.log(response.data);
          setLoading(false);
        })
        .catch((err) => {
         navigate('/', {relative: true})
         return
        });
      }
      loadFilme();

      return () => {
        console.log("Componente desmontado");
      }
    }, [navigate, id]);

    if (loading) {
      return (
        <div className="loading">
          <h2>Carregando filme...</h2>
        </div>
      );
    }

    function salvarFilme() {
      const minhaLista = localStorage.getItem('@primeflix');
      let filmesSalvos = JSON.parse(minhaLista) || [];

      const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

      if (hasFilme) {
        alert('Você já possui esse filme salvo.');
        return;
      }

      filmesSalvos.push(filme);
      localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos));
      alert('Filme salvo com sucesso!');
    }

    return (
      <div className="container">
        <div className="filme-info">
          <h1>{filme.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
            alt={filme.title}/>
          <h3>Sinopse</h3>
          <p>{filme.overview}</p>
          <h3>Nota</h3>
          <p>{filme.vote_average}</p>
          <h3>Data de Lançamento</h3>
          <p>{filme.release_date}</p>
          <div className="area-buttons">
            <button onClick={salvarFilme}>Salvar</button>
            <button>
              <a href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`} target="blank" rel="noreferrer">
                Trailer
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default Filme;