import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.styles.scss';
import { logIn, signUp } from '../../services/firebase';
import { LoginForm } from '../LoginForm/LoginForm';

export const Home = ({ isSignUp }) => {
    const [error, setError] = useState("");
    const handleSubmit = async ({ login, pass }) => {
        try {
            if (isSignUp) {
                await signUp(login, pass);
            } else {
                await logIn(login, pass);
            }
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <>
            <h4 className='App-header'>Home page</h4>
            <LoginForm onSubmit={handleSubmit} />
            {error && <h5>{error}</h5>}
            <Link to={isSignUp ? "/" : "/signup"}>
                {isSignUp ? "to login" : "to signup"}
            </Link>
        </>
    )
};
