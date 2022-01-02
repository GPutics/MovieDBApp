import { useState, useEffect } from "react";
//API
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [searchTerm, setSerarchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchTrending = async (page, searchTerm = '') => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchTrending(searchTerm, page);

            setState(prev => ({
                ...movies,
                results: 
                    page > 1 
                        ? [...prev.results, ...movies.results]
                        : [...movies.results]
            }));

        } catch (error) {
            setError(true);
        };

        setLoading(false);

    };

    //Initial and search
    useEffect(() => {
        setState(initialState);
        fetchTrending(1, searchTerm);
    }, [searchTerm]);

    //Load More
    useEffect(() => {
        if(!isLoadingMore) return;
        fetchTrending(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page])

    return {state, loading, error, searchTerm, setSerarchTerm, setIsLoadingMore};
};