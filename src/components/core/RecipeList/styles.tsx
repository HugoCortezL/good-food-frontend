import styled from 'styled-components'

export const RecipeListContainer = styled.div`
    margin: 20px 24px;
    overflow: hidden;
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        h2{
            font-size: 25px;
        }
        button{
            padding: 5px;
            color: #FFFFFF;
            background-color: #34EBC3;
            border-radius: 2px;
            border: none;
            display: flex;
            align-items: center;
            font-size: 20px;
            cursor: pointer;
            box-shadow: none;
            transition: box-shadow 0.1s;
            &:hover{
                box-shadow: 2px 2px 8px rgba(0,0,0,0.3);
                transition: box-shadow 0.1s;
            }
            &:active{
                box-shadow: none;
                transition: box-shadow 0s;
            }
        }
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 36px;
    align-items: center;
`

