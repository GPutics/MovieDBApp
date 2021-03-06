import { useState, useEffect } from "react";
import API from '../API';

export const useMovieFetch = (movieId, type) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async() => {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId, type);
                const credits = await API.fetchCredits(movieId, type);
                //Get directors only
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors: directors
                });

                setLoading(false);

            } catch(error) {
                setError(true);
            }
        };

        fetchMovie();
         // eslint-disable-next-line
    }, [movieId]);

    return{state, loading, error};
};