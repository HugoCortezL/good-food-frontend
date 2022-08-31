import styled from 'styled-components'

export const TagHomeListContainer = styled.div`
    margin: 20px 0 0 24px;
    .tags{
        margin-top: 20px;
        display: flex;
        align-items: center;
        overflow-x: scroll;
        padding: 5px;
        &::-webkit-scrollbar {
        height: 4px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
        background: transparent;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
        background: #34EBC3;
        border-radius: 10px;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
        background: #00d1a4;
        }
    }
`

interface TagContainerProps {
    background: string;
    color: string
}

export const TagContainer = styled.div<TagContainerProps>`
    min-width: 100px;
    min-height: 100px;
    border-radius: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.background ? props.background : "#FFFFFF"};
    color: ${props => props.color};
    box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
    font-size: 20px;
    cursor: pointer;
    margin-right: 24px;
    &:hover{
        box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
    }
`
