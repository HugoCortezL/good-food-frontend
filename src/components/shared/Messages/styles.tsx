import styled from 'styled-components'

interface ResponseContainerPorps {
    backgroundColor: string
}

export const ResponseContainer = styled.div<ResponseContainerPorps>`
    background-color: ${props => props.backgroundColor};
    color: #FFFFFF;
    width: 250px;
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

`