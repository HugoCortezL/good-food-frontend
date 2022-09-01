import styled from 'styled-components'


export const MessagesListContainer = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    .messages{
        z-index: 10000;
        & > div{
            margin-bottom: 5px;
            &:last-child{
                margin-bottom: 0;
            }
        }
    }
`