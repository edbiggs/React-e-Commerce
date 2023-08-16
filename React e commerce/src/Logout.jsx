import React from 'react'

const Logout = (props) => {
    const handleLogout = (e) => {
        e.preventDefault()
        console.log('logged out')
        props.setUser(props.defaultState)
    }
    
    return (
        <div>
            <h3>Would you like to log out?</h3>
            <button type='submit' onClick={handleLogout}>Log out</button>
        </div>
    
    )
}

export default Logout