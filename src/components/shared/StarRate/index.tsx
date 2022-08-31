import { StarRateContainer, GoldStars, GrayStars } from './styles'
import { AiFillStar } from 'react-icons/ai'

interface StarRateProps {
    size: number,
    number: number
}

export default function StarRate(props: StarRateProps) {
    const startRate = String(props.size * props.number) + 'px'
    return (
        <StarRateContainer length={String(props.size * 5) + 'px'} height={String(props.size) + 'px'} title={String(props.number)}>
            <GoldStars length={startRate}>
                <AiFillStar color={'#FFD700'} size={props.size} />
                <AiFillStar color={'#FFD700'} size={props.size} />
                <AiFillStar color={'#FFD700'} size={props.size} />
                <AiFillStar color={'#FFD700'} size={props.size} />
                <AiFillStar color={'#FFD700'} size={props.size} />
            </GoldStars>
            <GrayStars>
                <AiFillStar color={'#E2E2E2'} size={props.size} />
                <AiFillStar color={'#E2E2E2'} size={props.size} />
                <AiFillStar color={'#E2E2E2'} size={props.size} />
                <AiFillStar color={'#E2E2E2'} size={props.size} />
                <AiFillStar color={'#E2E2E2'} size={props.size} />
            </GrayStars>
        </StarRateContainer>
    )
}