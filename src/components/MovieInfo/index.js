import React from 'react'
//Component
import Thumb from '../Thumb';
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//Helpers
import { calcTime, convertMoney} from '../../helpers';
//Image
import NoImage from '../../images/no_image.jpg';
//Styles
import { Wrapper, Content, Text } from './MovieInfo.styles';

const MovieInfo = ({movie}) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb 
                image={
                    movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                }
                clickable={false}
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>

                <div className="rating-directors">
                    <div>
                        <h3>RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                        {movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}
                    </div>
                    <div className="homepage">
                        <h3>HOMEPAGE</h3>
                        <a href={movie.homepage}>{movie.homepage}</a> 
                    </div>
                </div>

                {
                    movie.runtime 
                    ?
                        <div className="revenue-info">
                            <h3>RUNNING TIME: </h3>
                            {calcTime(movie.runtime)}
                            <h3>BUDGET: </h3>
                            {convertMoney(movie.budget)}
                            <h3>Revenue: </h3>
                            {convertMoney(movie.revenue)}
                        </div>
                    :
                        <div className="revenue-info">
                            <h3>Seasons: </h3>
                            {movie.number_of_seasons}
                            <h3>Episodes: </h3>
                            {movie.number_of_episodes}
                            <h3>Episode Runtime: </h3> 
                            {movie.episode_run_time.map((e) => {
                                return (
                                    <p key={e}>
                                        {calcTime(e)}
                                    </p>
                                )
                            })}
                        </div>
                }

                
            </Text>
        </Content>
    </Wrapper>
);

export default MovieInfo;