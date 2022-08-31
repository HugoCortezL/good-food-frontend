import { IngredientInRecipeContainer } from './styles'
import { useState } from 'react'

interface IngredientInRecipeProps {
    ingredient: string,
    portion: string,
    quantity: string
}

export default function IngredientInRecipe(props: IngredientInRecipeProps) {
    const [checked, setChecked] = useState(false)

    const check = () => {
        setChecked(!checked)
    }
    return (
        <IngredientInRecipeContainer className={checked ? 'checked' : ''}>
            <label className="square-checkbox">
                <input type="checkbox" onClick={check} />
                <span className="checkmark"></span>
            </label>
            <div className="text">
                <p className='ingredient'>
                {props.ingredient.charAt(0).toUpperCase() + props.ingredient.slice(1)}
                </p>
                <p className='portion'>
                    {props.quantity}
                    <span>
                        {props.portion}
                    </span>
                </p>
            </div>
        </IngredientInRecipeContainer>
    )
}