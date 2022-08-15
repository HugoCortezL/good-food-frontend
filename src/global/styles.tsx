import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 15px;
        font-family: 'Nunito';
        -webkit-font-smoothing: antialiased !important;
        -webkit-text-size-adjust: 100% !important;
    }
`