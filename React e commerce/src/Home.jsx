import React from 'react'

const Home = (props) => {
    
    console.log(props.user) 
    console.log(props.defaultState)
    if (props.user != props.defaultState){
        return (
            <>
            <h2 className='list'>

            </h2>

            {props.list}  
            </>
            
        )
        }
    else{
        return (
             <h1 className='home'>Welcome! Please log in!</h1>
        )
    
        }
    }
export default Home