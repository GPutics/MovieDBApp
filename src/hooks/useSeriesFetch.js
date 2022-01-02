import { useState, useEffect } from "react";
//API
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useSeriesFetch = () => {
    const [searchTerm, setSerarchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    
    const fetchSeries = async (page, searchTerm = '') => {
        try {
            setError(false);
            setLoading(true);


            const movies = await API.fetchSeries(searchTerm, page);

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
        fetchSeries(1, searchTerm);
    }, [searchTerm]);

    //Load More
    useEffect(() => {
        if(!isLoadingMore) return;
        fetchSeries(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page])

    return {state, loading, error, searchTerm, setSerarchTerm, setIsLoadingMore};
};