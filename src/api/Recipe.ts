import { gql } from '@apollo/client'
import { Recipe } from '../models/Recipe'

export const LOAD_RECIPE = gql`
    query{
        getAllRecipes{
            id
            name
            time
            servings
            imageUrl
            rate
            difficulty
            favorite
            principalTag{
                name
                color
            }
        }
    }
`

export const LOAD_RECIPE_BY_ID = gql`
    query getRecipeById($id: String!){
        getRecipeById(id: $id){
            id,
            name,
            time,
            servings,
            imageUrl,
            rate,
            difficulty,
            favorite,
            steps{
                id
                description
            }
            ingredients {
                id,
                quantity
                portion {
                    name
                }
                ingredient {
                    name
                }
            }
            principalTag{
                id
                name
                color
            }
            generalTags {
                id
                name
                color
            }
        }
    }
`

export const CREATE_RECIPE = gql`
    mutation createRecipe($name: String!, $time: Float!, $servings: Float!, $imageUrl: String!, $rate: Float!, $difficulty: Float!, $favorite: Boolean, $principalTag: ID!){
        createRecipe(recipe: {
            name: $name
            time: $time
            servings: $servings
            imageUrl: $imageUrl
            rate: $rate
            difficulty: $difficulty
            favorite: $favorite
            principalTag: $principalTag
        }){
            id
            name
        }
    }
`