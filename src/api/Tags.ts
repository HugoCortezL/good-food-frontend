import { gql } from '@apollo/client'

export const LOAD_TAG = gql`
    query{
        getAllTags{
            id
            name
            color
        }
    }
`

export const CREATE_TAG = gql`
    mutation createTag($name: String!, $color: String!){
        createTag(tag: {name: $name, color: $color}){
            id
            name
            color
        }
    }
`

export const UPDATE_TAG = gql`
    mutation updateTag($name: String!, $color: String!, $id: String!){
        updateTag(tag: {name: $name, color: $color}, id: $id)
    }
`

export const DELETE_TAG = gql`
    mutation deleteTag($id: String!){
        deleteTag(id: $id)
    }
`