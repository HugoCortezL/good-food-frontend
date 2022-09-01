import { CreateRecipeOneContainer } from './styles'
import { useState, useEffect } from 'react'
import { Recipe } from '../../../models/Recipe'
import { useQuery } from '@apollo/client'
import { LOAD_TAG } from '../../../api/Tags'
import { Tag } from '../../../models/Tag'
import Loading from '../../../components/shared/Loading'
import { Link } from 'react-router-dom'



interface CreateRecipeOneProps {
    id?: string,
    onConfirm: (recipe: Recipe) => void,
    addMessage: (messageCode: string) => void
}

export default function CreateRecipeOne(props: CreateRecipeOneProps) {
    
    const [recipe, setRecipe] = useState<Recipe>({
        difficulty: 1,
        favorite: false,
        id: "",
        imageUrl: "",
        name: "",
        rate: 0,
        servings: 1,
        time: 1,
        __typename: "",
        principalTag: {
            id: "",
            color: "",
            name: "",
            __typename: "",
        },

    })

    const [tags, setTags] = useState<Tag[]>([])
    const { error, loading, data } = useQuery(LOAD_TAG)

    useEffect(() => {
        if (data) {
            setTags(data.getAllTags)
        }
    }, [data])

    const onConfirmHandler = () => {
        if(validateRecipe()){
            props.onConfirm(recipe)
            props.addMessage("REC01001")
        }else{
            console.log("Entrou")
            props.addMessage("REC04002")
        }
    }

    const validateRecipe = (): boolean => {
        if(recipe.name.trim().length < 1){
            return false
        }
        if(recipe.imageUrl.trim().length < 1){
            return false
        }
        if(recipe.principalTag.id.trim().length < 1){
            return false
        }
        return true
    }

    const inputsChangeHandler = (event: any) => {
        const exRecipe: Recipe = { ...recipe }
        if (event.target.id == "name") {
            exRecipe.name = event.target.value
        } else if (event.target.id == "imageUrl") {
            exRecipe.imageUrl = event.target.value
        } else if (event.target.id == "time") {
            if (event.target.value < 1) {
                exRecipe.time = 1
            } else {
                exRecipe.time = event.target.value
            }
        } else if (event.target.id == "servings") {
            if (event.target.value < 1) {
                exRecipe.servings = 1
            } else {
                exRecipe.servings = event.target.value
            }
        } else if (event.target.id == "rate") {
            if (event.target.value < 0) {
                exRecipe.rate = 0
            } else if (event.target.value > 5) {
                exRecipe.rate = 5
            } else {
                exRecipe.rate = event.target.value
            }
        } else if (event.target.id == "difficulty") {
            if (event.target.value < 1) {
                exRecipe.difficulty = 1
            } else if (event.target.value > 3) {
                exRecipe.difficulty = 3
            } else {
                exRecipe.difficulty = event.target.value
            }
        } else if (event.target.id == "principalTag") {
            exRecipe.principalTag.id = event.target.value
        }
        setRecipe(exRecipe)
    }

    

    if (loading) return <Loading />

    return (
        <CreateRecipeOneContainer>
            
            <header>
                {
                    props.id ?
                        "Edit Recipe" :
                        "Create Recipe"
                }
            </header>
            <form>
                <div className="top">
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={recipe.name} onChange={inputsChangeHandler} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="imageUrl">Image URL</label>
                        <input type="text" id="imageUrl" value={recipe.imageUrl} onChange={inputsChangeHandler} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="principalTag">Principal tag</label>
                        <select name="selectTag" id="principalTag" onChange={inputsChangeHandler} >
                            <option disabled selected value="">Select an option</option>
                            {
                                tags.map(tag => {
                                    return (
                                        <option key={tag.id} value={tag.id} >{tag.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="bottom">
                    <div className="form-control">
                        <label htmlFor="time">Time</label>
                        <input type="number" id="time" value={recipe.time} onChange={inputsChangeHandler} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="servings">Servings</label>
                        <input type="number" id="servings" value={recipe.servings} onChange={inputsChangeHandler} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="rate">Rate</label>
                        <input type="number" id="rate" value={recipe.rate} onChange={inputsChangeHandler} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="difficulty">Difficulty</label>
                        <input type="number" id="difficulty" value={recipe.difficulty} onChange={inputsChangeHandler} />
                    </div>
                </div>
            </form>
            <div className="options">
                <Link to="/">
                    <button className="cancel-btn" >
                        Cancel
                    </button>
                </Link>
                <button className="confirm-btn" onClick={onConfirmHandler}>
                    Create and next
                </button>
            </div>
        </CreateRecipeOneContainer>
    )
}