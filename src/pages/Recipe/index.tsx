import { RecipeContainer } from './styles'
import TagHomeList from '../../components/core/TagHomeList'
import RecipeList from '../../components/core/RecipeList'

export default function Recipe() {
    return (
        <RecipeContainer>
            <TagHomeList/>
            <RecipeList/>
        </RecipeContainer>
    )
}