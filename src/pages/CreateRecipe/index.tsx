import { CreateRecipeContainer } from './styles'
import { useState } from 'react'

import CreateRecipeOne from './PageOne'
import CreateRecipeTwo from './PageTwo'

export default function CreateRecipe() {
    const [page, setPage] = useState(1)

    let pageToShow
    if (page == 1) {
        pageToShow = <>
            <CreateRecipeOne >
                <button className="cancel-btn" >
                    Cancel
                </button>
                <button className="confirm-btn">
                    Create and next
                </button>
            </CreateRecipeOne>
        </>
    } else if (page == 2) {
        pageToShow = <>
        <CreateRecipeTwo>
            <div>
                oi
            </div>
        </CreateRecipeTwo>
        
        </> 
    }

    return (
        <CreateRecipeContainer>
            {
                pageToShow
            }
        </CreateRecipeContainer>
    )
}