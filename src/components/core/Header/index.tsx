import {HeaderContainer} from './styles'
import { NavLink } from 'react-router-dom'
import {GiKnifeFork} from 'react-icons/gi'

export default function Header(){
    return(
        <HeaderContainer>
            <div className='left'>
                <NavLink to="/">
                    Recipes
                </NavLink>
                <NavLink to="/searchByIngredients">
                    Search By Ingredients
                </NavLink>
            </div>
            <div className='logo'>
                <p>
                    Good
                </p>
                <span>
                    <GiKnifeFork size={40}/>
                </span>
                <p>
                    Food
                </p>
            </div>
            <div className='right'>
                <NavLink to="/favorites">
                    Favorites
                </NavLink>
                <NavLink to="/config">
                    Config
                </NavLink>
            </div>
        </HeaderContainer>
    )
}