import { BackdropContainer } from './styles'

interface BackdopProps {
    click: any
}

export default function Backdrop(props: BackdopProps) {
    return (
        <BackdropContainer onClick={props.click}>

        </BackdropContainer>
    )
}