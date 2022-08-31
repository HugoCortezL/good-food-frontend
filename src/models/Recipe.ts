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
    steps: any[],
    ingredients: any[],
    generalTags: Tag[]
}