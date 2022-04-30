import { Link } from 'react-router-dom';
import '../../App.styles.scss';
import { LoginForm } from '../LoginForm/LoginForm';

export const Home = ({ onAuth, isSignUp }) => (
    <>
        <h4 className='App-header'>Home page</h4>
        <LoginForm isSignUp={isSignUp} onSubmit={onAuth} />
        <Link to={isSignUp ? "/" : "/signup"}>
            {isSignUp ? "to login" : "to signup"}
        </Link>
        <button onClick={onAuth}>Auth</button>
    </>
);
