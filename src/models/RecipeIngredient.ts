import { Ingredient } from "./Ingredient"
import { Portion } from "./Portion"

export type RecipeIngredient = {
    id: string,
    quantity: number,
    portion: string,
    ingredient: string,
    recipeId: string,
    __typename: string
}

export type RecipeIngredientView = {
    id: string,
    quantity: number,
    portion: Portion,
    ingredient: Ingredient,
    recipeId: string,
    __typename: string
}