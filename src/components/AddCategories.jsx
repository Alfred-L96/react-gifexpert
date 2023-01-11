import { useState } from "react"

export const AddCategories = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')
    const onInputCahnged = ({target}) =>{
        setinputValue(target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if (inputValue.trim().length <= 1 ) return;
       /// onNewCategory(categories => [inputValue, ...categories]);
       onNewCategory(inputValue.trim())
        setinputValue('');
    }
    return (
        <form onSubmit={ onSubmit }>
            <input
            type="text"
            placeholder="BuscarGift"
            value = { inputValue }
            onChange = { onInputCahnged }
            />
        </form>
    )
}
