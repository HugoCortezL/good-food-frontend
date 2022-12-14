import { IngredientListContainer, Content, Table } from './styles'
import { useMutation, useQuery } from '@apollo/client'
import { LOAD_INGREDIENTS, DELETE_INGREDIENT } from '../../../../api/Ingredients'
import { useEffect, useState } from 'react'
import { Ingredient } from '../../../../models/Ingredient'
import Loading from '../../../shared/Loading'
import { AiOutlinePlus } from 'react-icons/ai'
import { HiPencil, HiTrash } from 'react-icons/hi'
import Backdrop from '../../../shared/Backdrop'
import IngredientCreating from '../IngredientCreating'
import { client } from '../../../../App'
import { createMessage } from '../../../../utilities/createMessage'
import MessagesList from '../../../shared/MessagesList'

export default function IngredientsList() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [creating, setCreating] = useState(false)
    const [editing, setEditing] = useState(false)
    const [selectedIngredient, setSelectedIngredient] = useState({ id: '', name: '' })
    const [messages, setMessages] = useState<any[]>([])

    const { error, loading, data } = useQuery(LOAD_INGREDIENTS)
    const [deleteIngredient, result] = useMutation(DELETE_INGREDIENT)

    useEffect(() => {
        if (data) {
            setIngredients(data.getAllIngredients)
        }
    }, [data])

    useEffect(() => {
        refetchLoadIngredients()
    }, [])

    const startCreateIngredientHandler = () => {
        setCreating(true)
    }

    const startEditingIngredientHandler = (id: string, name: string) => {
        setEditing(true)
        setSelectedIngredient(
            {
                id,
                name
            }
        )
    }

    const refetchLoadIngredients = async () => {
        await client.refetchQueries({
            include: [LOAD_INGREDIENTS],
        });
    }

    const modalCancelHandler = () => {
        setCreating(false)
        setEditing(false)
        setSelectedIngredient({ id: '', name: '' })
        refetchLoadIngredients()
    }

    const modalConfirmCreationHandler = (result: boolean) => {
        setCreating(false)
        refetchLoadIngredients()
        if (result) {
            addMessage("ING02003")
        } else {
            addMessage("ING01004")
        }
    }

    const modalConfirmEditHandler = (result: boolean) => {
        setEditing(false)
        setSelectedIngredient({ id: '', name: ''})
        refetchLoadIngredients()
        if (result) {
            addMessage("ING02005")
        } else {
            addMessage("ING04006")
        }
    }

    const deleteIngredientHandler = async (id: string) => {
        const result = await deleteIngredient({ variables: { id: id } })
        if (!result.data.deleteIngredient) {
            addMessage("ING04001")
        } else {
            addMessage("ING01002")
        }
        await refetchLoadIngredients()
    }

    const addMessage = async (messageCode: string) => {
        var newMessage = createMessage(messageCode)
        const newMessagesArray = [...messages, newMessage]
        setMessages(newMessagesArray)
    }

    const handlerCloseMessage = (messageId: string) => {
        const newMessages = messages.filter(message => messageId != message.id)
        setMessages(newMessages)
    }

    const ingredientsList = ingredients.map(ingredient => {
        return (
            <tr key={ingredient.id}>
                <td className='col-td-name'>
                    {ingredient.name}
                </td>
                <td className="col-td-options">
                    <button className='edit-button' onClick={() => startEditingIngredientHandler(ingredient.id, ingredient.name)}>
                        <HiPencil size={20} />
                        <span>
                            Edit
                        </span>
                    </button>
                    <button className='delete-button' onClick={() => deleteIngredientHandler(ingredient.id)}>
                        <HiTrash size={20} />
                        <span>
                            Delete
                        </span>
                    </button>
                </td>
            </tr>
        )
    })

    if (loading) return <Loading />

    return (
        <IngredientListContainer>
            <MessagesList messages={messages} onClose={handlerCloseMessage} />
            <Content>
                {
                    creating &&
                    <>
                        <Backdrop click={modalCancelHandler} />
                        <IngredientCreating
                            title="Create Ingredient"
                            onCancel={modalCancelHandler}
                            onConfirm={modalConfirmCreationHandler}
                            confirmText="Create"
                        />
                    </>
                }
                {
                    editing &&
                    <>
                        <Backdrop click={modalCancelHandler} />
                        <IngredientCreating
                            title="Edit Ingredient"
                            onCancel={modalCancelHandler}
                            onConfirm={modalConfirmEditHandler}
                            confirmText="Save"
                            id={selectedIngredient.id}
                            ingredientName={selectedIngredient.name}
                        />
                    </>
                }
                <header>
                    <h2>
                        Ingredients
                    </h2>
                    <button className='create' onClick={startCreateIngredientHandler}>
                        <AiOutlinePlus size={25} />
                        Create
                    </button>
                </header>
                <div className="table-scroll-container">
                    <Table>
                        <thead>
                            <tr>
                                <th className="col-th-name">
                                    Name
                                </th>
                                <th className="col-th-options">
                                    Options
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ingredientsList}
                        </tbody>
                    </Table>
                </div>
            </Content>
        </IngredientListContainer>
    )
}