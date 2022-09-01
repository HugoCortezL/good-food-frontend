import styled from 'styled-components'

export const BreadcrumbContainer = styled.div`
    display: inline-flex;
    align-items: center;
    box-shadow: 1px 1px 10px #b8b8b8;
    border-radius: 7px;
    position: absolute;
    top: 75px;
    span{
        margin: 0 5px -6px;
    }
`

export const BreadcrumbItem = styled.div`
    padding: 6px 20px;
    cursor: pointer;
    p.last{
        color: #EB9328;
    }
    &:hover {
        background: #f6f6f6 0 0 repeat;
    }
`