import React from 'react';

const SignUp = (props) => {
    const createUser = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:5000/signup';
        const username = e.target.username.value;
        const password = e.target.password.value;
        const body = JSON.stringify({
            username,
            password,
    
        });

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });

            const data = await response.json();
            console.log(data);

            if (data.status === 'Ok') {
                console.log(data);
                props.setUser(data.data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (props.user !== props.defaultState) {
        return (
            <h2 className='logged-in'>
                You are already logged in!
            </h2>
        );
    } else {
        return (
            <form onSubmit={createUser} className='signup'>
                <h2>Sign Up</h2>
                <input type='text' placeholder='Username' name='username' />
                <input type='password' placeholder='Password' name='password' />
                <button type='submit'>Submit</button>
            </form>
        );
    }
};

export default SignUp;





