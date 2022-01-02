import React from 'react'
import { useParams } from 'react-router';
//Config
import {IMAGE_BASE_URL, POSTER_SIZE} from '../config';
//Components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import Actor from './Actor';
//Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
//Image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const {movieId, type} = useParams();
    
    const {state: movie, loading, error} = useMovieFetch(movieId, type);

    if(loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title || movie.name} />
            <MovieInfo movie={movie} />
            <Grid header="Cast">
                {movie.actors.map(actor => (
                    <Actor 
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : NoImage
                        }
                    />
                ))}
            </Grid>
        </>
    );
};

export default Movie;