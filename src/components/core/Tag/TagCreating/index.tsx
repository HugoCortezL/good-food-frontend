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
        if(validateFields()){
            if (props.id) {
                const result = await updateTag({ variables: { name: name, color: color, id: props.id } })
                props.onConfirm(result.data.updateTag)
            } else {
                const result = await createTag({ variables: { name: name, color: color } })
                props.onConfirm(result.data.createTag)
            }
        }else{
            props.onConfirm(false)
        }
    }

    const validateFields = () => {
        var regHex = /^#([0-9a-f]{3}){1,2}$/i
        var regName = /\d/
        if(name.trim().length < 1){
            console.log("name")
            return false
        }
        if(regName.test(name)){
            return false
        }
        if(color.trim().length != 7){
            console.log("color")
            return false
        }
        if(!regHex.test(color)){
            return false
        }

        return true
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