import { PortionListContainer, Content, Table } from './styles'
import { useMutation, useQuery } from '@apollo/client'
import { LOAD_PORTION, DELETE_PORTION } from '../../../../api/Portions'
import { useEffect, useState } from 'react'
import { Portion } from '../../../../models/Portion'
import Loading from '../../../shared/Loading'
import { AiOutlinePlus } from 'react-icons/ai'
import { HiPencil, HiTrash } from 'react-icons/hi'
import Backdrop from '../../../shared/Backdrop'
import PortionCreating from '../PortionCreating'
import { client } from '../../../../App'
import MessagesList from '../../../shared/MessagesList'
import { createMessage } from '../../../../utilities/createMessage'

export default function PortionsList() {
    const [portions, setPortions] = useState<Portion[]>([])
    const [creating, setCreating] = useState(false)
    const [editing, setEditing] = useState(false)
    const [selectedPortion, setSelectedPortion] = useState({ id: '', name: '' })
    const [messages, setMessages] = useState<any[]>([])

    const { error, loading, data } = useQuery(LOAD_PORTION)
    const [deletePortion, result] = useMutation(DELETE_PORTION)

    useEffect(() => {
        if (data) {
            setPortions(data.getAllPortions)
        }
    }, [data])

    useEffect(() => {
        refetchLoadPortion()
    }, [])

    const startCreatePortionHandler = () => {
        setCreating(true)
    }

    const startEditingPortionHandler = (id: string, name: string) => {
        setEditing(true)
        setSelectedPortion(
            {
                id,
                name
            }
        )
    }

    const refetchLoadPortion = async () => {
        await client.refetchQueries({
            include: [LOAD_PORTION],
        });
    }

    const modalCancelHandler = () => {
        setCreating(false)
        setEditing(false)
        setSelectedPortion({ id: '', name: '' })
        refetchLoadPortion()
    }

    const modalConfirmCreationHandler = (result: boolean) => {
        setCreating(false)
        refetchLoadPortion()
        if (result) {
            addMessage("POR02003")
        } else {
            addMessage("POR01004")
        }
    }
    
    const modalConfirmEditHandler = (result: boolean) => {
        console.log("Chegou")
        setEditing(false)
        setSelectedPortion({ id: '', name: '' })
        refetchLoadPortion()
        if (result) {
            addMessage("POR02005")
        } else {
            addMessage("POR04006")
        }
    }

    const deletePortionHandler = async (id: string) => {
        const result = await deletePortion({ variables: { id: id } })
        if (!result.data.deletePortion) {
            await addMessage("POR04001")
        } else {
            await addMessage("POR01002")
        }
        await refetchLoadPortion()
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

    const portionList = portions.map(portion => {
        return (
            <tr key={portion.id}>
                <td className='col-td-name'>
                    {portion.name}
                </td>
                <td className="col-td-options">
                    <button className='edit-button' onClick={() => startEditingPortionHandler(portion.id, portion.name)}>
                        <HiPencil size={20} />
                        <span>
                            Edit
                        </span>
                    </button>
                    <button className='delete-button' onClick={() => deletePortionHandler(portion.id)}>
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
        <PortionListContainer>
            <MessagesList messages={messages} onClose={handlerCloseMessage} />
            <Content>
                {
                    creating &&
                    <>
                        <Backdrop click={modalCancelHandler} />
                        <PortionCreating
                            title="Create Portion"
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
                        <PortionCreating
                            title="Edit Portion"
                            onCancel={modalCancelHandler}
                            onConfirm={modalConfirmEditHandler}
                            confirmText="Save"
                            id={selectedPortion.id}
                            portionName={selectedPortion.name}
                        />
                    </>
                }
                <header>
                    <h2>
                        Portions
                    </h2>
                    <button className='create' onClick={startCreatePortionHandler}>
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
                            {portionList}
                        </tbody>
                    </Table>
                </div>
            </Content>
        </PortionListContainer>
    )
}