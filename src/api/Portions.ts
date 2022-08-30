import { gql } from '@apollo/client'

export const LOAD_PORTION = gql`
    query{
        getAllPortions{
            id
            name
        }
    }
`

export const CREATE_PORTION = gql`
    mutation createPortion($name: String!){
        createPortion(portion: {name: $name}){
            id
            name
        }
    }
`

export const UPDATE_PORTION = gql`
    mutation updatePortion($name: String!, $id: String!){
        updatePortion(portion: {name: $name}, id: $id)
    }
`

export const DELETE_PORTION = gql`
    mutation deletePortion($id: String!){
        deletePortion(id: $id)
    }
`