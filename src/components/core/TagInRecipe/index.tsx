import { TagInRecipeContainer } from './styles'

interface TagInRecipeProps {
    background: string
    name: string
}

export default function TagInRecipe(props: TagInRecipeProps) {
    return (
        <TagInRecipeContainer background={props.background}>
            {props.name}
        </TagInRecipeContainer>
    )
}