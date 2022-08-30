import styled from 'styled-components'

export const TagListContainer = styled.div`
    
`

export const Content = styled.div`
    header{
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
    
    .table-scroll-container{
        position: relative;
        height: calc(100vh - 245px);
        overflow-y: scroll;
        /* width */
        &::-webkit-scrollbar {
        width: 8px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
        background: transparent;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
        background: #34EBC3;
        border-radius: 10px;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
        background: #00d1a4;
        }
    }
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    th{
        font-size: 20px;
        height: 50px;
        background-color: #F2F2F2;
        &.col-th-name{
            padding-left: 25px;
            text-align: start;
        }
        &.col-th-name,
        &.col-th-color{
            padding-left: 25px;
            text-align: start;
        }
        &.col-th-options{
            border-radius: 0 10px 0 0;
            padding-right: 25px;
            width: 220px;
        }
    }
    tbody{
        tr:nth-child(even) {
            background-color: #F8F8F8;
        }
        tr:hover{
            background-color: #F1F1F1;
        }
    }
    td{
        height: 50px;
        border-top: none;
        &.col-td-name,
        &.col-td-color{
            border-right: none;
            padding-left: 25px;
            font-size: 20px;
        }
        &.col-td-options{
            border-left: none;
            padding-right: 25px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    button{
        border-radius: 5px;
        border: none;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 15px;
        cursor: pointer;
        span{
            margin-left: 5px;
        }
        &.edit-button{
            color: #FF9A24;
            background-color: #FFE4C3;
            &:hover{
                background-color: #ffdbae;
            }
        }
        &.delete-button{
            color: #FF2424;
            background-color: #FFC3C3;
            &:hover{
                background-color: #ffafaf;
            }
        }
    }
`