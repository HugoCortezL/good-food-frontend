import { IngredientCreatingContainer } from './styles'
import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_INGREDIENT, UPDATE_INGREDIENT } from '../../../api/Ingredients'

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
        if (props.id) {
            await updateIngredient({ variables: { name: name, id: props.id } })
        } else {
            await createIngredient({ variables: { name: name } })
        }
        props.onConfirm()
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