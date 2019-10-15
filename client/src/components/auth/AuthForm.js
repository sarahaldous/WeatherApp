import React from 'react'

const AuthForm = props => {
    const {handleSubmit, handleChange, username, password, btnText} = props
    return (
        <form className="authForm" onSubmit={handleSubmit}>
            <input 
                className="input"
                type="text"
                name="username"
                onChange={handleChange} 
                onSubmit={handleSubmit}
                value={username}
                placeholder="Username"
                required/>
                <input 
                className="input"
                type="password"
                name="password"
                onChange={handleChange} 
                onSubmit={handleSubmit}
                value={password}
                placeholder="Password"
                required/>
            <button className="loginButton">{btnText}</button>
                
        </form>
    )
}
export default AuthForm