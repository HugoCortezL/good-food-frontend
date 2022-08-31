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