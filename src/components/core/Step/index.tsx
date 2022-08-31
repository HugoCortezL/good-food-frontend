import { StepContainer } from './styles'
import { useState } from 'react'

interface StepProps {
    description: string,
    index: number
}

export default function Step(props: StepProps) {
    const [checked, setChecked] = useState(false)

    const check = () => {
        setChecked(!checked)
    }

    return (
        <StepContainer className={checked ? 'checked' : ''}>
            <div className='step-title'>
                <label className="circle-checkbox">
                    <input type="checkbox" onClick={check}/>
                    <span className="checkmark"></span>
                </label>
                <p> Step {props.index}</p>
                <div className="line"/>
            </div>
            <p className="description">
                {props.description}
            </p>
        </StepContainer>
    )
}