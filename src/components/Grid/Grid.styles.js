import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    padding: 0 20px;

    h1 {
        color: var(--white);

        @media(max-width: 768px){
            font-size: var(--fontBig);
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
`;