import React, { useState } from "react";


export default function Form(props) {

    // const [userName, setUserName] = useState('');

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        password: ''        
    });


    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const validate = (userData) => {
        const errors = {};
        if (!regexEmail.test(userData.username)) errors.username = 'Invalid email';
        if (userData.username.length > 40) errors.username = 'Max 40 characters';
        if (userData.username === '') errors.username = 'Write your email';
        return errors;
    }

    const handleChange = (event) => {
        const prop = event.target.name;
        const value = event.target.value;

        setUserData( (oldState) => {
            return {
                ...oldState,
                [prop]: value
            }
        });
        
        setErrors(validate({
            ...userData,
            [prop]: value                        
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    return(
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h3>Please login to join the Rick and Morty app</h3>

                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        value={userData.username} 
                        name="username" 
                        type="text" 
                        placeholder="Your email..."
                        onChange={(event) => handleChange(event)}
                        />
                    {errors.username && <p className="danger">{errors.username}</p>}

                </div>

                <div>
                    Construir segundo input.
                </div>

                <div>
                    <button>LOGIN. Construir botón.</button>
                </div>
            </form>
        </div>
    )
}