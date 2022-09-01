import styled from 'styled-components'

interface BgProps {
    background: string;
    color?: string;
}

export const RecipeCardContainer = styled.div`
    
    height: 50vh;
    border-radius: 5px 20px 2px 20px;
    box-shadow: 4px 4px 8px #D2D2D2;
    overflow: hidden;
    cursor: pointer;
    margin-left: 3px;
    margin-bottom: 24px;
`

export const ImageContainer = styled.div<BgProps>`
    width: 100%;
    height: 50%;
    background: linear-gradient(180deg, rgba(217, 217, 217, 0) 79.17%, #FFFFFF 100%), ${props => `url('${props.background}')`};
    background-size: cover;
    background-position: center center;
    position: relative;
    .rate{
        position: absolute;
        bottom: 5px;
        right: 5px;
        padding: 3px;
        border-radius: 5px;
        display: inline-block;
        backdrop-filter: blur(7px);
    }
`

export const ContentContainer = styled.div`
    width: 100%;
    height: 50%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top{
        overflow: hidden;
        h2{
            max-height: 63%;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 20px;
            @media (min-width: 1400px) {
                font-size: 25px;
            }
        }
    }
`

export const TagContainer = styled.div<BgProps>`
    margin: 5px 0%;
    @media (min-width: 1400px) {
        margin: 10px 0%;
    }
    .tag{
        display: inline-block;
        padding: 5px;
        background-color: ${props => props.background};
        color: ${props => props.color ? props.color : "#C3C3C3"}; 
        border-radius: 5px;
        p{
            font-weight: bold; 
        }
    }
`

export const DescContainer = styled.div`
    border-top: 2px solid #EDEDED;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px;
    .desc{
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            &.title{
                font-size: 15px;
                color: #B7B7B7;
            }
            &.time-text{
                color: #8A8A8A;
                font-size: 18px;
                display: flex;
                align-items: center;
            }
        }
    }
    .divisor{
        height: 100%;
        width: 2px;
        background-color: #EDEDED;
    }
`