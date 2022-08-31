import { PortionCreatingContainer } from './styles'
import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_PORTION, UPDATE_PORTION } from '../../../../api/Portions'

interface PortionCreatingProps {
    title: string,
    onCancel: any,
    onConfirm: any,
    confirmText: string,
    id?: string,
    portionName?: string
}
export default function PortionCreating(props: PortionCreatingProps) {
    const [name, setName] = useState('')

    const [createPortion, { data, loading, error }] = useMutation(CREATE_PORTION)
    const [updatePortion, result] = useMutation(UPDATE_PORTION)

    const nameChangeHandler = (event: any) => {
        setName(event.target.value)
    }

    useEffect(() => {
        if (props.portionName) {
            setName(props.portionName)
        }
    }, [])

    const confirmHandler = async () => {
        if(validateFields()){
            if (props.id) {
                const result = await updatePortion({ variables: { name: name, id: props.id } })
                props.onConfirm(result.data.updatePortion)
            } else {
                const result = await createPortion({ variables: { name: name } })
                props.onConfirm(result.data.createPortion)
            }
        }else{
            props.onConfirm(false)
        }
    }

    const validateFields = () => {
        var regName = /\d/
        if(name.trim().length < 1){
            console.log("name")
            return false
        }
        if(regName.test(name)){
            return false
        }

        return true
    }

    return (
        <PortionCreatingContainer>
            <header className="modal__header">
                <h1>
                    {props.title}
                </h1>
            </header>
            <section className="modal__content">
                <form>
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={name} onChange={nameChangeHandler} />
                    </div>
                </form>
            </section>
            <section className="modal__actions">
                <button className="cancel-btn" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className="confirm-btn" onClick={confirmHandler}>
                    {props.confirmText}
                </button>
            </section>
        </PortionCreatingContainer>
    )
}