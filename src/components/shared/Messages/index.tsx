import { MessageContainer } from './styles'
import { useState, useEffect } from 'react'
import { MdOutlineError, MdCheckCircle, MdClose, MdOutlineWarning } from 'react-icons/md'

interface MessageProps {
    type: string,
    message: string,
    onClose: any
}

export default function Messages(props: MessageProps) {
    const [id, setId] = useState(Math.random().toString())


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
        background = "#f9722f"
        icon = <MdOutlineWarning size={25} />
    }
    
    useEffect(() => {
        const el = document.getElementById(id)
        if(el){
            setTimeout(() => {
                el.style.display = 'none'
            }, 8000)
        }
    }, [])
    

    return (
        <MessageContainer backgroundColor={background} id={id}>
            <div className='content'>
                <div className="left">
                    {icon}
                    <p>
                        {props.message}
                    </p>
                </div>
                <div className="close">
                    <MdClose size={25} onClick={props.onClose}/>
                </div>
            </div>
            <div className="timer">
            </div>
        </MessageContainer>
    )
}