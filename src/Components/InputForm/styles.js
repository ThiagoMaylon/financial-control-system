import styled from "styled-components";

export const Container = styled.div`
    margin: 15px auto;
    padding: 10px;
    background: #171923;
    width: 90%;
    border-radius: 5px;
    border: 2px solid #533693;

    form{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
        width: 100%;
    }

    @media (max-width: 730px){
        form{
            flex-direction: column;
        }
        .input{
            width: 100%;
        }


    }
`;
export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 0.5em;

`;
export const Radios = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 0.5em;
    
    @media (max-width: 730px){
        display: flex;
        align-items: center;
        gap: 5em;
    }

`;