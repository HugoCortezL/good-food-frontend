import { RecipeDetailContainer, DescriptionContainer, InformationContainer, StepsContainer, IngredientsTagsContainer, IngredientsContainer, TagsContainer } from './styles'
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client'
import { LOAD_RECIPE_BY_ID } from '../../api/Recipe'
import { useEffect, useState } from 'react'
import { RecipeView } from '../../models/Recipe'

import StarRate from '../../components/shared/StarRate';
import { minutesToTimeString } from '../../utilities/time'
import { AiOutlineClockCircle } from 'react-icons/ai'
import Step from '../../components/core/Step';

import Loading from '../../components/shared/Loading';
import DifficultyLevel from '../../components/shared/DifficultyLevel';
import IngredientInRecipe from '../../components/core/IngredientInRecipe';
import TagInRecipe from '../../components/core/TagInRecipe';


export default function RecipeDetail() {
    const id = useParams().id

    const [recipe, setRecipe] = useState<RecipeView>()

    const { error, loading, data } = useQuery(LOAD_RECIPE_BY_ID, {
        variables: { id }
    })

    useEffect(() => {
        if (data) {
            setRecipe(data.getRecipeById)
        }
    }, [data])

    if (loading) return <Loading />

    return (
        <RecipeDetailContainer>
            <h1>
                {recipe ? recipe.name : ''}
            </h1>
            <img src={recipe ? recipe.imageUrl : ''} alt="" />
            <DescriptionContainer>
                <h2>Description</h2>
                <div className="descriptions">
                    <InformationContainer>
                        <p className="title">Rate</p>
                        <p>
                            <StarRate size={23} number={recipe ? recipe.rate : 0} />
                        </p>
                    </InformationContainer>
                    <InformationContainer>
                        <p className="title">Ingredients</p>
                        <p>{recipe ? recipe.ingredients.length : 0}</p>
                    </InformationContainer>
                    <InformationContainer>
                        <p className="title">Steps</p>
                        <p>{recipe ? recipe.steps.length : 0}</p>
                    </InformationContainer>
                    <InformationContainer>
                        <p className="title">Time</p>
                        <p className='time-text'>
                            <AiOutlineClockCircle size={23} />
                            {minutesToTimeString(recipe ? recipe.time : 0)}
                        </p>
                    </InformationContainer>
                    <InformationContainer>
                        <p className="title">Servings</p>
                        <p>Servings</p>
                    </InformationContainer>
                    <InformationContainer>
                        <p className="title">Dificult</p>
                        <p>
                            <DifficultyLevel size={23} number={recipe ? recipe.difficulty : 0} />
                        </p>
                    </InformationContainer>
                </div>
            </DescriptionContainer>
            <IngredientsTagsContainer>
                <IngredientsContainer>
                    <h2>Ingredients</h2>
                    <div className='ingredients'>
                        {
                            recipe ?
                                recipe.ingredients.map(ingredient => {
                                    return (
                                        <IngredientInRecipe
                                            key={ingredient.id}
                                            ingredient={ingredient.ingredient.name}
                                            portion={ingredient.portion.name}
                                            quantity={String(ingredient.quantity)}
                                        />
                                    )
                                }) :
                                <></>
                        }
                    </div>
                </IngredientsContainer>
                <TagsContainer>
                    <h2>Tags</h2>
                    <div className="tags">
                        {
                            recipe ?
                                <>
                                    <TagInRecipe background={recipe.principalTag.color} name={recipe.principalTag.name} />
                                    {recipe.generalTags.map(tag => {
                                        return (
                                            <TagInRecipe
                                                key={tag.id}
                                                background={tag.color}
                                                name={tag.name}
                                            />
                                        )
                                    })}
                                </> :
                                <></>
                        }
                    </div>
                </TagsContainer>
            </IngredientsTagsContainer>
            <StepsContainer>
                <h2>Steps</h2>
                {
                    recipe ?
                        recipe.steps.map((step, index) => {
                            return (
                                <Step key={step.id} description={step.description} index={index + 1} />
                            )
                        }) :
                        <></>
                }
            </StepsContainer>
        </RecipeDetailContainer>
    )
}