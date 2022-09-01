import styled from 'styled-components'

interface GeneralTagContainerProps {
    background: string,
    color: string
}

export const CreateRecipeTwoContainer = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 20px #CACACA;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    header{
        background-color: #34EBC3;
        height: 35px;
        font-size: 25px;
        text-align: center;
    }
    .form-control{
        select {
            width: 90% !important;
        }
        button{
            position: absolute;
            top: 45px;
            right: 0;
            height: 42px;
            width: 8%;
            background-color: #34EBC3;
            font-size: 18px;
        }
    }
    .options{
        position: absolute;
        bottom: 15px;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    section{
        max-height: calc(100% - 137px);
        height: calc(80% - 137px);
        padding: 15px 20px;
        .general-tags-container{
            height: 100%;
            padding: 5px;
            border: 2px solid #9D9D9D;
            border-radius: 10px;
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
            flex-direction: row;
    
        }
    }
`

export const GeneralTagContainer = styled.div<GeneralTagContainerProps>`
    background-color: ${props => props.background};
    color: ${props => props.color};
    margin: 5px;
    padding: 5px 15px;
    font-size: 17px;
    border-radius: 20px;
`