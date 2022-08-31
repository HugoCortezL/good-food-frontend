import { RecipeListContainer, Content } from './styles'
import { useQuery } from '@apollo/client'
import { LOAD_RECIPE } from '../../../api/Recipe'
import { useEffect, useState } from 'react'
import { Recipe } from '../../../models/Recipe'
import { client } from '../../../App'

import { Link } from 'react-router-dom'

import RecipeCard from '../RecipeCard'
import Loading from '../../shared/Loading'
import { AiOutlinePlus } from 'react-icons/ai'

export default function RecipeList() {
    const [recipes, setRecipes] = useState<Recipe[]>([])

    const { error, loading, data } = useQuery(LOAD_RECIPE)

    useEffect(() => {
        if (data) {
            setRecipes(data.getAllRecipes)
        }
    }, [data])

    useEffect(() => {
        refetchLoadTags()
    }, [])

    const refetchLoadTags = async () => {
        await client.refetchQueries({
            include: [LOAD_RECIPE],
        });
    }

    const recipeList = recipes.map(recipe => {
        return (
            <div key={recipe.id}>
                <RecipeCard recipe={recipe}/>
            </div>
        )
    })


    if (loading) return <Loading />

    return (
        <RecipeListContainer>
            <div className="header">
                <h2>Recipes</h2>
                <Link to="recipe/new">
                    <button className='create' >
                        <AiOutlinePlus size={25} />
                        Create
                    </button>
                </Link>
            </div>

            <Content>
                {recipeList}
            </Content>
        </RecipeListContainer>
    )
}