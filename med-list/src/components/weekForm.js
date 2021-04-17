import React, { useState } from 'react'

const weekForm = () => {
    const [values, setValues] = useState()

    const handleChange = (e) => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value})
    }
    
    const addButtonHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h1>Daily Medication</h1>
            <form>
                <h2>Sunday</h2>
                <label> AM
                    <select value={values} onChange={handleChange}>
                        <option>---Taken?---</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </label>
            </form>
        </div>

)
}

export default weekForm
