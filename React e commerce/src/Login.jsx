import React, { useEffect } from 'react'


const Login = (props) => {


    useEffect(() => {
        const setNewUser = async () => {
            const newUser = await getUser
            if (newUser) {
                localStorage.setItem('user', JSON.stringify(props.user))}}
        }, [props.user]);

    const getUser = async (e) => {
        e.preventDefault()


        const url = 'http://localhost:5000/login'
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
        const newUser = data.data
        if (data.status === 'Ok') {
            console.log('succesefully logged in')
            props.setUser(data.data)
            return newUser
        }
    }

    if (props.user != props.defaultState) {
        console.log(props.user)
        console.log(props.defaultState)
        return (
            <h2 className='logged-in'>
                You are already logged in!
            </h2>
        )
    }
    else {
        return (
            <form onSubmit={getUser} className='login'>
                <h2>
                    Login
                </h2>
                <input type='text' placeholder='Username' name='username' />
                <input type='password' placeholder='Password' name='password' />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}


export default Login