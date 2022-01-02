import React, {useEffect} from 'react';

import { Chip } from '@material-ui/core';

function Genres({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage
}) {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    };

    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    }

    const fetchGenres = async () => {
        const data = await (await fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=dda26594d9b3a859f946aa5a3179c7d6&language=en-US`)).json();
        setGenres(data.genres);
    };

    useEffect(() => {
        fetchGenres();

        return () => {
            setGenres({});
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {selectedGenres && selectedGenres.map((genre) => {
                return (
                    <Chip 
                        key={genre.id}
                        label={genre.name}
                        style={{margin: 2}}
                        clickable
                        color="primary"
                        onDelete={() => handleRemove(genre)}
                    />
                )
            })}
            {genres && genres.map((genre) => {
                return (
                    <Chip 
                        key={genre.id}
                        label={genre.name}
                        style={{margin: 2}}
                        clickable
                        onClick={() => handleAdd(genre)}
                    />
                )
            })}
        </div>
    );
};

export default Genres
