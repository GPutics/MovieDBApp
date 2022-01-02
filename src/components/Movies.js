import React from 'react';
//Config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
//Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

//Hook
import { useMoviesFetch } from '../hooks/useMoviesFetch';
//Image
import NoImage from '../images/no_image.jpg';


const Movies = ({searchBar, setSearhBar}) => {
    const {state, loading, error, searchTerm, setSerarchTerm, setIsLoadingMore} = useMoviesFetch();

    if(error) return <div>Something went wrong...</div>

    return (
        <>
            {!searchTerm && state.results[0]
                ? <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                    rating={state.results[0].vote_average}
                    vote_count={state.results[0].vote_count}
                  />
                : null
            }
            {searchBar && <SearchBar setSearchTerm={setSerarchTerm}/>}
            <Grid header={searchTerm ? `Search Result for ` + searchTerm: 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                        type="movie"
                        rating={movie.vote_average}
                        title={movie.title}
                        vote_count={movie.vote_count}
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text="Load More" callback={() => setIsLoadingMore(true)}/>
            )};
        </>
    );
};

export default Movies;