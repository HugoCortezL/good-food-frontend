import styled from 'styled-components'

export const CreateRecipeContainer = styled.div`
    padding: 50px;
    height: calc(100vh - 60px);
    form{
        padding: 5px 20px;
        .form-control{
            label{
                font-size: 18px;
            }
            input, select{
                width: 100%;
                padding: 10px;
                font-size: 18px;
                background-color: #ececec;
                border: none;
                border-radius: 6px;
                margin-top: 5px;
            }
        }
    }
    button{
        font: inherit;
        border: 1px solid #34EBC3;
        border-radius: 3px;
        padding: 0.25rem 1rem;
        margin-right: 1rem;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.26);
        cursor: pointer;

        &.confirm-btn {
            background: #34EBC3;
            color: #000000;
            cursor: pointer;
            &:hover{
                background: #00e5b3;
            }
        }

        &.cancel-btn {
            background: #FFFFFF;
            color: #34EBC3;
            &:hover{
                background: #f0fffc;
            }
        }
    }
`