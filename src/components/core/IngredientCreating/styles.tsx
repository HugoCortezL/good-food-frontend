import styled from 'styled-components'


export const IngredientCreatingContainer = styled.div`
    width: 50%;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    position: fixed;
    top: 20vh;
    left: 25%;
    z-index: 100;
    header {
        padding: 1rem;
        background: #34EBC3;
        color: #000000;
        h1{
            font-size: 1.25rem;
        }
    }

    .modal__content {
        padding: 1rem;
        .form-control{
            width: 70%;
            margin: 0 auto;
            label{
                font-size: 18px;
            }
            input{
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

    .modal__actions {
        display: flex;
        justify-content: flex-end;
        padding: 1rem;

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
    }

    @media (min-width: 768px) {
        .modal {
            width: 30rem;
            left: calc((100% - 30rem) / 2);
        }
    }
`

