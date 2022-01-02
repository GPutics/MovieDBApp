import React from 'react'
//Styles
import { 
    Wrapper,
    Content, 
    Text,
 } from './HeroImage.styles';

const HeroImage = ({image, title, text, rating, vote_count}) => (

    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>Rating: <span className={"rating " + (rating > 7 ? "primary" : "secondary")}>{rating}</span>/10</p>
                <p>Votes: {vote_count}</p>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;



