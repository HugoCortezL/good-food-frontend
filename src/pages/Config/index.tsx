import { ConfigContainer, SideBar, MenuItem, Content } from './styles'
import { useState } from 'react'
import { BsFillPieChartFill, BsFillBookmarkFill, BsFillBookFill } from 'react-icons/bs'
import IngredientsList from '../../components/core/Ingredient/IngredientList'
import PortionList from '../../components/core/Portions/PortionList'

export default function Configs() {
    const [tableShow, setTableShow] = useState('ingredients')

    return (
        <ConfigContainer>
            <SideBar>
                <ul>
                    <li onClick={() => setTableShow('ingredients')} className={tableShow === 'ingredients' ? 'active' : ''}>
                        <MenuItem>
                            <BsFillBookFill />
                            <p>
                                Ingredients
                            </p>
                        </MenuItem>
                    </li>
                    <li onClick={() => setTableShow('portions')} className={tableShow === 'portions' ? 'active' : ''}>
                        <MenuItem>
                            <BsFillPieChartFill />
                            <p>
                                Portions
                            </p>
                        </MenuItem>
                    </li>
                    <li onClick={() => setTableShow('tags')} className={tableShow === 'tags' ? 'active' : ''}>
                        <MenuItem>
                            <BsFillBookmarkFill />
                            <p>
                                Tags
                            </p>
                        </MenuItem>
                    </li>
                </ul>
            </SideBar>

            <Content>
                {tableShow == 'ingredients' ? <IngredientsList /> : <></>}
                {tableShow == 'portions' ? <PortionList /> : <></>}
                
            </Content>

        </ConfigContainer>
    )
}