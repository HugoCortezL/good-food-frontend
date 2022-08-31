import styled from 'styled-components'

export const CreateRecipeOneContainer = styled.div`
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
    form{
        .top{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }
        .bottom{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            margin-top: 10px;
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
`