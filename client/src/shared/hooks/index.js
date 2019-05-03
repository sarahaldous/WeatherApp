import {useState} from 'react'

export const useToggle = initToggle => {
    const [toggle, setToggle] = useState(initToggle)
    const toggler = () => setToggle(!toggle)
    return {toggle, toggler}
}
export const useFormProperties = (initInputs, submitCallback) => {
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        submitCallback(inputs)
        setInputs(initInputs)
    }
    return {handleChange, handleSubmit, inputs}
}