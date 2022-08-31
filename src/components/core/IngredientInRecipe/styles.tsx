import styled from 'styled-components'

export const IngredientInRecipeContainer = styled.div`
    border: 1px solid #cbcbcb;
    border-radius: 8px;
    width: 90%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    &:nth-child(even){
        margin-left: 7%;
    }
    .text{
        margin-left: 40px;
        p.ingredient{
            font-size: 20px;
            margin-bottom: 5px;
            font-weight: bold;
        }
        p.portion{
            color: #A6A6A6;
            span{
                margin-left: 3px;
            }
        }
    }

    &.checked{
        p{
            color: #d2d2d2 !important;
            font-weight: normal !important;
            text-decoration: line-through;
        }
    }
`