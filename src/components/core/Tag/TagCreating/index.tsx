import { TagCreatingContainer } from './styles'
import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_TAG, UPDATE_TAG } from '../../../../api/Tags'

interface TagCreatingProps {
    title: string,
    onCancel: any,
    onConfirm: any,
    confirmText: string,
    id?: string,
    tagName?: string,
    tagColor?: string
}
export default function TagCreating(props: TagCreatingProps) {
    const [name, setName] = useState('')
    const [color, setColor] = useState('')

    const [createTag, { data, loading, error }] = useMutation(CREATE_TAG)
    const [updateTag, result] = useMutation(UPDATE_TAG)

    const nameChangeHandler = (event: any) => {
        setName(event.target.value)
    }
    
    const colorChangeHandler = (event: any) => {
        setColor(event.target.value)
    }

    useEffect(() => {
        if (props.tagName) {
            setName(props.tagName)
        }
        if (props.tagColor){
            setColor(props.tagColor)
        }
    }, [])

    const confirmHandler = async () => {
        if (props.id) {
            await updateTag({ variables: { name: name, color: color, id: props.id } })
        } else {
            await createTag({ variables: { name: name, color: color } })
        }
        props.onConfirm()
    }

    return (
        <TagCreatingContainer>
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
                    <div className="form-control">
                        <label htmlFor="color">Color</label>
                        <input type="text" id="color" value={color} onChange={colorChangeHandler} />
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
        </TagCreatingContainer>
    )
}