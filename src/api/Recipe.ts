import { gql } from '@apollo/client'

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