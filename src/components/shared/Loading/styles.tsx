import styled from 'styled-components'

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .lds-dual-ring {
        display: inline-block;
        width: 64px;
        height: 64px;
    }

    .lds-dual-ring:after {
        content: ' ';
        display: block;
        width: 46px;
        height: 46px;
        margin: 1px;
        border-radius: 50%;
        border: 5px solid #34EBC3;
        border-color: #34EBC3 transparent #34EBC3 transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`