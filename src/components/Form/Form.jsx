import React, { useState } from "react";
import styles from './Form.module.css';

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
    const regexPass = /\d/; // includes a number  

    const validate = (userData) => {
        const errors = {};
        if (!regexEmail.test(userData.username)) errors.username = 'Invalid email';
        if (userData.username.length > 40) errors.username = 'Max 40 characters';
        if (userData.username === '') errors.username = 'Write your email';

        if (!regexPass.test(userData.password)) errors.password = 'At least one number';
        if (userData.password.length < 6) errors.password = 'Min 6 characters';
        if (userData.password.length > 10) errors.password = 'Max 10 characters';

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
        <div className={styles.container}>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h3>Please login...</h3>

                <div>
                    <label htmlFor="username">Email:</label>
                    <input className={styles.input1} 
                        value={userData.username} 
                        name="username" 
                        type="text" 
                        placeholder="example@gmail.com"
                        onChange={(event) => handleChange(event)}
                        />
                    {errors.username && <p className={styles.danger}>{errors.username}</p>}

                </div>

                <div>
                    <label htmlFor="username">Password:</label>
                    <input className={styles.input2} 
                        value={userData.password} 
                        name="password" 
                        type="password" 
                        placeholder="123asd"
                        onChange={(event) => handleChange(event)}
                        />
                    {errors.password && <p className={styles.danger}>{errors.password}</p>}

                </div>

                <div>
                    <button>LOGIN</button>
                </div>
            </form>
        </div>
    )
}