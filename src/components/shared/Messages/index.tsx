import { ResponseContainer } from './styles'
import { useState, useEffect } from 'react'
import { MdOutlineError, MdCheckCircle, MdClose, MdOutlineWarning } from 'react-icons/md'

interface ResponseProps {
    type: string,
    message: string,
    onClose: any
}

export default function Messages(props: ResponseProps) {

    let background = ""
    let icon
    if(props.type == 'ERROR'){
        background = "#d81919"
        icon = <MdOutlineWarning size={25} />
    }else if(props.type == 'SUCCESS'){
        background = "#00b600"
        icon = <MdCheckCircle size={25} />
    }else if(props.type == 'INFO'){
        background = "#0040b6"
        icon = <MdOutlineError size={25} />
    }else if(props.type == 'WARNING'){
        background = "#c86f0a"
        icon = <MdOutlineWarning size={25} />
    }

    return (
        <ResponseContainer backgroundColor={background}>
            <div className="content">
                {icon}
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