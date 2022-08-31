import { TagListContainer, Content, Table } from './styles'
import { useMutation, useQuery } from '@apollo/client'
import { LOAD_TAG, DELETE_TAG } from '../../../../api/Tags'
import { useEffect, useState } from 'react'
import { Tag } from '../../../../models/Tag'
import Loading from '../../../shared/Loading'
import { AiOutlinePlus } from 'react-icons/ai'
import { HiPencil, HiTrash } from 'react-icons/hi'
import Backdrop from '../../../shared/Backdrop'
import TagCreating from '../TagCreating'
import { client } from '../../../../App'
import MessagesList from '../../../shared/MessagesList'
import { createMessage } from '../../../../utilities/createMessage'

export default function TagList() {
    const [tags, setTags] = useState<Tag[]>([])
    const [creating, setCreating] = useState(false)
    const [editing, setEditing] = useState(false)
    const [selectedTag, setSelectedTag] = useState({ id: '', name: '', color: '' })
    const [messages, setMessages] = useState<any[]>([])


    const { error, loading, data } = useQuery(LOAD_TAG)
    const [deleteTag, result] = useMutation(DELETE_TAG)

    useEffect(() => {
        if (data) {
            setTags(data.getAllTags)
        }
    }, [data])

    useEffect(() => {
        refetchLoadTags()
    }, [])

    const startCreateTagHandler = () => {
        setCreating(true)
    }

    const startEditingTagHandler = (id: string, name: string, color: string) => {
        setEditing(true)
        setSelectedTag(
            {
                id,
                name,
                color
            }
        )
    }

    const refetchLoadTags = async () => {
        await client.refetchQueries({
            include: [LOAD_TAG],
        });
    }

    const modalCancelHandler = () => {
        setCreating(false)
        setEditing(false)
        setSelectedTag({ id: '', name: '', color: '' })
        refetchLoadTags()
    }

    const deleteTagHandler = async (id: string) => {
        const result = await deleteTag({ variables: { id: id } })
        var newMessage = createMessage(
            "Tag excluida com sucesso",
            "SUCCESS"
        )
        if (!result.data.deleteTag) {
            newMessage = createMessage(
                "Não foi possivel excluir esta tag",
                "ERROR"
            )
        }
        const newMessagesArray = [...messages, newMessage]
        setMessages(newMessagesArray)
        await refetchLoadTags()
    }

    const handlerCloseMessage = (messageId: string) => {
        const newMessages = messages.filter(message => messageId != message.id)
        setMessages(newMessages)
    }

    const tagsList = tags.map(tag => {
        return (
            <tr key={tag.id}>
                <td className='col-td-name'>
                    {tag.name}
                </td>
                <td className='col-td-color'>
                    {tag.color}
                </td>
                <td className="col-td-options">
                    <button className='edit-button' onClick={() => startEditingTagHandler(tag.id, tag.name, tag.color)}>
                        <HiPencil size={20} />
                        <span>
                            Edit
                        </span>
                    </button>
                    <button className='delete-button' onClick={() => deleteTagHandler(tag.id)}>
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
        <TagListContainer>
            <MessagesList messages={messages} onClose={handlerCloseMessage} />
            <Content>
                {
                    creating &&
                    <>
                        <Backdrop click={modalCancelHandler} />
                        <TagCreating
                            title="Create Tag"
                            onCancel={modalCancelHandler}
                            onConfirm={modalCancelHandler}
                            confirmText="Create"
                        />
                    </>
                }
                {
                    editing &&
                    <>
                        <Backdrop click={modalCancelHandler} />
                        <TagCreating
                            title="Edit Tag"
                            onCancel={modalCancelHandler}
                            onConfirm={modalCancelHandler}
                            confirmText="Save"
                            id={selectedTag.id}
                            tagName={selectedTag.name}
                            tagColor={selectedTag.color}
                        />
                    </>
                }
                <header>
                    <h2>
                        Tags
                    </h2>
                    <button className='create' onClick={startCreateTagHandler}>
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
                                <th className="col-th-color">
                                    Color
                                </th>
                                <th className="col-th-options">
                                    Options
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tagsList}
                        </tbody>
                    </Table>
                </div>
            </Content>
        </TagListContainer>
    )
}