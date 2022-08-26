import { gql } from '@apollo/client'

export const LOAD_INGREDIENTS = gql`
    query{
        getAllIngredients{
            id
            name
        }
    }
`

export const CREATE_INGREDIENT = gql`
    mutation createIngredient($name: String!){
        createIngredient(ingredient: {name: $name}){
            id
            name
        }
    }
`

export const UPDATE_INGREDIENT = gql`
    mutation updateIngredient($name: String!, $id: String!){
        updateIngredient(ingredient: {name: $name}, id: $id)
    }
`

export const DELETE_INGREDIENT = gql`
    mutation deleteIngredient($id: String!){
        deleteIngredient(id: $id)
    }
`