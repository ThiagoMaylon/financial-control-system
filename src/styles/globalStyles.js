import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%
    }

    body{
        background: #171923;
        -webkit-font-smoothing: antialiase;
    }
    body, input, button{
        font: 14px, sans-serif;
        color: #000
    }

    input{
        height: 40px;
        width: 70%;
        border-radius: 0 16px;
        background: #fff;
        border: 1px solid #6c63ff;
        background: #171923;
        color: #fff;

        &::placeholder{
            background: #171923;
            color: #fff;
        }
    }

    button{
        cursor: pointer;
        height: 40px;
        width: 150px;
        border-radius: 8px;
        font-weight: 500;
        color: #fff;
        border: 0;
        background: #519;
    }

`;