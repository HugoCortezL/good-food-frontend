import { IngredientCreatingContainer } from './styles'
import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_INGREDIENT, UPDATE_INGREDIENT } from '../../../../api/Ingredients'

interface IngredientCreatingProps {
    title: string,
    onCancel: any,
    onConfirm: any,
    confirmText: string,
    id?: string,
    ingredientName?: string
}
export default function IngredientCreating(props: IngredientCreatingProps) {
    const [name, setName] = useState('')

    const [createIngredient, { data, loading, error }] = useMutation(CREATE_INGREDIENT)
    const [updateIngredient, result] = useMutation(UPDATE_INGREDIENT)

    const nameChangeHandler = (event: any) => {
        setName(event.target.value)
    }

    useEffect(() => {
        if (props.ingredientName) {
            setName(props.ingredientName)
        }
    }, [])

    const confirmHandler = async () => {
        if (validateFields()) {
            if (props.id) {
                const result = await updateIngredient({ variables: { name: name, id: props.id } })
                props.onConfirm(result.data.updateIngredient)
            } else {
                const result = await createIngredient({ variables: { name: name } })
                props.onConfirm(result.data.createIngredient)
            }
        } else {
            props.onConfirm(false)
        }
    }

    const validateFields = () => {
        var regName = /\d/
        if (name.trim().length < 1) {
            console.log("name")
            return false
        }
        if (regName.test(name)) {
            return false
        }

        return true
    }

    return (
        <IngredientCreatingContainer>
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
        </IngredientCreatingContainer>
    )
}