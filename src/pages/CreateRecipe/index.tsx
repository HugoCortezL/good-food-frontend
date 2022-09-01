import { CreateRecipeContainer } from './styles'
import { useState } from 'react'
import { Recipe } from '../../models/Recipe'

import { CREATE_RECIPE } from '../../api/Recipe'
import { useMutation } from '@apollo/client'

import CreateRecipeOne from './PageOne'
import CreateRecipeTwo from './PageTwo'

import MessagesList from '../../components/shared/MessagesList'
import { createMessage } from '../../utilities/createMessage'

export default function CreateRecipe() {
    const [messages, setMessages] = useState<any[]>([])
    const [page, setPage] = useState(1)
    const [createRecipe, { data, loading, error }] = useMutation(CREATE_RECIPE)

    const createRecipeHandler = async (recipe: Recipe) => {
        const name = recipe.name
        const time = +recipe.time
        const servings = +recipe.servings
        const imageUrl = recipe.imageUrl
        const rate = +recipe.rate
        const difficulty = +recipe.difficulty
        const favorite = recipe.favorite
        const principalTag = recipe.principalTag.id
        await createRecipe({variables: {name, time, servings, imageUrl, rate, difficulty, favorite, principalTag}})
        setPage(2)
    }

    const addMessage = async (messageCode: string) => {
        console.log(messageCode)
        var newMessage = createMessage(messageCode)
        const newMessagesArray = [...messages, newMessage]
        setMessages(newMessagesArray)
    }

    const handlerCloseMessage = (messageId: string) => {
        const newMessages = messages.filter(message => messageId != message.id)
        setMessages(newMessages)
    }

    let pageToShow
    if (page == 1) {
        pageToShow = <>
            <CreateRecipeOne onConfirm={createRecipeHandler} addMessage={addMessage}/>
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
            <MessagesList messages={messages} onClose={handlerCloseMessage} />
            {
                pageToShow
            }
        </CreateRecipeContainer>
    )
}