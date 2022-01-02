import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    background: var(--darkGrey);
    margin: 0 auto;
    color: var(--white);

    /* img {
        position: absolute;
        left: 15px;
        top: 14px;
        width: 30px;
    } */

    input {
        font-size: var(--fontBig);
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: var(--white);

        :focus {
            outline: none;
        }
    }
`;