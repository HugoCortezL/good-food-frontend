import { DifficultyContainer } from './styles'
import {GiCook} from 'react-icons/gi'

interface DifficultyProps {
    size: number,
    number: number
}

export default function DifficultyLevel(props: DifficultyProps) {

    return (
        <DifficultyContainer>
            <GiCook size={props.size} color={"#34EBC3"}/>
            <GiCook size={props.size} color={props.number >= 2 ? "#34EBC3" : "#8A8A8A"}/>
            <GiCook size={props.size} color={props.number == 3 ? "#34EBC3" : "#8A8A8A"}/>
        </DifficultyContainer>
    )
}