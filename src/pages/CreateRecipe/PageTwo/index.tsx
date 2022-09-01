import { CreateRecipeTwoContainer, GeneralTagContainer } from './styles'
import { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { LOAD_GENERALTAGS_BY_RECIPEID, ADD_GENERAL_TAG } from '../../../api/Recipe'
import { LOAD_TAG } from '../../../api/Tags'
import { Tag } from '../../../models/Tag'
import Loading from '../../../components/shared/Loading'
import { client } from '../../../App'
import { colorByBackground } from '../../../utilities/colorByBackground'

interface CreateRecipeOneProps {
    id: string,
    onCancelHandler: () => void,
    onConfirmHandler: () => void,
    addMessage: (messageCode: string) => void
}

export default function CreateRecipeTwo(props: CreateRecipeOneProps) {
    const id = props.id
    const [generalTags, setGeneralTags] = useState<Tag[]>([])
    const [selectedTag, setSelectedTag] = useState<string>()

    const [tags, setTags] = useState<Tag[]>([])

    const generalTagsQueryResult = useQuery(LOAD_GENERALTAGS_BY_RECIPEID, {
        variables: { id }
    })
    const allTagsQueryResult = useQuery(LOAD_TAG)
    const [addGeneralTag, addGeneralTagMutationResult] = useMutation(ADD_GENERAL_TAG)

    const loading = generalTagsQueryResult.loading || allTagsQueryResult.loading

    useEffect(() => {
        if (generalTagsQueryResult.data && allTagsQueryResult.data) {
            setTags(allTagsQueryResult.data.getAllTags)
            setGeneralTags(generalTagsQueryResult.data.getRecipeById.generalTags)
        }
    }, [generalTagsQueryResult.data, allTagsQueryResult.data])

    const refetchGeneralTagsIngredients = async () => {
        await client.refetchQueries({
            include: [LOAD_GENERALTAGS_BY_RECIPEID],
        });
    }

    const inputsChangeHandler = (event: any) => {
        setSelectedTag(event.target.value)
    }

    const addTagToRecipe = async (event: any) => {
        event.preventDefault()
        let exists = false
        if (selectedTag) {
            for (let i = 0; i < generalTags.length; i++) {
                if (generalTags[i].id == selectedTag) {
                    props.addMessage("REC03005")
                    exists = true
                    break
                }
            }
            if (!exists) {
                props.addMessage("REC01003")
                console.log("CRIAR MENSAGEM SUCCESS QUE ADICIONOU")
                const result = await addGeneralTag({ variables: { recipeId: id, tagId: selectedTag } })
                refetchGeneralTagsIngredients()
            }
        } else {
            props.addMessage("REC02004")
            console.log("CRIAR MENSAGEM WARNING QUE PRECISA SELECIONAR")
        }
        setSelectedTag("")
        const selectEl = document.getElementById("principalTag")
        if (selectEl) {
            selectEl.value = "DEFAULT"
        }
    }

    if (loading) return <Loading />

    return (
        <CreateRecipeTwoContainer>
            <header>
                Add General Tags
            </header>
            <form>
                <div className="form-control">
                    <select name="selectTag" id="principalTag" onChange={inputsChangeHandler}>
                        <option disabled selected value="DEFAULT" >Select an option</option>
                        {
                            tags.map(tag => {
                                return (
                                    <option key={tag.id} value={tag.id} >{tag.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-control">
                    <button className="confirm-btn" onClick={addTagToRecipe}>
                        Add
                    </button>
                </div>
            </form>
            <section>
                <div className='general-tags-container'>
                    {
                        generalTags.map(tag => {
                            const color = colorByBackground(tag.color)
                            return (
                                <GeneralTagContainer key={tag.id} background={tag.color} color={color}>
                                    {tag.name}
                                </GeneralTagContainer>
                            )
                        })
                    }
                </div>
            </section>
            <div className="options">
                <button className="cancel-btn" onClick={props.onCancelHandler}>
                    Back
                </button>
                <button className="confirm-btn" onClick={props.onConfirmHandler}>
                    Continue
                </button>
            </div>
        </CreateRecipeTwoContainer>
    )
}