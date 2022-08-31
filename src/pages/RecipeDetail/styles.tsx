import styled from 'styled-components'

export const RecipeDetailContainer = styled.div`
    padding: 50px 80px;
    img{
        width: 100%;
        height: 480px;
    }
    h1{
        text-align: center;
        margin-bottom: 20px;
    }
`

export const DescriptionContainer = styled.div`
    width: 100%;
    height: 150px;
    background-color: #facdb6;
    border-radius: 20px;
    margin: 30px 0;
    padding: 10px 15px;
    .descriptions{
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p.title{
        color: #9F9A96;
        font-size: 20px;
        margin-bottom: 5px;
    }
    p:nth-child(2){
        font-size: 23px;
        color: #383838;
        &.time-text{
            display: flex;
            align-items: center;
        }
    }
`

export const StepsContainer = styled.div`
    width: 100%;
    box-shadow: 3px 3px 15px #AEAEAE;
    border-radius: 20px;
    padding: 20px 25px;
    h2{
        margin-bottom: 10px;
    }
`

export const IngredientsTagsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`

export const IngredientsContainer = styled.div`
    width: 63.75%;
    box-shadow: 3px 3px 15px #AEAEAE;
    border-radius: 20px;
    padding: 20px 25px;
    h2{
        margin-bottom: 10px;
    }
    .ingredients{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    `

export const TagsContainer = styled.div`
    width: 33.75%;
    box-shadow: 3px 3px 15px #AEAEAE;
    border-radius: 20px;
    padding: 20px 25px;
    h2{
        margin-bottom: 10px;
    }
    .tags{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }
`