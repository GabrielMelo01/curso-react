import { useEffect, useState } from "react";
import api from "../../services/api";

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          language: "pt-BR",
          api_key: "d2781c36534e85516b4f4f7ce9d04fdc",
          page: 1
        }
      })
      console.log(response.data.results);
      // const data = await response.json();
      // setFilmes(data);
    }
    loadFilmes();
  }, []);

    return (
      <div>
        <h1>My React Home</h1>
        <br/>
      </div>
    );
}
export default Home;