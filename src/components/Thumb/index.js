import React from 'react'
import { Link } from 'react-router-dom';
//Styles
import { Wrapper, Image, Rating, Title } from './Thumb.styles';

const Thumb = ({image, movieId, clickable, type, rating, title, vote_count}) => (
    <div>
        {clickable 
        ? (
            <Wrapper>
                <Link to={`${type}/${movieId}`}>
                    <Image src={image} alt="movie-thumb" />
                </Link>
                <Title>{title}</Title>
                <Rating>
                    <p>Rating:<span className={"rating " + (rating > 7 ? "primary" : "secondary")}>{rating}</span>/10</p>
                    <p>Votes: <span className="votes"></span>{vote_count}</p>
                </Rating>
            </Wrapper>
        ) 
        
        : (
            <Image src={image} alt="movie-thumb" />
        )}
    </div>
);

export default Thumb;