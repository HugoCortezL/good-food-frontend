import styled from 'styled-components'

interface TagInRecipeContainerProps {
    background: string
}

export const TagInRecipeContainer = styled.div<TagInRecipeContainerProps>`
    background-color: ${props => props.background};
    width: 100px;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
`