import React from 'react'

const SignUp = (props) => {

    const createUser = async (e) => {
        console.log(e.target.username.value)
        e.preventDefault()
        const url = 'http://localhost:5000/signup'
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value
            })
        }

        const res = await fetch(url, options);
        const data = await res.json()
        if (data.status === 'Ok') {
            console.log(data)
            props.setUser(data.data)
        }
    }

    if (props.user != props.defaultState){
        return (
            <h2 className='logged-in'>
                You are already logged in!
            </h2>
        )
    }
    else{
        return (
            <form onSubmit={createUser} className='signup'>
                <h2>
                    Sign Up
                </h2>
                <input type='text' placeholder='Username' name='username' />
                <input type='password' placeholder='Password' name='password' />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
export default SignUp