import { useEffect, useState } from 'react'
import { Message, CloseFunction } from '../../../models/Message'
import Messages from '../Messages'
import { MessagesListContainer } from './styles'

interface MessagesListProps {
    messages: Message[],
    onClose: CloseFunction
}

export default function MessagesList(props: MessagesListProps) {
    const [messageList, setMessageList] = useState(props.messages)

    useEffect(() => {
        setMessageList(props.messages)
    }, [props.messages])

    const messagesList = messageList.map(message => {
        return (
            <Messages key={message.id} type={message.type} message={message.message} onClose={() => props.onClose(message.id)} />
        )
    })

    return (
        <MessagesListContainer>
            <div className='messages'>
                {messagesList}
            </div>
        </MessagesListContainer>
    )
}