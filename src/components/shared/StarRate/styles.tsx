import styled from 'styled-components'

interface LengthProps {
    length: string,
    height?: string
}

export const StarRateContainer = styled.div<LengthProps>`
    position: relative;
    width: ${props => props.length };
    height: ${props => props.height };
`

export const GoldStars = styled.div<LengthProps>`
    width: ${props => props.length };
    overflow: hidden;
    white-space: nowrap;
    z-index: 100;
    position: absolute;
    `
export const GrayStars = styled.div`
    position: absolute;
    top: 0;
    z-index: 1;
`