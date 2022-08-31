import { DifficultyContainer } from './styles'
import {GiCook} from 'react-icons/gi'

interface DifficultyProps {
    number: number
}

export default function DifficultyLevel(props: DifficultyProps) {

    return (
        <DifficultyContainer>
            <GiCook size={18} color={"#34EBC3"}/>
            <GiCook size={18} color={props.number >= 2 ? "#34EBC3" : "#8A8A8A"}/>
            <GiCook size={18} color={props.number == 3 ? "#34EBC3" : "#8A8A8A"}/>
        </DifficultyContainer>
    )
}