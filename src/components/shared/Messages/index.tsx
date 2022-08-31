import { ResponseContainer } from './styles'
import { useState, useEffect } from 'react'
import { MdOutlineError, MdCheckCircle, MdClose } from 'react-icons/md'

interface ResponseProps {
    type: string,
    message: string,
    onClose: any
}

export default function Messages(props: ResponseProps) {

    return (
        <ResponseContainer backgroundColor={props.type == 'ERROR' ? "#d81919" : "#00b600"}>
            <div className="content">
                <MdOutlineError size={20} />
                <p>
                    {props.message}
                </p>
            </div>
            <div className="close">
                <MdClose size={25} onClick={props.onClose}/>
            </div>
        </ResponseContainer>
    )
}