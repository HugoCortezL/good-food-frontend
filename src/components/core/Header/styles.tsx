import styled from 'styled-components'

export const HeaderContainer = styled.div`
    padding: 0 24px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 100vw;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    .left, .right{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        a{
            text-decoration: none;
            color: #000000;
            font: inherit;
            cursor: pointer;
            font-size: 20px;
            &:hover, &:active, &.active{
                color: #EB9328;
            }
        }
    }
    .logo{
        color: #34EBC3;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
            font-size: 30px;
        }
        span{
            margin: 0 10px;
        }
    }

    
`