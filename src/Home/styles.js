import styled from "styled-components";

export const Container = styled.div`
    height: 90vh;
    width: 90vw;
    border-radius: 20px;
    background: #2c2e3a;
    padding: 20px 0;

    overflow: auto;

    @media (max-width: 730px){
        height: 100vh;
    }
`;
