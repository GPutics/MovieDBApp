import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  TRENDING_BASE_URL,
  POPULAR_TV_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL
} from './config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const apiSettings = {
  fetchTrending: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${TRENDING_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
      return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId, type) => {
    const endpoint = `${API_URL}${type}/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchSeries: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_TV_BASE_URL}&page=${page}`;
      return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId, type) => {
    const creditsEndpoint = `${API_URL}${type}/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  // Bonus material below for login
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData)
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken })
        })
      ).json();
      return sessionId;
    }
  },
  rateMovie: async (sessionId, movieId, value) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value })
      })
    ).json();

    return rating;
  }
};

export default apiSettings;
