import { RecipeIngredientView } from "./RecipeIngredient"
import { Step } from "./Step"
import { Tag } from "./Tag"

export type Recipe = {
    __typename: string
    id: string,
    name: string,
    time: number,
    servings: number,
    imageUrl: string,
    rate: number,
    difficulty: number,
    favotire: boolean,
    principalTag: Tag,
}

export interface RecipeView extends Recipe {
    steps: Step[],
    ingredients: RecipeIngredientView[],
    generalTags: Tag[]
}