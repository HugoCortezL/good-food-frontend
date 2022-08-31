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
    animation: desapier 8s forwards;
    position: relative;
    .content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left{
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
    }
    .timer{
        height: 3px;
        background-color: #e7e7e7;
        position: absolute;
        bottom: 0;
        left: 0;
        animation: timer 8s forwards;
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
    
    @keyframes timer {
        0% {
            right: 100%;
        }
        100% {
            right: 0;
        }
    }

`