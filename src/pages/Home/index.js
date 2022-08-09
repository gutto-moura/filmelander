import { useEffect, useState } from "react";
import api from "../../service/api";
import { ContainerHome, Movie, DataMovie, LinkDetail } from "./styles";
import { useParams } from "react-router-dom";

function Home(){
    const [movies, setMovies] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        async function showMovie(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key:'4e7bb0285c7020d4868d2eb1f303afb1',
                    language:'pt-BR',
                    page:1
                }
            })
            setMovies(response.data.results);
        }
        showMovie();
    }, []);

    return(
        <ContainerHome>
            <Movie>
                {movies.map(movies => {
                    return(
                        <DataMovie key = {movies.id}>
                            <img src = {`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt = {movies.original_title} />
                            <strong>{movies.original_title}</strong>
                            <LinkDetail to = {`/detail/${movies.id}`}>Detalhes</LinkDetail>
                        </DataMovie>
                    )
                }
                )}
            </Movie>
        </ContainerHome>
    );
}
export default Home;