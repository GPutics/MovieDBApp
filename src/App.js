import React, { useState } from 'react';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import SimpleBottomNaviagtion from './components/BottomNav';
import Movies from './components/Movies';
import Series from './components/Series';
//Styles
import {GlobalStyle} from './GlobalStyle';
//Hooks
import { useClickOutside } from './hooks/useClickOutside';

function App() {

  const [searchBar, setSearchBar] = useState(false);

  let domNode = useClickOutside(() => {
    setSearchBar(false);
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home innerRef={domNode} searchBar={searchBar} setSearchBar={setSearchBar} />} />
        <Route path="/:type/:movieId" element={<Movie />} />
        <Route path="/movies" element={<Movies innerRef={domNode} searchBar={searchBar} setSearchBar={setSearchBar} />} />
        <Route path="/series" element={<Series innerRef={domNode} searchBar={searchBar} setSearchBar={setSearchBar} />} />
        <Route path="/movies/:type/:movieId" element={<Movie />} />
        <Route path="/series/:type/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <SimpleBottomNaviagtion searchBar={searchBar} setSearchBar={setSearchBar}/>
      <GlobalStyle />
    </Router>
  )
};

export default App;
