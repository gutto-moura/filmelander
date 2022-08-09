import { useState, useEffect } from "react";
import api from "../../service/api";
import { useParams } from "react-router-dom";
import { ContainerHome, Detail,DivImg, DivSinopse } from './styles';


function Details(){
    const [movie, setMovie] = useState([]);
    const { id } = useParams();

    useEffect(() => {
         async function loadMovie(){
            await api.get(`movie/${id}`, {
                params: {
                api_key:'4e7bb0285c7020d4868d2eb1f303afb1',
                language:'pt-BR'
            }
            })
            .then((res) => {
                setMovie(res.data)
            }).catch((error)=>{
                console.log("FILME NAO ENCONTRADO", error);
                return;
              })
         }       

         loadMovie()
    }, [id]);


    return(
        <ContainerHome>
            <h1>{movie.title}</h1>
            <Detail>
                <DivImg>
                    <img src = {`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt = {movie.original_title} />
                </DivImg>
                <DivSinopse>
                    <strong><h2>Sinopse:</h2>{movie.overview}</strong>
                    <h3>Média de votos <b>{movie.vote_average}</b><strong>/10</strong></h3>
                </DivSinopse>
            </Detail>
        </ContainerHome>
    )
}

export default Details;