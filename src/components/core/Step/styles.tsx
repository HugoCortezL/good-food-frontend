import styled from 'styled-components'

export const StepContainer = styled.div`
    .step-title{
        display: flex;
        align-items: center;
        p{
            font-size: 20px;
            margin-left: 35px;
            color: #34EBC3;
            font-weight: bold;
        }
        .line{
            width: 70%;
            width: calc(100% - 120px);
            height: 2px;
            margin-left: 10px;
            background-color: #EDEDED;
        }

    }

    p.description{
        font-size: 18px;
        margin: 3px 0 20px;
    }
    &:last-child p.description{
        margin-bottom: 0;
    }

    &.checked{
        p{
            color: #d2d2d2;
            font-weight: normal;
            text-decoration: line-through;
        }
    }
`
