import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 5%;
    min-width: 200px;
    height: 60px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    margin: 50px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`; 