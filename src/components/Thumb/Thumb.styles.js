import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    color: var(--white);
    /* background: var(--darkGrey); */
    /* border-radius: 20px; */
    /* padding: 5px; */
`;


export const Rating = styled.div`
    display: flex;
    justify-content: space-between;

    .primary {
        color: #1976d2;;
    }

    .secondary {
        color: rgb(206, 147, 216);
    }

    .rating {
        margin-left: 5px;
    }
    /* position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    height: 45px;
    width: 45px;
    color: white;
    border: 1px solid black;
    background-color: black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold; */
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 720px;
    transition: all 0.3s;
    object-fit: cover;
    /* border-radius: 20px; */
    animation: animateThumb 0.5s;

    :hover {
        transform: scale(102%);
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;

export const Title = styled.div`
    color: var(--white);
    font-size: var(--fontMid);
    font-weight: bold;
`;
