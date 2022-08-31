import styled from 'styled-components'

interface MessageContainerPorps {
    backgroundColor: string
}

export const MessageContainer = styled.div<MessageContainerPorps>`
    background-color: ${props => props.backgroundColor};
    color: #FFFFFF;
    width: 250px;
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation: desapier 8s forwards;
    .content{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        p{
            margin-left: 10px;
        }
    }
    .close{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    @keyframes desapier {
        0% {
            opacity: 1;
        }
        80%{
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

`