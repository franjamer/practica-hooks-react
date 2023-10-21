import React, { useEffect, useRef, useState } from 'react'
import { useForm } from '../hooks/useForm'

export const FormularioComponente = () => {
    const focusRef = useRef()
    
    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }
    const {formState, userName,email,password, onInputChange } = useForm(initialForm)



    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

    useEffect(()=>{
            focusRef.current.focus()
    },[])

    return (
        <form onSubmit={onSubmit} >
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">UserName</label>
                <input
                    ref={focusRef}
                    type="text"
                    className="form-control"
                    name="userName"
                    placeholder='Enter your UserName'
                    value={userName}
                    onChange={onInputChange}
                />
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Adress</label>
                    <input                       
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder='Enter email'
                        value={email}
                        onChange={onInputChange}
                    />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input                    
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder='password'
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>
        </form>
    )
}
