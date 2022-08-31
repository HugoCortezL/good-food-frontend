import { RecipeCardContainer, ImageContainer, ContentContainer, TagContainer, DescContainer } from './styles'

import { Recipe } from '../../../models/Recipe'
import { minutesToTimeString } from '../../../utilities/time'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { colorByBackground } from '../../../utilities/colorByBackground'

import DifficultyLevel from '../../shared/DifficultyLevel'
import StarRate from '../../shared/StarRate'

import { Link } from "react-router-dom";

interface RecipeCardProps {
    recipe: Recipe
}
export default function RecipeCard(props: RecipeCardProps) {

    return (
        <Link to={`/recipe/${props.recipe.id}`}>
            <RecipeCardContainer>
                <ImageContainer background={props.recipe.imageUrl}>
                    <div className='rate'>
                        <StarRate size={18} number={props.recipe.rate} />
                    </div>
                </ImageContainer>
                <ContentContainer>
                    <div className='top'>
                        <h2>
                            {props.recipe.name}
                        </h2>
                        <TagContainer background={props.recipe.principalTag.color} color={colorByBackground(props.recipe.principalTag.color)}>
                            <div className='tag'>
                                <p>
                                {props.recipe.principalTag.name}
                                </p>
                            </div>
                        </TagContainer>
                    </div>
                    <DescContainer>
                        <div className='desc'>
                            <p className='title'>Difficulty</p>
                            <DifficultyLevel size={18} number={props.recipe.difficulty} />
                        </div>
                        <div className='divisor'></div>
                        <div className='desc'>
                            <p className='title'>Time</p>
                            <p className='time-text'>
                                <AiOutlineClockCircle size={18} />
                                {minutesToTimeString(props.recipe.time)}
                            </p>
                        </div>
                    </DescContainer>
                </ContentContainer>
            </RecipeCardContainer>
        </Link>
    )
}