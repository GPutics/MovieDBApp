import * as React from 'react';
import { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import TvIcon from '@material-ui/icons/Tv';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import {useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "black",
    zIndex: 100,
    flexWrap: "wrap",

    ['@media (max-Width: 415px)']: {
      height: "200px",
    }
  },
})

export default function SimpleBottomNavigation({searchBar, setSearchBar}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };

  useEffect(() => {
    if(value === 0) navigate('/');
    else if(value === 1) navigate('/movies');
    else if(value === 2) navigate('/series');

  }, [value, navigate])

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
      >
        <BottomNavigationAction 
            style={{color: "white"}}
            label="Trending" 
            icon={<WhatshotIcon />}
        />
        <BottomNavigationAction 
            style={{color: "white"}}
            label="Movies" 
            icon={<LocalMoviesIcon />} 
        />
        <BottomNavigationAction 
            style={{color: "white"}}
            label="Series" 
            icon={<TvIcon />} 
        />
        <BottomNavigationAction 
            onClick={() => setSearchBar(!searchBar)}
            style={{color: "white"}}
            label="Search" 
            icon={<SearchIcon  />} 
        />
        <BottomNavigationAction 
            onClick={scrollToTop}
            style={{color: "white"}}
            label="Back to top" 
            icon={<ArrowUpward  />} 
        />
      </BottomNavigation>
    </Box>
  );
}
