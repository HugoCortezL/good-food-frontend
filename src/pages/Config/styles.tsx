import styled from 'styled-components'

export const ConfigContainer = styled.div`
    display: flex;
`

export const SideBar = styled.div`
    height: calc(100vh - 60px);
    width: 20vw;
    box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.25);
    ul li {
        width: 100%;
        height: 50px;
        padding: 10px 15px;
        cursor: pointer;
        &.active{
            background-color: #E2FFF9;
        }
    }
`

export const MenuItem = styled.div`
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #34EBC3;
    p{
        margin-left: 10px;
        color: #292929;
    }
`

export const Content = styled.div`
    width: 100%;
    padding: 50px;
`