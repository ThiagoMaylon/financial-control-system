import styled from "styled-components";

export const ResumoFinanceiro = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 50px;
    border-bottom: 3px solid #53369e;
    
    @media (max-width: 730px){
        flex-direction: column;
    }

`;